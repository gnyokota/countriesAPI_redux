import {
  FetchState,
  FetchPending,
  FetchSuccess,
  FetchError,
  FetchFiltered,
  HandleSearchChange,
  HANDLE_SEARCH_CHANGE,
  FETCH_COUNTRIES_PENDING,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_ERROR,
  FETCH_FILTERED_COUNTRIES,
  Countries,
} from '../types/fetchData'

const initialState: FetchState = {
  pending: false,
  countries: [],
  error: null,
  searchField: '',
  filteredCountries: [],
}

const fetchReducer = (
  state = initialState,
  action:
    | FetchPending
    | FetchSuccess
    | FetchError
    | FetchFiltered
    | HandleSearchChange
): FetchState => {
  switch (action.type) {
  case FETCH_COUNTRIES_PENDING:
    return {
      ...state,
      pending: (state.pending = true),
    }
  case FETCH_COUNTRIES_SUCCESS:
    return {
      ...state,
      countries: action.payload,
      pending: false,
    }
  case FETCH_COUNTRIES_ERROR:
    return {
      ...state,
      error: action.payload,
      pending: false,
    }
  case FETCH_FILTERED_COUNTRIES:
    return {
      ...state,
      filteredCountries: action.payload,
    }
  case HANDLE_SEARCH_CHANGE:
    return {
      ...state,
      searchField: action.payload,
      filteredCountries: state.countries?.filter((country: Countries) => {
        return (
          country.name
            .toLowerCase()
            .includes(action.payload?.toLowerCase().trim()) ||
            country.nativeName
              ?.toLowerCase()
              .includes(action.payload?.toLowerCase().trim())
        )
      }),
    }
  default:
    return {
      ...state,
    }
  }
}

export default fetchReducer
