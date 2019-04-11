import { combineReducers } from 'redux';
import appointmentReducer from './appointmentReducer';
import errorREducer from './errorREducer';

export default combineReducers({
  citas: appointmentReducer,
  error: errorREducer
});