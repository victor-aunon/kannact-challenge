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
  updatePatient: (
    id: UUID,
    payload: Partial<Patient>,
  ) => Promise<Patient | null>
  deletePatient: (id: UUID) => Promise<void>
  deletePatientEmergencyContact: (id: UUID) => Promise<void>
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

export type AlertService<P = unknown, R = any> = {
  errorAlert: (props: P) => Promise<R>
  infoAlert: (props: P) => Promise<R>
  questionAlert: (props: P) => Promise<R>
  successAlert: (props: P) => Promise<R>
  warningAlert: (props: P) => Promise<R>
}
