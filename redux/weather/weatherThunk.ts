import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {getWeatherUri} from '../../constants/api';

export const getWeatherByCityName = createAsyncThunk(
  'currentCityWeather',
  async (cityName: string, {rejectWithValue}) => {
    try {
      const {data} = await axios.get(getWeatherUri(cityName));
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
