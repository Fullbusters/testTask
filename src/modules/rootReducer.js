import {combineReducers} from 'redux';
import {authReducer} from "./Auth/reduces";
import {reducer as formReducer} from 'redux-form';
import {agendaReducer} from './Agenda/reducer';

export const rootReducer = combineReducers({
  form: formReducer,
  authReducer,
  agendaReducer,
});