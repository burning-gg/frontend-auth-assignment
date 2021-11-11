import axios from 'axios'
import { setAlert } from './alertAction'
import {
  USER_LOADED,
  USER_LOAD_ERROR
} from './types'
import setAuthToken from '../utils/setAuthToken'
import parseJwt from '../utils/parseAuthToken'

export const loadUser = () => async dispatch => {
  if (sessionStorage.token) {
    setAuthToken(sessionStorage.token)
  }

  try {
    const decodeJwt = parseJwt(sessionStorage.token)

    const userId = decodeJwt.data.id

    const res = await axios.get(`https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/${userId}`)

    dispatch({
      type: USER_LOADED,
      payload: res.data.data
    })

    dispatch(setAlert('Вы успешно авторизовались', 'success'))
  } catch (err) {
    dispatch({
      type: USER_LOAD_ERROR
    })

    dispatch(setAlert('Сессия потеряна. Авторизуйтесь заново', 'error'))
  }
}