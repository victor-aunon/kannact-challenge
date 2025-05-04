import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { env } from "config/env";
import { endpoints } from "api/endpoints";

import type { AxiosRequestConfig, AxiosResponse } from 'axios'

type HTTClientMethodMap = {
  GET: (url: string, config?: AxiosRequestConfig) => Promise<AxiosResponse>
  POST: (url: string, data?: any, config?: AxiosRequestConfig) => Promise<AxiosResponse>
  PUT: (url: string, data?: any, config?: AxiosRequestConfig) => Promise<AxiosResponse>
  DELETE: (url: string, config?: AxiosRequestConfig) => Promise<AxiosResponse>
  PATCH: (url: string, data?: any, config?: AxiosRequestConfig) => Promise<AxiosResponse>
}

const axiosClient = axios.create({
  baseURL: env.VITE_BASE_URL
})

const httpClientMethodMap: HTTClientMethodMap = {
  GET: axiosClient.get,
  POST: axiosClient.post,
  PUT: axiosClient.put,
  DELETE: axiosClient.delete,
  PATCH: axiosClient.patch
} as const

function httpClient<R = any, M extends keyof HTTClientMethodMap = 'GET'>({ method = 'GET' as M }: { method?: M } = {}): (...args: Parameters<HTTClientMethodMap[M]>) => Promise<AxiosResponse<R>> {
  const fn = httpClientMethodMap[method] as (...args: Parameters<HTTClientMethodMap[M]>) => Promise<AxiosResponse<R>>

  return ((...args: Parameters<HTTClientMethodMap[M]>) => fn(...args))
}

const mockAdapter = new MockAdapter(axiosClient, { delayResponse: Math.random() * 300 + 300 }); // Between 300ms and 600ms

mockAdapter.onGet(endpoints.listPatients.route).reply(200, [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
]);



export default httpClient;
