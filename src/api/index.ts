import { fakePatients, type FakePatient } from 'api/data/users'
import { endpoints } from 'api/endpoints'
import { env } from 'app/config/env'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { storageService } from 'services/storage.adapter'

import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import type {
  BloodPressure,
  DailySteps,
  Glucose,
  HeartRate,
} from 'domain/medical'
import type { Patient } from 'domain/users'

type HTTClientMethodMap = {
  GET: (url: string, config?: AxiosRequestConfig) => Promise<AxiosResponse>
  POST: (
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ) => Promise<AxiosResponse>
  PUT: (
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ) => Promise<AxiosResponse>
  DELETE: (url: string, config?: AxiosRequestConfig) => Promise<AxiosResponse>
  PATCH: (
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ) => Promise<AxiosResponse>
}

const axiosClient = axios.create({
  baseURL: env.VITE_BASE_URL,
})

const httpClientMethodMap: HTTClientMethodMap = {
  GET: axiosClient.get,
  POST: axiosClient.post,
  PUT: axiosClient.put,
  DELETE: axiosClient.delete,
  PATCH: axiosClient.patch,
} as const

function httpClient<R = any, M extends keyof HTTClientMethodMap = 'GET'>({
  method = 'GET' as M,
}: { method?: M } = {}): (
  ...args: Parameters<HTTClientMethodMap[M]>
) => Promise<AxiosResponse<R>> {
  const fn = httpClientMethodMap[method] as (
    ...args: Parameters<HTTClientMethodMap[M]>
  ) => Promise<AxiosResponse<R>>

  return (...args: Parameters<HTTClientMethodMap[M]>) => fn(...args)
}

const mockAdapter = new MockAdapter(axiosClient, {
  delayResponse: Math.random() * 300 + 300,
}) // Between 300ms and 600ms

const logRequest = (config: AxiosRequestConfig) => {
  console.debug(
    `${new Date().toISOString()} - ${config.method?.toUpperCase()} ${config.url}`,
  )
}

// Set users into local storage
storageService().set('patients', fakePatients)

mockAdapter.onGet(endpoints.listPatients.route).reply(config => {
  logRequest(config)
  let _fakePatients: FakePatient[] = fakePatients

  const fakePatientsStored = storageService().get<FakePatient[]>('patients')
  if (fakePatientsStored) {
    _fakePatients = fakePatientsStored
  }
  const patients: Patient[] = _fakePatients.map(
    ({ medicalData, sessionNotes, healthMetrics, ...patient }) => patient,
  )
  return [200, patients]
})

const uuidPattern =
  '[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}'
const getPatientRegex = new RegExp(
  `${endpoints.listPatients.route}/(${uuidPattern})`,
)
mockAdapter.onGet(getPatientRegex).reply(config => {
  logRequest(config)
  const id = config.url?.match(getPatientRegex)?.[1]

  let patient: FakePatient | undefined = fakePatients.find(
    patient => patient.id === id,
  )

  const patientsStored = storageService().get<FakePatient[]>('patients')
  if (patientsStored) {
    patient = patientsStored.find(patient => patient.id === id)
  }

  if (!patient) {
    return [404, { message: 'Patient not found' }]
  }

  const { medicalData, sessionNotes, healthMetrics, ...patientData } = patient
  return [200, patientData]
})

const getPatientHeartRateRegex = new RegExp(
  `${endpoints.listPatients.route}/(${uuidPattern})/health-metrics/heart-rate`,
)
mockAdapter.onGet(getPatientHeartRateRegex).reply(config => {
  logRequest(config)
  const id = config.url?.match(getPatientHeartRateRegex)?.[1]
  const patient: FakePatient | undefined = fakePatients.find(
    patient => patient.id === id,
  )

  if (!patient) {
    return [404, { message: 'Patient not found' }]
  }

  if (!patient.healthMetrics.heartRate) {
    return [200, null] as const
  }

  const now = new Date()
  const heartRate: HeartRate[] = patient.healthMetrics.heartRate.map(
    (heartRate, index) => ({
      ...heartRate,
      patientId: patient.id,
      date: new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() - index,
      ).toISOString(),
    }),
  )

  return [200, heartRate]
})

const getPatientStepsRegex = new RegExp(
  `${endpoints.listPatients.route}/(${uuidPattern})/health-metrics/steps`,
)
mockAdapter.onGet(getPatientStepsRegex).reply(config => {
  logRequest(config)
  const id = config.url?.match(getPatientStepsRegex)?.[1]
  const patient: FakePatient | undefined = fakePatients.find(
    patient => patient.id === id,
  )

  if (!patient) {
    return [404, { message: 'Patient not found' }]
  }

  if (!patient.healthMetrics.dailySteps) {
    return [200, null] as const
  }

  const now = new Date()
  const dailySteps: DailySteps[] = patient.healthMetrics.dailySteps.map(
    (steps, index) => ({
      ...steps,
      patientId: patient.id,
      date: new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() - index,
      ).toISOString(),
    }),
  )

  return [200, dailySteps]
})

const getPatientGlucoseRegex = new RegExp(
  `${endpoints.listPatients.route}/(${uuidPattern})/health-metrics/glucose`,
)
mockAdapter.onGet(getPatientGlucoseRegex).reply(config => {
  logRequest(config)
  const id = config.url?.match(getPatientGlucoseRegex)?.[1]
  const patient: FakePatient | undefined = fakePatients.find(
    patient => patient.id === id,
  )

  if (!patient) {
    return [404, { message: 'Patient not found' }]
  }

  if (!patient.healthMetrics.glucose) {
    return [200, null] as const
  }

  const now = new Date()
  const glucose: Glucose[] = patient.healthMetrics.glucose.map(
    (glucose, index) => ({
      ...glucose,
      patientId: patient.id,
      date: new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() - index,
      ).toISOString(),
    }),
  )

  return [200, glucose]
})

const getPatientBloodPressureRegex = new RegExp(
  `${endpoints.listPatients.route}/(${uuidPattern})/health-metrics/blood-pressure`,
)
mockAdapter.onGet(getPatientBloodPressureRegex).reply(config => {
  logRequest(config)
  const id = config.url?.match(getPatientBloodPressureRegex)?.[1]
  const patient: FakePatient | undefined = fakePatients.find(
    patient => patient.id === id,
  )

  if (!patient) {
    return [404, { message: 'Patient not found' }]
  }

  if (!patient.healthMetrics.bloodPressure) {
    return [200, null] as const
  }

  const now = new Date()
  const bloodPressure: BloodPressure[] =
    patient.healthMetrics.bloodPressure.map((bloodPressure, index) => ({
      ...bloodPressure,
      patientId: patient.id,
      date: new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() - index,
      ).toISOString(),
    }))

  return [200, bloodPressure]
})

export default httpClient
