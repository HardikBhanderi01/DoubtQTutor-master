export const GET_QUESTION_REQUEST = "GET_QUESTION_REQUEST";
export const GET_QUESTION_SUCCESS = "GET_QUESTION_SUCCESS";
export const GET_QUESTION_ERROR = "GET_QUESTION_ERROR";

export const GET_UNANSWERED_QUESTION_REQUEST =
  "GET_UNANSWERED_QUESTION_REQUEST";
export const GET_UNANSWERED_QUESTION_SUCCESS =
  "GET_UNANSWERED_QUESTION_SUCCESS";
export const GET_UNANSWERED_QUESTION_ERROR = "GET_UNANSWERED_QUESTION_ERROR";

export const GET_STATES_LIST_REQUEST = "GET_STATES_LIST_REQUEST";
export const GET_STATES_LIST_SUCCESS = "GET_STATES_LIST_SUCCESS";
export const GET_STATES_LIST_ERROR = "GET_STATES_LIST_ERROR";

export const GET_ASSIGNED_QUESTION_REQUEST = "GET_ASSIGNED_QUESTION_REQUEST";
export const GET_ASSIGNED_QUESTION_SUCCESS = "GET_ASSIGNED_QUESTION_SUCCESS";
export const GET_ASSIGNED_QUESTION_ERROR = "GET_ASSIGNED_QUESTION_ERROR";

export const POST_UNSOLVED_QUESTION_ANSWER_REQUEST =
  "POST_UNSOLVED_QUESTION_ANSWER_REQUEST";
export const POST_UNSOLVED_QUESTION_ANSWER_SUCCESS =
  "POST_UNSOLVED_QUESTION_ANSWER_SUCCESS";
export const POST_UNSOLVED_QUESTION_ANSWER_ERROR =
  "POST_UNSOLVED_QUESTION_ANSWER_ERROR";

export const POST_ANSWER_STICK_REQUEST = "POST_ANSWER_STICK_REQUEST";
export const POST_ANSWER_STICK_SUCCESS = "POST_ANSWER_STICK_SUCCESS";
export const POST_ANSWER_STICK_ERROR = "POST_ANSWER_STICK_ERROR";

export const GET_REFERRAL_DASHBOARD_REQUEST = "GET_REFERRAL_DASHBOARD_REQUEST";
export const GET_REFERRAL_DASHBOARD_SUCCESS = "GET_REFERRAL_DASHBOARD_SUCCESS";
export const GET_REFERRAL_DASHBOARD_ERROR = "GET_REFERRAL_DASHBOARD_ERROR";

export const GET_REFERRAL_DASHBOARD_CASHOUT_REQUEST =
  "GET_REFERRAL_DASHBOARD_CASHOUT_REQUEST";
export const GET_REFERRAL_DASHBOARD_CASHOUT_SUCCESS =
  "GET_REFERRAL_DASHBOARD_CASHOUT_SUCCESS";
export const GET_REFERRAL_DASHBOARD_CASHOUT_ERROR =
  "GET_REFERRAL_DASHBOARD_CASHOUT_ERROR";

export const GET_POST_STREAK_CASHOUT_REQUEST =
  "GET_POST_STREAK_CASHOUT_REQUEST";
export const GET_POST_STREAK_CASHOUT_SUCCESS =
  "GET_POST_STREAK_CASHOUT_SUCCESS";
export const GET_POST_STREAK_CASHOUT_ERROR = "GET_POST_STREAK_CASHOUT_ERROR";

export const POST_EXPERT_QUESTION_ANSWER_REQUEST =
  "POST_EXPERT_QUESTION_ANSWER_REQUEST";
export const POST_EXPERT_QUESTION_ANSWER_SUCCESS =
  "POST_EXPERT_QUESTION_ANSWER_SUCCESS";
export const POST_EXPERT_QUESTION_ANSWER_ERROR =
  "POST_EXPERT_QUESTION_ANSWER_ERROR";

export const GET_QUESTION_UNSOLVED_REQUEST = "GET_QUESTION_UNSOLVED_REQUEST";
export const GET_QUESTION_ASSIGNED_TO_SUCCESS =
  "GET_QUESTION_ASSIGNED_TO_SUCCESS";
export const GET_QUESTION_ASSIGNED_TO_ERROR = "GET_QUESTION_ASSIGNED_TO_ERROR";

