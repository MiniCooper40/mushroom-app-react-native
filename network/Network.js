import { getAuth } from "firebase/auth"
import { getStoredAuth } from "../auth/Auth"

export const BASE_URL = "http://192.168.1.101:8080/v1/"

const authorizationHeader = {
    "Authorization": getStoredAuth().then(auth => auth) // From auth object
}

const defaultRequest = {
    headers: {},
    body: {}
}

async function post(route, request = defaultRequest) {

    const { headers, body } = request

    const token = await getAuth().currentUser.getIdToken()
    console.log('token is', token)

    return fetch({
        url: BASE_URL + route,
        headers: {
            ...headers,
            Authorization: `Bearer ${token}`
        },
        body: body,
        method: 'POST'
    })
}

async function get(route, request = defaultRequest) {

    const { headers } = request

    console.log('getting', BASE_URL+route)

    const token = await getAuth().currentUser.getIdToken()

    console.log('token is', token)

    return fetch(BASE_URL + route, {
        headers: {
            ...headers,
            Authorization: `Bearer ${token}`
        }
    })
}

export { get, post }