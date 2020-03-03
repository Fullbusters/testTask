import {LOGIN} from './types';

const InitialState = {
  token: null,
};

export const authReducer = (state = InitialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {...state, token: action.payload};
    default:
      return state;
  }
};

