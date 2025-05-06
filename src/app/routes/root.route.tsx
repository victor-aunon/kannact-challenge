import type { RouterContext } from '@/app/router'
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { HomeLayout } from 'ui/layouts/HomeLayout'

export const rootRoute = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <HomeLayout>
      <Outlet />
    </HomeLayout>
  ),
})
