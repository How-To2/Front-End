import {
  CREATE_USER,
  LOG_OUT,
  LOGIN_USER,
  GET_POSTS,
  READ_POST,
  UPDATE_POST,
  DELETE_POST
} from "../actions/index";

export const initialState = {
  title: "",
  howto: "",
  guides: [],
  singleGuide: {},
  author: localStorage.getItem("author"),
  author_id: "",
  isLoggedIn: false,
  isFetching: false,
  error: ""
};

export const howToReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        isLoggedIn: true
      };
    case LOGIN_USER:
      return {
        ...state,
        author: localStorage.getItem("author"),
        isFetching: false,
        isLoggedIn: true
      };
    case LOG_OUT:
      return {
        author: "",
        isLoggedIn: false
      };
    case GET_POSTS:
      return {
        ...state,
        guides: action.payload
      };
    case READ_POST:
      return {
        ...state,
        singleGuide: action.payload
      };
    case UPDATE_POST:
      return {
        ...state,
        singleGuide: action.payload
      };
    case DELETE_POST:
      return {
        ...state,
        singleGuide: {},
        guides: []
      };
    case LOG_OUT:
      return {
        guides: [],
        singleGuide: {},
        isLoggedIn: false,
        author: ""
      };
    default:
      return {
        ...state
      };
  }
};
