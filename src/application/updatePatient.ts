import { useQueryClient } from '@tanstack/react-query'
import { alertService } from 'services/alert.adapter'
import { apiService } from 'services/api.adapter'

import type { AlertService, ApiService } from 'application/ports'
import type { Patient } from 'domain/users'

export function useUpdatePatient() {
  const alert: AlertService = alertService()
  const api: ApiService = apiService()
  const queryClient = useQueryClient()

  return async function updatePatient(
    patientId: UUID,
    payload: Partial<Patient>,
  ) {
    try {
      const { isConfirmed } = await alert.questionAlert({
        title: 'Are you sure you want to update this patient?',
        cancelButtonText: 'Cancel',
        focusConfirm: true,
      })
      if (!isConfirmed) return

      await api.updatePatient(patientId, payload)
      await queryClient.invalidateQueries({ queryKey: ['patients'] })
      await queryClient.invalidateQueries({ queryKey: ['patient', patientId] })
      await alert.successAlert({
        title: 'Patient updated successfully',
      })
    } catch (error) {
      await alert.errorAlert({
        title: (error as Error).message,
      })
    }
  }
}
