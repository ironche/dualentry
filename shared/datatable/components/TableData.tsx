import { styled } from '@mui/material/styles'
import { Table, TableBody, TableCell as MuiTableCell, TableContainer, TableHead, TableRow as MuiTableRow } from '@mui/material'
import { DataTableCol, DataTableRow, TableRowSize } from '../models/table'

const TableCell = styled(MuiTableCell)`
  &.MuiTableCell-root {
    :first-of-type {
      padding-left: 0;
    }
    :last-of-type {
      padding-right: 0;
    }
  }
  &.MuiTableCell-head {
    font-weight: 600;
    font-size: 16px;
    background-color: ${({ theme }) => theme.palette.background.default};
  }
`

const TableRow = styled(MuiTableRow)<{ isChecked?: boolean }>`
  background-color: ${({
    isChecked,
    theme: {
      palette: { mode },
    },
  }) => (isChecked ? (mode === 'dark' ? '#43493d' : '#e6fad2') : 'transparent')};
`

export interface TableDataProps {
  cols: DataTableCol[]
  rows: DataTableRow[]
  rowSize?: TableRowSize
}

export function TableData(props: TableDataProps) {
  return (
    <TableContainer>
      <Table size={props.rowSize ?? 'medium'}>
        <TableHead>
          <TableRow>
            {props.cols.map((col, i) => (
              <TableCell key={i}>{col.renderHeader ? col.renderHeader(col.headerName) : col.headerName}</TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {props.rows.map((row) => {
            const firstCol = props.cols?.[0]
            const isChecked = firstCol?.isRowChecked?.(row[firstCol?.field]) ?? false
            return (
              <TableRow
                key={row.id}
                hover
                isChecked={isChecked}
              >
                {props.cols.map((col, i) => (
                  <TableCell key={i}>{col.renderCell ? col.renderCell(row[col.field], row) : row[col.field]}</TableCell>
                ))}
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
