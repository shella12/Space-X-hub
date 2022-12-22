import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketReducer from './Rockets/RocketsSlice';
import dragonsReducer from './Dragon/Dragon';
import userSliceMissions from './Missions/Missions';

const reducer = combineReducers({
  rockets: rocketReducer,
  missionReducer: userSliceMissions,
  dragons: dragonsReducer,
});

const store = configureStore({ reducer }, applyMiddleware(logger, thunk));

export default store;
