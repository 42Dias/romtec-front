import styled from 'styled-components/macro'
import { theme } from '../../../ui'

export const Navbar = styled.div`
  height: 40px;
  padding: 0px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    margin-left: 20px;
    font-size: 14px;
    background: transparent;
    color: ${theme.colors.white};
    transition: 0.5s;

    :hover {
      color: ${theme.colors.yellow};
    }
  }

  button {
    cursor: pointer;
    width: 66px;
    height: 48px;
    outline: 0;
    border: 0;
    border-radius: 0 5px 5px 0;
    background: ${theme.colors.yellow};
    color: white;
    margin: 35px 0 0 0;
  }

  input {
    width: 365px;
    height: 48px;
    border-radius: 5px 0 0 5px;
    border: 0;
    outline: none;
    padding: 0 25px;
    color: #CBCBCB;
    margin-left: 40px;
    background: ${theme.colors.black};
  }
`

export const ShowSidebar = styled.div`
  button {
    position: absolute;
    top: 0;
    left: 0;
    background: none;
  }
`
