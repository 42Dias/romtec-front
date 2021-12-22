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
  width: 250px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  border-radius: 5px;
  overflow: hidden;
`

export const List = styled.ul`
  list-style: none;
  width: 300px;
  height: 645px;
  padding: 20px;
  margin: 50px 0 0 50px;
  transition: width 2s;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 7px;
    border-radius: 1px;
  }

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
      padding: 6px;
      background: ${theme.colors.black};
      border-radius: 4px;
    }
  }
`
