import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchMissionsApi from '../../API/api-missions';

const initialState = {
  missions: [],
};
const FETCH_DATA = 'REACT-GROUP-PROJECT/redux/Missions/FETCH-DATA';
export const fetchMissions = createAsyncThunk(FETCH_DATA, async () => {
  const response = await fetchMissionsApi();
  return response;
});
const userSliceMissions = createSlice({
  name: 'Missions',
  initialState,
  reducers: {
    reserveButton: (state, action) => {
      const keyP = action.payload;
      const newmissions = state.missions.map((mission) => {
        if (mission.mission_id === keyP) {
          return {
            ...mission,
            reserverd: !mission.reserverd,
          };
        }
        return mission;
      });
      return {
        ...state,
        missions: newmissions,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.pending, (state) => ({
      ...state,
    }))
      .addCase(fetchMissions.fulfilled, (state, action) => {
        const tempArray = Object.entries(action.payload).map((mission) => ({
          mission_id: mission[1].mission_id,
          mission_name: mission[1].mission_name,
          description: mission[1].description,
          reserverd: false,
        }));
        return {
          ...state,
          missions: tempArray,
        };
      })
      .addCase(fetchMissions.rejected, (state) => ({
        ...state,
      }));
  },
});
export const { reserveButton } = userSliceMissions.actions;
export default userSliceMissions.reducer;
