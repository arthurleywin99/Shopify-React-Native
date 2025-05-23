import {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  HttpStatusCode,
} from 'axios'
import axiosInstance from './AxiosInstance'

type HTTPRequestConfig = AxiosRequestConfig
export type HTTPResponse<T> = AxiosResponse<T> & { status: HttpStatusCode }
export const HTTPError = AxiosError

export class HttpClient {
  private static instance: HttpClient

  static getInstance() {
    if (!this.instance) {
      this.instance = new HttpClient()
    }
    return this.instance
  }

  get<T>(url: string, config: HTTPRequestConfig): Promise<HTTPResponse<T>> {
    return axiosInstance.get<T>(url, config)
  }

  post<T>(
    url: string,
    body: unknown,
    config?: HTTPRequestConfig,
  ): Promise<HTTPResponse<T>> {
    return axiosInstance.post<T>(url, body, config)
  }

  put<T>(
    url: string,
    body: unknown,
    config: HTTPRequestConfig,
  ): Promise<HTTPResponse<T>> {
    return axiosInstance.put<T>(url, body, config)
  }

  patch<T>(
    url: string,
    body: unknown,
    config: HTTPRequestConfig,
  ): Promise<HTTPResponse<T>> {
    return axiosInstance.patch<T>(url, body, config)
  }

  delete<T>(url: string, config: HTTPRequestConfig): Promise<HTTPResponse<T>> {
    return axiosInstance.delete<T>(url, config)
  }
}
