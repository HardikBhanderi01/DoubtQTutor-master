import Cookies from 'js-cookie';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_ERROR = 'LOGOUT_ERROR';

export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_ERROR = 'FORGOT_PASSWORD_ERROR';

export const RESET_BLOCK_AUTH = 'RESET_BLOCK_AUTH';

export const RESET_FLAGS_AUTH = 'RESET_FLAGS_AUTH';

const block = {
  loading: false,
  error: '',
  success: false,
};

const initialState = {
  signup: { ...block },
  login: { ...block },
  logout: { ...block },
  forgotPassword: { ...block },
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return { ...state, signup: { ...state.signup, loading: true } };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signup: { ...state.signup, data: action.response, loading: false, success: true, error: '' },
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        signup: { ...state.signup, loading: false, error: action.error },
      };

    case LOGIN_REQUEST:
      return { ...state, login: { ...state.login, loading: true } };
    case LOGIN_SUCCESS:
      return {
        ...state,
        login: { ...state.login, data: action.response, loading: false, success: true, error: '' },
      };
    case LOGIN_ERROR:
      return {
        ...state,
        login: { ...state.login, loading: false, error: action.error },
      };

      case FORGOT_PASSWORD_REQUEST:
        return { ...state, forgotPassword: { ...state.forgotPassword, loading: true } };
      case FORGOT_PASSWORD_SUCCESS:
        return {
          ...state,
          forgotPassword: { ...state.forgotPassword, data: action.response, loading: false, success: true, error: '' },
        };
      case FORGOT_PASSWORD_ERROR:
        return {
          ...state,
          forgotPassword: { ...state.forgotPassword, loading: false, error: action.error },
        };

    case LOGOUT_REQUEST:
      Cookies.remove('token', { path: '/' });
      return {
        ...initialState,
        logout: {
          success: true,
        },
      };

    //reset block with flag and data
    case RESET_BLOCK_AUTH:
      return {
        ...state,
        [action.payload.blockType]: {
          ...state[action.payload.blockType],
          ...initialState[action.payload.blockType],
        },
      };

    //reset only flags(block)
    case RESET_FLAGS_AUTH:
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
