import { styled } from '@mui/material/styles'
import { Typography, CircularProgress } from '@mui/material'

const TableContainer = styled('div')`
  padding: 30px;
  text-align: center;
`

const Spinner = styled(CircularProgress)`
  width: 6rem !important;
  height: 6rem !important;
`

const Title = styled(Typography)`
  margin: 2em 0 1em;
`

export function LoadingTable() {
  return (
    <TableContainer>
      <Spinner color="inherit" />
      <Title variant="h4">Loading table data</Title>
      <Typography variant="body2">This might take a few moments.</Typography>
    </TableContainer>
  )
}
