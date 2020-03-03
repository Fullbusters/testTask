import api from './api';
import {LOAD_COMPANY} from "./types";

const loadMessageSuccess = (payload) => ({type: LOAD_COMPANY, payload});

// load agenda message from server
export const loadMessage = () => (dispatch) => {
  return api.loadMessage()
    .then((res) => {
      dispatch(loadMessageSuccess(res.data));
    })
    .catch((e) => {
      throw e
    })
};

// update message on server
export const updateMessage = (params) => (dispatch) => {
  return api.updateMessage(params)
    .then(() => {
      return true
    })
    .catch((e) => {
      console.log(e)
    })
};