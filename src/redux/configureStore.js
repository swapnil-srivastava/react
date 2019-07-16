import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

export default function configureStore(initialState) {
  const composeEnchancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    initialState,
    composeEnchancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
  );
}
