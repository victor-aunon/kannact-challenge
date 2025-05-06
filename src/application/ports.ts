import type {
  BloodPressure,
  DailySteps,
  Glucose,
  HeartRate,
} from 'domain/medical'
import type { Patient } from 'domain/users'

export type ApiService = {
  getPatients: () => Promise<Patient[]>
  getPatient: (id: UUID) => Promise<Patient>
  getPatientSteps: (id: UUID) => Promise<DailySteps[] | null>
  getPatientBloodPressure: (id: UUID) => Promise<BloodPressure[] | null>
  getPatientHeartRate: (id: UUID) => Promise<HeartRate[] | null>
  getPatientGlucose: (id: UUID) => Promise<Glucose[] | null>
}

export type StorageService = {
  set: <T>(key: string, value: T) => void
  get: <T>(key: string) => T | null
  remove: (key: string) => void
}
