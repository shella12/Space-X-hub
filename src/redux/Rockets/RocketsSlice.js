import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";


const rocketUrl = `https://api.spacexdata.com/v3/rockets`;

const initialState = {
 rockets: [],
}

export const getRocketData = createAsyncThunk('rocket/getRocketData', async() => {
 const response = await fetch(rocketUrl);
 const data = await response.json();
 return data;
})

const rocketsSlice = createSlice({
 name: 'rocket',
 initialState,
 reducers: {
  bookRockets : (state,action) => {
   const rocketId = action.payload;
   state.rockets = state.rockets.map((rocket) => {
    if(rocket.id === rocketId) {
      return {
        ...rocket,
        reserved: true,
      }
    }
    else{
      return rocket;
    }
   });
  },
  cancelBooking : (state, action) => {
    const rocketId = action.payload;
    state.rockets = state.rockets.map((rocket) => {
      if (rocket.id === rocketId) {
        return {
          ...rocket,
          reserved: false,
        };
      } else {
        return rocket;
      }
    });
    
  },
 },
 extraReducers : (builder) => {
  builder.addCase(getRocketData.fulfilled, (state, action) => ({
    ...state,
    rockets: action.payload,
  }));
 }
});

export const { bookRockets, cancelBooking } = rocketsSlice.actions;
export default rocketsSlice.reducer;