import { useState, ChangeEvent, ReactNode } from 'react'
import { styled } from '@mui/material/styles'
import { Typography, IconButton, TextField, InputAdornment, Collapse } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import FilterListIcon from '@mui/icons-material/FilterList'
import { useToggle } from '~/shared/hooks'

const HeaderContainer = styled('header')({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
})

const ToolbarSection = styled('section')({
  display: 'flex',
  alignItems: 'center',
  gap: 10,
})

const FiltersSection = styled('section')({
  flex: '1 0 100%',
  padding: '16px 20px 16px 0',
})

const Title = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  fontWeight: 600,
  fontSize: 18,
  color: theme.palette.text.secondary,
}))

export interface TableHeaderProps {
  headerToolbar?: ReactNode
  filterToolbar?: ReactNode
  onSearch?: (term: string) => void
}

export function TableHeader(props: TableHeaderProps) {
  const [areFiltersVisible, toggleFiltersVisibility] = useToggle(true)
  const [isSearchVisible, toggleSearchVisibility] = useToggle(true)
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
      <ToolbarSection>
        <div>{props.headerToolbar}</div>

        {isSearchVisible && (
          <TextField
            value={searchTerm}
            onChange={handleSearchChange}
            size="small"
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        )}
        <IconButton
          color={isSearchVisible ? 'primary' : 'default'}
          onClick={toggleSearchVisibility}
          size="large"
        >
          <SearchIcon />
        </IconButton>
        <IconButton
          color={areFiltersVisible ? 'primary' : 'default'}
          onClick={toggleFiltersVisibility}
          disabled={!props.filterToolbar}
          size="large"
        >
          <FilterListIcon />
        </IconButton>
      </ToolbarSection>

      <FiltersSection>
        <Collapse
          in={areFiltersVisible}
          timeout="auto"
          unmountOnExit
        >
          {props.filterToolbar}
        </Collapse>
      </FiltersSection>
    </HeaderContainer>
  )
}
