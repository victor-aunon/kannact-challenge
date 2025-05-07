import { useParams } from '@tanstack/react-router'
import routePaths from 'app/routes/routePaths'
import { useGetPatient } from 'application/getPatient'
import { PatientLayout } from 'ui/layouts/PatientLayout'
import { UserCard, PatientCard } from 'ui/components/patients/userCards'
import { useDeletePatient } from 'application/deletePatient'
import { useUpdatePatient } from 'application/updatePatient'
import { useDeleteEmergencyContact } from 'application/deleteEmergencyContact'
import { Roles } from 'domain/users'

export function PatientPage() {
  const { patientId } = useParams({ from: routePaths.patient })
  const { data: patient, error } = useGetPatient(patientId as UUID)

  const updatePatient = useUpdatePatient()
  const deletePatient = useDeletePatient()
  const deleteEmergencyContact = useDeleteEmergencyContact()

  const patientName = `${patient?.name} ${patient?.surname || ''}`

  if (error) {
    return (
      <PatientLayout navbarTitle={patientName} navbarIconName="patient">
        <p>{error.message}</p>
      </PatientLayout>
    )
  }

  return (
    <PatientLayout navbarTitle={patientName} navbarIconName="patient">
      <PatientCard
        patient={patient}
        onEdit={() => {}}
        onDelete={() => deletePatient(patientId as UUID)}
      />
      {patient.emergencyContact && (
        <UserCard
          user={patient.emergencyContact}
          role={Roles.EMERGENCY_CONTACT}
          relationship={patient.emergencyContact.relationship}
          onEdit={() => {}}
          onDelete={() => deleteEmergencyContact(patientId as UUID)}
        />
      )}
    </PatientLayout>
  )
}
