import axios from 'axios'; 
const API_KEY = 'ba02317420a71b482c575129ae75f584'; 
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
// As a convention, make the action type a variable not a string
export const FETCH_WEATHER = 'FETCH_WEATHER'; 

//action creator
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`; 
  const request = axios.get(url); 
  return {
    type: FETCH_WEATHER, 
    payload: request
  }
}