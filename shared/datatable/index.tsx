'use client'
import { useLayoutEffect, useMemo, useState, ReactNode } from 'react'
import { styled } from '@mui/material/styles'
import { Typography } from '@mui/material'
import { DataTableCol, DataTableRow, TableRowSize, TableTemplate } from './models/table'
import { TableHeader } from './components/TableHeader'
import { TableData } from './components/TableData'
import { LoadingTable } from './components/LoadingTable'
import { EmptyTable } from './components/EmptyTable'
export * from './models/table'

const DataTableWrapper = styled('section')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}))

const TotalRows = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: '8px 0',
  textAlign: 'right',
}))

export interface DataTableProps {
  cols: DataTableCol[]
  rows: DataTableRow[]
  totalRows: number
  isLoading?: boolean
  rowSize?: TableRowSize
  title?: string | null
  headerToolbar?: ReactNode
  filterToolbar?: ReactNode
  onSearch?: (term: string) => void
  onSetPage?: (value: number) => void
}

export function DataTable(props: DataTableProps) {
  const [template, setTemplate] = useState(TableTemplate.LOADING)

  const rows = useMemo<DataTableRow[]>(() => {
    if (Array.isArray(props.rows)) {
      return props.rows
    }
    return []
  }, [props.rows])

  useLayoutEffect(() => {
    if (props.isLoading) {
      setTemplate(TableTemplate.LOADING)
    } else {
      if (rows.length) {
        setTemplate(TableTemplate.DATA)
      } else {
        setTemplate(TableTemplate.EMPTY)
      }
    }
  }, [rows.length, props.isLoading])

  function resetPage(): void {
    props.onSetPage?.(0)
  }

  return (
    <DataTableWrapper>
      <TableHeader
        headerToolbar={props.headerToolbar}
        filterToolbar={props.filterToolbar}
        onSearch={(value) => {
          props.onSearch?.(value)
          resetPage()
        }}
      />
      {template === TableTemplate.LOADING && <LoadingTable />}
      {template === TableTemplate.EMPTY && <EmptyTable />}
      {template === TableTemplate.DATA && (
        <>
          <TableData
            cols={props.cols}
            rows={rows}
            rowSize={props.rowSize}
          />
          <TotalRows>
            <Typography variant="caption">{`Showing ${rows.length} of ${props.totalRows} records`}</Typography>
          </TotalRows>
        </>
      )}
    </DataTableWrapper>
  )
}
