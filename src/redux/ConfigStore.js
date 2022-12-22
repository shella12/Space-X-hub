import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketReducer from './Rockets/RocketsSlice';
import dragons from './Dragon/Dragon';
import userSliceMissions from './Missions/Missions';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    missionReducer: userSliceMissions,
    dragons,
  },
});

export default store;
