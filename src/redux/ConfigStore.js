import { configureStore, combineReducers } from "@reduxjs/toolkit";
import rocketReducer from './Rockets/RocketsSlice';

const reducer = combineReducers({
  rockets: rocketReducer,
});

const store = configureStore({ reducer });


export default store;

