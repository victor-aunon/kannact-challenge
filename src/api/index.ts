import { fakePatients, type FakePatient } from 'api/data/users'
import { endpoints } from 'api/endpoints'
import { env } from 'app/config/env'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { ApiService } from 'application/ports'
import { storageService } from 'services/storage.adapter'

import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import type {
  BloodPressure,
  DailySteps,
  Glucose,
  HeartRate,
} from 'domain/medical'
import { Roles, type Patient } from 'domain/users'

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

mockAdapter.onGet(endpoints.listPatients.route).reply(config => {
  logRequest(config)
  let _fakePatients: FakePatient[] = fakePatients

  const fakePatientsStored = storageService().get<FakePatient[]>('patients')
  if (fakePatientsStored) {
    _fakePatients = fakePatientsStored
  }
  const patients: Patient[] = _fakePatients.map(
    ({ sessionNotes, healthMetrics, ...patient }) => patient,
  )
  return [200, patients]
})

const uuidPattern =
  '[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}'
const getPatientRegex = new RegExp(
  `${endpoints.listPatients.route}/(${uuidPattern})`,
)
const getPatientSessionNotesRegex = new RegExp(
  `${endpoints.listPatients.route}/(${uuidPattern})/session-notes`,
)
mockAdapter.onGet(getPatientSessionNotesRegex).reply(config => {
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

  return [
    200,
    patient.sessionNotes.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    ),
  ]
})

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

  const { sessionNotes, healthMetrics, ...patientData } = patient
  return [200, patientData]
})

