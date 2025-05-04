import { useQuery } from "@tanstack/react-query";
import { endpoints } from "api/endpoints";
import httpClient from "api/index";

const fetchPatients = async () => {
  const { data } = await httpClient()(endpoints.listPatients.route);
  return data
}

export default function PatientsList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['patients'],
    queryFn: fetchPatients
  });

  console.log(data, isLoading, error)

  if (isLoading) <div>Loading...</div>

  if (error) return <div>Error: {error.message}</div>

  return (
    <ul>
      {data?.map((patient) => (
        <li key={patient.id}>{patient.name}</li>
      ))}
    </ul>
  )
}
