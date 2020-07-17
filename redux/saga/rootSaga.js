import { all, fork } from 'redux-saga/effects';
import { commonWatchers } from './common/watchers';

const sagas = [
    commonWatchers,
];

export default function* rootSaga() {
  yield all(sagas.map(fork));
}