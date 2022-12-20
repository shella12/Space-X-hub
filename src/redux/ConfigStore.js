import { configureStore, combineReducers } from "@reduxjs/toolkit";
import rocketReducer from './Rockets/Rockets'

const reducer = combineReducers({
 rocket : rocketReducer,
})

const store = configureStore({ reducer });

export default store;

