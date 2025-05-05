import { endpoints } from "api/endpoints";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { env } from "config/env";
import { fakePatients } from "api/data/users";

import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import type { Patient } from "domain/users";

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
const getPatientRegex = new RegExp(`${endpoints.listPatients.route}/([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})`)

mockAdapter.onGet(endpoints.listPatients.route).reply((config) => {
  const patients: Array<Omit<Patient, 'medicalData'>> = fakePatients.map(({ medicalData, ...patient }) => patient);
  return [200, patients]
});

mockAdapter.onGet(getPatientRegex).reply((config) => {
  const id = config.url?.match(getPatientRegex)?.[1];
  const patient = fakePatients.find(patient => patient.id === id);

  if (!patient) {
    return [404, { message: 'Patient not found' }]
  }

  const { medicalData, ...patientData } = patient;
  return [200, patientData]
});

export default httpClient;
