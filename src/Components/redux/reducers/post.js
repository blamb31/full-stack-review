import Axios from 'axios'
const GET_POSTS = 'GET_POSTS'
const GET_POSTS_FULFILLED = 'GET_POSTS_FULFILLED'
const GET_POSTS_PENDING = 'GET_POSTS_PENDING'

const GET_POST = 'GET_POST'
const GET_POST_FULFILLED = 'GET_POST_FULFILLED'
const GET_POST_PENDING = 'GET_POST_PENDING'

let initialState = {
    data: [],
    selected: null
}

export default function (state = initialState, action) {
    const {type, payload} = action

    switch(type) {
        case GET_POSTS_PENDING:
            return {
                ...state,
                loading: true
            }
            case GET_POSTS_FULFILLED:
            return {
                ...state,
                loading: false,
                data: payload.data
            }

            case GET_POST_PENDING:
            return {
                ...state,
                loading: true
            }
            case GET_POST_FULFILLED:
            return {
                ...state,
                loading: false,
                data: payload.data
            }
        default:
            return state
    }

    //Normally we want a post for GET_POST_PENDING AND GET_POST_FAILURE
    //Normally we also would have cases for get put post and delete

}

export function getPosts() {
    return {
        type: GET_POSTS,
        payload: Axios.get('/api/posts')
    }
}

export function getPost(id) {
    return {
        type: GET_POST,
        payload: Axios.get(`/api/posts/${id}`)
    }
}