import styled from 'styled-components/macro'
import { theme } from '../../../ui'

export const Content = styled.div`
  button {
    position: relative;
    top: 14px;
    svg {
      color: ${theme.colors.red};
    }
  }
`
