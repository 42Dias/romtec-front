import styled from 'styled-components/macro'
import { theme } from '../../ui'

export const ContainerTerms = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 24px;
    color: ${theme.colors.yellow};
    margin: 50px 1px 33px 0;
  }

  h2 {
    font-size: 20px;
    margin: 0 1px 20px 0;
    color: ${theme.colors.yellow};
  }

  p {
    font-size: 14px;
    margin: 0 1px 20px 0;
    text-align: left;
  }
`
