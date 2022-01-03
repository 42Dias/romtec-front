import styled from 'styled-components/macro'
import { theme } from '../../../ui'

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;

  input {
    width: 300px;
    height: 44px;
    background: ${theme.colors.black};
    border: 0;
    padding: 20px;
    border-radius: 5px;
    color: ${theme.colors.white};
    margin-right: 90px;
  }

  button {
    width: 50px;
    height: 44px;
    background: ${theme.colors.yellow};
    border: 0;
    border-radius: 0 5px 5px 0;
    margin-left: -100px;
  }
`

export const ContentNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h4 {
    margin-right: 20px;
    margin-bottom: 7px;
    padding:0 0 0 10px;
  }

  a {
    padding-left: 5px;
  }
`
