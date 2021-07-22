import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
//redux devtools extension for redux debugging
import { composeWithDevTools } from "redux-devtools-extension";
// importing different reducers from reducers folder
import { appointmentListReducer } from "./reducers";

const rootReducer = combineReducers({
  appointmentList: appointmentListReducer,
});

// storing cart item from localStorage in initial state
const initialState = {};
// thunk middleware for async redux-thunk operation
const middleware = [thunk];

// creating store by passing initialState, reducer and middleware
// composeWithDevTools for redux debugging for viewing state etc
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
export type RootState = ReturnType<typeof rootReducer>;
