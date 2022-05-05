import {createSlice} from '@reduxjs/toolkit';
import {getWeatherByCityName} from './weatherThunk';
import {WeatherState} from './weatherTypes';

const weatherObject = {
  temp: 0,
  description: null,
  main: '',
  name: '',
};

const initialState: WeatherState = {
  city: null,
  weather: weatherObject,
  isLoaded: false,
};

const weatherSlices = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.city = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getWeatherByCityName.pending, (state, action) => {
        state.isLoaded = false;
      })
      .addCase(getWeatherByCityName.rejected, state => {
        state.isLoaded = true;
      })
      .addCase(getWeatherByCityName.fulfilled, (state, action) => {
        state.isLoaded = true;
        const {payload} = action;
        state.weather = {
          temp: payload.main.temp,
          main: payload.weather[0].main,
          name: payload.name,
        };
      });
  },
});

export const {setLocation} = weatherSlices.actions;
export default weatherSlices;
