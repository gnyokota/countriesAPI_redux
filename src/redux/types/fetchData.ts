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
}

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

export type FetchState = {
  pending: boolean
  countries: Countries[]
  error: Error | null
  searchField: string
  filteredCountries: Countries[]
}

export type HandleSearchChange = {
  type: typeof HANDLE_SEARCH_CHANGE
  payload: string
}
