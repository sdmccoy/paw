import { combineReducers } from 'redux';
import button from './buttonReducer';
import search from './searchReducer';
import settings from './settingsReducer';
import saved from './savedReducer';

export default combineReducers({
    button,
    search,
    saved, //using local storage instead
    settings,
})