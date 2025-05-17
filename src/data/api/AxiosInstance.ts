import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'

const instance: AxiosInstance = axios.create({
  baseURL: process.env.API_URL,
  timeout: 10000,
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
