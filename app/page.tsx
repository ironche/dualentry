'use client'
import { styled } from '@mui/material/styles'
import { Breadcrumbs, Typography, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { useInvoicesList, Invoice } from '~/api'
import { DataTable, DataTableCol } from '~/shared/datatable'
import { LoadingIndicator, Header, HeaderIcon, Wrapper } from './_components/page-fragments'

const NoWrapCell = styled('span')`
  white-space: nowrap;
`

const AlignCenterCell = styled('div')`
  text-align: center;
`

const AlignRightCell = styled('div')`
  text-align: right;
`

export default function Home() {
  const { data, loading, error } = useInvoicesList(10, 0)

  const columnDefs: DataTableCol<Invoice>[] = [
    {
      field: 'id',
      headerName: 'ID',
    },
    {
      field: 'issue_date',
      headerName: 'Issue Date',
      renderHeader(headerName) {
        return <NoWrapCell>{headerName}</NoWrapCell>
      },
      renderCell(cellValue) {
        return <NoWrapCell>{cellValue}</NoWrapCell>
      },
    },
    {
      field: 'due_date',
      headerName: 'Due Date',
      renderHeader(headerName) {
        return <NoWrapCell>{headerName}</NoWrapCell>
      },
      renderCell(cellValue) {
        return <NoWrapCell>{cellValue}</NoWrapCell>
      },
    },
    {
      field: 'transaction',
      headerName: 'Transaction No.',
      renderHeader(headerName) {
        return <NoWrapCell>{headerName}</NoWrapCell>
      },
    },
    {
      field: 'client',
      headerName: 'Customer',
      renderCell(cellValue) {
        return <NoWrapCell>{`${cellValue.first_name} ${cellValue.last_name}`}</NoWrapCell>
      },
    },
    {
      field: 'client',
      headerName: 'Company',
      renderCell(cellValue) {
        return <NoWrapCell>{cellValue.company.name}</NoWrapCell>
      },
    },
    {
      field: 'total',
      headerName: 'Total',
      renderHeader(headerName) {
        return <AlignRightCell>{headerName}</AlignRightCell>
      },
      renderCell(cellValue) {
        return <AlignRightCell>{parseFloat(cellValue).toFixed(2)}</AlignRightCell>
      },
    },
    {
      field: 'currency',
      headerName: 'Currency',
      renderHeader(headerName) {
        return <AlignCenterCell>{headerName}</AlignCenterCell>
      },
      renderCell(cellValue) {
        return <AlignCenterCell>{cellValue}</AlignCenterCell>
      },
    },
    {
      field: 'exchange',
      headerName: 'Exchange Rate',
      renderHeader(headerName) {
        return (
          <AlignRightCell>
            <NoWrapCell>{headerName}</NoWrapCell>
          </AlignRightCell>
        )
      },
      renderCell(cellValue) {
        return <AlignRightCell>{cellValue}</AlignRightCell>
      },
    },
  ]

  return (
    <main>
      <LoadingIndicator loading={loading} />
      <Header>
        <div>
          <Breadcrumbs aria-label="breadcrumb">
            <Typography variant="body2">Financials</Typography>
            <Typography variant="body2">Workflows</Typography>
          </Breadcrumbs>
          <Typography variant="h3">
            <HeaderIcon /> Invoice
          </Typography>
        </div>
        <div>
          <Button
            variant="outlined"
            startIcon={<AddIcon />}
          >
            Add New
          </Button>
        </div>
      </Header>
      <Wrapper>
        <DataTable
          cols={columnDefs}
          rows={data?.invoices ?? []}
          totalRows={data?.invoices_aggregate.aggregate?.count ?? 0}
          isLoading={loading}
          rowSize="small"
        />
      </Wrapper>
    </main>
  )
}
