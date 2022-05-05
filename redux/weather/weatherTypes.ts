export type WeatherObject = {
  main: string;
  temp: number;
  name: string;
};

export type WeatherState = {
  city: string | null;
  weather: WeatherObject;
  isLoaded: boolean;
};
