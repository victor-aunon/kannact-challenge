import { createRouter } from '@tanstack/react-router'
import queryClient from 'app/queryClient'
import { rootRoute } from 'app/routes/root.route'
import { patientsRoute } from 'app/routes/patients.route'

export type RouterContext = {
  queryClient: typeof queryClient
}

const routeTree = rootRoute.addChildren([patientsRoute])

const router = createRouter({
  routeTree,
  context: { queryClient },
})

export default router
