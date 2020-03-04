import { CREATE_USER, FETCH_USER, DELETE_POST, DELETE_REVIEW, ADD_POST, ADD_REVIEW, LOG_OUT, UPDATE_USER, LIKE_POST, LOGIN_USER, GET_POSTS } from '../actions/index';

export const initialState = {
    title: '',
    howto: '',
    guides: [],
    author: '',
    isLoggedIn: false,
    isFetching: false,
    error: ''
}

export const howToReducer = (state = initialState, action) => {
    switch(action.type) {
        case CREATE_USER:
            return {
                ...state,
                isFetching: true,
            }
        case LOGIN_USER:
            return {
                 ...state,
                 author: action.payload,
                 isFetching: false,
                 isLoggedIn: true,
             }
        case LOG_OUT:
            return {
                author: '',
                isLoggedIn: false,
            }
        case GET_POSTS:
            return {
                ...state,
                guides: action.payload
            }
        default:
            return {
                ...state
            }
    }
}