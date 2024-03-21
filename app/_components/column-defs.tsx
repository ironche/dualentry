import { useState } from 'react'
import { styled } from '@mui/material/styles'
import { Checkbox, IconButton } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { DataTableCol } from '~/shared/datatable'
import { useToggle } from '~/shared/hooks'

const NoWrapCell = styled('span')`
  white-space: nowrap;
`

const AlignCenterCell = styled('div')`
  text-align: center;
`

const AlignRightCell = styled('div')`
  text-align: right;
`

export function useColumnDefs(): DataTableCol[] {
  const [allChecked, toggleAllChecked] = useToggle()
  const [checked, setChecked] = useState<Set<number>>(new Set([]))

  function handleCheck(id: number): void {
    const next = new Set([...Array.from(checked)])
    if (next.has(id)) {
      next.delete(id)
    } else {
      next.add(id)
    }
    setChecked(next)
  }

  return [
    {
      field: 'id',
      headerName: '',
      renderHeader(headerName) {
        return (
          <Checkbox
            id="allChecked"
            checked={allChecked}
            onChange={toggleAllChecked}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        )
      },
      renderCell(cellValue, rowValue) {
        return (
          <Checkbox
            id={`checked-${cellValue}`}
            checked={checked.has(cellValue) || allChecked}
            onChange={() => handleCheck(cellValue)}
            inputProps={{ 'aria-label': 'controlled' }}
            disabled={allChecked}
          />
        )
      },
      isRowChecked(cellValue) {
        return checked.has(cellValue)
      },
    },
    {
      field: 'issue_date',
      headerName: 'Issue Date',
      renderHeader(headerName) {
        return <NoWrapCell>{headerName}</NoWrapCell>
      },
      renderCell(cellValue, rowValue) {
        return <NoWrapCell>{cellValue}</NoWrapCell>
      },
    },
    {
      field: 'due_date',
      headerName: 'Due Date',
      renderHeader(headerName) {
        return <NoWrapCell>{headerName}</NoWrapCell>
      },
      renderCell(cellValue, rowValue) {
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
      renderCell(cellValue, rowValue) {
        return <NoWrapCell>{`${cellValue.first_name} ${cellValue.last_name}`}</NoWrapCell>
      },
    },
    {
      field: 'client',
      headerName: 'Company',
      renderCell(cellValue, rowValue) {
        return <NoWrapCell>{cellValue.company.name}</NoWrapCell>
      },
    },
    {
      field: 'total',
      headerName: 'Total',
      renderHeader(headerName) {
        return <AlignRightCell>{headerName}</AlignRightCell>
      },
      renderCell(cellValue, rowValue) {
        return <AlignRightCell>{parseFloat(cellValue).toFixed(2)}</AlignRightCell>
      },
    },
    {
      field: 'currency',
      headerName: 'Currency',
      renderHeader(headerName) {
        return <AlignCenterCell>{headerName}</AlignCenterCell>
      },
      renderCell(cellValue, rowValue) {
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
      renderCell(cellValue, rowValue) {
        return <AlignRightCell>{cellValue}</AlignRightCell>
      },
    },
    {
      field: 'id',
      headerName: '',
      renderCell(cellValue, rowValue) {
        return (
          <IconButton
            size="small"
            aria-label="more"
            aria-haspopup="true"
          >
            <MoreVertIcon />
          </IconButton>
        )
      },
    },
  ]
}
