import {configureStore} from '@reduxjs/toolkit';
import weatherSlices from './weather/weatherSlices';

const {name: weatherName, reducer: weatherReducer} = weatherSlices;

export const store = configureStore({
  reducer: {
    [weatherName]: weatherReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