mockAdapter.onPost(endpoints.listPatients.route).reply(config => {
  logRequest(config)
  const patient = JSON.parse(config.data) as Parameters<
    ApiService['createPatient']
  >[0]
  const fakePatient: FakePatient = {
    ...patient,
    id: crypto.randomUUID(),
    role: Roles.PATIENT,
    healthMetrics: {
      bloodPressure: null,
      dailySteps: null,
      glucose: null,
      heartRate: null,
    },
    medicalData: {
      activity: null,
      diagnoses: patient.medicalData.diagnoses.map(diagnosis => ({
        ...diagnosis,
        id: crypto.randomUUID(),
      })),
      activeMedications: [],
    },
    emergencyContact: null,
    sessionNotes: [],
  }
  fakePatients.unshift(fakePatient)
  storageService().set('patients', fakePatients)

  return [201, patient]
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

const getPatientEmergencyContactRegex = new RegExp(
  `${endpoints.listPatients.route}/(${uuidPattern})/emergency-contacts`,
)
mockAdapter.onPatch(getPatientEmergencyContactRegex).reply(config => {
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

  if (!patient.emergencyContact) {
    return [404, { message: 'Emergency contact not found' }]
  }

  const payload = JSON.parse(config.data) as Partial<
    Patient['emergencyContact']
  >
  patient = {
    ...patient,
    emergencyContact: {
      ...patient.emergencyContact,
      ...payload,
    },
  }
  const newFakePatients = fakePatients.map(fakePatient =>
    fakePatient.id === id ? patient : fakePatient,
  )
  storageService().set('patients', newFakePatients)

  const { emergencyContact } = patient
  return [200, emergencyContact]
})

mockAdapter.onPost(getPatientSessionNotesRegex).reply(config => {
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

  const payload = JSON.parse(config.data) as Parameters<
    ApiService['createPatientSessionNote']
  >[1]

  patient = {
    ...patient,
    sessionNotes: [
      ...patient.sessionNotes,
      { ...payload, id: crypto.randomUUID() },
    ],
  }
  const newFakePatients = fakePatients.map(fakePatient =>
    fakePatient.id === id ? patient : fakePatient,
  )
  storageService().set('patients', newFakePatients)

  return [200, payload]
})

const updatePatientSessionNotesRegex = new RegExp(
  `${endpoints.listPatients.route}/(${uuidPattern})/session-notes/(${uuidPattern})`,
)

mockAdapter.onPatch(updatePatientSessionNotesRegex).reply(config => {
  logRequest(config)
  const [_, patientId, noteId] =
    config.url?.match(updatePatientSessionNotesRegex) || []
  let patient: FakePatient | undefined = fakePatients.find(
    patient => patient.id === patientId,
  )

  const patientsStored = storageService().get<FakePatient[]>('patients')
  if (patientsStored) {
    patient = patientsStored.find(patient => patient.id === patientId)
  }

  if (!patient) {
    return [404, { message: 'Patient not found' }]
  }

  const note = patient.sessionNotes.find(note => note.id === noteId)

  if (!note) {
    return [404, { message: 'Note not found' }]
  }

  const payload = JSON.parse(config.data) as Parameters<
    ApiService['updatePatientSessionNote']
  >[2]

  patient = {
    ...patient,
    sessionNotes: patient.sessionNotes.map(sessionNote =>
      sessionNote.id === noteId ? { ...sessionNote, ...payload } : sessionNote,
    ),
  }
  const newFakePatients = fakePatients.map(fakePatient =>
    fakePatient.id === patientId ? patient : fakePatient,
  )
  storageService().set('patients', newFakePatients)

  return [200, { ...note, ...payload }]
})

mockAdapter.onPatch(getPatientRegex).reply(config => {
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

  const payload = JSON.parse(config.data) as Parameters<
    ApiService['updatePatient']
  >[1]

  patient = {
    ...patient,
    ...payload,
    medicalData: {
      ...patient.medicalData,
      diagnoses: (payload.medicalData?.diagnoses || []).map(diagnosis => ({
        ...diagnosis,
        id: crypto.randomUUID(),
      })),
    },
  }
  const newFakePatients = fakePatients.map(fakePatient =>
    fakePatient.id === id ? patient : fakePatient,
  )
  storageService().set('patients', newFakePatients)

  const { medicalData, sessionNotes, healthMetrics, ...patientData } = patient
  return [200, patientData]
})

mockAdapter.onDelete(getPatientEmergencyContactRegex).reply(config => {
  logRequest(config)
  const id = config.url?.match(getPatientRegex)?.[1]

  let _fakePatients: FakePatient[] = fakePatients

  const fakePatientsStored = storageService().get<FakePatient[]>('patients')
  if (fakePatientsStored) {
    _fakePatients = fakePatientsStored
  }

  if (!_fakePatients.find(patient => patient.id === id)) {
    return [404, { message: 'Patient not found' }]
  }

  const newFakePatients = _fakePatients.map(patient =>
    patient.id === id ? { ...patient, emergencyContact: null } : patient,
  )
  storageService().set('patients', newFakePatients)

  return [200, { message: 'Emergency contact deleted' }]
})

mockAdapter.onDelete(updatePatientSessionNotesRegex).reply(config => {
  logRequest(config)

  const [_, patientId, noteId] =
    config.url?.match(updatePatientSessionNotesRegex) || []

  let _fakePatients: FakePatient[] = fakePatients

  const fakePatientsStored = storageService().get<FakePatient[]>('patients')
  if (fakePatientsStored) {
    _fakePatients = fakePatientsStored
  }

  const fakePatient = _fakePatients.find(patient => patient.id === patientId)

  if (!fakePatient) {
    return [404, { message: 'Patient not found' }]
  }

  const note = fakePatient.sessionNotes.find(note => note.id === noteId)

  if (!note) {
    return [404, { message: 'Note not found' }]
  }

  const newFakePatients = _fakePatients.map(patient =>
    patient.id === patientId
      ? {
          ...patient,
          sessionNotes: patient.sessionNotes.filter(
            sessionNote => sessionNote.id !== noteId,
          ),
        }
      : patient,
  )
  storageService().set('patients', newFakePatients)

  return [200, { message: 'Session note deleted' }]
})

mockAdapter.onDelete(getPatientRegex).reply(config => {
  logRequest(config)
  const id = config.url?.match(getPatientRegex)?.[1]

  let _fakePatients: FakePatient[] = fakePatients

  const fakePatientsStored = storageService().get<FakePatient[]>('patients')
  if (fakePatientsStored) {
    _fakePatients = fakePatientsStored
  }

  if (!_fakePatients.find(patient => patient.id === id)) {
    return [404, { message: 'Patient not found' }]
  }

  const newFakePatients = _fakePatients.filter(patient => patient.id !== id)
  storageService().set('patients', newFakePatients)

  return [200, { message: 'Patient deleted' }]
})

export default httpClient
