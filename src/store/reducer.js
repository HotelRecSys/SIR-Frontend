import {combineReducers} from 'redux';
import generalReducer from './general';
import authenticationReducer from './auth';
import otelReducer from './otels';

export default combineReducers({general: generalReducer, authentication: authenticationReducer, otels: otelReducer});