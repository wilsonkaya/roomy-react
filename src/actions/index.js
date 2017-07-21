export const FETCH_RENTALS = "fetch_rents"
export const FETCH_RENTAL = "fetch_rent"

import axios from 'axios'

const ROOT_URL = 'http://localhost:4741'

export function fetchRentals(values){
  const request = axios.get(`${ROOT_URL}/rentals?city=${values}`)
  return{
    type: FETCH_RENTALS,
    payload: request
  }
}

export function fetchRental(id){
  const request = axios.get(`${ROOT_URL}/rentals/${id}`)
  return{
    type: FETCH_RENTAL,
    payload: request
  }
}
