import { combineReducers } from 'redux';

// import urlReducer from './urlReducer';
import authReducer from './authreducer';

export default combineReducers({
    auth : authReducer,
    // baseURL: urlReducer
})