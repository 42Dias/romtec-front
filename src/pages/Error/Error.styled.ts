import styled from 'styled-components/macro'
import { theme } from '../../ui'

export const ContainerError = styled.div`
 display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  flex-direction: column;
  height: 100%;
  padding: 40px 15px;

  h2 {
    font-size: 24px;
    color: ${theme.colors.yellow};
    padding: 15px 0;
  }
`

export const ContentError = styled.div`
 display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  flex-direction: column;

  @media (max-width: 768px) {
    img {
      width: 100%;
    }
  }

  img {
    width: 430px;
    height: 430px;
  }

  a {
    margin: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 165px;
    height: 40px;
    background: ${theme.colors.yellow};
    border-radius: 5px;
    color: ${theme.colors.white};
    font-size: 14px;
  }
`
