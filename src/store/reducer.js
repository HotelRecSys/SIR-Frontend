import {combineReducers} from 'redux';
import generalReducer from './general';
import authenticationReducer from './auth';

export default combineReducers({general: generalReducer, authentication: authenticationReducer});