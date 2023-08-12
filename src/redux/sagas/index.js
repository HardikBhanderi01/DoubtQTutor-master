import { all } from 'redux-saga/effects';

import AuthSaga from './AuthSaga';
import ProfileSaga from './ProfileSaga';
import QuestionSaga from './QuestionSaga';

export function* sagas() {
  yield all([AuthSaga, ProfileSaga, QuestionSaga]);
}
