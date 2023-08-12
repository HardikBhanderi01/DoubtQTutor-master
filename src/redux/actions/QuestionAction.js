import {
  GET_EXPERT_QUESTION_REQUEST,
  CHANGE_QUESTION_STATUS_SKIP_REQUEST,
  GET_ANSWER_STREAK_REQUEST,
  GET_ASSIGNED_QUESTION_REQUEST,
  GET_POST_STREAK_CASHOUT_REQUEST,
  GET_QUESTION_UNSOLVED_REQUEST,
  GET_QUESTION_REQUEST,
  GET_REFERRAL_DASHBOARD_CASHOUT_REQUEST,
  GET_REFERRAL_DASHBOARD_REQUEST,
  GET_UNANSWERED_QUESTION_REQUEST,
  POST_ANSWER_STICK_REQUEST,
  POST_EXPERT_QUESTION_ANSWER_REQUEST,
  RESET_BLOCK_QUESTION,
  POST_UNSOLVED_QUESTION_ANSWER_REQUEST,
  GET_STATES_LIST_REQUEST,
  START_ANSWERING_REQUEST,
  GET_EXPERT_QUESTION_SUCCESS,
  GET_EXPERT_QUESTION_UPDATE_SUCCESS,
  GET_QUESTION_TYPE_REQUEST,
} from "../reducers/QuestionReducer";

export const getQuestionList = (payload) => ({
  type: GET_QUESTION_REQUEST,
  payload,
});

export const getUnansweredQuestion = (payload) => ({
  type: GET_UNANSWERED_QUESTION_REQUEST,
  payload,
});

export const getStatesList = (payload) => ({
  type: GET_STATES_LIST_REQUEST,
  payload,
});

export const getAssignedQuestion = (payload) => ({
  type: GET_ASSIGNED_QUESTION_REQUEST,
  payload,
});

export const postUnsolvedQuestionAnswer = (payload) => ({
  type: POST_UNSOLVED_QUESTION_ANSWER_REQUEST,
  payload,
});

export const postAnswerStick = (payload) => ({
  type: POST_ANSWER_STICK_REQUEST,
  payload,
});

export const getReferralDashboardData = (payload) => ({
  type: GET_REFERRAL_DASHBOARD_REQUEST,
  payload,
});

export const getReferralDashboardCahsout = (payload) => ({
  type: GET_REFERRAL_DASHBOARD_CASHOUT_REQUEST,
  payload,
});

export const getPostStreakCahsout = (payload) => ({
  type: GET_POST_STREAK_CASHOUT_REQUEST,
  payload,
});

export const postExpertQuestionAnswer = (payload) => ({
  type: POST_EXPERT_QUESTION_ANSWER_REQUEST,
  payload,
});

export const getQuestionUnsolved = (payload) => ({
  type: GET_QUESTION_UNSOLVED_REQUEST,
  payload,
});

export const getAnswerStreak = (payload) => ({
  type: GET_ANSWER_STREAK_REQUEST,
  payload,
});

export const getExpertQuestion = (payload) => ({
  type: GET_EXPERT_QUESTION_REQUEST,
  payload,
});

export const getExpertQuestionSuccess = (payload) => ({
  type: GET_EXPERT_QUESTION_UPDATE_SUCCESS,
  payload,
});

export const changeQuestionStatusSkip = (payload) => ({
  type: CHANGE_QUESTION_STATUS_SKIP_REQUEST,
  payload,
});

export const startAnswering = (payload) => ({
  type: START_ANSWERING_REQUEST,
  payload,
});

export const getQuestionType = (payload) => ({
  type: GET_QUESTION_TYPE_REQUEST,
  payload,
});

export const resetQuestionBlock = (payload) => ({
  type: RESET_BLOCK_QUESTION,
  payload,
});
