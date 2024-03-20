import { styled } from '@mui/material/styles'
import { Typography } from '@mui/material'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'

const TableContainer = styled('div')`
  padding: 30px;
  textalign: 'center';
`

const ErrorIcon = styled(ErrorOutlineIcon)`
  font-size: 96px;
`

const Title = styled(Typography)`
  margin: 2em 0 1em;
`

export function EmptyTable() {
  return (
    <TableContainer>
      <ErrorIcon />
      <Title variant="h4">No results were found</Title>
      <Typography variant="body2">Please, try another search.</Typography>
    </TableContainer>
  )
}