export const GET_ANSWER_STREAK_REQUEST = "GET_ANSWER_STREAK_REQUEST";
export const GET_ANSWER_STREAK_SUCCESS = "GET_ANSWER_STREAK_SUCCESS";
export const GET_ANSWER_STREAK_ERROR = "GET_ANSWER_STREAK_ERROR";

export const GET_EXPERT_QUESTION_REQUEST = "GET_EXPERT_QUESTION_REQUEST";
export const GET_EXPERT_QUESTION_SUCCESS = "GET_EXPERT_QUESTION_SUCCESS";
export const GET_EXPERT_QUESTION_UPDATE_SUCCESS = "GET_EXPERT_QUESTION_UPDATE_SUCCESS";
export const GET_EXPERT_QUESTION_ERROR = "GET_EXPERT_QUESTION_ERROR";

export const CHANGE_QUESTION_STATUS_SKIP_REQUEST =
  "CHANGE_QUESTION_STATUS_SKIP_REQUEST";
export const CHANGE_QUESTION_STATUS_SKIP_SUCCESS =
  "CHANGE_QUESTION_STATUS_SKIP_SUCCESS";
export const CHANGE_QUESTION_STATUS_SKIP_ERROR =
  "CHANGE_QUESTION_STATUS_SKIP_ERROR";

export const START_ANSWERING_REQUEST = "START_ANSWERING_REQUEST";
export const START_ANSWERING_SUCCESS = "START_ANSWERING_SUCCESS";
export const START_ANSWERING_ERROR = "START_ANSWERING_ERROR";

export const GET_QUESTION_TYPE_REQUEST = "GET_QUESTION_TYPE_REQUEST";
export const GET_QUESTION_TYPE_SUCCESS = "GET_QUESTION_TYPE_SUCCESS";
export const GET_QUESTION_TYPE_ERROR = "GET_QUESTION_TYPE_ERROR";

export const RESET_BLOCK_QUESTION = "RESET_BLOCK_QUESTION";

export const RESET_FLAGS_QUESTION = "RESET_FLAGS_QUESTION";

const block = {
  loading: false,
  error: "",
  success: false,
};

const initialState = {
  question: { ...block },
  unansweredQuestion: { data: [], ...block },
  statesList: { data: {}, ...block },
  assignedQuestion: { data: [], ...block },
  postUnsolvedQuestionAns: { ...block },
  answerStick: { ...block },
  referalDashboard: { data: [], ...block },
  referalDashboardCashout: { data: [], ...block },
  postStreakCashout: { data: [], ...block },
  postExpertQuestionAns: { ...block },
  questionUnsolved: { data: {}, ...block },
  answerStreak: { ...block },
  expertQuestion: { data: {}, ...block },
  questionStatusSkip: { ...block },
  startAnswering: { ...block, data : null },
  questionType: { ...block, data : null },
};

