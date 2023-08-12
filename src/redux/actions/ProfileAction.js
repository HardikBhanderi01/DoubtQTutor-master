import {
  CONTACT_TUTOR_REQUEST,
  GET_BANK_INFO_REQUEST,
  GET_OTP_REQUEST,
  GET_PERSONAL_INFO_REQUEST,
  GET_PROFESSIONAL_INFO_REQUEST,
  GET_RANDOM_QUESTION_REQUEST,
  GET_SUBJECT_LIST_REQUEST,
  GET_WALLET_REQUEST,
  POST_RANDOM_QUESTION_ANSWER_REQUEST,
  POST_RE_ATTEMPT_RANDOM_QUESTION_ANSWER_REQUEST,
  SET_BANK_DETAIL_REQUEST,
  SET_PERSONAL_DETAILS_REQUEST,
  SET_PROFESSIONAL_DETAILS_REQUEST,
  SET_SUBJECT_REQUEST
} from "../reducers/ProfileReducer";

  export const setPersonalDetailsReq = (payload) => ({ type: SET_PERSONAL_DETAILS_REQUEST, payload });

  export const getOtpReq = (payload) => ({ type: GET_OTP_REQUEST, payload });

  export const setProfessionalDetailsReq = (payload) => ({ type: SET_PROFESSIONAL_DETAILS_REQUEST, payload });

  export const setSubjectDetailsReq = (payload) => ({ type: SET_SUBJECT_REQUEST, payload });

  export const getSubjectListReq = (payload) => ({ type: GET_SUBJECT_LIST_REQUEST, payload });

  export const setBankDetailsReq = (payload) => ({ type: SET_BANK_DETAIL_REQUEST, payload });

  export const getWalletDetails = (payload) => ({ type: GET_WALLET_REQUEST, payload });

  export const contactTutor = (payload) => ({ type: CONTACT_TUTOR_REQUEST, payload });

  export const getRandomQuestionQuiz = (payload) => ({ type: GET_RANDOM_QUESTION_REQUEST, payload });

  export const getPersonalInfo = (payload) => ({ type: GET_PERSONAL_INFO_REQUEST, payload });

  export const getProfessionalInfo = (payload) => ({ type: GET_PROFESSIONAL_INFO_REQUEST, payload });

  export const getBankDetails = (payload) => ({ type: GET_BANK_INFO_REQUEST, payload });

  export const postRandomQuestionAnswer = (payload) => ({ type: POST_RANDOM_QUESTION_ANSWER_REQUEST, payload });
 export const setReAttemptData  = (payload) => ({ type: POST_RE_ATTEMPT_RANDOM_QUESTION_ANSWER_REQUEST, payload });
