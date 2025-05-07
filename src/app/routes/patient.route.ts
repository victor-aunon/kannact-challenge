import { createRoute } from '@tanstack/react-router'
import { rootRoute } from 'app/routes/root.route'
import routePaths from 'app/routes/routePaths'
import { apiService } from 'services/api.adapter'
import { PatientPage } from 'ui/pages/PatientPage'

export const patientRoute = createRoute({
  path: routePaths.patient,
  getParentRoute: () => rootRoute,
  loader: async ({ context, params }) => {
    const queryClient = context.queryClient
    const { getPatient } = apiService()
    await queryClient.ensureQueryData({
      queryKey: ['patient', params.patientId],
      queryFn: () => getPatient(params.patientId as UUID),
    })
  },
  component: PatientPage,
})
