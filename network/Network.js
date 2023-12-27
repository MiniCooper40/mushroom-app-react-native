import { getAuth } from "firebase/auth"
import { getStoredAuth } from "../auth/Auth"

export const BASE_URL = "http://192.168.1.84:8080/v1/"

const authorizationHeader = {
    "Authorization": getStoredAuth().then(auth => auth) // From auth object
}

const defaultRequest = {
    headers: {},
    body: {}
}

async function post(route, request = defaultRequest) {

    const { headers, body } = request

    const auth = getAuth().currentUser
    const token = auth.currentUser.getIdToken()

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

    const { headers, body } = request

    const auth = getAuth()
    const token = auth.currentUser.getIdToken()

    return fetch(BASE_URL + route, {
        headers: {
            ...headers,
            Authorization: `Bearer ${token}`
        }
    })
}

export { get, post }