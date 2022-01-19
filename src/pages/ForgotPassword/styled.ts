import styled from 'styled-components/macro'
import { theme } from '../../ui'

export const ContainerLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  background: ${theme.colors.white[50]};
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  border-radius: 5px;

  h1 {
    font-size: 24px;
    color: ${theme.colors.yellow};
  }

  span {
    color: ${theme.colors.red};
    font-size: 10px;
  }

  p {
    max-width: 345px;
    padding: 10px 0;

    @media (max-width: 520px) {
      width: 320px;
      text-align: center;
      padding: 20px 0;
    }
  }

  strong {
    padding: 20px 0;
  }

  button {
    margin: 10px 0 0 0;
    font-size: 15px;
    color: ${theme.colors.white};
    background: ${theme.colors.yellow};
    border-radius: 5px;
    height: 50px;
    width: 338px;
    border: 0;
    transition: 1s;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
      opacity: 65%;
    }
  }

  a {
    color: ${theme.colors.white};
    margin: 10px;
  }
`
