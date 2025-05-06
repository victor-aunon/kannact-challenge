import PatientsList from 'ui/components/patients/PatientsList'
import { createRoute } from '@tanstack/react-router'
import routePaths from 'app/routes/routePaths'
import { rootRoute } from 'app/routes/root.route'
import { apiService } from 'services/api.adapter'

export const patientsRoute = createRoute({
  path: routePaths.patients,
  getParentRoute: () => rootRoute,
  loader: async ({ context }) => {
    const queryClient = context.queryClient
    const { getPatients } = apiService()
    await queryClient.ensureQueryData({
      queryKey: ['patients'],
      queryFn: getPatients,
    })
  },
  component: PatientsList,
})
