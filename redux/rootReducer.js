import { combineReducers } from 'redux';
import { commonReducer } from './reducers/commonReducer';

export default combineReducers({
    common: commonReducer,
});