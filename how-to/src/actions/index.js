import axios from 'axios';

export const CREATE_USER = 'CREATE_USER';
export const FETCH_USER = 'FETCH_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const LOG_OUT = 'LOG_OUT';
export const ADD_REVIEW = 'ADD_REVIEW';
export const DELETE_REVIEW = 'DELETE_REVIEW';
export const LIKE_POST = 'LIKE_POST';

export const logIn = () => dispatch => {
    dispatch({ type: FETCH_USER })
    axios.get('https://how-to-bw2.herokuapp.com/').then(res => {
        console.log(res)
    })
    .catch(err => console.log(err))
}
