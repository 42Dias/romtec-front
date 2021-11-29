import styled from 'styled-components/macro'
import { theme } from '../../../ui'

export const Modal = styled.aside`
width: 300px;
height: 100vh;
position: absolute;
top: 0;
left: 0;
background: ${theme.colors.darkBlack};
border: 1px solid ${theme.colors.black};

`

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: left;
text-align: left;
overflow: hidden;
`

export const List = styled.ul`
  list-style: none;
  overflow-y: scroll;
  width: 500px;
  padding: 20px;

  &::-webkit-scrollbar {
    width: 7px;
    border-radius: 1px;
  }

  li {
  :hover {
    background: ${theme.colors.black};
    border-radius: 4px;
  }
}
`
