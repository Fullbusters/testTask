import request from "../request";

const loadMessage = () => {
  return request.get('company/getcompanyinfo')
};

const updateMessage = (params) => {
  return request.put('company/updatecompanymeetingagenda', params)
};

export default {loadMessage, updateMessage}
