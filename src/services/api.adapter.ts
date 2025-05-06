import httpClient from '@/api'
import { endpoints } from 'api/endpoints'

import type { ApiService } from 'application/ports'

export function apiService(): ApiService {
  async function getPatients(): ReturnType<ApiService['getPatients']> {
    const { method, route } = endpoints.listPatients
    const { data } = await httpClient({ method })(route)
    return data
  }

  async function getPatient(
    patientId: UUID,
  ): ReturnType<ApiService['getPatient']> {
    const { method, route } = endpoints.getPatient
    const { data } = await httpClient({ method })(route(patientId))
    return data
  }

  async function getPatientSteps(
    patientId: UUID,
  ): ReturnType<ApiService['getPatientSteps']> {
    const { method, route } = endpoints.getPatientSteps
    const { data } = await httpClient({ method })(route(patientId))
    return data
  }

  async function getPatientHeartRate(
    patientId: UUID,
  ): ReturnType<ApiService['getPatientHeartRate']> {
    const { method, route } = endpoints.getPatientHeartRate
    const { data } = await httpClient({ method })(route(patientId))
    return data
  }

  async function getPatientBloodPressure(
    patientId: UUID,
  ): ReturnType<ApiService['getPatientBloodPressure']> {
    const { method, route } = endpoints.getPatientBloodPressure
    const { data } = await httpClient({ method })(route(patientId))
    return data
  }

  async function getPatientGlucose(
    patientId: UUID,
  ): ReturnType<ApiService['getPatientGlucose']> {
    const { method, route } = endpoints.getPatientGlucose
    const { data } = await httpClient({ method })(route(patientId))
    return data
  }

  return {
    getPatients,
    getPatient,
    getPatientSteps,
    getPatientHeartRate,
    getPatientBloodPressure,
    getPatientGlucose,
  }
}
