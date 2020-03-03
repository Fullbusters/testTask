import {LOAD_COMPANY} from './types';

const InitialState = {
  company: {},
};

export const agendaReducer = (state = InitialState, action) => {
  switch (action.type) {
    case LOAD_COMPANY:
      return {...state, company: action.payload};
    default:
      return state;
  }
};

