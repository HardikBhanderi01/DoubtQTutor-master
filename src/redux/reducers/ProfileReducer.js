export const SET_PERSONAL_DETAILS_REQUEST = "SET_PERSONAL_DETAILS_REQUEST";
export const SET_PERSONAL_DETAILS_SUCCESS = "SET_PERSONAL_DETAILS_SUCCESS";
export const SET_PERSONAL_DETAILS_ERROR = "SET_PERSONAL_DETAILS_ERROR";

export const GET_OTP_REQUEST = "GET_OTP_REQUEST";
export const GET_OTP_SUCCESS = "GET_OTP_SUCCESS";
export const GET_OTP_ERROR = "GET_OTP_ERROR";

export const SET_PROFESSIONAL_DETAILS_REQUEST =
  "SET_PROFESSIONAL_DETAILS_REQUEST";
export const SET_PROFESSIONAL_DETAILS_SUCCESS =
  "SET_PROFESSIONAL_DETAILS_SUCCESS";
export const SET_PROFESSIONAL_DETAILS_ERROR = "SET_PROFESSIONAL_DETAILS_ERROR";

export const GET_SUBJECT_LIST_REQUEST = "GET_SUBJECT_LIST_REQUEST";
export const GET_SUBJECT_LIST_SUCCESS = "GET_SUBJECT_LIST_SUCCESS";
export const GET_SUBJECT_LIST_ERROR = "GET_SUBJECT_LIST_ERROR";

export const SET_SUBJECT_REQUEST = "SET_SUBJECT_REQUEST";
export const SET_SUBJECT_SUCCESS = "SET_SUBJECT_SUCCESS";
export const SET_SUBJECT_ERROR = "SET_SUBJECT_ERROR";

export const SET_BANK_DETAIL_REQUEST = "SET_BANK_DETAIL_REQUEST";
export const SET_BANK_DETAIL_SUCCESS = "SET_BANK_DETAIL_SUCCESS";
export const SET_BANK_DETAIL_ERROR = "SET_BANK_DETAIL_ERROR";

export const GET_WALLET_REQUEST = "GET_WALLET_REQUEST";
export const GET_WALLET_SUCCESS = "GET_WALLET_SUCCESS";
export const GET_WALLET_ERROR = "GET_WALLET_ERROR";

export const CONTACT_TUTOR_REQUEST = "CONTACT_TUTOR_REQUEST";
export const CONTACT_TUTOR_SUCCESS = "CONTACT_TUTOR_SUCCESS";
export const CONTACT_TUTOR_ERROR = "CONTACT_TUTOR_ERROR";

export const GET_RANDOM_QUESTION_REQUEST = "GET_RANDOM_QUESTION_REQUEST";
export const GET_RANDOM_QUESTION_SUCCESS = "GET_RANDOM_QUESTION_SUCCESS";
export const GET_RANDOM_QUESTION_ERROR = "GET_RANDOM_QUESTION_ERROR";

export const GET_PERSONAL_INFO_REQUEST = "GET_PERSONAL_INFO_REQUEST";
export const GET_PERSONAL_INFO_SUCCESS = "GET_PERSONAL_INFO_SUCCESS";
export const GET_PERSONAL_INFO_ERROR = "GET_PERSONAL_INFO_ERROR";

export const GET_PROFESSIONAL_INFO_REQUEST = "GET_PROFESSIONAL_INFO_REQUEST";
export const GET_PROFESSIONAL_INFO_SUCCESS = "GET_PROFESSIONAL_INFO_SUCCESS";
export const GET_PROFESSIONAL_INFO_ERROR = "GET_PROFESSIONAL_INFO_ERROR";

export const GET_BANK_INFO_REQUEST = "GET_BANK_INFO_REQUEST";
export const GET_BANK_INFO_SUCCESS = "GET_BANK_INFO_SUCCESS";
export const GET_BANK_INFO_ERROR = "GET_BANK_INFO_ERROR";

export const POST_RANDOM_QUESTION_ANSWER_REQUEST = "POST_RANDOM_QUESTION_ANSWER_REQUEST";
export const POST_RANDOM_QUESTION_ANSWER_SUCCESS = "POST_RANDOM_QUESTION_ANSWER_SUCCESS";
export const POST_RANDOM_QUESTION_ANSWER_ERROR = "POST_RANDOM_QUESTION_ANSWER_ERROR";
export const POST_RANDOM_QUESTION_ANSWER_RESET = "POST_RANDOM_QUESTION_ANSWER_RESET";
export const POST_RE_ATTEMPT_RANDOM_QUESTION_ANSWER_REQUEST = "POST_RE_ATTEMPT_RANDOM_QUESTION_ANSWER_REQUEST";
export const POST_RE_ATTEMPT_RANDOM_QUESTION_ANSWER_SUCCESS = "POST_RE_ATTEMPT_RANDOM_QUESTION_ANSWER_SUCCESS";
export const POST_RE_ATTEMPT_RANDOM_QUESTION_ANSWER_ERROR = "POST_RE_ATTEMPT_RANDOM_QUESTION_ANSWER_ERROR";


