import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { async } from "q";

const rocketUrl = `https://api.spacexdata.com/v3/rockets`;

const initialState = {
 rockets: [],
 isLoading : true,
}

export const getRocketData = createAsyncThunk('rocket/getRocketData', async() => {
 const response = await fetch(rocketUrl);
 const data = await response.json();
 console.log(data);
 return data;
})

const rocketsSlice = createSlice({
 name: 'rocket',
 initialState,
 reducers: {},
 extraReducers : (builder) => {
  builder.addCase(getRocketData.fulfilled, (state, action) => ({
   rockets : action.payload,
  }
   
  ))
 }
});


export default rocketsSlice.reducer;