import { configureStore } from '@reduxjs/toolkit';
import dragons from './Dragon/Dragon';
import userSliceMissions from './Missions/Missions';

const store = configureStore({
  reducer: {
    missionReducer: userSliceMissions,
    dragons,
  },
});

export default store;


