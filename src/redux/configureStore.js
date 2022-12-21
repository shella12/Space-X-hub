import { configureStore } from '@reduxjs/toolkit';
import dragons from './Dragon/Dragon';

export default configureStore({
  reducer: {
    dragons,
  },
});
