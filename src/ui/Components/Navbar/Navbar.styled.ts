import styled from 'styled-components/macro'
import { theme } from '../../../ui'

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  float: right;
  clear: both;
  margin-right: 60px;

  input {
    width: 300px;
    height: 44px;
    background: ${theme.colors.black};
    border: 0;
    padding: 20px;
    border-radius: 5px 0 0 5px;
    color: ${theme.colors.white};

    @media (max-width: 968px) {
      display: none;
    }
  }

  /* desktop */

  button {
    width: 50px;
    height: 44px;
    position: relative;
    top: 2px;
    background: ${theme.colors.yellow};
    border: 0;
    border-radius: 0 5px 5px 0;

    @media (max-width: 968px) {
      display: none;
    }
  }
`

export const ContentNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h4 {
    margin-right: 20px;
    margin-bottom: 7px;
  }
`