export const RESET_BLOCK_PROFILE = "RESET_BLOCK_PROFILE";

export const RESET_FLAGS_PROFILE = "RESET_FLAGS_PROFILE";

const block = {
  loading: false,
  error: "",
  success: false,
};

const initialState = {
  personalDetails: { ...block },
  getOtp: { ...block },
  professionalDetails: { ...block },
  subjectDetails: { ...block },
  subjectListDetails: { ...block },
  bankDetail: { ...block },
  walletDetail: { data : {}, ...block },
  contactTutor: { ...block },
  getRandomQuestion: { ...block },
  postRandomQuestionAnswer: { ...block },
  personalInfo: { ...block },
  professionalInfo: { ...block },
  bankInfo: { ...block },
};

export const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BANK_INFO_REQUEST:
      return {
        ...state,
        bankInfo: { ...state.bankInfo, loading: true },
      };
    case GET_BANK_INFO_SUCCESS:
      return {
        ...state,
        bankInfo: {
          ...state.bankInfo,
          data: action.response,
          loading: false,
          success: true,
          error: "",
        },
      };
    case GET_BANK_INFO_ERROR:
      return {
        ...state,
        bankInfo: {
          ...state.bankInfo,
          loading: false,
          error: action.error,
        },
      };
    case GET_PROFESSIONAL_INFO_REQUEST:
      return {
        ...state,
        professionalInfo: { ...state.professionalInfo, loading: true },
      };
    case GET_PROFESSIONAL_INFO_SUCCESS:
      return {
        ...state,
        professionalInfo: {
          ...state.professionalInfo,
          data: action.response,
          loading: false,
          success: true,
          error: "",
        },
      };
    case GET_PROFESSIONAL_INFO_ERROR:
      return {
        ...state,
        professionalInfo: {
          ...state.professionalInfo,
          loading: false,
          error: action.error,
        },
      };
    case SET_PERSONAL_DETAILS_REQUEST:
      return {
        ...state,
        personalDetails: { ...state.personalDetails, loading: true },
      };
    case SET_PERSONAL_DETAILS_SUCCESS:
      return {
        ...state,
        personalDetails: {
          ...state.personalDetails,
          loading: false,
          success: true,
          error: "",
        },
      };
    case SET_PERSONAL_DETAILS_ERROR:
      return {
        ...state,
        personalDetails: {
          ...state.personalDetails,
          loading: false,
          error: action.error,
        },
      };
    case GET_PERSONAL_INFO_REQUEST:
      return {
        ...state,
        personalInfo: { ...state.personalInfo, loading: true },
      };
    case GET_PERSONAL_INFO_SUCCESS:
      return {
        ...state,
        personalInfo: {
          ...state.personalInfo,
          data: action.response,
          loading: false,
          success: true,
          error: "",
        },
      };
    case GET_PERSONAL_INFO_ERROR:
      return {
        ...state,
        personalInfo: {
          ...state.personalInfo,
          loading: false,
          error: action.error,
        },
      };


    case GET_OTP_REQUEST:
      return {
        ...state,
        getOtp: { ...state.getOtp, loading: true },
      };
    case GET_OTP_SUCCESS:
      return {
        ...state,
        getOtp: {
          ...state.getOtp,
          loading: false,
          success: true,
          error: "",
        },
      };
    case GET_OTP_ERROR:
      return {
        ...state,
        getOtp: {
          ...state.getOtp,
          loading: false,
          error: action.error,
        },
      };

    case SET_PROFESSIONAL_DETAILS_REQUEST:
      return {
        ...state,
        professionalDetails: { ...state.professionalDetails, loading: true },
      };
    case SET_PROFESSIONAL_DETAILS_SUCCESS:
      return {
        ...state,
        professionalDetails: {
          ...state.professionalDetails,
          loading: false,
          success: true,
          error: "",
        },
      };
    case SET_PROFESSIONAL_DETAILS_ERROR:
      return {
        ...state,
        professionalDetails: {
          ...state.professionalDetails,
          loading: false,
          error: action.error,
        },
      };

      case SET_SUBJECT_REQUEST:
        return {
          ...state,
          subjectDetails: { ...state.subjectDetails, loading: true },
        };
      case SET_SUBJECT_SUCCESS:
        return {
          ...state,
          subjectDetails: {
            ...state.subjectDetails,
            loading: false,
            success: true,
            error: "",
          },
        };
      case SET_SUBJECT_ERROR:
        return {
          ...state,
          subjectDetails: {
            ...state.subjectDetails,
            loading: false,
            error: action.error,
          },
        };


        case GET_SUBJECT_LIST_REQUEST:
        return {
          ...state,
          subjectListDetails: { ...state.subjectListDetails, loading: true },
        };
      case GET_SUBJECT_LIST_SUCCESS:
        return {
          ...state,
          subjectListDetails: {
            ...state.subjectListDetails,
            data: action.response,
            loading: false,
            success: true,
            error: "",
          },
        };
      case GET_SUBJECT_LIST_ERROR:
        return {
          ...state,
          subjectListDetails: {
            ...state.subjectListDetails,
            loading: false,
            error: action.error,
          },
        };

        case SET_BANK_DETAIL_REQUEST:
        return {
          ...state,
          bankDetail: { ...state.bankDetail, loading: true },
        };
      case SET_BANK_DETAIL_SUCCESS:
        return {
          ...state,
          bankDetail: {
            ...state.bankDetail,
            loading: false,
            success: true,
            error: "",
          },
        };
      case SET_BANK_DETAIL_ERROR:
        return {
          ...state,
          bankDetail: {
            ...state.bankDetail,
            loading: false,
            error: action.error,
          },
        };

        case GET_WALLET_REQUEST:
          return {
            ...state,
            walletDetail: { ...state.walletDetail, loading: true },
          };
        case GET_WALLET_SUCCESS:
          return {
            ...state,
            walletDetail: {
              ...state.walletDetail,
              data : action.response.info,
              loading: false,
              success: true,
              error: "",
            },
          };
        case GET_WALLET_ERROR:
          return {
            ...state,
            walletDetail: {
              ...state.walletDetail,
              loading: false,
              error: action.error,
            },
          };

          case CONTACT_TUTOR_REQUEST:
          return {
            ...state,
            contactTutor: { ...state.contactTutor, loading: true },
          };
        case CONTACT_TUTOR_SUCCESS:
          return {
            ...state,
            contactTutor: {
              ...state.contactTutor,
              loading: false,
              success: true,
              error: "",
            },
          };
        case CONTACT_TUTOR_ERROR:
          return {
            ...state,
            contactTutor: {
              ...state.contactTutor,
              loading: false,
              error: action.error,
            },
          };


          case GET_RANDOM_QUESTION_REQUEST:
            return {
              ...state,
              getRandomQuestion: { ...state.getRandomQuestion, loading: true },
            };
          case GET_RANDOM_QUESTION_SUCCESS:
            return {
              ...state,
              getRandomQuestion: {
                ...state.getRandomQuestion,
                data : action?.response?.questions,
                loading: false,
                success: true,
                error: "",
              },
            };
          case GET_RANDOM_QUESTION_ERROR:
            return {
              ...state,
              getRandomQuestion: {
                ...state.getRandomQuestion,
                loading: false,
                error: action.error,
              },
            };


            case POST_RANDOM_QUESTION_ANSWER_REQUEST:
            return {
              ...state,
              postRandomQuestionAnswer: { ...state.postRandomQuestionAnswer, loading: true },
            };

          case POST_RANDOM_QUESTION_ANSWER_SUCCESS:
            return {
              ...state,
              postRandomQuestionAnswer: {
                ...state.postRandomQuestionAnswer,
                data : action?.response,
                loading: false,
                success: true,
                error: "",
              },
            };

            case POST_RANDOM_QUESTION_ANSWER_RESET:
              return {
                ...state,
                postRandomQuestionAnswer: { ...state.postRandomQuestionAnswer, loading: false,success: false, },
              };
          case POST_RANDOM_QUESTION_ANSWER_ERROR:
            return {
              ...state,
              postRandomQuestionAnswer: {
                ...state.postRandomQuestionAnswer,
                loading: false,
                error: action.error,
              },
            };

    //reset block with flag and data
    case RESET_BLOCK_PROFILE:
      return {
        ...state,
        [action.payload.blockType]: {
          ...state[action.payload.blockType],
          ...initialState[action.payload.blockType],
        },
      };

    //reset only flags(block)
    case RESET_FLAGS_PROFILE:
      return {
        ...state,
        [action.payload.blockType]: {
          ...state[action.payload.blockType],
          ...block,
        },
      };

    default:
      return state;
  }
};
