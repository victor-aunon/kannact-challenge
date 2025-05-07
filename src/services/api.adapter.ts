import httpClient from '@/api'
import { endpoints } from 'api/endpoints'
import type { Patient } from 'domain/users'
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

  async function updatePatient(
    patientId: UUID,
    payload: Partial<Patient>,
  ): ReturnType<ApiService['updatePatient']> {
    try {
      const { method, route } = endpoints.updatePatient
      const { data } = await httpClient({ method })(route(patientId), payload)
      return data
    } catch (error) {
      throw new Error('Failed to update patient')
    }
  }

  async function deletePatient(
    patientId: UUID,
  ): ReturnType<ApiService['deletePatient']> {
    try {
      const { method, route } = endpoints.deletePatient
      await httpClient({ method })(route(patientId))
    } catch (error) {
      throw new Error('Failed to delete patient')
    }
  }

  return {
    getPatients,
    getPatient,
    updatePatient,
    deletePatient,
    getPatientSteps,
    getPatientHeartRate,
    getPatientBloodPressure,
    getPatientGlucose,
  }
}
