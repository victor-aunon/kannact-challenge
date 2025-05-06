type ApiEndPoint<
  M extends 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE' = 'GET',
  R extends string | ((...args: any[]) => string) = string,
> = {
  method: M
  route: R
}

export const endpoints = {
  listPatients: {
    method: 'GET',
    route: 'api/v1/patients',
  } as ApiEndPoint,
  getPatient: {
    method: 'GET',
    route: (id: UUID) => `api/v1/patients/${id}`,
  } as ApiEndPoint<'GET', (id: UUID) => string>,
}
