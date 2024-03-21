'use client'
import { useState, useMemo, useEffect } from 'react'
import { Breadcrumbs, Typography, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useInvoicesList, Invoice } from '~/api'
import { DataTable } from '~/shared/datatable'
import { useDebounce } from '~/shared/hooks'
import { LoadingIndicator, Header, HeaderIcon, Wrapper, Footer } from './_components/page-fragments'
import { useColumnDefs } from './_components/column-defs'

const invoicesCache = new Map<number, Invoice>()

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearchTerm = useDebounce(searchTerm, 750)
  const [offset, setOffset] = useState(0)
  const debouncedOffset = useDebounce(offset, 750)
  const { data, loading, error } = useInvoicesList(debouncedSearchTerm, 10, debouncedOffset)
  const columnDefs = useColumnDefs()

  const invoices = useMemo(() => {
    if (Array.isArray(data?.invoices) && data.invoices.length) {
      data.invoices.forEach((invoice) => {
        invoicesCache.set(invoice.id, invoice)
      })
    }
    return Array.from(invoicesCache.values())
  }, [data?.invoices])

  useEffect(() => {
    invoicesCache.clear()
  }, [debouncedSearchTerm])

  return (
    <main>
      <LoadingIndicator
        color="inherit"
        loading={loading}
      />
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
          rows={invoices}
          totalRows={data?.invoices_aggregate.aggregate?.count ?? 0}
          isLoading={!invoices.length && loading}
          rowSize="small"
          onSearch={setSearchTerm}
          onSetPage={setOffset}
        />
      </Wrapper>
      <Footer>
        <Button
          variant="outlined"
          endIcon={<KeyboardArrowDownIcon />}
          onClick={() => setOffset(offset + 10)}
          disabled={loading}
        >
          Show more
        </Button>
      </Footer>
    </main>
  )
}
