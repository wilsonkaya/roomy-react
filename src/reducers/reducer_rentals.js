import {FETCH_RENTALS} from '../actions/index'
import _ from 'lodash'

export default function(state = {}, action){
  switch(action.type) {
    case FETCH_RENTALS:
      console.log(action.payload.data)
      return _.mapKeys(action.payload.data, 'id')
    default:
      return state
  }
}
