export const API_KEY = '305f5ce66e201ed944ad23ca3949aa21';

export const getWeatherUri = (cityName: string): string =>
  `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;

export const getWeatherForecast = (lat: number, lon: number) =>
  `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current&appid=${API_KEY}`;

('api.openweathermap.org/data/2.5/weather?q=London&appid=305f5ce66e201ed944ad23ca3949aa21');
