import { all, call, put, takeLatest } from "redux-saga/effects";

import { Axios } from "../../api/axios";
import { getSimplifiedError } from "../../utils/error";
import {
  GET_EXPERT_QUESTION_ERROR,
  GET_EXPERT_QUESTION_REQUEST,
  CHANGE_QUESTION_STATUS_SKIP_ERROR,
  CHANGE_QUESTION_STATUS_SKIP_REQUEST,
  CHANGE_QUESTION_STATUS_SKIP_SUCCESS,
  GET_EXPERT_QUESTION_SUCCESS,
  GET_ANSWER_STREAK_ERROR,
  GET_ANSWER_STREAK_REQUEST,
  GET_ANSWER_STREAK_SUCCESS,
  GET_ASSIGNED_QUESTION_ERROR,
  GET_ASSIGNED_QUESTION_REQUEST,
  GET_ASSIGNED_QUESTION_SUCCESS,
  GET_POST_STREAK_CASHOUT_ERROR,
  GET_POST_STREAK_CASHOUT_REQUEST,
  GET_POST_STREAK_CASHOUT_SUCCESS,
  GET_QUESTION_ASSIGNED_TO_ERROR,
  GET_QUESTION_UNSOLVED_REQUEST,
  GET_QUESTION_ASSIGNED_TO_SUCCESS,
  GET_QUESTION_ERROR,
  GET_QUESTION_REQUEST,
  GET_QUESTION_SUCCESS,
  GET_REFERRAL_DASHBOARD_CASHOUT_ERROR,
  GET_REFERRAL_DASHBOARD_CASHOUT_REQUEST,
  GET_REFERRAL_DASHBOARD_CASHOUT_SUCCESS,
  GET_REFERRAL_DASHBOARD_ERROR,
  GET_REFERRAL_DASHBOARD_REQUEST,
  GET_REFERRAL_DASHBOARD_SUCCESS,
  GET_UNANSWERED_QUESTION_ERROR,
  GET_UNANSWERED_QUESTION_REQUEST,
  GET_UNANSWERED_QUESTION_SUCCESS,
  POST_ANSWER_STICK_REQUEST,
  POST_EXPERT_QUESTION_ANSWER_ERROR,
  POST_EXPERT_QUESTION_ANSWER_REQUEST,
  POST_EXPERT_QUESTION_ANSWER_SUCCESS,
  POST_UNSOLVED_QUESTION_ANSWER_REQUEST,
  POST_UNSOLVED_QUESTION_ANSWER_SUCCESS,
  POST_UNSOLVED_QUESTION_ANSWER_ERROR,
  GET_STATES_LIST_REQUEST,
  GET_STATES_LIST_SUCCESS,
  GET_STATES_LIST_ERROR,
  START_ANSWERING_REQUEST,
  START_ANSWERING_SUCCESS,
  START_ANSWERING_ERROR,
  GET_QUESTION_TYPE_REQUEST,
  GET_QUESTION_TYPE_SUCCESS,
  GET_QUESTION_TYPE_ERROR,
} from "../reducers/QuestionReducer";
import { getAuthToken } from "../../utils/helper";

const baseURL = process.env.REACT_APP_APIS_BASE_URL;

async function getQuestion(payload) {
  return await Axios.post(`/question${payload}`, {
    token: getAuthToken(),
  });
}

