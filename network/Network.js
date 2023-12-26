import { getStoredAuth } from "../auth/Auth"

const BASE_URL = "http://192.168.1.84:8080/v1/"

const authorizationHeader = {
    "Authorization": getStoredAuth().then(auth => auth) // From auth object
}

const defaultRequest = {
    headers: {},
    body: {}
}

async function post(route, request = defaultRequest) {

    const { headers, body } = request

    return getStoredAuth(auth => {
        fetch({
            url: BASE_URL + route,
            headers: {
                ...headers,
                Authorization: auth
            },
            body: body,
            method: 'POST'
        })
    })
}

async function get(route, request = defaultRequest) {

    const { headers, body } = request

    return getStoredAuth()
        .then(auth => {
            console.log('got auth:', auth)
            console.log('url is', BASE_URL+route)
            return fetch(BASE_URL+route, {
                headers: {
                    ...headers,
                    Authorization: auth
                }
            })
        })
}

export { get, post }