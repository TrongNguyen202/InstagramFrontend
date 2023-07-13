import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { AuthReducer } from "./Reducer";
import thunk from "redux-thunk";
import { UserReducer } from "./user/Reducer";
import { PostReducer } from "./post/Reducer";
import { CommentReducer } from "./comment/Reducer";

const rootReducers = combineReducers({
  auth: AuthReducer,
  user: UserReducer,
  post:PostReducer,
  comment:CommentReducer
});

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));