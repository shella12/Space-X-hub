import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketReducer from './Rockets/RocketsSlice';

const reducer = combineReducers({
  rockets: rocketReducer,
});

const store = configureStore({ reducer }, applyMiddleware(logger, thunk));

export default store;
