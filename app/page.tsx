'use client'
import { Breadcrumbs, Typography, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import { useInvoicesList } from '~/api'
import { DataTable } from '~/shared/datatable'
import { LoadingIndicator, Header, HeaderIcon, Wrapper } from './_components/page-fragments'
import { useColumnDefs } from './_components/column-defs'

export default function Home() {
  const { data, loading, error } = useInvoicesList(10, 0)
  const columnDefs = useColumnDefs()

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
