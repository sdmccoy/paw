import { combineReducers } from 'redux';
import buttonReducer from './buttonReducer';
import searchReducer from './searchReducer';

export default combineReducers({
    buttonReducer,
    searchReducer,
})