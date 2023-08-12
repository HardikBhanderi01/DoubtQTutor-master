import { all, call, put, takeLatest } from "redux-saga/effects";
import { Axios } from "../../api/axios";
import { getSimplifiedError } from "../../utils/error";

import {
  CONTACT_TUTOR_ERROR,
  CONTACT_TUTOR_REQUEST,
  CONTACT_TUTOR_SUCCESS,
  GET_BANK_INFO_ERROR,
  GET_BANK_INFO_REQUEST,
  GET_BANK_INFO_SUCCESS,
  GET_OTP_ERROR,
  GET_OTP_REQUEST,
  GET_OTP_SUCCESS,
  GET_PERSONAL_INFO_ERROR,
  GET_PERSONAL_INFO_REQUEST,
  GET_PERSONAL_INFO_SUCCESS,
  GET_PROFESSIONAL_INFO_ERROR,
  GET_PROFESSIONAL_INFO_REQUEST,
  GET_PROFESSIONAL_INFO_SUCCESS,
  GET_RANDOM_QUESTION_ERROR,
  GET_RANDOM_QUESTION_REQUEST,
  GET_RANDOM_QUESTION_SUCCESS,
  GET_SUBJECT_LIST_ERROR,
  GET_SUBJECT_LIST_REQUEST,
  GET_SUBJECT_LIST_SUCCESS,
  GET_WALLET_ERROR,
  GET_WALLET_REQUEST,
  GET_WALLET_SUCCESS,
  POST_RANDOM_QUESTION_ANSWER_ERROR,
  POST_RANDOM_QUESTION_ANSWER_REQUEST,
  POST_RANDOM_QUESTION_ANSWER_RESET,
  POST_RANDOM_QUESTION_ANSWER_SUCCESS, POST_RE_ATTEMPT_RANDOM_QUESTION_ANSWER_ERROR,
  POST_RE_ATTEMPT_RANDOM_QUESTION_ANSWER_REQUEST,
  POST_RE_ATTEMPT_RANDOM_QUESTION_ANSWER_SUCCESS,
  SET_BANK_DETAIL_ERROR,
  SET_BANK_DETAIL_REQUEST,
  SET_BANK_DETAIL_SUCCESS,
  SET_PERSONAL_DETAILS_ERROR,
  SET_PERSONAL_DETAILS_REQUEST,
  SET_PERSONAL_DETAILS_SUCCESS,
  SET_PROFESSIONAL_DETAILS_ERROR,
  SET_PROFESSIONAL_DETAILS_REQUEST,
  SET_PROFESSIONAL_DETAILS_SUCCESS,
  SET_SUBJECT_ERROR,
  SET_SUBJECT_REQUEST,
  SET_SUBJECT_SUCCESS,
} from "../reducers/ProfileReducer";
import { getAuthToken } from "../../utils/helper";
import { toast } from "react-toastify";

async function personalDetailsApi(payload) {
  return await Axios.post("/register/personal", payload);
}

function* handlePersonalDetails({ payload }) {
  try {
    const response = yield call(personalDetailsApi, payload);
    if (response) {
      yield put({
        type: SET_PERSONAL_DETAILS_SUCCESS,
      });
    }
  } catch (error) {
    yield put({
      type: SET_PERSONAL_DETAILS_ERROR,
      error: getSimplifiedError(error),
    });
  }
}

async function getOtpReqApi(payload) {
  return await Axios.post("/getotp", payload);
}

function* handleGetOtpReq({ payload }) {
  try {
    const response = yield call(getOtpReqApi, payload);
    if (response) {
      toast("OTP send successfully");
      yield put({
        type: GET_OTP_SUCCESS,
      });
    }
  } catch (error) {
    yield put({
      type: GET_OTP_ERROR,
      error: getSimplifiedError(error),
    });
  }
}

async function professionalDetailsApi(payload) {
  return await Axios.post("/register/professional", payload);
}

function* handleProfessionalDetails({ payload }) {
  try {
    const response = yield call(professionalDetailsApi, payload);
    if (response) {
      yield put({
        type: SET_PROFESSIONAL_DETAILS_SUCCESS,
      });
    }
  } catch (error) {
    yield put({
      type: SET_PROFESSIONAL_DETAILS_ERROR,
      error: getSimplifiedError(error),
    });
  }
}

async function subjectDetailsApi(payload) {
  return await Axios.post("/register/addsubjects", payload);
}

function* handleSubjectDetails({ payload }) {
  try {
    const response = yield call(subjectDetailsApi, payload);
    if (response) {
      yield put({
        type: SET_SUBJECT_SUCCESS,
      });
    }
  } catch (error) {
    yield put({
      type: SET_SUBJECT_ERROR,
      error: getSimplifiedError(error),
    });
  }
}

async function getSubjectListDetails(payload) {
  return await Axios.post("/getexamsubjectchoice", { token: getAuthToken() });
}

