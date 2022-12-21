import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getDragons = (payload) => ({ type: 'GET', payload });
const url = 'https://api.spacexdata.com/v3/dragons';

const initialState = {
  dragons: [],
};

export const fetchDragons = createAsyncThunk(
  'dragon/fetchDragons',
  async (_, { dispatch }) => {
    const res = await axios.get(url);
    const dragons = res.data.map((dragon) => ({
      id: dragon.id,
      name: dragon.name,
      type: dragon.type,
      img: dragon.flickr_images[2],
    }));
    dispatch(getDragons(dragons));
  },
);

const dragonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET':
      return action.payload;
    default:
      return state;
  }
};

export default dragonsReducer;
