import { styled } from '@mui/material/styles'
import { LinearProgress } from '@mui/material'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined'

export const LoadingIndicator = styled(LinearProgress)<{ loading: boolean }>`
  visibility: ${(props) => (props.loading ? 'visible' : 'hidden')};
`

export const Header = styled('header')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 32px;
  background-color: #e6fad2;
`

export const HeaderIcon = styled(DescriptionOutlinedIcon)`
  font-size: inherit;
  vertical-align: top;
  margin: 0 -8px;
`

export const Wrapper = styled('section')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: '0 32px',
}))
