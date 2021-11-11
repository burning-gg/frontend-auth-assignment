import axios from 'axios'
import { setAlert } from './alertAction'
import { loadUser } from './userAction'
import {
  AUTH_SUCCESS,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOG_OUT
} from './types'
import createAuthToken from '../utils/createAuthToken'

export const isAuth = () => dispatch => {
  if (sessionStorage.getItem('token') !== null) {
    dispatch({
      type: AUTH_SUCCESS
    })
  } else {
    dispatch({
      type: AUTH_ERROR
    })
  }
}

export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const body = JSON.stringify({ email, password })

  try {
    const res = await axios.post('https://mysterious-reef-29460.herokuapp.com/api/v1/validate', body, config)

    if (res.data.status === 'err') {
      dispatch({
        type: LOGIN_FAIL,
        payload: res.data.message
      })

      dispatch(setAlert('Неверный email или пароль', 'error'))
      return;
    }

    const newToken = createAuthToken(res.data)

    res.data.token = newToken

    dispatch(loadUser())

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    })


  } catch (err) {
    const error = 'Ошибка авторизации'

    dispatch({
      type: LOGIN_FAIL,
      payload: error
    })

    dispatch(setAlert('Ошибка авторизации', 'error'))
  }
}

export const logout = () => dispatch => {
  dispatch({ type: LOG_OUT })
  dispatch(setAlert('Вы успешно вышли из системы', 'success'))
}