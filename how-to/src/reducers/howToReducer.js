import { CREATE_USER, FETCH_USER, DELETE_POST, DELETE_REVIEW, ADD_POST, ADD_REVIEW, LOG_OUT, UPDATE_USER, LIKE_POST } from '../actions/index';

export const initialState = {
    title: '',
    howto: '',
    author: '',
    isLoggedIn: false,
    isFetching: false,
    error: ''
}

export const howToReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return {
                ...state
            }
    }
}