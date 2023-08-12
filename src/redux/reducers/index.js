import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

// we will connect our reducers here
import { AuthReducer } from "./AuthReducer";
import { ProfileReducer } from "./ProfileReducer";
import { QuestionReducer } from "./QuestionReducer";

const appReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth: AuthReducer,
    profile: ProfileReducer,
    question: QuestionReducer,
  });

const createRootReducer = (history) => (state, action) => {
  if (action.type === "LOGOUT_REQUEST") {
    state = undefined;
  }
  return appReducer(history)(state, action);
};

export default createRootReducer;