function* handleGetSubjectListDetails({ payload }) {
  try {
    const response = yield call(getSubjectListDetails, payload);
    if (response) {
      yield put({
        type: GET_SUBJECT_LIST_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: GET_SUBJECT_LIST_ERROR,
      error: getSimplifiedError(error),
    });
  }
}

async function bankDetailsApi(payload) {
  return await Axios.post("/register/bankdetails", payload);
}

function* handleBankDetail({ payload }) {
  try {
    const response = yield call(bankDetailsApi, payload);
    if (response) {
      yield put({
        type: SET_BANK_DETAIL_SUCCESS,
      });
    }
  } catch (error) {
    yield put({
      type: SET_BANK_DETAIL_ERROR,
      error: getSimplifiedError(error),
    });
  }
}

async function getWalletDetail(payload) {
  return await Axios.post("/wallet", { token: getAuthToken() });
}

function* handleGetWalletDetail({ payload }) {
  try {
    const response = yield call(getWalletDetail, payload);
    if (response) {
      yield put({
        type: GET_WALLET_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: GET_WALLET_ERROR,
      error: getSimplifiedError(error),
    });
  }
}

async function contactTutor(payload) {
  return await Axios.post("/contact", { ...payload, token: getAuthToken() });
}

function* handleContactTutor({ payload }) {
  try {
    const response = yield call(contactTutor, payload);
    if (response) {
      yield put({
        type: CONTACT_TUTOR_SUCCESS,
      });
    }
  } catch (error) {
    yield put({
      type: CONTACT_TUTOR_ERROR,
      error: getSimplifiedError(error),
    });
  }
}

async function randomQuestionApi(payload) {
  return await Axios.post("/randomizedtutorquestion", {
    ...payload,
    token: getAuthToken(),
  });
}

function* getRandomQuestion({ payload }) {
  try {
    const response = yield call(randomQuestionApi, payload);
    if (response) {
      yield put({
        type: GET_RANDOM_QUESTION_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: GET_RANDOM_QUESTION_ERROR,
      error: getSimplifiedError(error),
    });
  }
}

async function randomQuestionAnswerApi(payload) {
  return await Axios.post("/tutorexamanswer", {
    ...payload,
    token: getAuthToken(),
  });
}

function* postRandomQuestionAnswer({ payload }) {
  try {
    const response = yield call(randomQuestionAnswerApi, payload);
    if (response) {
      yield put({
        type: POST_RANDOM_QUESTION_ANSWER_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: POST_RANDOM_QUESTION_ANSWER_ERROR,
      error: getSimplifiedError(error),
    });
  }
}
async function personalInfoApi(payload) {
  return await Axios.post("/getpersonalinfo", {
    ...payload,
    token: getAuthToken(),
  });
}

function* handlePersonalInfo({ payload }) {
  try {
    const response = yield call(personalInfoApi, payload);
    if (response) {
      yield put({
        type: GET_PERSONAL_INFO_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: GET_PERSONAL_INFO_ERROR,
      error: getSimplifiedError(error),
    });
  }
}

async function professionalInfoApi(payload) {
  return await Axios.post("/getprofessionalinfo", {
    ...payload,
    token: getAuthToken(),
  });
}

function* handleProfessionalInfo({ payload }) {
  try {
    const response = yield call(professionalInfoApi, payload);
    if (response) {
      yield put({
        type: GET_PROFESSIONAL_INFO_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: GET_PROFESSIONAL_INFO_ERROR,
      error: getSimplifiedError(error),
    });
  }
}
async function bankInfoApi(payload) {
  return await Axios.post("/getbankdetails", {
    ...payload,
    token: getAuthToken(),
  });
}
async function reattemptAnswers(payload) {
  return await Axios.post("/tutorexamattempt", {
    ...payload,
    token: getAuthToken(),
  });
}

function* handleBankInfo({ payload }) {
  try {
    const response = yield call(bankInfoApi, payload);
    if (response) {
      yield put({
        type: GET_BANK_INFO_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: GET_BANK_INFO_ERROR,
      error: getSimplifiedError(error),
    });
  }
}

function* handleReattemptAnswer({payload}){
  try {
    const response = yield call(reattemptAnswers, payload);
    console.log("response")
    if (response) {
      yield put({
        type: POST_RE_ATTEMPT_RANDOM_QUESTION_ANSWER_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: POST_RE_ATTEMPT_RANDOM_QUESTION_ANSWER_ERROR,
      error: getSimplifiedError(error),
    });
  }
}

export default all([
  takeLatest(SET_PERSONAL_DETAILS_REQUEST, handlePersonalDetails),
  takeLatest(GET_OTP_REQUEST, handleGetOtpReq),
  takeLatest(SET_PROFESSIONAL_DETAILS_REQUEST, handleProfessionalDetails),
  takeLatest(SET_SUBJECT_REQUEST, handleSubjectDetails),
  takeLatest(GET_SUBJECT_LIST_REQUEST, handleGetSubjectListDetails),
  takeLatest(SET_BANK_DETAIL_REQUEST, handleBankDetail),
  takeLatest(GET_WALLET_REQUEST, handleGetWalletDetail),
  takeLatest(CONTACT_TUTOR_REQUEST, handleContactTutor),
  takeLatest(GET_RANDOM_QUESTION_REQUEST, getRandomQuestion),
  takeLatest(POST_RANDOM_QUESTION_ANSWER_REQUEST, postRandomQuestionAnswer),
  takeLatest(GET_PERSONAL_INFO_REQUEST, handlePersonalInfo),
  takeLatest(GET_PROFESSIONAL_INFO_REQUEST, handleProfessionalInfo),
  takeLatest(GET_BANK_INFO_REQUEST, handleBankInfo),
  takeLatest(POST_RE_ATTEMPT_RANDOM_QUESTION_ANSWER_REQUEST, handleReattemptAnswer),
]);
