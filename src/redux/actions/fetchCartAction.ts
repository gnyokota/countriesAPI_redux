import { Dispatch } from 'redux'
import {
  ADD_TO_CART,
  TOGGLE_CART,
  FETCH_COUNTRIES_PENDING,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_ERROR,
  FETCH_FILTERED_COUNTRIES,
  HANDLE_SEARCH_CHANGE,
  ToggleCart,
  AddToCart,
  FetchPending,
  FetchSuccess,
  FetchError,
  FetchFiltered,
  HandleSearchChange,
  Countries,
} from '../types/fetchCart'

export const toogleCart = (booleanState: boolean): ToggleCart => {
  return {
    type: TOGGLE_CART,
    payload: booleanState,
  }
}

export const addToCart = (country: Countries): AddToCart => {
  return {
    type: ADD_TO_CART,
    payload: country,
  }
}

export const fetchPending = (): FetchPending => {
  return {
    type: FETCH_COUNTRIES_PENDING,
  }
}

export const fetchSuccess = (countries: Countries[]): FetchSuccess => {
  return {
    type: FETCH_COUNTRIES_SUCCESS,
    payload: countries,
  }
}

export const fetchError = (error: Error | null): FetchError => {
  return {
    type: FETCH_COUNTRIES_ERROR,
    payload: error,
  }
}

export const fetchFilteredData = (countries: Countries[]): FetchFiltered => {
  return {
    type: FETCH_FILTERED_COUNTRIES,
    payload: countries,
  }
}

export const handleSearchChange = (value: string): HandleSearchChange => {
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