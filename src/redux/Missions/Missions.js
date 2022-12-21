import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchMissions from "../../API/api-missions";

state = {
    missions: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  };
const FETCH_DATA = 'REACT-GROUP-PROJECT/redux/Missions/FETCH-DATA';
const fetchData = createAsyncThunk(FETCH_DATA,async() => {
    const response =await fetchMissions();
    return response;
});

const userSlice = createSlice({
    name:'Missions',
    state,
    reducers:{},
    extraReducers: (builder) {
        builder.addCase(fetchMissions,(state)=> {
            return {
                ...state,
                status: 'pending',
            }
        })
    }
});

