import { configureStore } from '@reduxjs/toolkit';
import userSliceMissions from './Missions/Missions';

const store = configureStore({
  reducer: {
    userSliceMissions,
  },
});

export default store;
