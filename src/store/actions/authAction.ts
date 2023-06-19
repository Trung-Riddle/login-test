import { Dispatch } from 'redux'
import { TYPES } from './actionTypes'
import { postDataAPI } from 'src/utils/fetchData'
import { DispatchProp } from 'react-redux'

interface userData {
  email: string
  password: string
}
interface NotifyAction {
  type: typeof TYPES.NOTIFY
  payload: {
    loading?: boolean
    error?: string
    success?: string
    token?: string
  }
}
export const login = (data: userData) => async (dispatch: Dispatch<NotifyAction>) => {
  try {
    dispatch({ type: TYPES.NOTIFY, payload: { loading: true } })
    const res: any = await postDataAPI('auth/login', data)
    dispatch({
      type: TYPES.AUTH,
      payload: {
        token: res.data.accessToken,
        user: res.data.user
      }
    })
    localStorage.setItem('firstLogin', 'true')
    dispatch({
      type: TYPES.NOTIFY,
      payload: {
        success: res.data.message
      }
    })
  } catch (error: any) {
    dispatch({
      type: TYPES.NOTIFY,
      payload: {
        error: error.response.data.message
      }
    })
    console.log(error.response.data.message)
  }
}
export const refreshToken = () => async (dispatch: Dispatch<any>) => {
  const firstLogin = localStorage.getItem('firstLogin')
  if (firstLogin === 'true') {
    dispatch({ type: TYPES.NOTIFY, payload: { loading: true } })
    try {
      const res = await postDataAPI('auth/refresh-token')
      console.log(res)
      dispatch({
        type: TYPES.AUTH,
        payload: {
          token: res.data.accessToken,
          user: res.data.user
        }
      })
      dispatch({ type: TYPES.NOTIFY, payload: {} })
    } catch (error: any) {
      dispatch({
        type: TYPES.NOTIFY,
        payload: {
          error: error?.response?.data?.message
        }
      })
      console.log(error?.response?.data?.message)
    }
  }
}
