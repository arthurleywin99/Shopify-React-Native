// src/data/api/HttpClient.ts
export interface IHttpClient {
  get<T>(url: string): Promise<T>
  post<T>(url: string, data: unknown): Promise<T>
  put<T>(url: string, data: unknown): Promise<T>
  delete<T>(url: string): Promise<T>
}

import axiosInstance from './AxiosInstance'

export const HttpClient: IHttpClient = {
  get: async url => (await axiosInstance.get(url)).data,
  post: async (url, data) => (await axiosInstance.post(url, data)).data,
  put: async (url, data) => (await axiosInstance.put(url, data)).data,
  delete: async url => (await axiosInstance.delete(url)).data,
}
