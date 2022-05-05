import {createSelector} from 'reselect';
import {RootState} from '../store';

const weatherSelector = (store: RootState) => store.weather;

export const selectLocation = createSelector(weatherSelector, ({city}) => city);
export const selectWeather = createSelector(weatherSelector, ({weather}) => weather);
export const selectPending = createSelector(weatherSelector, ({isLoaded}) => isLoaded);
