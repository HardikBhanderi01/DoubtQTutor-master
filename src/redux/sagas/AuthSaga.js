import { all, call, put, takeLatest } from 'redux-saga/effects';
import Cookies from 'js-cookie';

import { Axios } from '../../api/axios';
import { getSimplifiedError } from '../../utils/error';
import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR,
} from '../reducers/AuthReducer';
import { getAuthToken } from '../../utils/helper';

async function signup(payload) {
  if(payload?.type === "googleRegister"){
    return await Axios.post('/register/google',payload.payload);
  }
  if(payload?.type === "google"){
    return await Axios.post('/googleregister',payload.payload);
  }
  return await Axios.post('/register/email',payload);
}

function* handleSignup({ payload }) {
  try {
    const response = yield call(signup, payload);
    if (response && response.status === 1) {
      const options = { path: '/' };
      Cookies.set('token', response.token, options);
      yield put({
        type: SIGNUP_SUCCESS,
        response
      });
    }
  } catch (error) {
    yield put({
      type: SIGNUP_ERROR,
      error: getSimplifiedError(error),
    });
  }
}

async function login(payload) {
  if(payload?.type === "google"){
    return await Axios.post('/login/google',payload.payload);
  }
  return await Axios.post('/login/email', payload);
}
function* handleLogin({ payload }) {
  try {
    const response = yield call(login, payload);
    if (response.token) {
      const options = { path: '/' };
      Cookies.set('token', response.token, options);
      yield put({
        type: LOGIN_SUCCESS,
        response
      });
    }
  } catch (error) {
    yield put({
      type: LOGIN_ERROR,
      error: getSimplifiedError(error),
    });
  }
}

async function logout(payload) {
  return await Axios.post('/logout', payload );
}
function* handleLogout({payload}) {
  try {
    const response = yield call(logout ,payload);
    if (response) {
      Cookies.remove('token', { path: '/' });
      yield put({
        type: LOGOUT_SUCCESS,
      });
    }
  } catch (error) {
    yield put({
      type: LOGOUT_ERROR,
      error: getSimplifiedError(error),
    });
  }
}


async function forgotPassword(payload) {
  return await Axios.post('/forgotpassword', payload );
}
function* handleForgotPassword({payload}) {
  try {
    const response = yield call(forgotPassword ,payload);
    if (response) {
      yield put({
        type: FORGOT_PASSWORD_SUCCESS,
      });
    }
  } catch (error) {
    yield put({
      type: FORGOT_PASSWORD_ERROR,
      error: getSimplifiedError(error),
    });
  }
}

export default all([
  takeLatest(SIGNUP_REQUEST, handleSignup),
  takeLatest(LOGIN_REQUEST, handleLogin),
  takeLatest(LOGOUT_REQUEST, handleLogout),
  takeLatest(FORGOT_PASSWORD_REQUEST, handleForgotPassword),
]);
