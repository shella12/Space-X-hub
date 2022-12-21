import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchMissionsApi from '../../API/api-missions';

const initialState = [];
const FETCH_DATA = 'REACT-GROUP-PROJECT/redux/Missions/FETCH-DATA';
export const fetchMissions = createAsyncThunk(FETCH_DATA, async () => {
  const response = await fetchMissionsApi();
  return response;
});
const userSliceMissions = createSlice({
  name: 'Missions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.pending, (state) => ({
      ...state,
    }))
      .addCase(fetchMissions.fulfilled, (state, action) => {
        console.log(action.payload);
        // const missions = action.payload.map((item) => ({
        //   mission_id: item.mission_id,
        //   mission_name: item.mission_name,
        //   description: item.description,
        // }));
        return state.concat(action.payload.map((item) => ({
          mission_id: item.mission_id,
          mission_name: item.mission_name,
          description: item.description,
        })));
      })
      .addCase(fetchMissions.rejected, (state) => ({
        ...state,
      }));
  },
});

export default userSliceMissions.reducer;
