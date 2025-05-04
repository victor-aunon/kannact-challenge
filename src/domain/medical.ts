export type Diagnosis = {
  id: UUID;
  name: string;
  description?: string;
};

export type Medication = {
  name: string;
  dosage: string;
  frequency: string;
  description?: string;
  startDate?: DateTimeString;
  endDate?: DateTimeString;
}

export type BloodPressure = {
  systolic: number;
  diastolic: number;
  date: DateTimeString;
}

export type HeartRate = {
  bpm: number;
  date: DateTimeString;
}

export type Glucose = {
  mgdl: number;
  date: DateTimeString;
}

export type DailySteps = {
  steps: number;
  date: DateTimeString;
}

export type SessionNote = {
  note: string;
  therapistId: UUID
  patientId: UUID
  date: DateTimeString;
}

export type PatientMedicalData = {
  diagnoses: Diagnosis[];
  activeMedications: Medication[];
  bloodPressure: BloodPressure[];
  heartRate: HeartRate[];
  glucose: Glucose[];
  dailySteps: DailySteps[];
  sessionNotes: SessionNote[];
  activity?: 'low' | 'medium' | 'high';
}
