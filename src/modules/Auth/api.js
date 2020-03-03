import request from "../request";

const login = (params) => {
  return  request.post('authenticate/login', params)
};

export default {login};
