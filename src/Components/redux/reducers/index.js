import {combineReducers} from 'redux'

import user from './user'
import posts from './post'

export default combineReducers({
    user,
    posts
})