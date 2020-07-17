import { takeEvery } from '@redux-saga/core/effects';
import actionTypes from '../../actionTypes/actionTypes';
import * as workers from './workers';

export function* commonWatchers() {
  yield takeEvery(actionTypes.CHANGE_AGE, workers.changeAge);
  yield takeEvery(actionTypes.CHANGE_AGE_DELAY, workers.changeAgeDelay);
}
