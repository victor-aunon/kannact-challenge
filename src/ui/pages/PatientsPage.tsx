import { HomeLayout } from 'ui/layouts/HomeLayout'
import { lazy, Suspense } from 'react'
import { TableSkeleton } from 'ui/components/table'

const PatientsList = lazy(() => import('ui/components/patients/PatientsList'))

export function PatientsPage() {
  return (
    <HomeLayout navbarTitle="Patients" navbarIconName="patients">
      <Suspense fallback={<TableSkeleton rows={11} columns={5} />}>
        <PatientsList />
      </Suspense>
    </HomeLayout>
  )
}
