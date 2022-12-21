import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchDragon = (payload) => ({ type: 'GET', payload });
const url = 'https://api.spacexdata.com/v3/dragons';