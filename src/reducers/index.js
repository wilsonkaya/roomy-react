import { combineReducers } from 'redux';
import RentalsReducer from './reducer_rentals'

const rootReducer = combineReducers({
  rentals: RentalsReducer
});

export default rootReducer;
