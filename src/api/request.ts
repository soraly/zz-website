import axios, { AxiosRequestConfig, Method } from "axios"
import { message } from "antd"
import { getHttpStatusText } from "./status"
import { setAddress } from 'state/counter';
import { store } from "../state"

/**
 * Type return
 * @interface ResponseType
 */
export interface ResponseType<T> {
  data: T
  msg: string
  code: number,
  s?: string
}

const handleResponseError = function (res, cb) {
  if (res.status !== 200) {
    cb(new Error(res.statusText))
  }
}

const TIMEOUT = 8000
const TOAST_DURATION = 2

const initAxios = (loading?: boolean) => {
  const AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE, // from .env.development/production
    timeout: TIMEOUT,
    withCredentials: false
  })

  // request interceptor
  AxiosInstance.interceptors.request.use((config: any) => {
    config.headers = {
      "Content-Type": "application/json"
    }
    if (config.url && config.url.indexOf("/user/login") === -1) {
      // if (!localStorage.getItem("user_token")) return false;
      // else {
      //   config.headers = Object.assign({}, config.headers, {
      //     authorization: localStorage.getItem("user_token")
      //   })
      // }

      if (localStorage.getItem("user_token")) {
        config.headers = Object.assign({}, config.headers, {
          authorization: localStorage.getItem("user_token")
        })
      }
    }
    // if (loading) message.info("loading...")

    return config
  })

  // response interceptor
  AxiosInstance.interceptors.response.use(
    response => {
      // Toast.clear()
      handleResponseError(response, err => {
        if (err) {
          Promise.reject(err)
        }
      })

      if (response && response.status && response.status !== 200) {
        message.info(getHttpStatusText(response.status), TOAST_DURATION)
        return Promise.reject(response || "error")
      } else {
        return Promise.resolve(response)
      }
    },
    error => {
      // Toast.clear()
      store.dispatch(setAddress(""))
      localStorage.clear()
      console.log(error.responseText)
      message.info(getHttpStatusText(null, error), TOAST_DURATION)
      return Promise.reject(error)
    }
  )

  return AxiosInstance
}

/**
 *  package request
 *
 * @param {string} url
 * @param {Method} method
 * @param {*} [data]
 * @param {boolean} [loading]
 * @returns {Promise<ResponseType>}
 */
export default function request(
  url: string,
  method: Method,
  data?: {},
  loading?: boolean
): Promise<any> {

  const options: AxiosRequestConfig = {
    url: process.env.REACT_APP_API + url,
    method,
    params:
      method.toUpperCase() === "GET" || method.toUpperCase() === "DELETE" ? data : null,
    data: method.toUpperCase() === "POST" || method.toUpperCase() === "PUT" ? data : null
  }

  const AxiosInstance = initAxios(loading)
  return new Promise((resolve, reject) => {
    console.log(options, "oooo");
    AxiosInstance(options)
      .then(res => {
        const data = res.data as ResponseType<any>
        // common info display
        if (data.code === 200 || data.code === -1) {
          resolve(data)
        } else if (data.code === 401) {
          sessionStorage.clear()
          // store.dispatch({
          //   type: "LOGIN",
          //   value: {}
          // })
          return
        } else {
          !!data.msg && message.info(data.msg)
        }
      })
      .catch(err => {
        reject(err)
      })
  })
}
