import api from './api'
import {LOGIN} from "./types";

export const saveToken = (token) => {
  localStorage.setItem('auth_token', token);
  return {type: LOGIN, payload: token}

};

// login to system
export const login = (params) => (dispatch) => {
  return api.login(params)
    .then((result) => {
      dispatch(saveToken(result.data.token));
    })
    .catch((error) => {
      throw error
    })
};