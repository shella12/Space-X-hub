import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './Rockets/Rockets';
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
