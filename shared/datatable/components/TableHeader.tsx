import { useState, ChangeEvent } from 'react'
import { styled } from '@mui/material/styles'
import { IconButton, TextField, InputAdornment, Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import DateRangeIcon from '@mui/icons-material/DateRange'
import FunctionsOutlinedIcon from '@mui/icons-material/FunctionsOutlined'
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined'
import ViewWeekOutlinedIcon from '@mui/icons-material/ViewWeekOutlined'
import DeleteIcon from '@mui/icons-material/Delete'

const HeaderContainer = styled('header')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  backgroundColor: theme.palette.background.default,
  borderBottom: `1px solid ${theme.palette.divider}`,
  gap: 10,
  justifyContent: 'space-between',
  padding: '10px 0',
}))

const HeaderGroup = styled('div')`
  display: flex;
  flex-grow: 1;
`

const HeaderRightGroup = styled(HeaderGroup)`
  justify-content: flex-end;
`

export interface TableHeaderProps {
  onSearch?: (term: string) => void
}

export function TableHeader(props: TableHeaderProps) {
  const [searchTerm, setSearchTerm] = useState('')

  function handleSearchChange(event: ChangeEvent<HTMLInputElement>) {
    const term = event.target.value
    if (term !== searchTerm) {
      setSearchTerm(term)
      props.onSearch?.(term)
    }
  }

  return (
    <HeaderContainer>
      <HeaderGroup>
        <TextField
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search & filter"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          disabled
          placeholder="Date range"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <DateRangeIcon />
              </InputAdornment>
            ),
          }}
        />
      </HeaderGroup>

      <HeaderGroup>
        <IconButton size="large">
          <FunctionsOutlinedIcon />
        </IconButton>
        <IconButton size="large">
          <AttachMoneyOutlinedIcon />
        </IconButton>
        <IconButton size="large">
          <InfoOutlinedIcon />
        </IconButton>
        <IconButton size="large">
          <ScheduleOutlinedIcon />
        </IconButton>
        <IconButton size="large">
          <ViewWeekOutlinedIcon />
        </IconButton>
      </HeaderGroup>

      <HeaderRightGroup>
        <Button
          variant="text"
          color="error"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </HeaderRightGroup>
    </HeaderContainer>
  )
}
