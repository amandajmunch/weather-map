import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
  // pieces of weather data in an array
  // setup switch statement to handle only the fetch weather action type
  switch (action.type){
  case FETCH_WEATHER:
  // putting in array because multiple cities coming back. only this data property has what we care about
// make a new array, put the data inside, then insert into outside array "state"
    return [ action.payload.data, ...state ];
}
  return state;
}
