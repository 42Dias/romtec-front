import styled from 'styled-components/macro'
import { theme } from '../../../ui'

export const Aside = styled.aside`
  width: 300px;
  bottom: 0;
  position: fixed;
  top: 0;
  left: 0;
  background: ${theme.colors.darkBlack};
  border: 1px solid ${theme.colors.black};
  transition: width 2s;
  z-index: 999;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  text-align: left;
  overflow: hidden;
  transition: width 2s;
`

export const List = styled.ul`
  list-style: none;
  width: 500px;
  padding: 20px;
  margin: 15px 0 0 40px;
  transition: width 2s;
  h4 {
    margin: 10px 0 8px 10px;

    svg {
      color: ${theme.colors.yellow};
      margin: 0 10px 0 0;
    }
  }

  li {
    padding-bottom: 2px;
    transition: 0.8s;

    svg {
      color: ${theme.colors.yellow};
      margin-top: 5px;
    }

    :hover {
      padding: 8px;
      background: ${theme.colors.black};
      border-radius: 4px;
    }
  }
`
