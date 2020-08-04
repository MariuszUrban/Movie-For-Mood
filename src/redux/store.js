import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducers/reducers";
import thunk from 'redux-thunk'; 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 }) || compose;

const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)));

console.log("STORE", store.getState())

export default store;
