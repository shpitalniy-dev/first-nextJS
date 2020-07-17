import config from '../config/config';
import actionTypes from '../actionTypes/actionTypes';

export const initialState = {
    age: config.defaultAge,
};

export const commonReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PUT_AGE_IN_STORE:
            return {
                ...state,
                age: action.payload,
            };
        default: 
            return state;
    };
}