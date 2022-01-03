import styled from 'styled-components/macro'
import { theme } from '../../styles/theme'

export const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  background: ${theme.colors.darkBlack};
  width: 70%;
  color: ${theme.colors.white};
  min-height: 35%;
  padding: 10px;
  border-radius: 5px;

  button {
    color: ${theme.colors.white};
    border-radius: 5px;
    border: none;
    font-size: 12px;
    margin-top: 10px;
  }
`
