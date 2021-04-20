import {
  ToggleCart,
  AddToCart,
  FetchState,
  FetchPending,
  FetchSuccess,
  FetchError,
  FetchFiltered,
  HandleSearchChange,
  TOGGLE_CART,
  ADD_TO_CART,
  HANDLE_SEARCH_CHANGE,
  FETCH_COUNTRIES_PENDING,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_ERROR,
  FETCH_FILTERED_COUNTRIES,
  Countries,
} from '../types/fetchCart'

const initialState: FetchState = {
  pending: false,
  countries: [],
  error: null,
  searchField: '',
  filteredCountries: [],
  open: false,
  inCart: [],
}

const fetchReducer = (
  state = initialState,
  action:
    | ToggleCart
    | AddToCart
    | FetchPending
    | FetchSuccess
    | FetchError
    | FetchFiltered
    | HandleSearchChange
): FetchState => {
  switch (action.type) {
  case TOGGLE_CART:
    return {
      ...state,
      open: action.payload,
    }
  case ADD_TO_CART:
    const isFullCart = state.inCart.length ? true : false
    const isInCart = isFullCart
      ? state.inCart.find((item) =>
        item.alpha2Code === action.payload.alpha2Code ? true : false
      )
      : false
    return {
      ...state,
      inCart: !isInCart
        ? [...state.inCart, { ...action.payload, qty: 1 }]
        : state.inCart.map((country) =>
          country.alpha2Code === action.payload.alpha2Code
            ? { ...country, qty: +((country.qty as number) + 1) }
            : { ...country, qty: 1 }
        ),
    }
  case FETCH_COUNTRIES_PENDING:
    return {
      ...state,
      pending: true,
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
