// import a variable
import { FETCH_WEATHER } from '../actions/index'; 

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER: 
      // NEVER maniplate state in redux   
      return [ action.payload.data, ...state]; 
  }
  return state; 
}