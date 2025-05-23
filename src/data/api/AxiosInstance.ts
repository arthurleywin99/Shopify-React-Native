import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'
import { API_URL } from '@env'

const instance: AxiosInstance = axios.create({
  baseURL: API_URL,
})

function onRequest(
  config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig {
  return config
}

function onRequestError(error: AxiosError) {
  return Promise.reject(error)
}

function onResponse(response: AxiosResponse) {
  return response
}

function onResponseError(error: AxiosError) {
  return Promise.reject({
    ...error,
    message: 'Something went wrong with your request!',
  })
}

instance.interceptors.request.use(onRequest, onRequestError)
instance.interceptors.response.use(onResponse, onResponseError)

export default instance
