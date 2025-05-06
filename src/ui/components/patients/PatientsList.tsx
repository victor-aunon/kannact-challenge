import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { endpoints } from 'api/endpoints'
import httpClient from 'api/index'
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TablePagination,
} from 'ui/components/table'
import { icons } from 'ui/icons'
import { Avatar, AvatarFallback, AvatarImage } from 'ui/components/avatar'
import type { Patient } from 'domain/users'

const fetchPatients = async () => {
  const { data } = await httpClient()(endpoints.listPatients.route)
  return data
}

const fetchPatient = async (id: UUID) => {
  const { data } = await httpClient()(endpoints.getPatient.route(id))
  return data
}

export default function PatientsList() {
  const {
    data: patients,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['patients'],
    queryFn: fetchPatients,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  })

  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})

  const columns: ColumnDef<Patient>[] = [
    {
      accessorKey: 'photo',
      header: '',
      enableHiding: true,
      cell: ({ row }) => {
        return (
          <Avatar>
            {(row.getValue('photo') as Patient['photo']) && (
              <AvatarImage src={row.getValue('photo')} />
            )}
            <AvatarFallback>
              {(row.getValue('name') as string)[0]}
              {(row.getValue('surname') as string)[0]}
            </AvatarFallback>
          </Avatar>
        )
      },
    },
    {
      accessorKey: 'name',
      header: ({ column }) => {
        return (
          <button
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Name
            {column.getIsSorted() === 'asc'
              ? icons.sortAscAlpha
              : icons.sortDescAlpha}
          </button>
        )
      },
    },
    {
      accessorKey: 'surname',
      header: ({ column }) => {
        return (
          <button
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Surname
            {column.getIsSorted() === 'asc'
              ? icons.sortAscAlpha
              : icons.sortDescAlpha}
          </button>
        )
      },
    },
    {
      accessorKey: 'age',
      enableHiding: true,
      header: ({ column }) => {
        return (
          <button
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Age (yo)
            {column.getIsSorted() === 'asc'
              ? icons.sortAscNumber
              : icons.sortDescNumber}
          </button>
        )
      },
    },
    {
      accessorKey: 'weight',
      enableHiding: true,
      header: ({ column }) => {
        return (
          <button
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Weight (kg)
            {column.getIsSorted() === 'asc'
              ? icons.sortAscNumber
              : icons.sortDescNumber}
          </button>
        )
      },
    },
    {
      accessorKey: 'phone',
      enableHiding: true,
      header: 'Phone',
    },
  ]

  const table = useReactTable({
    data: patients || [],
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  })

  if (isLoading) <div>Loading...</div>

  if (error) return <div>Error: {error.message}</div>

  return (
    <>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map(header => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map(row => (
              <TableRow key={row.id} className="table__row--selectable">
                {row.getVisibleCells().map(cell => (
                  <TableCell key={cell.id} className="table__cell--centered">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                className="table__cell--centered"
                colSpan={columns.length}
              >
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      {patients && (
        <TablePagination
          page={table.getState().pagination.pageIndex + 1}
          pageCount={table.getPageCount()}
          totalItems={table.getRowCount()}
          onPreviousPage={() => table.previousPage()}
          onNextPage={() => table.nextPage()}
          canPreviousPage={table.getCanPreviousPage()}
          canNextPage={table.getCanNextPage()}
        />
      )}
    </>
  )
}