function* handleGetQuestion({ payload }) {
  try {
    const response = yield call(getQuestion, payload);
    if (response) {
      yield put({
        type: GET_QUESTION_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: GET_QUESTION_ERROR,
      error: getSimplifiedError(error),
    });
  }
}

async function getUnansweredQue(payload) {
  return await Axios.post(`/unsolvedquestion${payload}`, {
    token: getAuthToken(),
  });
}

function* handleGetUnansweredQue({ payload }) {
  try {
    const response = yield call(getUnansweredQue, payload);
    if (response) {
      yield put({
        type: GET_UNANSWERED_QUESTION_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: GET_UNANSWERED_QUESTION_ERROR,
      error: getSimplifiedError(error),
    });
  }
}

async function getAssignedQuestion(payload = "") {
  return await Axios.post(`/assignquestion${payload}`, {
    token: getAuthToken(),
  });
}
function* handleGetAssignedQue({ payload }) {
  try {
    const response = yield call(getAssignedQuestion, payload);
    if (response) {
      yield put({
        type: GET_ASSIGNED_QUESTION_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: GET_ASSIGNED_QUESTION_ERROR,
      error: getSimplifiedError(error),
    });
  }
}

async function getStatesList(payload = "") {
  return await Axios.post(`/gettutorstats`, {
    token: getAuthToken(),
  });
}
function* handleGetStatesList({ payload }) {
  try {
    const response = yield call(getStatesList, payload);
    if (response) {
      yield put({
        type: GET_STATES_LIST_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: GET_STATES_LIST_ERROR,
      error: getSimplifiedError(error),
    });
  }
}

async function postUnsolvedQuestionAns(payload) {
  return await Axios.post(`/unsolvedsendanswer`, {
    ...payload,
    token: getAuthToken(),
  });
}

function* handleSubmitUnansweredQue({ payload }) {
  try {
    const response = yield call(postUnsolvedQuestionAns, payload);
    if (response) {
      yield put({
        type: POST_UNSOLVED_QUESTION_ANSWER_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: POST_UNSOLVED_QUESTION_ANSWER_ERROR,
      error: getSimplifiedError(error),
    });
  }
}

async function getReferralDashboardApi(payload) {
  return await Axios.post(`/referraldashboard`, {
    ...payload,
    token: getAuthToken(),
  });
}

function* handleGetReferralDashboard({ payload }) {
  try {
    const response = yield call(getReferralDashboardApi, payload);
    if (response) {
      yield put({
        type: GET_REFERRAL_DASHBOARD_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: GET_REFERRAL_DASHBOARD_ERROR,
      error: getSimplifiedError(error),
    });
  }
}

async function getReferralDashboardApiCashout(payload) {
  return await Axios.post(`/referralcomplete`, {
    ...payload,
    token: getAuthToken(),
  });
}

function* handleGetReferralDashboardCashout({ payload }) {
  try {
    const response = yield call(getReferralDashboardApiCashout, payload);
    if (response) {
      yield put({
        type: GET_REFERRAL_DASHBOARD_CASHOUT_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: GET_REFERRAL_DASHBOARD_CASHOUT_ERROR,
      error: getSimplifiedError(error),
    });
  }
}

async function getPostStreakCashoutApi(payload) {
  return await Axios.post(`/answerstreakcashout`, {
    ...payload,
    token: getAuthToken(),
  });
}

function* handleGetPostStreakCashout({ payload }) {
  try {
    const response = yield call(getPostStreakCashoutApi, payload);
    if (response) {
      yield put({
        type: GET_POST_STREAK_CASHOUT_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: GET_POST_STREAK_CASHOUT_ERROR,
      error: getSimplifiedError(error),
    });
  }
}

async function postAnswerToQuestionApi(payload) {
  return await Axios.post(`/sendanswer`, {
    ...payload,
    token: getAuthToken(),
  });
}

function* handlePostAnswerToQuestion({ payload }) {
  try {
    const response = yield call(postAnswerToQuestionApi, payload);
    if (response) {
      yield put({
        type: POST_EXPERT_QUESTION_ANSWER_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: POST_EXPERT_QUESTION_ANSWER_ERROR,
      error: getSimplifiedError(error),
    });
  }
}

async function getQuestionAssignedToApi(payload) {
  return await Axios.post(`/checkunsolvedquestion`, {
    ...payload,
    token: getAuthToken(),
  });
}

function* handleGetQuestionAssignedTo({ payload }) {
  try {
    const response = yield call(getQuestionAssignedToApi, payload);
    const apiRes = { ...response, questionId: payload.questionId };
    if (response) {
      yield put({
        type: GET_QUESTION_ASSIGNED_TO_SUCCESS,
        response: apiRes,
      });
    }
  } catch (error) {
    yield put({
      type: GET_QUESTION_ASSIGNED_TO_ERROR,
      error: getSimplifiedError(error),
    });
  }
}

async function getAnswerStreakApi(payload) {
  return await Axios.post(`/answerstreak`, {
    ...payload,
    token: getAuthToken(),
  });
}

function* handleGetAnswerStreak({ payload }) {
  try {
    const response = yield call(getAnswerStreakApi, payload);
    if (response) {
      yield put({
        type: GET_ANSWER_STREAK_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: GET_ANSWER_STREAK_ERROR,
      error: getSimplifiedError(error),
    });
  }
}

async function changeAnswerStatus(payload) {
  return await Axios.post(
    `${baseURL}/question/changestatus`,
    {
      ...payload,
      token: getAuthToken(),
    }
  );
}

function* handleChangeAnswerStatus({ payload }) {
  try {
    const response = yield call(changeAnswerStatus, payload);
    if (response) {
      yield put({
        type: GET_EXPERT_QUESTION_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: GET_EXPERT_QUESTION_ERROR,
      error: getSimplifiedError(error),
    });
  }
}

async function changeAnswerStatusSkip(payload) {
  return await Axios.post(
    `${baseURL}/question/changestatuswithreasons`,
    {
      ...payload,
      token: getAuthToken(),
    }
  );
}

function* handleChangeAnswerStatusSkip({ payload }) {
  try {
    const response = yield call(changeAnswerStatusSkip, payload);
    if (response) {
      yield put({
        type: CHANGE_QUESTION_STATUS_SKIP_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: CHANGE_QUESTION_STATUS_SKIP_ERROR,
      error: getSimplifiedError(error),
    });
  }
}

async function startAnsweringSkip(payload) {
  
  return await Axios.post(
    `${baseURL}/question/start_answering`,
    {
      token: getAuthToken(),
    }
  );
}

function* handleStartAnswering({ payload }) {
  try {
    const response = yield call(startAnsweringSkip, payload);
    if (response) {
      yield put({
        type: START_ANSWERING_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: START_ANSWERING_ERROR,
      error: getSimplifiedError(error),
    });
  }
}

async function getQuestionTypeSkip(payload) {
  
  return await Axios.get(
    `${baseURL}/getquestiontype`,
    {
      token: getAuthToken(),
    }
  );
}

function* handleGetQuestionType({ payload }) {
  try {
    const response = yield call(getQuestionTypeSkip, payload);
    if (response) {
      yield put({
        type: GET_QUESTION_TYPE_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: GET_QUESTION_TYPE_ERROR,
      error: getSimplifiedError(error),
    });
  }
}

export default all([
  takeLatest(GET_QUESTION_REQUEST, handleGetQuestion),
  takeLatest(GET_UNANSWERED_QUESTION_REQUEST, handleGetUnansweredQue),
  takeLatest(GET_STATES_LIST_REQUEST, handleGetStatesList),
  takeLatest(GET_ASSIGNED_QUESTION_REQUEST, handleGetAssignedQue),
  takeLatest(POST_UNSOLVED_QUESTION_ANSWER_REQUEST, handleSubmitUnansweredQue),
  takeLatest(POST_ANSWER_STICK_REQUEST, handleSubmitUnansweredQue),
  takeLatest(GET_REFERRAL_DASHBOARD_REQUEST, handleGetReferralDashboard),
  takeLatest(
    GET_REFERRAL_DASHBOARD_CASHOUT_REQUEST,
    handleGetReferralDashboardCashout
  ),
  takeLatest(GET_POST_STREAK_CASHOUT_REQUEST, handleGetPostStreakCashout),
  takeLatest(POST_EXPERT_QUESTION_ANSWER_REQUEST, handlePostAnswerToQuestion),
  takeLatest(GET_QUESTION_UNSOLVED_REQUEST, handleGetQuestionAssignedTo),
  takeLatest(GET_ANSWER_STREAK_REQUEST, handleGetAnswerStreak),
  takeLatest(GET_EXPERT_QUESTION_REQUEST, handleChangeAnswerStatus),
  takeLatest(CHANGE_QUESTION_STATUS_SKIP_REQUEST, handleChangeAnswerStatusSkip),
  takeLatest(START_ANSWERING_REQUEST, handleStartAnswering),
  takeLatest(GET_QUESTION_TYPE_REQUEST, handleGetQuestionType),
]);
