import { Roles, type Patient } from 'domain/users'

export const patients: Patient[] = [
  {
    id: 'abf1a21a-47b5-4b64-9712-3f6f799bc439',
    name: 'Barbara',
    surname: 'Smith',
    age: 74,
    email: 'barbara.smith@example.com',
    phone: '+1-555-5037',
    photo: null,
    role: Roles.PATIENT,
    sex: 'male',
    weight: 71.5,
    height: 162,
    emergencyContact: {
      id: '64dfa962-00b4-45e5-875f-4e0def9ef863',
      name: 'Emily',
      surname: 'Mitchell',
      age: 55,
      email: 'emily.mitchell@example.com',
      phone: '+1-555-1010',
      photo: null,
      role: Roles.EMERGENCY_CONTACT,
      relationship: 'Daughter',
    },
    medicalData: {
      diagnoses: [
        { id: '7e58caa7-1b84-4ab4-98e1-8f16ef4aff0a', name: 'Type 2 Diabetes' },
        { id: '4d837a89-d5ef-4d41-8d71-a24a7bc39990', name: 'Osteoarthritis' },
      ],
      activeMedications: [
        {
          name: 'Ibuprofen',
          dosage: '200mg',
          frequency: 'As needed',
          startDate: '2025-04-24T19:06:11',
        },
      ],
      bloodPressure: [
        {
          systolic: 125,
          diastolic: 81,
          date: '2025-05-04T19:08:46',
        },
        {
          systolic: 149,
          diastolic: 92,
          date: '2025-05-03T19:08:46',
        },
        {
          systolic: 135,
          diastolic: 84,
          date: '2025-05-02T19:08:46',
        },
        {
          systolic: 132,
          diastolic: 71,
          date: '2025-05-01T19:08:46',
        },
        {
          systolic: 131,
          diastolic: 75,
          date: '2025-04-30T19:08:46',
        },
        {
          systolic: 130,
          diastolic: 91,
          date: '2025-04-29T19:08:46',
        },
        {
          systolic: 157,
          diastolic: 75,
          date: '2025-04-28T19:08:46',
        },
        {
          systolic: 156,
          diastolic: 85,
          date: '2025-04-27T19:08:46',
        },
        {
          systolic: 125,
          diastolic: 91,
          date: '2025-04-26T19:08:46',
        },
        {
          systolic: 148,
          diastolic: 84,
          date: '2025-04-25T19:08:46',
        },
      ],
      heartRate: [],
      glucose: [
        {
          mgdl: 91,
          date: '2025-05-04T19:08:46',
        },
        {
          mgdl: 101,
          date: '2025-05-03T19:08:46',
        },
        {
          mgdl: 123,
          date: '2025-05-02T19:08:46',
        },
        {
          mgdl: 117,
          date: '2025-05-01T19:08:46',
        },
        {
          mgdl: 108,
          date: '2025-04-30T19:08:46',
        },
        {
          mgdl: 123,
          date: '2025-04-29T19:08:46',
        },
        {
          mgdl: 108,
          date: '2025-04-28T19:08:46',
        },
        {
          mgdl: 105,
          date: '2025-04-27T19:08:46',
        },
        {
          mgdl: 128,
          date: '2025-04-26T19:08:46',
        },
        {
          mgdl: 99,
          date: '2025-04-25T19:08:46',
        },
      ],
      dailySteps: [
        {
          steps: 7523,
          date: '2025-05-04T19:08:46',
        },
        {
          steps: 8280,
          date: '2025-05-03T19:08:46',
        },
        {
          steps: 7941,
          date: '2025-05-02T19:08:46',
        },
        {
          steps: 8000,
          date: '2025-05-01T19:08:46',
        },
        {
          steps: 8254,
          date: '2025-04-30T19:08:46',
        },
        {
          steps: 8123,
          date: '2025-04-29T19:08:46',
        },
        {
          steps: 7548,
          date: '2025-04-28T19:08:46',
        },
        {
          steps: 8386,
          date: '2025-04-27T19:08:46',
        },
        {
          steps: 8287,
          date: '2025-04-26T19:08:46',
        },
        {
          steps: 7690,
          date: '2025-04-25T19:08:46',
        },
      ],
      sessionNotes: [],
      activity: 'high',
    },
  },
  {
    id: '90e1ca2d-139f-4617-aafc-9e104c7a6c0e',
    name: 'Patricia',
    surname: 'Johnson',
    age: 65,
    email: 'patricia.johnson@example.com',
    phone: '+1-555-5133',
    photo: null,
    role: Roles.PATIENT,
    sex: 'female',
    weight: 79.4,
    height: 157,
    emergencyContact: null,
    medicalData: {
      diagnoses: [
        {
          id: '54ae657c-b44d-40f3-9d39-c79f4d067f44',
          name: 'Osteoarthritis',
        },
      ],
      activeMedications: [
        {
          name: 'Metformin',
          dosage: '500mg',
          frequency: 'Twice daily',
          startDate: '2025-02-16T19:06:11',
        },
      ],
      bloodPressure: [],
      heartRate: [
        {
          bpm: 87,
          date: '2025-05-04T19:08:46',
        },
        {
          bpm: 79,
          date: '2025-05-03T19:08:46',
        },
        {
          bpm: 60,
          date: '2025-05-02T19:08:46',
        },
        {
          bpm: 63,
          date: '2025-05-01T19:08:46',
        },
        {
          bpm: 85,
          date: '2025-04-30T19:08:46',
        },
        {
          bpm: 60,
          date: '2025-04-29T19:08:46',
        },
        {
          bpm: 82,
          date: '2025-04-28T19:08:46',
        },
        {
          bpm: 89,
          date: '2025-04-27T19:08:46',
        },
        {
          bpm: 61,
          date: '2025-04-26T19:08:46',
        },
        {
          bpm: 65,
          date: '2025-04-25T19:08:46',
        },
      ],
      glucose: [],
      dailySteps: [
        {
          steps: 8452,
          date: '2025-05-04T19:08:46',
        },
        {
          steps: 8498,
          date: '2025-05-03T19:08:46',
        },
        {
          steps: 8117,
          date: '2025-05-02T19:08:46',
        },
        {
          steps: 8014,
          date: '2025-05-01T19:08:46',
        },
        {
          steps: 8295,
          date: '2025-04-30T19:08:46',
        },
        {
          steps: 7619,
          date: '2025-04-29T19:08:46',
        },
        {
          steps: 7644,
          date: '2025-04-28T19:08:46',
        },
        {
          steps: 8419,
          date: '2025-04-27T19:08:46',
        },
        {
          steps: 7510,
          date: '2025-04-26T19:08:46',
        },
        {
          steps: 7954,
          date: '2025-04-25T19:08:46',
        },
      ],
      sessionNotes: [],
      activity: 'high',
    },
  },
  {
    id: '04571a20-8659-4b7a-9118-1c61d89ee845',
    name: 'Robert',
    surname: 'Johnson',
    age: 66,
    email: 'robert.johnson@example.com',
    phone: '+1-555-9720',
    photo: null,
    role: Roles.PATIENT,
    sex: 'male',
    weight: 62.7,
    height: 173,
    emergencyContact: null,
    medicalData: {
      diagnoses: [
        {
          id: 'c679e62e-9922-4a9a-9a56-9df122fc7e41',
          name: 'Osteoarthritis',
        },
        {
          id: '5323c8c7-6e56-4e0e-bb44-4b05199fd356',
          name: 'Type 2 Diabetes',
        },
      ],
      activeMedications: [
        {
          name: 'Ibuprofen',
          dosage: '200mg',
          frequency: 'As needed',
          startDate: '2025-02-13T19:06:11',
        },
      ],
      bloodPressure: [
        {
          systolic: 153,
          diastolic: 70,
          date: '2025-05-04T19:08:46',
        },
        {
          systolic: 147,
          diastolic: 94,
          date: '2025-05-03T19:08:46',
        },
        {
          systolic: 159,
          diastolic: 73,
          date: '2025-05-02T19:08:46',
        },
        {
          systolic: 160,
          diastolic: 84,
          date: '2025-05-01T19:08:46',
        },
        {
          systolic: 133,
          diastolic: 79,
          date: '2025-04-30T19:08:46',
        },
        {
          systolic: 125,
          diastolic: 82,
          date: '2025-04-29T19:08:46',
        },
        {
          systolic: 150,
          diastolic: 80,
          date: '2025-04-28T19:08:46',
        },
        {
          systolic: 137,
          diastolic: 82,
          date: '2025-04-27T19:08:46',
        },
        {
          systolic: 136,
          diastolic: 73,
          date: '2025-04-26T19:08:46',
        },
        {
          systolic: 148,
          diastolic: 84,
          date: '2025-04-25T19:08:46',
        },
      ],
      heartRate: [
        {
          bpm: 76,
          date: '2025-05-04T19:08:46',
        },
        {
          bpm: 61,
          date: '2025-05-03T19:08:46',
        },
        {
          bpm: 79,
          date: '2025-05-02T19:08:46',
        },
        {
          bpm: 71,
          date: '2025-05-01T19:08:46',
        },
        {
          bpm: 66,
          date: '2025-04-30T19:08:46',
        },
        {
          bpm: 86,
          date: '2025-04-29T19:08:46',
        },
        {
          bpm: 61,
          date: '2025-04-28T19:08:46',
        },
        {
          bpm: 80,
          date: '2025-04-27T19:08:46',
        },
        {
          bpm: 77,
          date: '2025-04-26T19:08:46',
        },
        {
          bpm: 82,
          date: '2025-04-25T19:08:46',
        },
      ],
      glucose: [
        {
          mgdl: 116,
          date: '2025-05-04T19:08:46',
        },
        {
          mgdl: 108,
          date: '2025-05-03T19:08:46',
        },
        {
          mgdl: 106,
          date: '2025-05-02T19:08:46',
        },
        {
          mgdl: 95,
          date: '2025-05-01T19:08:46',
        },
        {
          mgdl: 107,
          date: '2025-04-30T19:08:46',
        },
        {
          mgdl: 95,
          date: '2025-04-29T19:08:46',
        },
        {
          mgdl: 109,
          date: '2025-04-28T19:08:46',
        },
        {
          mgdl: 126,
          date: '2025-04-27T19:08:46',
        },
        {
          mgdl: 107,
          date: '2025-04-26T19:08:46',
        },
        {
          mgdl: 110,
          date: '2025-04-25T19:08:46',
        },
      ],
      dailySteps: [
        {
          steps: 4710,
          date: '2025-05-04T19:08:46',
        },
        {
          steps: 5308,
          date: '2025-05-03T19:08:46',
        },
        {
          steps: 5168,
          date: '2025-05-02T19:08:46',
        },
        {
          steps: 5036,
          date: '2025-05-01T19:08:46',
        },
        {
          steps: 5154,
          date: '2025-04-30T19:08:46',
        },
        {
          steps: 5260,
          date: '2025-04-29T19:08:46',
        },
        {
          steps: 5100,
          date: '2025-04-28T19:08:46',
        },
        {
          steps: 4992,
          date: '2025-04-27T19:08:46',
        },
        {
          steps: 4942,
          date: '2025-04-26T19:08:46',
        },
        {
          steps: 4609,
          date: '2025-04-25T19:08:46',
        },
      ],
      sessionNotes: [],
      activity: 'medium',
    },
  },
  {
    id: '12dc7d0f-d6e3-4484-bac8-2b77e8d96386',
    name: 'Patricia',
    surname: 'Smith',
    age: 80,
    email: 'patricia.smith@example.com',
    phone: '+1-555-3925',
    photo: null,
    role: Roles.PATIENT,
    sex: 'male',
    weight: 74.2,
    height: 154,
    emergencyContact: {
      id: '77f336e8-849b-4b48-9bff-45f2a9753861',
      name: 'Emily',
      surname: 'Mitchell',
      age: 55,
      email: 'emily.mitchell@example.com',
      phone: '+1-555-1010',
      photo: null,
      role: Roles.EMERGENCY_CONTACT,
      relationship: 'Daughter',
    },
    medicalData: {
      diagnoses: [
        {
          id: '50da3a8b-a1d7-4a9b-87a8-39aa33470cee',
          name: 'Mild Cognitive Impairment',
        },
        {
          id: 'd4b058a6-bb68-4e03-a98d-459431f26073',
          name: 'Osteoarthritis',
        },
      ],
      activeMedications: [
        {
          name: 'Metformin',
          dosage: '500mg',
          frequency: 'Twice daily',
          startDate: '2025-04-26T19:06:11',
        },
      ],
      bloodPressure: [
        {
          systolic: 138,
          diastolic: 75,
          date: '2025-05-04T19:08:46',
        },
        {
          systolic: 149,
          diastolic: 76,
          date: '2025-05-03T19:08:46',
        },
        {
          systolic: 156,
          diastolic: 90,
          date: '2025-05-02T19:08:46',
        },
        {
          systolic: 160,
          diastolic: 75,
          date: '2025-05-01T19:08:46',
        },
        {
          systolic: 140,
          diastolic: 93,
          date: '2025-04-30T19:08:46',
        },
        {
          systolic: 138,
          diastolic: 90,
          date: '2025-04-29T19:08:46',
        },
        {
          systolic: 124,
          diastolic: 88,
          date: '2025-04-28T19:08:46',
        },
        {
          systolic: 151,
          diastolic: 73,
          date: '2025-04-27T19:08:46',
        },
        {
          systolic: 125,
          diastolic: 95,
          date: '2025-04-26T19:08:46',
        },
        {
          systolic: 152,
          diastolic: 80,
          date: '2025-04-25T19:08:46',
        },
      ],
      heartRate: [
        {
          bpm: 84,
          date: '2025-05-04T19:08:46',
        },
        {
          bpm: 72,
          date: '2025-05-03T19:08:46',
        },
        {
          bpm: 71,
          date: '2025-05-02T19:08:46',
        },
        {
          bpm: 63,
          date: '2025-05-01T19:08:46',
        },
        {
          bpm: 75,
          date: '2025-04-30T19:08:46',
        },
        {
          bpm: 89,
          date: '2025-04-29T19:08:46',
        },
        {
          bpm: 66,
          date: '2025-04-28T19:08:46',
        },
        {
          bpm: 80,
          date: '2025-04-27T19:08:46',
        },
        {
          bpm: 63,
          date: '2025-04-26T19:08:46',
        },
        {
          bpm: 79,
          date: '2025-04-25T19:08:46',
        },
      ],
      glucose: [],
      dailySteps: [],
      sessionNotes: [],
    },
  },
  {
    id: '85900924-e609-46a4-a1be-e4c4fad8f7fd',
    name: 'Patricia',
    surname: 'Brown',
    age: 73,
    email: 'patricia.brown@example.com',
    phone: '+1-555-1178',
    photo: null,
    role: Roles.PATIENT,
    sex: 'female',
    weight: 61.9,
    height: 154,
    emergencyContact: {
      id: '625ab36e-02e1-4914-80a7-0cdb3da353ee',
      name: 'Emily',
      surname: 'Mitchell',
      age: 55,
      email: 'emily.mitchell@example.com',
      phone: '+1-555-1010',
      photo: null,
      role: Roles.EMERGENCY_CONTACT,
      relationship: 'Daughter',
    },
    medicalData: {
      diagnoses: [
        {
          id: '72e0aed9-6b8c-46b9-afbd-921840fb63a1',
          name: 'Osteoarthritis',
        },
        {
          id: '0eadd6e9-8338-4177-ab64-613039bc8b90',
          name: 'Mild Cognitive Impairment',
        },
      ],
      activeMedications: [
        {
          name: 'Ibuprofen',
          dosage: '200mg',
          frequency: 'As needed',
          startDate: '2025-02-12T19:06:11',
        },
      ],
      bloodPressure: [],
      heartRate: [
        {
          bpm: 79,
          date: '2025-05-04T19:08:46',
        },
        {
          bpm: 62,
          date: '2025-05-03T19:08:46',
        },
        {
          bpm: 68,
          date: '2025-05-02T19:08:46',
        },
        {
          bpm: 78,
          date: '2025-05-01T19:08:46',
        },
        {
          bpm: 62,
          date: '2025-04-30T19:08:46',
        },
        {
          bpm: 69,
          date: '2025-04-29T19:08:46',
        },
        {
          bpm: 88,
          date: '2025-04-28T19:08:46',
        },
        {
          bpm: 69,
          date: '2025-04-27T19:08:46',
        },
        {
          bpm: 68,
          date: '2025-04-26T19:08:46',
        },
        {
          bpm: 78,
          date: '2025-04-25T19:08:46',
        },
      ],
      glucose: [],
      dailySteps: [
        {
          steps: 2033,
          date: '2025-05-04T19:08:46',
        },
        {
          steps: 2140,
          date: '2025-05-03T19:08:46',
        },
        {
          steps: 2136,
          date: '2025-05-02T19:08:46',
        },
        {
          steps: 2367,
          date: '2025-05-01T19:08:46',
        },
        {
          steps: 2088,
          date: '2025-04-30T19:08:46',
        },
        {
          steps: 1816,
          date: '2025-04-29T19:08:46',
        },
        {
          steps: 1693,
          date: '2025-04-28T19:08:46',
        },
        {
          steps: 2098,
          date: '2025-04-27T19:08:46',
        },
        {
          steps: 1700,
          date: '2025-04-26T19:08:46',
        },
        {
          steps: 1953,
          date: '2025-04-25T19:08:46',
        },
      ],
      sessionNotes: [],
      activity: 'low',
    },
  },
  {
    id: 'c50502b5-28dd-4447-b53f-16e09e941815',
    name: 'Mary',
    surname: 'Johnson',
    age: 74,
    email: 'mary.johnson@example.com',
    phone: '+1-555-7963',
    photo: null,
    role: Roles.PATIENT,
    sex: 'male',
    weight: 57.5,
    height: 170,
    emergencyContact: {
      id: '1d1f2c58-3969-43ea-9966-e6e1a88c115e',
      name: 'Emily',
      surname: 'Mitchell',
      age: 55,
      email: 'emily.mitchell@example.com',
      phone: '+1-555-1010',
      photo: null,
      role: Roles.EMERGENCY_CONTACT,
      relationship: 'Daughter',
    },
    medicalData: {
      diagnoses: [
        {
          id: '7ff8fb7f-c7e4-4b5e-b0be-72d0e6f9660a',
          name: 'Osteoarthritis',
        },
        {
          id: '83d63faf-e1d3-4b35-8354-6188ebc75bf0',
          name: 'Mild Cognitive Impairment',
        },
      ],
      activeMedications: [
        {
          name: 'Ibuprofen',
          dosage: '200mg',
          frequency: 'As needed',
          startDate: '2025-04-25T19:06:11',
        },
        {
          name: 'Metformin',
          dosage: '500mg',
          frequency: 'Twice daily',
          startDate: '2025-03-23T19:06:11',
        },
      ],
      bloodPressure: [
        {
          systolic: 145,
          diastolic: 93,
          date: '2025-05-04T19:08:46',
        },
        {
          systolic: 137,
          diastolic: 92,
          date: '2025-05-03T19:08:46',
        },
        {
          systolic: 143,
          diastolic: 84,
          date: '2025-05-02T19:08:46',
        },
        {
          systolic: 152,
          diastolic: 75,
          date: '2025-05-01T19:08:46',
        },
        {
          systolic: 140,
          diastolic: 78,
          date: '2025-04-30T19:08:46',
        },
        {
          systolic: 126,
          diastolic: 76,
          date: '2025-04-29T19:08:46',
        },
        {
          systolic: 129,
          diastolic: 91,
          date: '2025-04-28T19:08:46',
        },
        {
          systolic: 136,
          diastolic: 81,
          date: '2025-04-27T19:08:46',
        },
        {
          systolic: 143,
          diastolic: 81,
          date: '2025-04-26T19:08:46',
        },
        {
          systolic: 135,
          diastolic: 74,
          date: '2025-04-25T19:08:46',
        },
      ],
      heartRate: [
        {
          bpm: 66,
          date: '2025-05-04T19:08:46',
        },
        {
          bpm: 89,
          date: '2025-05-03T19:08:46',
        },
        {
          bpm: 61,
          date: '2025-05-02T19:08:46',
        },
        {
          bpm: 81,
          date: '2025-05-01T19:08:46',
        },
        {
          bpm: 73,
          date: '2025-04-30T19:08:46',
        },
        {
          bpm: 86,
          date: '2025-04-29T19:08:46',
        },
        {
          bpm: 77,
          date: '2025-04-28T19:08:46',
        },
        {
          bpm: 86,
          date: '2025-04-27T19:08:46',
        },
        {
          bpm: 71,
          date: '2025-04-26T19:08:46',
        },
        {
          bpm: 86,
          date: '2025-04-25T19:08:46',
        },
      ],
      glucose: [],
      dailySteps: [
        {
          steps: 2307,
          date: '2025-05-04T19:08:46',
        },
        {
          steps: 1947,
          date: '2025-05-03T19:08:46',
        },
        {
          steps: 2273,
          date: '2025-05-02T19:08:46',
        },
        {
          steps: 2205,
          date: '2025-05-01T19:08:46',
        },
        {
          steps: 2362,
          date: '2025-04-30T19:08:46',
        },
        {
          steps: 2224,
          date: '2025-04-29T19:08:46',
        },
        {
          steps: 2315,
          date: '2025-04-28T19:08:46',
        },
        {
          steps: 2438,
          date: '2025-04-27T19:08:46',
        },
        {
          steps: 1500,
          date: '2025-04-26T19:08:46',
        },
        {
          steps: 2091,
          date: '2025-04-25T19:08:46',
        },
      ],
      sessionNotes: [],
      activity: 'low',
    },
  },
  {
    id: '160f0f53-6511-4bf5-a813-75ea30771592',
    name: 'William',
    surname: 'Anderson',
    age: 66,
    email: 'william.anderson@example.com',
    phone: '+1-555-5131',
    photo: null,
    role: Roles.PATIENT,
    sex: 'male',
    weight: 70.3,
    height: 150,
    emergencyContact: null,
    medicalData: {
      diagnoses: [
        {
          id: '99765f4c-0b37-4ebb-8e64-50a3e80db425',
          name: 'Osteoarthritis',
        },
        {
          id: '2cf3541e-8cd8-470e-b021-afed5c49232a',
          name: 'Type 2 Diabetes',
        },
      ],
      activeMedications: [
        {
          name: 'Lisinopril',
          dosage: '10mg',
          frequency: 'Once daily',
          startDate: '2025-03-21T19:06:11',
        },
        {
          name: 'Metformin',
          dosage: '500mg',
          frequency: 'Twice daily',
          startDate: '2025-04-06T19:06:11',
        },
      ],
      bloodPressure: [],
      heartRate: [
        {
          bpm: 77,
          date: '2025-05-04T19:08:46',
        },
        {
          bpm: 80,
          date: '2025-05-03T19:08:46',
        },
        {
          bpm: 85,
          date: '2025-05-02T19:08:46',
        },
        {
          bpm: 66,
          date: '2025-05-01T19:08:46',
        },
        {
          bpm: 67,
          date: '2025-04-30T19:08:46',
        },
        {
          bpm: 60,
          date: '2025-04-29T19:08:46',
        },
        {
          bpm: 75,
          date: '2025-04-28T19:08:46',
        },
        {
          bpm: 69,
          date: '2025-04-27T19:08:46',
        },
        {
          bpm: 83,
          date: '2025-04-26T19:08:46',
        },
        {
          bpm: 77,
          date: '2025-04-25T19:08:46',
        },
      ],
      glucose: [
        {
          mgdl: 116,
          date: '2025-05-04T19:08:46',
        },
        {
          mgdl: 102,
          date: '2025-05-03T19:08:46',
        },
        {
          mgdl: 117,
          date: '2025-05-02T19:08:46',
        },
        {
          mgdl: 118,
          date: '2025-05-01T19:08:46',
        },
        {
          mgdl: 124,
          date: '2025-04-30T19:08:46',
        },
        {
          mgdl: 91,
          date: '2025-04-29T19:08:46',
        },
        {
          mgdl: 118,
          date: '2025-04-28T19:08:46',
        },
        {
          mgdl: 95,
          date: '2025-04-27T19:08:46',
        },
        {
          mgdl: 106,
          date: '2025-04-26T19:08:46',
        },
        {
          mgdl: 103,
          date: '2025-04-25T19:08:46',
        },
      ],
      dailySteps: [
        {
          steps: 5339,
          date: '2025-05-04T19:08:46',
        },
        {
          steps: 5312,
          date: '2025-05-03T19:08:46',
        },
        {
          steps: 4996,
          date: '2025-05-02T19:08:46',
        },
        {
          steps: 5191,
          date: '2025-05-01T19:08:46',
        },
        {
          steps: 4786,
          date: '2025-04-30T19:08:46',
        },
        {
          steps: 5238,
          date: '2025-04-29T19:08:46',
        },
        {
          steps: 5092,
          date: '2025-04-28T19:08:46',
        },
        {
          steps: 5448,
          date: '2025-04-27T19:08:46',
        },
        {
          steps: 5073,
          date: '2025-04-26T19:08:46',
        },
        {
          steps: 5237,
          date: '2025-04-25T19:08:46',
        },
      ],
      sessionNotes: [],
      activity: 'medium',
    },
  },
  {
    id: 'c5490dfd-6651-483c-bb0f-0fa6c6dd7cdd',
    name: 'Robert',
    surname: 'Brown',
    age: 57,
    email: 'robert.brown@example.com',
    phone: '+1-555-5213',
    photo: null,
    role: Roles.PATIENT,
    sex: 'female',
    weight: 77.0,
    height: 157,
    emergencyContact: null,
    medicalData: {
      diagnoses: [
        {
          id: '85869d21-76f2-413b-a2a5-4d47286f694b',
          name: 'Mild Cognitive Impairment',
        },
      ],
      activeMedications: [
        {
          name: 'Metformin',
          dosage: '500mg',
          frequency: 'Twice daily',
          startDate: '2025-02-21T19:06:11',
        },
      ],
      bloodPressure: [
        {
          systolic: 142,
          diastolic: 75,
          date: '2025-05-04T19:08:46',
        },
        {
          systolic: 135,
          diastolic: 81,
          date: '2025-05-03T19:08:46',
        },
        {
          systolic: 152,
          diastolic: 94,
          date: '2025-05-02T19:08:46',
        },
        {
          systolic: 133,
          diastolic: 94,
          date: '2025-05-01T19:08:46',
        },
        {
          systolic: 125,
          diastolic: 91,
          date: '2025-04-30T19:08:46',
        },
        {
          systolic: 140,
          diastolic: 79,
          date: '2025-04-29T19:08:46',
        },
        {
          systolic: 137,
          diastolic: 74,
          date: '2025-04-28T19:08:46',
        },
        {
          systolic: 147,
          diastolic: 83,
          date: '2025-04-27T19:08:46',
        },
        {
          systolic: 128,
          diastolic: 77,
          date: '2025-04-26T19:08:46',
        },
        {
          systolic: 152,
          diastolic: 74,
          date: '2025-04-25T19:08:46',
        },
      ],
      heartRate: [
        {
          bpm: 68,
          date: '2025-05-04T19:08:46',
        },
        {
          bpm: 84,
          date: '2025-05-03T19:08:46',
        },
        {
          bpm: 69,
          date: '2025-05-02T19:08:46',
        },
        {
          bpm: 87,
          date: '2025-05-01T19:08:46',
        },
        {
          bpm: 86,
          date: '2025-04-30T19:08:46',
        },
        {
          bpm: 63,
          date: '2025-04-29T19:08:46',
        },
        {
          bpm: 67,
          date: '2025-04-28T19:08:46',
        },
        {
          bpm: 60,
          date: '2025-04-27T19:08:46',
        },
        {
          bpm: 83,
          date: '2025-04-26T19:08:46',
        },
        {
          bpm: 85,
          date: '2025-04-25T19:08:46',
        },
      ],
      glucose: [],
      dailySteps: [
        {
          steps: 1570,
          date: '2025-05-04T19:08:46',
        },
        {
          steps: 1543,
          date: '2025-05-03T19:08:46',
        },
        {
          steps: 2195,
          date: '2025-05-02T19:08:46',
        },
        {
          steps: 2415,
          date: '2025-05-01T19:08:46',
        },
        {
          steps: 2256,
          date: '2025-04-30T19:08:46',
        },
        {
          steps: 1819,
          date: '2025-04-29T19:08:46',
        },
        {
          steps: 2103,
          date: '2025-04-28T19:08:46',
        },
        {
          steps: 2052,
          date: '2025-04-27T19:08:46',
        },
        {
          steps: 2345,
          date: '2025-04-26T19:08:46',
        },
        {
          steps: 1662,
          date: '2025-04-25T19:08:46',
        },
      ],
      sessionNotes: [],
      activity: 'low',
    },
  },
  {
    id: 'decf34f4-30db-4f41-bd49-96a30c3f99c4',
    name: 'Linda',
    surname: 'Brown',
    age: 40,
    email: 'linda.brown@example.com',
    phone: '+1-555-2277',
    photo: null,
    role: Roles.PATIENT,
    sex: 'female',
    weight: 71.1,
    height: 162,
    emergencyContact: null,
    medicalData: {
      diagnoses: [
        {
          id: '3ddbee74-f646-4609-abb9-d415f52b7546',
          name: 'Hypertension',
        },
        {
          id: '7c3e72a7-3b74-41b7-951d-d21037f0a15b',
          name: 'Type 2 Diabetes',
        },
      ],
      activeMedications: [
        {
          name: 'Metformin',
          dosage: '500mg',
          frequency: 'Twice daily',
          startDate: '2025-03-13T19:06:11',
        },
      ],
      bloodPressure: [
        {
          systolic: 160,
          diastolic: 83,
          date: '2025-05-04T19:08:46',
        },
        {
          systolic: 142,
          diastolic: 91,
          date: '2025-05-03T19:08:46',
        },
        {
          systolic: 131,
          diastolic: 85,
          date: '2025-05-02T19:08:46',
        },
        {
          systolic: 139,
          diastolic: 87,
          date: '2025-05-01T19:08:46',
        },
        {
          systolic: 151,
          diastolic: 72,
          date: '2025-04-30T19:08:46',
        },
        {
          systolic: 157,
          diastolic: 84,
          date: '2025-04-29T19:08:46',
        },
        {
          systolic: 145,
          diastolic: 79,
          date: '2025-04-28T19:08:46',
        },
        {
          systolic: 134,
          diastolic: 85,
          date: '2025-04-27T19:08:46',
        },
        {
          systolic: 130,
          diastolic: 71,
          date: '2025-04-26T19:08:46',
        },
        {
          systolic: 137,
          diastolic: 94,
          date: '2025-04-25T19:08:46',
        },
      ],
      heartRate: [
        {
          bpm: 74,
          date: '2025-05-04T19:08:46',
        },
        {
          bpm: 68,
          date: '2025-05-03T19:08:46',
        },
        {
          bpm: 65,
          date: '2025-05-02T19:08:46',
        },
        {
          bpm: 79,
          date: '2025-05-01T19:08:46',
        },
        {
          bpm: 63,
          date: '2025-04-30T19:08:46',
        },
        {
          bpm: 85,
          date: '2025-04-29T19:08:46',
        },
        {
          bpm: 72,
          date: '2025-04-28T19:08:46',
        },
        {
          bpm: 76,
          date: '2025-04-27T19:08:46',
        },
        {
          bpm: 70,
          date: '2025-04-26T19:08:46',
        },
        {
          bpm: 85,
          date: '2025-04-25T19:08:46',
        },
      ],
      glucose: [
        {
          mgdl: 118,
          date: '2025-05-04T19:08:46',
        },
        {
          mgdl: 110,
          date: '2025-05-03T19:08:46',
        },
        {
          mgdl: 92,
          date: '2025-05-02T19:08:46',
        },
        {
          mgdl: 123,
          date: '2025-05-01T19:08:46',
        },
        {
          mgdl: 99,
          date: '2025-04-30T19:08:46',
        },
        {
          mgdl: 99,
          date: '2025-04-29T19:08:46',
        },
        {
          mgdl: 121,
          date: '2025-04-28T19:08:46',
        },
        {
          mgdl: 107,
          date: '2025-04-27T19:08:46',
        },
        {
          mgdl: 126,
          date: '2025-04-26T19:08:46',
        },
        {
          mgdl: 105,
          date: '2025-04-25T19:08:46',
        },
      ],
      dailySteps: [
        {
          steps: 2123,
          date: '2025-05-04T19:08:46',
        },
        {
          steps: 2163,
          date: '2025-05-03T19:08:46',
        },
        {
          steps: 2138,
          date: '2025-05-02T19:08:46',
        },
        {
          steps: 2112,
          date: '2025-05-01T19:08:46',
        },
        {
          steps: 1602,
          date: '2025-04-30T19:08:46',
        },
        {
          steps: 1656,
          date: '2025-04-29T19:08:46',
        },
        {
          steps: 1614,
          date: '2025-04-28T19:08:46',
        },
        {
          steps: 1898,
          date: '2025-04-27T19:08:46',
        },
        {
          steps: 2364,
          date: '2025-04-26T19:08:46',
        },
        {
          steps: 1644,
          date: '2025-04-25T19:08:46',
        },
      ],
      sessionNotes: [],
      activity: 'low',
    },
  },
  {
    id: 'ee668fce-fb0a-4e4f-9c46-16a1853d90dd',
    name: 'Barbara',
    surname: 'Taylor',
    age: 77,
    email: 'barbara.taylor@example.com',
    phone: '+1-555-5163',
    photo: null,
    role: Roles.PATIENT,
    sex: 'female',
    weight: 59.8,
    height: 164,
    emergencyContact: {
      id: '7f233b11-886b-4473-aa3d-256ec15c5c82',
      name: 'Emily',
      surname: 'Mitchell',
      age: 55,
      email: 'emily.mitchell@example.com',
      phone: '+1-555-1010',
      photo: null,
      role: Roles.EMERGENCY_CONTACT,
      relationship: 'Daughter',
    },
    medicalData: {
      diagnoses: [
        {
          id: '3290cad1-4b4f-4960-804c-93bd1855635f',
          name: 'Mild Cognitive Impairment',
        },
      ],
      activeMedications: [
        {
          name: 'Metformin',
          dosage: '500mg',
          frequency: 'Twice daily',
          startDate: '2025-03-05T19:06:11',
        },
        {
          name: 'Ibuprofen',
          dosage: '200mg',
          frequency: 'As needed',
          startDate: '2025-02-18T19:06:11',
        },
      ],
      bloodPressure: [],
      heartRate: [
        {
          bpm: 69,
          date: '2025-05-04T19:08:46',
        },
        {
          bpm: 83,
          date: '2025-05-03T19:08:46',
        },
        {
          bpm: 67,
          date: '2025-05-02T19:08:46',
        },
        {
          bpm: 74,
          date: '2025-05-01T19:08:46',
        },
        {
          bpm: 85,
          date: '2025-04-30T19:08:46',
        },
        {
          bpm: 84,
          date: '2025-04-29T19:08:46',
        },
        {
          bpm: 68,
          date: '2025-04-28T19:08:46',
        },
        {
          bpm: 86,
          date: '2025-04-27T19:08:46',
        },
        {
          bpm: 81,
          date: '2025-04-26T19:08:46',
        },
        {
          bpm: 60,
          date: '2025-04-25T19:08:46',
        },
      ],
      glucose: [],
      dailySteps: [
        {
          steps: 4508,
          date: '2025-05-04T19:08:46',
        },
        {
          steps: 5073,
          date: '2025-05-03T19:08:46',
        },
        {
          steps: 5255,
          date: '2025-05-02T19:08:46',
        },
        {
          steps: 5119,
          date: '2025-05-01T19:08:46',
        },
        {
          steps: 4603,
          date: '2025-04-30T19:08:46',
        },
        {
          steps: 4998,
          date: '2025-04-29T19:08:46',
        },
        {
          steps: 5424,
          date: '2025-04-28T19:08:46',
        },
        {
          steps: 5255,
          date: '2025-04-27T19:08:46',
        },
        {
          steps: 5111,
          date: '2025-04-26T19:08:46',
        },
        {
          steps: 4603,
          date: '2025-04-25T19:08:46',
        },
      ],
      sessionNotes: [],
      activity: 'medium',
    },
  },
  {
    id: '07fb6ac6-6eb3-4950-bb9b-2401d36efd3b',
    name: 'Linda',
    surname: 'Brown',
    age: 60,
    email: 'linda.brown@example.com',
    phone: '+1-555-5701',
    photo: null,
    role: Roles.PATIENT,
    sex: 'female',
    weight: 66.2,
    height: 158,
    emergencyContact: {
      id: '7420a8bb-155d-4849-91ec-d0d17530a607',
      name: 'Emily',
      surname: 'Mitchell',
      age: 32,
      email: 'emily.mitchell@example.com',
      phone: '+1-555-1010',
      photo: null,
      role: Roles.EMERGENCY_CONTACT,
      relationship: 'Daughter',
    },
    medicalData: {
      diagnoses: [
        {
          id: '0f0998b7-967f-47be-a5c3-8741f04fe1f5',
          name: 'Mild Cognitive Impairment',
        },
        {
          id: '3869551c-cdc5-4c50-a3b3-8a2ca4c29b25',
          name: 'Hypertension',
        },
      ],
      activeMedications: [
        {
          name: 'Ibuprofen',
          dosage: '200mg',
          frequency: 'As needed',
          startDate: '2025-02-25T19:06:11',
        },
      ],
      bloodPressure: [
        {
          systolic: 147,
          diastolic: 90,
          date: '2025-05-04T19:08:46',
        },
        {
          systolic: 148,
          diastolic: 84,
          date: '2025-05-03T19:08:46',
        },
        {
          systolic: 136,
          diastolic: 94,
          date: '2025-05-02T19:08:46',
        },
        {
          systolic: 145,
          diastolic: 90,
          date: '2025-05-01T19:08:46',
        },
        {
          systolic: 150,
          diastolic: 73,
          date: '2025-04-30T19:08:46',
        },
        {
          systolic: 141,
          diastolic: 84,
          date: '2025-04-29T19:08:46',
        },
        {
          systolic: 124,
          diastolic: 81,
          date: '2025-04-28T19:08:46',
        },
        {
          systolic: 154,
          diastolic: 94,
          date: '2025-04-27T19:08:46',
        },
        {
          systolic: 120,
          diastolic: 81,
          date: '2025-04-26T19:08:46',
        },
        {
          systolic: 143,
          diastolic: 72,
          date: '2025-04-25T19:08:46',
        },
      ],
      heartRate: [
        {
          bpm: 70,
          date: '2025-05-04T19:08:46',
        },
        {
          bpm: 88,
          date: '2025-05-03T19:08:46',
        },
        {
          bpm: 62,
          date: '2025-05-02T19:08:46',
        },
        {
          bpm: 80,
          date: '2025-05-01T19:08:46',
        },
        {
          bpm: 62,
          date: '2025-04-30T19:08:46',
        },
        {
          bpm: 89,
          date: '2025-04-29T19:08:46',
        },
        {
          bpm: 84,
          date: '2025-04-28T19:08:46',
        },
        {
          bpm: 80,
          date: '2025-04-27T19:08:46',
        },
        {
          bpm: 87,
          date: '2025-04-26T19:08:46',
        },
        {
          bpm: 73,
          date: '2025-04-25T19:08:46',
        },
      ],
      glucose: [],
      dailySteps: [
        {
          steps: 4898,
          date: '2025-05-04T19:08:46',
        },
        {
          steps: 5012,
          date: '2025-05-03T19:08:46',
        },
        {
          steps: 5230,
          date: '2025-05-02T19:08:46',
        },
        {
          steps: 4792,
          date: '2025-05-01T19:08:46',
        },
        {
          steps: 5047,
          date: '2025-04-30T19:08:46',
        },
        {
          steps: 5169,
          date: '2025-04-29T19:08:46',
        },
        {
          steps: 4857,
          date: '2025-04-28T19:08:46',
        },
        {
          steps: 5223,
          date: '2025-04-27T19:08:46',
        },
        {
          steps: 5405,
          date: '2025-04-26T19:08:46',
        },
        {
          steps: 4605,
          date: '2025-04-25T19:08:46',
        },
      ],
      sessionNotes: [],
      activity: 'medium',
    },
  },
  {
    id: '6ee315e4-0b24-42d9-8ff6-c715dd510bd2',
    name: 'Patricia',
    surname: 'Smith',
    age: 85,
    email: 'patricia.smith@example.com',
    phone: '+1-555-9587',
    photo: null,
    role: Roles.PATIENT,
    sex: 'female',
    weight: 80.3,
    height: 173,
    emergencyContact: {
      id: 'b1c88591-08c1-415e-9a5d-a2cc7db0e58e',
      name: 'Emily',
      surname: 'Mitchell',
      age: 55,
      email: 'emily.mitchell@example.com',
      phone: '+1-555-1010',
      photo: null,
      role: Roles.EMERGENCY_CONTACT,
      relationship: 'Daughter',
    },
    medicalData: {
      diagnoses: [
        {
          id: '79e28d47-da5e-448b-91bf-2217664687fe',
          name: 'Hypertension',
        },
        {
          id: '2813d0ab-a4c1-494b-89e8-658d266cd087',
          name: 'Mild Cognitive Impairment',
        },
      ],
      activeMedications: [
        {
          name: 'Ibuprofen',
          dosage: '200mg',
          frequency: 'As needed',
          startDate: '2025-03-24T19:06:11',
        },
      ],
      bloodPressure: [
        {
          systolic: 126,
          diastolic: 75,
          date: '2025-05-04T19:08:46',
        },
        {
          systolic: 138,
          diastolic: 74,
          date: '2025-05-03T19:08:46',
        },
        {
          systolic: 155,
          diastolic: 77,
          date: '2025-05-02T19:08:46',
        },
        {
          systolic: 141,
          diastolic: 86,
          date: '2025-05-01T19:08:46',
        },
        {
          systolic: 125,
          diastolic: 82,
          date: '2025-04-30T19:08:46',
        },
        {
          systolic: 125,
          diastolic: 90,
          date: '2025-04-29T19:08:46',
        },
        {
          systolic: 121,
          diastolic: 92,
          date: '2025-04-28T19:08:46',
        },
        {
          systolic: 133,
          diastolic: 75,
          date: '2025-04-27T19:08:46',
        },
        {
          systolic: 154,
          diastolic: 84,
          date: '2025-04-26T19:08:46',
        },
        {
          systolic: 156,
          diastolic: 89,
          date: '2025-04-25T19:08:46',
        },
      ],
      heartRate: [
        {
          bpm: 80,
          date: '2025-05-04T19:08:46',
        },
        {
          bpm: 76,
          date: '2025-05-03T19:08:46',
        },
        {
          bpm: 76,
          date: '2025-05-02T19:08:46',
        },
        {
          bpm: 71,
          date: '2025-05-01T19:08:46',
        },
        {
          bpm: 81,
          date: '2025-04-30T19:08:46',
        },
        {
          bpm: 90,
          date: '2025-04-29T19:08:46',
        },
        {
          bpm: 68,
          date: '2025-04-28T19:08:46',
        },
        {
          bpm: 65,
          date: '2025-04-27T19:08:46',
        },
        {
          bpm: 64,
          date: '2025-04-26T19:08:46',
        },
        {
          bpm: 82,
          date: '2025-04-25T19:08:46',
        },
      ],
      glucose: [
        {
          mgdl: 98,
          date: '2025-05-04T19:08:46',
        },
        {
          mgdl: 123,
          date: '2025-05-03T19:08:46',
        },
        {
          mgdl: 93,
          date: '2025-05-02T19:08:46',
        },
        {
          mgdl: 129,
          date: '2025-05-01T19:08:46',
        },
        {
          mgdl: 111,
          date: '2025-04-30T19:08:46',
        },
        {
          mgdl: 92,
          date: '2025-04-29T19:08:46',
        },
        {
          mgdl: 91,
          date: '2025-04-28T19:08:46',
        },
        {
          mgdl: 119,
          date: '2025-04-27T19:08:46',
        },
        {
          mgdl: 101,
          date: '2025-04-26T19:08:46',
        },
        {
          mgdl: 125,
          date: '2025-04-25T19:08:46',
        },
      ],
      dailySteps: [
        {
          steps: 5432,
          date: '2025-05-04T19:08:46',
        },
        {
          steps: 4828,
          date: '2025-05-03T19:08:46',
        },
        {
          steps: 4802,
          date: '2025-05-02T19:08:46',
        },
        {
          steps: 4775,
          date: '2025-05-01T19:08:46',
        },
        {
          steps: 4542,
          date: '2025-04-30T19:08:46',
        },
        {
          steps: 5198,
          date: '2025-04-29T19:08:46',
        },
        {
          steps: 4890,
          date: '2025-04-28T19:08:46',
        },
        {
          steps: 5471,
          date: '2025-04-27T19:08:46',
        },
        {
          steps: 4884,
          date: '2025-04-26T19:08:46',
        },
        {
          steps: 4794,
          date: '2025-04-25T19:08:46',
        },
      ],
      sessionNotes: [],
      activity: 'medium',
    },
  },
  {
    id: '25b024f8-470c-492c-8a7f-f924acaf3526',
    name: 'William',
    surname: 'Taylor',
    age: 76,
    email: 'william.taylor@example.com',
    phone: '+1-555-2928',
    photo: null,
    role: Roles.PATIENT,
    sex: 'male',
    weight: 60.5,
    height: 171,
    emergencyContact: {
      id: '007d6622-a209-4628-ba56-ef2ac918eba8',
      name: 'Emily',
      surname: 'Mitchell',
      age: 51,
      email: 'emily.mitchell@example.com',
      phone: '+1-555-1010',
      photo: null,
      role: Roles.EMERGENCY_CONTACT,
      relationship: 'Daughter',
    },
    medicalData: {
      diagnoses: [
        {
          id: 'c48e553a-9e20-4457-88c3-6d9bbd15479f',
          name: 'Osteoarthritis',
        },
        {
          id: 'e96cd8bc-7faa-488d-864d-7e48e0caa645',
          name: 'Mild Cognitive Impairment',
        },
      ],
      activeMedications: [
        {
          name: 'Lisinopril',
          dosage: '10mg',
          frequency: 'Once daily',
          startDate: '2025-03-03T19:06:11',
        },
        {
          name: 'Metformin',
          dosage: '500mg',
          frequency: 'Twice daily',
          startDate: '2025-04-16T19:06:11',
        },
      ],
      bloodPressure: [],
      heartRate: [
        {
          bpm: 79,
          date: '2025-05-04T19:08:46',
        },
        {
          bpm: 78,
          date: '2025-05-03T19:08:46',
        },
        {
          bpm: 88,
          date: '2025-05-02T19:08:46',
        },
        {
          bpm: 83,
          date: '2025-05-01T19:08:46',
        },
        {
          bpm: 64,
          date: '2025-04-30T19:08:46',
        },
        {
          bpm: 73,
          date: '2025-04-29T19:08:46',
        },
        {
          bpm: 74,
          date: '2025-04-28T19:08:46',
        },
        {
          bpm: 84,
          date: '2025-04-27T19:08:46',
        },
        {
          bpm: 65,
          date: '2025-04-26T19:08:46',
        },
        {
          bpm: 86,
          date: '2025-04-25T19:08:46',
        },
      ],
      glucose: [],
      dailySteps: [
        {
          steps: 2449,
          date: '2025-05-04T19:08:46',
        },
        {
          steps: 1970,
          date: '2025-05-03T19:08:46',
        },
        {
          steps: 2114,
          date: '2025-05-02T19:08:46',
        },
        {
          steps: 2470,
          date: '2025-05-01T19:08:46',
        },
        {
          steps: 1595,
          date: '2025-04-30T19:08:46',
        },
        {
          steps: 1763,
          date: '2025-04-29T19:08:46',
        },
        {
          steps: 1919,
          date: '2025-04-28T19:08:46',
        },
        {
          steps: 2215,
          date: '2025-04-27T19:08:46',
        },
        {
          steps: 1965,
          date: '2025-04-26T19:08:46',
        },
        {
          steps: 1727,
          date: '2025-04-25T19:08:46',
        },
      ],
      sessionNotes: [],
      activity: 'low',
    },
  },
  {
    id: '7a07ad37-de75-4d63-89f6-c114c7752fb1',
    name: 'John',
    surname: 'Johnson',
    age: 58,
    email: 'john.johnson@example.com',
    phone: '+1-555-2237',
    photo: null,
    role: Roles.PATIENT,
    sex: 'female',
    weight: 72.0,
    height: 151,
    emergencyContact: null,
    medicalData: {
      diagnoses: [
        {
          id: '964e47d8-7c58-4817-86f4-dbe8b1971a18',
          name: 'Type 2 Diabetes',
        },
        {
          id: '7e40eb38-d334-4453-8906-c262398c371f',
          name: 'Osteoarthritis',
        },
      ],
      activeMedications: [
        {
          name: 'Lisinopril',
          dosage: '10mg',
          frequency: 'Once daily',
          startDate: '2025-04-05T19:06:11',
        },
        {
          name: 'Metformin',
          dosage: '500mg',
          frequency: 'Twice daily',
          startDate: '2025-03-06T19:06:11',
        },
      ],
      bloodPressure: [
        {
          systolic: 139,
          diastolic: 74,
          date: '2025-05-04T19:08:46',
        },
        {
          systolic: 139,
          diastolic: 70,
          date: '2025-05-03T19:08:46',
        },
        {
          systolic: 158,
          diastolic: 71,
          date: '2025-05-02T19:08:46',
        },
        {
          systolic: 145,
          diastolic: 75,
          date: '2025-05-01T19:08:46',
        },
        {
          systolic: 121,
          diastolic: 77,
          date: '2025-04-30T19:08:46',
        },
        {
          systolic: 131,
          diastolic: 84,
          date: '2025-04-29T19:08:46',
        },
        {
          systolic: 133,
          diastolic: 91,
          date: '2025-04-28T19:08:46',
        },
        {
          systolic: 124,
          diastolic: 83,
          date: '2025-04-27T19:08:46',
        },
        {
          systolic: 152,
          diastolic: 95,
          date: '2025-04-26T19:08:46',
        },
        {
          systolic: 143,
          diastolic: 79,
          date: '2025-04-25T19:08:46',
        },
      ],
      heartRate: [
        {
          bpm: 61,
          date: '2025-05-04T19:08:46',
        },
        {
          bpm: 66,
          date: '2025-05-03T19:08:46',
        },
        {
          bpm: 80,
          date: '2025-05-02T19:08:46',
        },
        {
          bpm: 79,
          date: '2025-05-01T19:08:46',
        },
        {
          bpm: 81,
          date: '2025-04-30T19:08:46',
        },
        {
          bpm: 80,
          date: '2025-04-29T19:08:46',
        },
        {
          bpm: 80,
          date: '2025-04-28T19:08:46',
        },
        {
          bpm: 79,
          date: '2025-04-27T19:08:46',
        },
        {
          bpm: 60,
          date: '2025-04-26T19:08:46',
        },
        {
          bpm: 82,
          date: '2025-04-25T19:08:46',
        },
      ],
      glucose: [
        {
          mgdl: 125,
          date: '2025-05-04T19:08:46',
        },
        {
          mgdl: 96,
          date: '2025-05-03T19:08:46',
        },
        {
          mgdl: 101,
          date: '2025-05-02T19:08:46',
        },
        {
          mgdl: 120,
          date: '2025-05-01T19:08:46',
        },
        {
          mgdl: 106,
          date: '2025-04-30T19:08:46',
        },
        {
          mgdl: 99,
          date: '2025-04-29T19:08:46',
        },
        {
          mgdl: 104,
          date: '2025-04-28T19:08:46',
        },
        {
          mgdl: 130,
          date: '2025-04-27T19:08:46',
        },
        {
          mgdl: 105,
          date: '2025-04-26T19:08:46',
        },
        {
          mgdl: 104,
          date: '2025-04-25T19:08:46',
        },
      ],
      dailySteps: [
        {
          steps: 5335,
          date: '2025-05-04T19:08:46',
        },
        {
          steps: 4651,
          date: '2025-05-03T19:08:46',
        },
        {
          steps: 4758,
          date: '2025-05-02T19:08:46',
        },
        {
          steps: 4591,
          date: '2025-05-01T19:08:46',
        },
        {
          steps: 4628,
          date: '2025-04-30T19:08:46',
        },
        {
          steps: 4856,
          date: '2025-04-29T19:08:46',
        },
        {
          steps: 4905,
          date: '2025-04-28T19:08:46',
        },
        {
          steps: 4904,
          date: '2025-04-27T19:08:46',
        },
        {
          steps: 5428,
          date: '2025-04-26T19:08:46',
        },
        {
          steps: 4838,
          date: '2025-04-25T19:08:46',
        },
      ],
      sessionNotes: [],
      activity: 'medium',
    },
  },
  {
    id: '36c254c8-9373-4254-ac2e-ee03c4da56fe',
    name: 'Robert',
    surname: 'Taylor',
    age: 78,
    email: 'robert.taylor@example.com',
    phone: '+1-555-3091',
    photo: null,
    role: Roles.PATIENT,
    sex: 'female',
    weight: 58.8,
    height: 171,
    emergencyContact: {
      id: '9a82ffc9-95a8-46dc-882f-00d27057423c',
      name: 'Emily',
      surname: 'Mitchell',
      age: 55,
      email: 'emily.mitchell@example.com',
      phone: '+1-555-1010',
      photo: null,
      role: Roles.EMERGENCY_CONTACT,
      relationship: 'Daughter',
    },
    medicalData: {
      diagnoses: [
        {
          id: '47b7c045-ae2b-4c29-92b5-c0c4ad6212a0',
          name: 'Osteoarthritis',
        },
        {
          id: '7588aeb4-cf69-4b8e-983e-1fc08a645beb',
          name: 'Mild Cognitive Impairment',
        },
      ],
      activeMedications: [
        {
          name: 'Metformin',
          dosage: '500mg',
          frequency: 'Twice daily',
          startDate: '2025-03-05T19:06:11',
        },
      ],
      bloodPressure: [
        {
          systolic: 150,
          diastolic: 82,
          date: '2025-05-04T19:08:46',
        },
        {
          systolic: 147,
          diastolic: 79,
          date: '2025-05-03T19:08:46',
        },
        {
          systolic: 139,
          diastolic: 77,
          date: '2025-05-02T19:08:46',
        },
        {
          systolic: 157,
          diastolic: 84,
          date: '2025-05-01T19:08:46',
        },
        {
          systolic: 138,
          diastolic: 92,
          date: '2025-04-30T19:08:46',
        },
        {
          systolic: 136,
          diastolic: 89,
          date: '2025-04-29T19:08:46',
        },
        {
          systolic: 150,
          diastolic: 84,
          date: '2025-04-28T19:08:46',
        },
        {
          systolic: 122,
          diastolic: 74,
          date: '2025-04-27T19:08:46',
        },
        {
          systolic: 153,
          diastolic: 84,
          date: '2025-04-26T19:08:46',
        },
        {
          systolic: 130,
          diastolic: 86,
          date: '2025-04-25T19:08:46',
        },
      ],
      heartRate: [
        {
          bpm: 89,
          date: '2025-05-04T19:08:46',
        },
        {
          bpm: 88,
          date: '2025-05-03T19:08:46',
        },
        {
          bpm: 79,
          date: '2025-05-02T19:08:46',
        },
        {
          bpm: 82,
          date: '2025-05-01T19:08:46',
        },
        {
          bpm: 70,
          date: '2025-04-30T19:08:46',
        },
        {
          bpm: 64,
          date: '2025-04-29T19:08:46',
        },
        {
          bpm: 90,
          date: '2025-04-28T19:08:46',
        },
        {
          bpm: 61,
          date: '2025-04-27T19:08:46',
        },
        {
          bpm: 61,
          date: '2025-04-26T19:08:46',
        },
        {
          bpm: 77,
          date: '2025-04-25T19:08:46',
        },
      ],
      glucose: [],
      dailySteps: [
        {
          steps: 7642,
          date: '2025-05-04T19:08:46',
        },
        {
          steps: 7911,
          date: '2025-05-03T19:08:46',
        },
        {
          steps: 8463,
          date: '2025-05-02T19:08:46',
        },
        {
          steps: 7926,
          date: '2025-05-01T19:08:46',
        },
        {
          steps: 7787,
          date: '2025-04-30T19:08:46',
        },
        {
          steps: 8062,
          date: '2025-04-29T19:08:46',
        },
        {
          steps: 8349,
          date: '2025-04-28T19:08:46',
        },
        {
          steps: 7967,
          date: '2025-04-27T19:08:46',
        },
        {
          steps: 8316,
          date: '2025-04-26T19:08:46',
        },
        {
          steps: 7502,
          date: '2025-04-25T19:08:46',
        },
      ],
      sessionNotes: [],
      activity: 'high',
    },
  },
  {
    id: '8f37038f-f8e4-4810-af9e-43c28d065576',
    name: 'William',
    surname: 'Thomas',
    age: 41,
    email: 'william.thomas@example.com',
    phone: '+1-555-7467',
    photo: null,
    role: Roles.PATIENT,
    sex: 'female',
    weight: 80.2,
    height: 164,
    emergencyContact: null,
    medicalData: {
      diagnoses: [
        {
          id: 'cc6ef6dd-76d2-458c-b5b6-e52b793c45cd',
          name: 'Type 2 Diabetes',
        },
      ],
      activeMedications: [
        {
          name: 'Ibuprofen',
          dosage: '200mg',
          frequency: 'As needed',
          startDate: '2025-03-26T19:06:11',
        },
      ],
      bloodPressure: [
        {
          systolic: 140,
          diastolic: 85,
          date: '2025-05-04T19:08:46',
        },
        {
          systolic: 159,
          diastolic: 76,
          date: '2025-05-03T19:08:46',
        },
        {
          systolic: 137,
          diastolic: 77,
          date: '2025-05-02T19:08:46',
        },
        {
          systolic: 137,
          diastolic: 77,
          date: '2025-05-01T19:08:46',
        },
        {
          systolic: 121,
          diastolic: 93,
          date: '2025-04-30T19:08:46',
        },
        {
          systolic: 155,
          diastolic: 75,
          date: '2025-04-29T19:08:46',
        },
        {
          systolic: 147,
          diastolic: 89,
          date: '2025-04-28T19:08:46',
        },
        {
          systolic: 120,
          diastolic: 71,
          date: '2025-04-27T19:08:46',
        },
        {
          systolic: 129,
          diastolic: 72,
          date: '2025-04-26T19:08:46',
        },
        {
          systolic: 126,
          diastolic: 95,
          date: '2025-04-25T19:08:46',
        },
      ],
      heartRate: [
        {
          bpm: 71,
          date: '2025-05-04T19:08:46',
        },
        {
          bpm: 74,
          date: '2025-05-03T19:08:46',
        },
        {
          bpm: 68,
          date: '2025-05-02T19:08:46',
        },
        {
          bpm: 88,
          date: '2025-05-01T19:08:46',
        },
        {
          bpm: 84,
          date: '2025-04-30T19:08:46',
        },
        {
          bpm: 66,
          date: '2025-04-29T19:08:46',
        },
        {
          bpm: 89,
          date: '2025-04-28T19:08:46',
        },
        {
          bpm: 77,
          date: '2025-04-27T19:08:46',
        },
        {
          bpm: 83,
          date: '2025-04-26T19:08:46',
        },
        {
          bpm: 68,
          date: '2025-04-25T19:08:46',
        },
      ],
      glucose: [
        {
          mgdl: 127,
          date: '2025-05-04T19:08:46',
        },
        {
          mgdl: 96,
          date: '2025-05-03T19:08:46',
        },
        {
          mgdl: 101,
          date: '2025-05-02T19:08:46',
        },
        {
          mgdl: 91,
          date: '2025-05-01T19:08:46',
        },
        {
          mgdl: 111,
          date: '2025-04-30T19:08:46',
        },
        {
          mgdl: 123,
          date: '2025-04-29T19:08:46',
        },
        {
          mgdl: 115,
          date: '2025-04-28T19:08:46',
        },
        {
          mgdl: 117,
          date: '2025-04-27T19:08:46',
        },
        {
          mgdl: 126,
          date: '2025-04-26T19:08:46',
        },
        {
          mgdl: 103,
          date: '2025-04-25T19:08:46',
        },
      ],
      dailySteps: [
        {
          steps: 5312,
          date: '2025-05-04T19:08:46',
        },
        {
          steps: 5052,
          date: '2025-05-03T19:08:46',
        },
        {
          steps: 5256,
          date: '2025-05-02T19:08:46',
        },
        {
          steps: 4679,
          date: '2025-05-01T19:08:46',
        },
        {
          steps: 4547,
          date: '2025-04-30T19:08:46',
        },
        {
          steps: 4933,
          date: '2025-04-29T19:08:46',
        },
        {
          steps: 5344,
          date: '2025-04-28T19:08:46',
        },
        {
          steps: 5318,
          date: '2025-04-27T19:08:46',
        },
        {
          steps: 4802,
          date: '2025-04-26T19:08:46',
        },
        {
          steps: 4743,
          date: '2025-04-25T19:08:46',
        },
      ],
      sessionNotes: [],
      activity: 'medium',
    },
  },
  {
    id: '7349ba75-8290-4a1b-aba7-a6cddc951e9a',
    name: 'William',
    surname: 'Anderson',
    age: 70,
    email: 'william.anderson@example.com',
    phone: '+1-555-4736',
    photo: null,
    role: Roles.PATIENT,
    sex: 'male',
    weight: 59.0,
    height: 167,
    emergencyContact: {
      id: 'fd2cd619-05ab-4eae-88f1-2976eabf9b4b',
      name: 'Emily',
      surname: 'Mitchell',
      age: 55,
      email: 'emily.mitchell@example.com',
      phone: '+1-555-1010',
      photo: null,
      role: Roles.EMERGENCY_CONTACT,
      relationship: 'Daughter',
    },
    medicalData: {
      diagnoses: [
        {
          id: '3abc23b6-fc04-464f-9afd-51a991d9008e',
          name: 'Mild Cognitive Impairment',
        },
        {
          id: '6be4006e-b7aa-4918-9a54-0554747c73c6',
          name: 'Hypertension',
        },
      ],
      activeMedications: [
        {
          name: 'Metformin',
          dosage: '500mg',
          frequency: 'Twice daily',
          startDate: '2025-02-23T19:06:11',
        },
        {
          name: 'Lisinopril',
          dosage: '10mg',
          frequency: 'Once daily',
          startDate: '2025-02-13T19:06:11',
        },
      ],
      bloodPressure: [
        {
          systolic: 130,
          diastolic: 91,
          date: '2025-05-04T19:08:46',
        },
        {
          systolic: 151,
          diastolic: 88,
          date: '2025-05-03T19:08:46',
        },
        {
          systolic: 131,
          diastolic: 85,
          date: '2025-05-02T19:08:46',
        },
        {
          systolic: 150,
          diastolic: 87,
          date: '2025-05-01T19:08:46',
        },
        {
          systolic: 128,
          diastolic: 73,
          date: '2025-04-30T19:08:46',
        },
        {
          systolic: 125,
          diastolic: 70,
          date: '2025-04-29T19:08:46',
        },
        {
          systolic: 144,
          diastolic: 74,
          date: '2025-04-28T19:08:46',
        },
        {
          systolic: 147,
          diastolic: 95,
          date: '2025-04-27T19:08:46',
        },
        {
          systolic: 142,
          diastolic: 71,
          date: '2025-04-26T19:08:46',
        },
        {
          systolic: 143,
          diastolic: 77,
          date: '2025-04-25T19:08:46',
        },
      ],
      heartRate: [
        {
          bpm: 80,
          date: '2025-05-04T19:08:46',
        },
        {
          bpm: 88,
          date: '2025-05-03T19:08:46',
        },
        {
          bpm: 66,
          date: '2025-05-02T19:08:46',
        },
        {
          bpm: 61,
          date: '2025-05-01T19:08:46',
        },
        {
          bpm: 61,
          date: '2025-04-30T19:08:46',
        },
        {
          bpm: 66,
          date: '2025-04-29T19:08:46',
        },
        {
          bpm: 60,
          date: '2025-04-28T19:08:46',
        },
        {
          bpm: 82,
          date: '2025-04-27T19:08:46',
        },
        {
          bpm: 71,
          date: '2025-04-26T19:08:46',
        },
        {
          bpm: 87,
          date: '2025-04-25T19:08:46',
        },
      ],
      glucose: [],
      dailySteps: [
        {
          steps: 4867,
          date: '2025-05-04T19:08:46',
        },
        {
          steps: 5142,
          date: '2025-05-03T19:08:46',
        },
        {
          steps: 5264,
          date: '2025-05-02T19:08:46',
        },
        {
          steps: 4890,
          date: '2025-05-01T19:08:46',
        },
        {
          steps: 4718,
          date: '2025-04-30T19:08:46',
        },
        {
          steps: 5069,
          date: '2025-04-29T19:08:46',
        },
        {
          steps: 4654,
          date: '2025-04-28T19:08:46',
        },
        {
          steps: 5092,
          date: '2025-04-27T19:08:46',
        },
        {
          steps: 4891,
          date: '2025-04-26T19:08:46',
        },
        {
          steps: 4746,
          date: '2025-04-25T19:08:46',
        },
      ],
      sessionNotes: [],
      activity: 'medium',
    },
  },
  {
    id: '9cd4777f-d287-4188-9f25-af03601fa9c0',
    name: 'William',
    surname: 'Smith',
    age: 76,
    email: 'william.smith@example.com',
    phone: '+1-555-9252',
    photo: null,
    role: Roles.PATIENT,
    sex: 'male',
    weight: 64.1,
    height: 154,
    emergencyContact: {
      id: '7dabcd40-21f5-4ad5-9405-06fe82e2b9fe',
      name: 'Emily',
      surname: 'Mitchell',
      age: 55,
      email: 'emily.mitchell@example.com',
      phone: '+1-555-1010',
      photo: null,
      role: Roles.EMERGENCY_CONTACT,
      relationship: 'Daughter',
    },
    medicalData: {
      diagnoses: [
        {
          id: '095e78bf-9e86-42e4-b65c-0982479e02c8',
          name: 'Mild Cognitive Impairment',
        },
        {
          id: '71396662-287f-488c-8dc3-71b020350ccb',
          name: 'Osteoarthritis',
        },
      ],
      activeMedications: [
        {
          name: 'Lisinopril',
          dosage: '10mg',
          frequency: 'Once daily',
          startDate: '2025-05-02T19:06:11',
        },
        {
          name: 'Metformin',
          dosage: '500mg',
          frequency: 'Twice daily',
          startDate: '2025-02-08T19:06:11',
        },
      ],
      bloodPressure: [
        {
          systolic: 144,
          diastolic: 78,
          date: '2025-05-04T19:08:46',
        },
        {
          systolic: 147,
          diastolic: 83,
          date: '2025-05-03T19:08:46',
        },
        {
          systolic: 135,
          diastolic: 74,
          date: '2025-05-02T19:08:46',
        },
        {
          systolic: 134,
          diastolic: 85,
          date: '2025-05-01T19:08:46',
        },
        {
          systolic: 134,
          diastolic: 80,
          date: '2025-04-30T19:08:46',
        },
        {
          systolic: 138,
          diastolic: 75,
          date: '2025-04-29T19:08:46',
        },
        {
          systolic: 154,
          diastolic: 92,
          date: '2025-04-28T19:08:46',
        },
        {
          systolic: 136,
          diastolic: 72,
          date: '2025-04-27T19:08:46',
        },
        {
          systolic: 136,
          diastolic: 74,
          date: '2025-04-26T19:08:46',
        },
        {
          systolic: 134,
          diastolic: 75,
          date: '2025-04-25T19:08:46',
        },
      ],
      heartRate: [
        {
          bpm: 82,
          date: '2025-05-04T19:08:46',
        },
        {
          bpm: 61,
          date: '2025-05-03T19:08:46',
        },
        {
          bpm: 69,
          date: '2025-05-02T19:08:46',
        },
        {
          bpm: 80,
          date: '2025-05-01T19:08:46',
        },
        {
          bpm: 78,
          date: '2025-04-30T19:08:46',
        },
        {
          bpm: 61,
          date: '2025-04-29T19:08:46',
        },
        {
          bpm: 77,
          date: '2025-04-28T19:08:46',
        },
        {
          bpm: 67,
          date: '2025-04-27T19:08:46',
        },
        {
          bpm: 65,
          date: '2025-04-26T19:08:46',
        },
        {
          bpm: 71,
          date: '2025-04-25T19:08:46',
        },
      ],
      glucose: [],
      dailySteps: [
        {
          steps: 8417,
          date: '2025-05-04T19:08:46',
        },
        {
          steps: 8397,
          date: '2025-05-03T19:08:46',
        },
        {
          steps: 8229,
          date: '2025-05-02T19:08:46',
        },
        {
          steps: 7946,
          date: '2025-05-01T19:08:46',
        },
        {
          steps: 7841,
          date: '2025-04-30T19:08:46',
        },
        {
          steps: 8111,
          date: '2025-04-29T19:08:46',
        },
        {
          steps: 7686,
          date: '2025-04-28T19:08:46',
        },
        {
          steps: 8330,
          date: '2025-04-27T19:08:46',
        },
        {
          steps: 8267,
          date: '2025-04-26T19:08:46',
        },
        {
          steps: 7918,
          date: '2025-04-25T19:08:46',
        },
      ],
      sessionNotes: [],
      activity: 'high',
    },
  },
  {
    id: '907995f1-6a6e-4d78-98b9-cdfa2d00dec7',
    name: 'Barbara',
    surname: 'Thomas',
    age: 56,
    email: 'barbara.thomas@example.com',
    phone: '+1-555-8645',
    photo: null,
    role: Roles.PATIENT,
    sex: 'male',
    weight: 78.1,
    height: 167,
    emergencyContact: null,
    medicalData: {
      diagnoses: [
        {
          id: '4d7d8dc6-2922-4b57-b970-c2cfe1b263e5',
          name: 'Type 2 Diabetes',
        },
      ],
      activeMedications: [
        {
          name: 'Metformin',
          dosage: '500mg',
          frequency: 'Twice daily',
          startDate: '2025-02-11T19:06:11',
        },
        {
          name: 'Ibuprofen',
          dosage: '200mg',
          frequency: 'As needed',
          startDate: '2025-02-09T19:06:11',
        },
      ],
      bloodPressure: [
        {
          systolic: 126,
          diastolic: 81,
          date: '2025-05-04T19:08:46',
        },
        {
          systolic: 120,
          diastolic: 86,
          date: '2025-05-03T19:08:46',
        },
        {
          systolic: 126,
          diastolic: 75,
          date: '2025-05-02T19:08:46',
        },
        {
          systolic: 151,
          diastolic: 82,
          date: '2025-05-01T19:08:46',
        },
        {
          systolic: 122,
          diastolic: 91,
          date: '2025-04-30T19:08:46',
        },
        {
          systolic: 125,
          diastolic: 75,
          date: '2025-04-29T19:08:46',
        },
        {
          systolic: 142,
          diastolic: 75,
          date: '2025-04-28T19:08:46',
        },
        {
          systolic: 143,
          diastolic: 91,
          date: '2025-04-27T19:08:46',
        },
        {
          systolic: 139,
          diastolic: 91,
          date: '2025-04-26T19:08:46',
        },
        {
          systolic: 134,
          diastolic: 80,
          date: '2025-04-25T19:08:46',
        },
      ],
      heartRate: [
        {
          bpm: 72,
          date: '2025-05-04T19:08:46',
        },
        {
          bpm: 86,
          date: '2025-05-03T19:08:46',
        },
        {
          bpm: 74,
          date: '2025-05-02T19:08:46',
        },
        {
          bpm: 78,
          date: '2025-05-01T19:08:46',
        },
        {
          bpm: 69,
          date: '2025-04-30T19:08:46',
        },
        {
          bpm: 79,
          date: '2025-04-29T19:08:46',
        },
        {
          bpm: 69,
          date: '2025-04-28T19:08:46',
        },
        {
          bpm: 89,
          date: '2025-04-27T19:08:46',
        },
        {
          bpm: 72,
          date: '2025-04-26T19:08:46',
        },
        {
          bpm: 72,
          date: '2025-04-25T19:08:46',
        },
      ],
      glucose: [
        {
          mgdl: 107,
          date: '2025-05-04T19:08:46',
        },
        {
          mgdl: 102,
          date: '2025-05-03T19:08:46',
        },
        {
          mgdl: 93,
          date: '2025-05-02T19:08:46',
        },
        {
          mgdl: 116,
          date: '2025-05-01T19:08:46',
        },
        {
          mgdl: 119,
          date: '2025-04-30T19:08:46',
        },
        {
          mgdl: 109,
          date: '2025-04-29T19:08:46',
        },
        {
          mgdl: 98,
          date: '2025-04-28T19:08:46',
        },
        {
          mgdl: 103,
          date: '2025-04-27T19:08:46',
        },
        {
          mgdl: 119,
          date: '2025-04-26T19:08:46',
        },
        {
          mgdl: 106,
          date: '2025-04-25T19:08:46',
        },
      ],
      dailySteps: [
        {
          steps: 4574,
          date: '2025-05-04T19:08:46',
        },
        {
          steps: 5065,
          date: '2025-05-03T19:08:46',
        },
        {
          steps: 5004,
          date: '2025-05-02T19:08:46',
        },
        {
          steps: 4902,
          date: '2025-05-01T19:08:46',
        },
        {
          steps: 5154,
          date: '2025-04-30T19:08:46',
        },
        {
          steps: 4638,
          date: '2025-04-29T19:08:46',
        },
        {
          steps: 5260,
          date: '2025-04-28T19:08:46',
        },
        {
          steps: 4678,
          date: '2025-04-27T19:08:46',
        },
        {
          steps: 4894,
          date: '2025-04-26T19:08:46',
        },
        {
          steps: 5096,
          date: '2025-04-25T19:08:46',
        },
      ],
      sessionNotes: [],
      activity: 'medium',
    },
  },
  {
    id: '1bb1ff34-873d-46fb-8f16-6bee5cb8dc95',
    name: 'James',
    surname: 'Taylor',
    age: 51,
    email: 'james.taylor@example.com',
    phone: '+1-555-7548',
    photo: null,
    role: Roles.PATIENT,
    sex: 'female',
    weight: 60.5,
    height: 164,
    emergencyContact: null,
    medicalData: {
      diagnoses: [
        {
          id: '97af23e9-71f0-4401-8ba6-fd21b319f3e2',
          name: 'Type 2 Diabetes',
        },
      ],
      activeMedications: [
        {
          name: 'Metformin',
          dosage: '500mg',
          frequency: 'Twice daily',
          startDate: '2025-04-19T19:06:11',
        },
        {
          name: 'Ibuprofen',
          dosage: '200mg',
          frequency: 'As needed',
          startDate: '2025-03-17T19:06:11',
        },
      ],
      bloodPressure: [],
      heartRate: [
        {
          bpm: 86,
          date: '2025-05-04T19:08:46',
        },
        {
          bpm: 83,
          date: '2025-05-03T19:08:46',
        },
        {
          bpm: 73,
          date: '2025-05-02T19:08:46',
        },
        {
          bpm: 83,
          date: '2025-05-01T19:08:46',
        },
        {
          bpm: 71,
          date: '2025-04-30T19:08:46',
        },
        {
          bpm: 82,
          date: '2025-04-29T19:08:46',
        },
        {
          bpm: 77,
          date: '2025-04-28T19:08:46',
        },
        {
          bpm: 65,
          date: '2025-04-27T19:08:46',
        },
        {
          bpm: 75,
          date: '2025-04-26T19:08:46',
        },
        {
          bpm: 81,
          date: '2025-04-25T19:08:46',
        },
      ],
      glucose: [
        {
          mgdl: 96,
          date: '2025-05-04T19:08:46',
        },
        {
          mgdl: 109,
          date: '2025-05-03T19:08:46',
        },
        {
          mgdl: 118,
          date: '2025-05-02T19:08:46',
        },
        {
          mgdl: 91,
          date: '2025-05-01T19:08:46',
        },
        {
          mgdl: 100,
          date: '2025-04-30T19:08:46',
        },
        {
          mgdl: 114,
          date: '2025-04-29T19:08:46',
        },
        {
          mgdl: 107,
          date: '2025-04-28T19:08:46',
        },
        {
          mgdl: 94,
          date: '2025-04-27T19:08:46',
        },
        {
          mgdl: 106,
          date: '2025-04-26T19:08:46',
        },
        {
          mgdl: 90,
          date: '2025-04-25T19:08:46',
        },
      ],
      dailySteps: [
        {
          steps: 4767,
          date: '2025-05-04T19:08:46',
        },
        {
          steps: 5267,
          date: '2025-05-03T19:08:46',
        },
        {
          steps: 4812,
          date: '2025-05-02T19:08:46',
        },
        {
          steps: 4926,
          date: '2025-05-01T19:08:46',
        },
        {
          steps: 5338,
          date: '2025-04-30T19:08:46',
        },
        {
          steps: 4703,
          date: '2025-04-29T19:08:46',
        },
        {
          steps: 4797,
          date: '2025-04-28T19:08:46',
        },
        {
          steps: 5245,
          date: '2025-04-27T19:08:46',
        },
        {
          steps: 4653,
          date: '2025-04-26T19:08:46',
        },
        {
          steps: 4809,
          date: '2025-04-25T19:08:46',
        },
      ],
      sessionNotes: [],
      activity: 'medium',
    },
  },
]
