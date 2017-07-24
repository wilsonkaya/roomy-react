import {FETCH_RENTALS, FETCH_RENTAL} from '../actions/index'
import _ from 'lodash'

export default function(state = {}, action){
  switch(action.type) {
    case FETCH_RENTALS:
      return _.mapKeys(action.payload.data, 'id')
    case FETCH_RENTAL:
      return {...state, [action.payload.data.rental.id]: action.payload.data.rental }
    default:
      return state
  }
}
