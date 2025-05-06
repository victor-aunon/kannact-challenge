import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import type { RouterContext } from '@/app/router'

export const rootRoute = createRootRouteWithContext<RouterContext>()({
  component: () => <Outlet />,
})
