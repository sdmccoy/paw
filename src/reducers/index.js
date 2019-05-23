import { combineReducers } from 'redux';
import button from './buttonReducer';
import search from './searchReducer';

export default combineReducers({
    button,
    search,
})