export const QuestionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUESTION_REQUEST:
      return {
        ...state,
        question: { ...state.question, loading: true },
      };
    case GET_QUESTION_SUCCESS:
      return {
        ...state,
        question: {
          ...state.question,
          data: action?.response?.info,
          loading: false,
          success: true,
          error: "",
        },
      };
    case GET_QUESTION_ERROR:
      return {
        ...state,
        question: {
          ...state.question,
          loading: false,
          error: action.error,
        },
      };

    case GET_UNANSWERED_QUESTION_REQUEST:
      return {
        ...state,
        unansweredQuestion: { ...state.unansweredQuestion, loading: true },
      };
    case GET_UNANSWERED_QUESTION_SUCCESS:
      return {
        ...state,
        unansweredQuestion: {
          ...state.unansweredQuestion,
          data: action.response.info,
          loading: false,
          success: true,
          error: "",
        },
      };
    case GET_UNANSWERED_QUESTION_ERROR:
      return {
        ...state,
        unansweredQuestion: {
          ...state.unansweredQuestion,
          loading: false,
          error: action.error,
        },
      };

    case GET_STATES_LIST_REQUEST:
      return {
        ...state,
        statesList: { ...state.statesList, loading: true },
      };
    case GET_STATES_LIST_SUCCESS:
      return {
        ...state,
        statesList: {
          ...state.statesList,
          data: action.response,
          loading: false,
          success: true,
          error: "",
        },
      };
    case GET_STATES_LIST_ERROR:
      return {
        ...state,
        statesList: {
          ...state.statesList,
          loading: false,
          error: action.error,
        },
      };

    case GET_ASSIGNED_QUESTION_REQUEST:
      return {
        ...state,
        assignedQuestion: { ...state.assignedQuestion, loading: true },
      };
    case GET_ASSIGNED_QUESTION_SUCCESS:
      return {
        ...state,
        assignedQuestion: {
          ...state.assignedQuestion,
          data: action.response.info,
          loading: false,
          success: true,
          error: "",
        },
      };
    case GET_ASSIGNED_QUESTION_ERROR:
      return {
        ...state,
        assignedQuestion: {
          ...state.assignedQuestion,
          loading: false,
          error: action.error,
        },
      };

    case POST_UNSOLVED_QUESTION_ANSWER_REQUEST:
      return {
        ...state,
        postUnsolvedQuestionAns: {
          ...state.postUnsolvedQuestionAns,
          loading: true,
        },
      };
    case POST_UNSOLVED_QUESTION_ANSWER_SUCCESS:
      return {
        ...state,
        postUnsolvedQuestionAns: {
          ...state.postUnsolvedQuestionAns,
          loading: false,
          success: true,
          error: "",
        },
      };
    case POST_UNSOLVED_QUESTION_ANSWER_ERROR:
      return {
        ...state,
        postUnsolvedQuestionAns: {
          ...state.postUnsolvedQuestionAns,
          loading: false,
          error: action.error,
        },
      };

    case POST_ANSWER_STICK_REQUEST:
      return {
        ...state,
        answerStick: { ...state.answerStick, loading: true },
      };
    case POST_ANSWER_STICK_SUCCESS:
      return {
        ...state,
        answerStick: {
          ...state.answerStick,
          loading: false,
          success: true,
          error: "",
        },
      };
    case POST_ANSWER_STICK_ERROR:
      return {
        ...state,
        answerStick: {
          ...state.answerStick,
          loading: false,
          error: action.error,
        },
      };

    case GET_REFERRAL_DASHBOARD_REQUEST:
      return {
        ...state,
        referalDashboard: { ...state.referalDashboard, loading: true },
      };
    case GET_REFERRAL_DASHBOARD_SUCCESS:
      return {
        ...state,
        referalDashboard: {
          ...state.referalDashboard,
          data: action?.response?.info,
          loading: false,
          success: true,
          error: "",
        },
      };
    case GET_REFERRAL_DASHBOARD_ERROR:
      return {
        ...state,
        referalDashboard: {
          ...state.referalDashboard,
          loading: false,
          error: action.error,
        },
      };

    case GET_REFERRAL_DASHBOARD_CASHOUT_REQUEST:
      return {
        ...state,
        referalDashboardCashout: {
          ...state.referalDashboardCashout,
          loading: true,
        },
      };
    case GET_REFERRAL_DASHBOARD_CASHOUT_SUCCESS:
      return {
        ...state,
        referalDashboardCashout: {
          ...state.referalDashboardCashout,
          data: action?.response,
          loading: false,
          success: true,
          error: "",
        },
      };
    case GET_REFERRAL_DASHBOARD_CASHOUT_ERROR:
      return {
        ...state,
        referalDashboardCashout: {
          ...state.referalDashboardCashout,
          loading: false,
          error: action.error,
        },
      };

    case GET_POST_STREAK_CASHOUT_REQUEST:
      return {
        ...state,
        postStreakCashout: { ...state.postStreakCashout, loading: true },
      };
    case GET_POST_STREAK_CASHOUT_SUCCESS:
      return {
        ...state,
        postStreakCashout: {
          ...state.postStreakCashout,
          data: action?.response,
          loading: false,
          success: true,
          error: "",
        },
      };
    case GET_POST_STREAK_CASHOUT_ERROR:
      return {
        ...state,
        postStreakCashout: {
          ...state.postStreakCashout,
          loading: false,
          error: action.error,
        },
      };

    case POST_EXPERT_QUESTION_ANSWER_REQUEST:
      return {
        ...state,
        postExpertQuestionAns: {
          ...state.postExpertQuestionAns,
          loading: true,
        },
      };
    case POST_EXPERT_QUESTION_ANSWER_SUCCESS:
      return {
        ...state,
        postExpertQuestionAns: {
          ...state.postExpertQuestionAns,
          loading: false,
          success: true,
          error: "",
        },
      };
    case POST_EXPERT_QUESTION_ANSWER_ERROR:
      return {
        ...state,
        postExpertQuestionAns: {
          ...state.postExpertQuestionAns,
          loading: false,
          error: action.error,
        },
      };

    case GET_QUESTION_UNSOLVED_REQUEST:
      return {
        ...state,
        questionUnsolved: { ...state.questionUnsolved, loading: true },
      };
    case GET_QUESTION_ASSIGNED_TO_SUCCESS:
      return {
        ...state,
        questionUnsolved: {
          ...state.questionUnsolved,
          data: action.response,
          loading: false,
          success: true,
          error: "",
        },
      };
    case GET_QUESTION_ASSIGNED_TO_ERROR:
      return {
        ...state,
        questionUnsolved: {
          ...state.questionUnsolved,
          loading: false,
          error: action.error,
        },
      };

    case GET_ANSWER_STREAK_REQUEST:
      return {
        ...state,
        answerStreak: { ...state.answerStreak, loading: true },
      };
    case GET_ANSWER_STREAK_SUCCESS:
      return {
        ...state,
        answerStreak: {
          ...state.answerStreak,
          data: action?.response?.answerstreak,
          loading: false,
          success: true,
          error: "",
        },
      };
    case GET_ANSWER_STREAK_ERROR:
      return {
        ...state,
        answerStreak: {
          ...state.answerStreak,
          loading: false,
          error: action.error,
        },
      };

    case GET_EXPERT_QUESTION_REQUEST:
      return {
        ...state,
        expertQuestion: { ...state.expertQuestion, loading: true },
      };
    case GET_EXPERT_QUESTION_SUCCESS:
      return {
        ...state,
        expertQuestion: {
          ...state.expertQuestion,
          data: action?.response,
          loading: false,
          success: true,
          error: "",
        },
      };
      case GET_EXPERT_QUESTION_UPDATE_SUCCESS:
      return {
        ...state,
        expertQuestion: {
          ...state.expertQuestion,
          data: action?.payload?.data,
          loading: false,
          success: true,
          error: "",
        },
      };
    case GET_EXPERT_QUESTION_ERROR:
      return {
        ...state,
        expertQuestion: {
          ...state.expertQuestion,
          loading: false,
          error: action.error,
        },
      };

    case CHANGE_QUESTION_STATUS_SKIP_REQUEST:
      return {
        ...state,
        questionStatusSkip: { ...state.questionStatusSkip, loading: true },
      };
    case CHANGE_QUESTION_STATUS_SKIP_SUCCESS:
      return {
        ...state,
        questionStatusSkip: {
          ...state.questionStatusSkip,
          data: action?.response?.questionStatusSkip,
          loading: false,
          success: true,
          error: "",
        },
      };
    case CHANGE_QUESTION_STATUS_SKIP_ERROR:
      return {
        ...state,
        questionStatusSkip: {
          ...state.questionStatusSkip,
          loading: false,
          error: action.error,
        },
      };

    case START_ANSWERING_REQUEST:
      return {
        ...state,
        startAnswering: { ...state.startAnswering, loading: true },
      };
    case START_ANSWERING_SUCCESS:
      return {
        ...state,
        startAnswering: {
          ...state.startAnswering,
          data: action?.response,
          loading: false,
          success: true,
          error: "",
        },
      };
    case START_ANSWERING_ERROR:
      return {
        ...state,
        startAnswering: {
          ...state.startAnswering,
          loading: false,
          error: action.error,
        },
      };

    case GET_QUESTION_TYPE_REQUEST:
      return {
        ...state,
        questionType: { ...state.questionType, loading: true },
      };
    case GET_QUESTION_TYPE_SUCCESS:
      return {
        ...state,
        questionType: {
          ...state.questionType,
          data: action?.response,
          loading: false,
          success: true,
          error: "",
        },
      };
    case GET_QUESTION_TYPE_ERROR:
      return {
        ...state,
        questionType: {
          ...state.questionType,
          loading: false,
          error: action.error,
        },
      };

    //reset block with flag and data
    case RESET_BLOCK_QUESTION:
      return {
        ...state,
        [action.payload.blockType]: {
          ...state[action.payload.blockType],
          ...initialState[action.payload.blockType],
        },
      };

    //reset only flags(block)
    case RESET_FLAGS_QUESTION:
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
