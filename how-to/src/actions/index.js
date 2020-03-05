import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const CREATE_USER = "CREATE_USER";
export const USER_LOGIN = "USER_LOGIN";
export const LOGIN_USER = "LOGIN_USER";
export const ADD_POST = "ADD_POST";
export const DELETE_POST = "DELETE_POST";
export const LOG_OUT = "LOG_OUT";
export const ADD_REVIEW = "ADD_REVIEW";
export const DELETE_REVIEW = "DELETE_REVIEW";
export const LIKE_POST = "LIKE_POST";
export const GET_POSTS = "GET_POSTS";
export const READ_POST = "READ_POST";
export const UPDATE_POST = "UPDATE_POST";

export const newUser = account => dispatch => {
  dispatch({ type: CREATE_USER });
  console.log(account.username);
  axios
    .post("https://how-to-3.herokuapp.com/api/auth/register", account)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("author", account.username);
      dispatch({ type: LOGIN_USER });
    })
    .catch(err => console.log(err));
};

export const loginUser = account => dispatch => {
  dispatch({ type: USER_LOGIN });
  axios
    .post("https://how-to-3.herokuapp.com/api/auth/login", account)
    .then(res => {
      console.log(res);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("author", account.username);
      dispatch({ type: LOGIN_USER });
    })
    .catch(err => console.log(err));
};

export const getPosts = () => dispatch => {
  axiosWithAuth()
    .get("api/guides")
    .then(res => {
      // console.log(res.data)
      dispatch({ type: GET_POSTS, payload: res.data });
    })
    .catch(err => console.log(err));
};

export const getPostId = id => dispatch => {
  axiosWithAuth()
    .get(`api/guides/${id}`)
    .then(res => {
      dispatch({ type: READ_POST, payload: res.data });
    })
    .catch(err => console.log(err));
};

export const createPost = post => dispatch => {
  axiosWithAuth()
    .post("api/guides", post)
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err));
};

export const editPost = (id, edit) => dispatch => {
  console.log(edit, id);
  axiosWithAuth()
    .put(`/api/guides/${id}`, edit)
    .then(res => {
      console.log(res);
      dispatch({ type: UPDATE_POST, payload: edit });
    })
    .catch(err => console.log(err));
};

export const logOut = () => dispatch => {
  localStorage.clear();
  dispatch({ type: LOG_OUT });
};
