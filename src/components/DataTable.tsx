import {
  ColumnDef,
  PaginationState,
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/Table'
import { Loader2, PackageOpen } from 'lucide-react'
import { Pagination } from './Pagination'
import { cn } from '@/lib/utils'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  className?: string
  total?: number
  pagination?: PaginationState
  loading?: boolean
  onPaginationChange?: (pagination: PaginationState) => void
}

export function DataTable<TData, TValue>({
  columns,
  data,
  className,
  total = 40,
  loading,
  pagination,
  onPaginationChange
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    pageCount: Math.ceil(total / pagination.pageSize),
    state: {
      pagination: pagination
    },
    manualPagination: true,
    onPaginationChange: onPaginationChange
  })
  return (
    <>
      <Table className={cn('relative', className)}>
        {loading && (
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-20 ">
            <Loader2 className="w-10 h-10 text-primary animate-spin" />
          </div>
        )}
        <TableHeader className={cn({ 'opacity-30': loading })}>
          {table.getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map(header => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody className={cn('h-80', { 'opacity-30': loading })}>
          {(() => {
            if (table.getRowModel().rows?.length) {
              return table.getRowModel().rows.map(row => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map(cell => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            }
            return (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="text-lg text-center gap-4 text-muted-foreground space-y-3"
                >
                  <PackageOpen width={48} height={48} className="m-auto" />
                  <p>No results.</p>
                </TableCell>
              </TableRow>
            )
          })()}
        </TableBody>
      </Table>
      <Pagination table={table} />
    </>
  )
}
