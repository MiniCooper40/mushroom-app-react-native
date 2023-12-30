import { getAuth } from "firebase/auth"

const API_BASE_URL = "http://192.168.1.101:8080/"
const API_VERSION = 'v1'
export const API_URL = `${API_BASE_URL}${API_VERSION}/`
export const RESOURCE_URL = "http://192.168.1.101:8080/"


const defaultRequest = {
    headers: {},
    body: {}
}

async function post(route, request = defaultRequest) {

    const { headers, body } = request

    //console.log('body is', body)

    console.log('posting to', API_URL+route)

    const currentUser =  getAuth().currentUser

    if(!currentUser) return Promise.reject("currentUser does not exist")

    const token = await currentUser.getIdToken()
    //console.log('body is', body)

    return fetch(API_URL + route, {
        headers: {
            ...headers,
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body),
        method: 'POST'
    })
}

async function get(route, request = defaultRequest) {

    const { headers } = request

    console.log('getting from', API_URL+route)

    const currentUser =  getAuth().currentUser

    if(!currentUser) return Promise.reject("currentUser does not exist")

    const token = await currentUser.getIdToken()

    //console.log('getting w/ token', token)

    return fetch(API_URL + route, {
        headers: {
            ...headers,
            Authorization: `Bearer ${token}`
        }
    })
}

async function del(route, request = defaultRequest) {

    const { headers, body } = request

    console.log('deleting at', API_URL+route)

    const token = await getAuth().currentUser.getIdToken()

    return fetch(API_URL + route, {
        headers: {
            ...headers,
            Authorization: `Bearer ${token}`
        },
        body: body,
        method: 'DELETE'
    })
}



export { get, post, del }