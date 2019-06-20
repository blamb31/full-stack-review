import Axios from 'axios'
import { get } from 'http';

const initialState = {
    data: null
}

const GET_USER = 'GET_USER'
const GET_USER_FULFILLED = 'GET_USER_FULFILLED'

const LOGIN_USER = 'LOGIN_USER'
const LOGIN_USER_FULFILLED = 'LOGIN_USER_FULFILLED'

export default function( state=initialState, action) {
    const {type, payload } = action
    switch(type){
        case GET_USER_FULFILLED:
            return {...state,
            data: payload.data
        }
        case LOGIN_USER_FULFILLED:
            return {...state,
            data: payload.data
        }
        default:
            return state
    }
}

export function getUser() {
    return {
        type: GET_USER,
        payload: Axios.get('/auth/currentUser')
    }
}

export function login(loginInfo) {
    return {
        type: LOGIN_USER,
        payload: Axios.post('/auth/login')
    }
}