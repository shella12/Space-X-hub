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
 reducers: {},
 extraReducers : (builder) => {
  builder.addCase(getRocketData.fulfilled, (state, action) => ({
    ...state,
    rockets: action.payload,
  }));
 }
});


export default rocketsSlice.reducer;