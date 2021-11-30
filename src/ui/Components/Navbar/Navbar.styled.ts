import styled from 'styled-components/macro'
import { theme } from '../../../ui'

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    width: 300px;
    height: 44px;
    background: ${theme.colors.black};
    border: 0;
    padding: 20px;
    border-radius: 5px;
    color: ${theme.colors.white};
  }

  button {
    width: 50px;
    height: 44px;
    background: ${theme.colors.yellow};
    border: 0;
    border-radius: 0 5px 5px 0;
  }

  h3 {
    margin-left: 60px;
    font-size: 15px;
  }

  a {
    margin-left: 60px;
    padding: 10px;
  }
`
