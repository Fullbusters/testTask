import {store} from "./store";
import {saveToken} from "./Auth/actions";

//we need tu use some other url for CORS
const API = 'https://cors-anywhere.herokuapp.com/http://peepsplan-qa.ego-cms.com:8081/api/v1';

function getUserToken() {
  const state = store.getState();
  let token = localStorage.getItem('auth_token') || state.authReducer.token || null;

  return token ? `Bearer ${token}` : null;
}

function getBaseOptions(method) {
  const options = {};
  options.method = method;
  options.headers = {};
  options.headers['accept'] = 'application/json';
  options.headers['content-Type'] = 'application/json';

  return options;
}

function authorizeRequest(options) {
  const token = getUserToken();

  if (token)
    options.headers['Authorization'] = token;
  return options;
}

function getPathWithQueryString(path, params = {}) {
  const esc = encodeURIComponent;
  const query = Object.keys(params)
    .filter(k => params[k])
    .map(k => esc(k) + '=' + esc(params[k]))
    .join('&');
  return query ? path + '?' + query : path;
}

function getRequestUrl(path) {
  return `${API}/${path}`
}


function base(path, method, customOptions) {
  let options = getBaseOptions(method);
  options = Object.assign(options, authorizeRequest(options), customOptions);

  return fetch(getRequestUrl(path), options)
    .then(async response => {

      if (response.ok) {
        return await response.json();
      }else {
      	throw response.status;
			}

    })
    .catch((err) => {
      console.log('error', err);
      if(err===401){
        store.dispatch(saveToken(null))
      }
      throw err;
    });
}

const request = {
  get: (path, params) => {
    const pathWithParams = getPathWithQueryString(path, params);
    return base(pathWithParams, 'GET', {});
  },
  delete: (path, params) => {
    const pathWithParams = getPathWithQueryString(path, params);
    return base(pathWithParams, 'DELETE', {});
  },
  post: (path, params) => {
    const options = {body: JSON.stringify(params)};
    return base(path, 'POST', options);
  },
  put: (path, params) => {
    const options = {body: JSON.stringify(params)};
    return base(path, 'PUT', options);
  },
  patch: (path, params) => {
    const options = {body: JSON.stringify(params)};
    return base(path, 'PATCH', options);
  },
};

export default request;
