import {
  USER_LOADED,
  USER_LOAD_ERROR,
  USER_CLEAR
} from '../actions/types'

const initialState = {
  user: null,
  loading: true,
  error: null
}

export default function userReducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        user: payload,
        loading: false
      }
    case USER_LOAD_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      }
    case USER_CLEAR:
      return {
        ...state,
        user: null,
        loading: false
      }
    default:
      return state
  }
}