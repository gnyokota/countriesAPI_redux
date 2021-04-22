import { Dispatch } from 'redux'
import {
  ADD_TO_CART,
  TOGGLE_CART,
  REMOVE_FROM_CART,
  FETCH_COUNTRIES_PENDING,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_ERROR,
  FETCH_FILTERED_COUNTRIES,
  HANDLE_SEARCH_CHANGE,
  AllFetchCartActions,
  Countries,
} from '../types/fetchCart'

export const toogleCart = (booleanState: boolean): AllFetchCartActions => {
  return {
    type: TOGGLE_CART,
    payload: booleanState,
  }
}

export const addToCart = (country: Countries): AllFetchCartActions => {
  return {
    type: ADD_TO_CART,
    payload: country,
  }
}

export const removeFromCart = (alphaCode: string): AllFetchCartActions => {
  return {
    type: REMOVE_FROM_CART,
    payload: alphaCode,
  }
}

export const fetchPending = (): AllFetchCartActions => {
  return {
    type: FETCH_COUNTRIES_PENDING,
  }
}

export const fetchSuccess = (countries: Countries[]): AllFetchCartActions => {
  return {
    type: FETCH_COUNTRIES_SUCCESS,
    payload: countries,
  }
}

export const fetchError = (error: Error | null): AllFetchCartActions => {
  return {
    type: FETCH_COUNTRIES_ERROR,
    payload: error,
  }
}

export const fetchFilteredData = (
  countries: Countries[]
): AllFetchCartActions => {
  return {
    type: FETCH_FILTERED_COUNTRIES,
    payload: countries,
  }
}

export const handleSearchChange = (value: string): AllFetchCartActions => {
  return {
    type: HANDLE_SEARCH_CHANGE,
    payload: value,
  }
}

// Async action processed by redux-thunk middleware
export const fetchData = () => async (dispatch: Dispatch) => {
  try {
    dispatch(fetchPending())
    const response = await fetch('https://restcountries.eu/rest/v2/all')
    const data = await response.json()
    dispatch(fetchSuccess(data))
    dispatch(fetchFilteredData(data))
  } catch (error) {
    dispatch(fetchError(error.message))
  }
}
