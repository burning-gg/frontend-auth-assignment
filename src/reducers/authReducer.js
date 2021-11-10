import {
  AUTH_SUCCESS,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOG_OUT
} from '../actions/types'

const initialState = {
  token: sessionStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  error: null
}

export default function authReducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false
      }
    case AUTH_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        loading: false
      }
    case LOGIN_SUCCESS:
      sessionStorage.setItem('token', payload.token)
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      }
    case LOG_OUT:
      sessionStorage.removeItem('token')
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false
      }
    case LOGIN_FAIL:
      sessionStorage.removeItem('token')
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        error: payload
      }
    default:
      return state
  }
}