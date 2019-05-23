import { combineReducers } from 'redux';
import button from './buttonReducer';
import search from './searchReducer';
import settings from './settingsReducer';

export default combineReducers({
    button,
    search,
    settings,
})