import { ThemeState } from './themes'

export const TOGGLE_CART = 'TOOGLE_CART'
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const FETCH_COUNTRIES_PENDING = 'FETCH_COUNTRIES_PENDING'
export const FETCH_COUNTRIES_SUCCESS = 'FETCH_COUNTRIES_SUCESS'
export const FETCH_COUNTRIES_ERROR = 'FETCH_COUNTRIES_ERROR'
export const FETCH_FILTERED_COUNTRIES = 'FETCH_FILTERED_COUNTRIES'
export const HANDLE_SEARCH_CHANGE = 'HANDLE_SEARCH_CHANGE'

export type Languages = {
  iso639_1: string
  name: string
}

export interface Countries {
  name: string
  nativeName?: string
  alpha2Code?: string
  flag: string
  population: number
  languages: Languages[]
  region: string
  qty?: number
}

//cart actions
//toggle cart drawer
export type ToggleCart = {
  type: typeof TOGGLE_CART
  payload: boolean
}

//Add countries to cart
export type AddToCart = {
  type: typeof ADD_TO_CART
  payload: Countries
}

export type RemoveFromCart = {
  type: typeof REMOVE_FROM_CART
  payload: string
}

//Fetch actions
export type FetchPending = {
  type: typeof FETCH_COUNTRIES_PENDING
}

export type FetchSuccess = {
  type: typeof FETCH_COUNTRIES_SUCCESS
  payload: Countries[]
}

export type FetchError = {
  type: typeof FETCH_COUNTRIES_ERROR
  payload: Error | null
}

export type FetchFiltered = {
  type: typeof FETCH_FILTERED_COUNTRIES
  payload: Countries[]
}

export type HandleSearchChange = {
  type: typeof HANDLE_SEARCH_CHANGE
  payload: string
}

export type AllFetchCartActions =
  | ToggleCart
  | AddToCart
  | RemoveFromCart
  | FetchPending
  | FetchSuccess
  | FetchError
  | FetchFiltered
  | HandleSearchChange

export type FetchState = {
  pending: boolean
  countries: Countries[]
  error: Error | null
  searchField: string
  filteredCountries: Countries[]
  open: boolean
  inCart: Countries[]
}

//state of the entire app
export type AppState = {
  data: FetchState
  theme: ThemeState
}
