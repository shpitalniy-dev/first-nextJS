import { put, call, select, delay } from 'redux-saga/effects';
import actionTypes from '../../actionTypes/actionTypes';

export function* changeAge(action) {
    yield put({ type: actionTypes.PUT_AGE_IN_STORE, payload: action.payload });
}

export function* changeAgeDelay(action) {
    yield delay(5000);
    yield put({ type: actionTypes.PUT_AGE_IN_STORE, payload: action.payload });
}