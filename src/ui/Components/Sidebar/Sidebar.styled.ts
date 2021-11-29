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
    font-size: 16px !important;
    background: transparent;
    color: ${theme.colors.yellow};
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
    position: relative;
    background: none;
  }
`
