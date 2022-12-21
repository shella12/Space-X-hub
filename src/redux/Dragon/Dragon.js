import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getDragon = (payload) => ({ type: 'GET', payload });
const url = 'https://api.spacexdata.com/v3/dragons';

export const fetchDragon = createAsyncThunk(
    'books/fetchBooks',
    async (_, { dispatch }) => {
      const res = await axios.get(url);
      const dragons = [];
      dispatch(getDragon(dragons));
    },
  );
  