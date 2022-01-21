import styled from 'styled-components/macro'
import { theme } from '../../styles/theme'

export const Modal = styled.div`

  &.teste {
    height: 420vh;
  }

  width: 100%;
  height: 200vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 520px) {
    height: 250vh;
  }
`

export const Container = styled.div`
  background: ${theme.colors.darkBlack};
  width: 70%;
  color: ${theme.colors.white};
  min-height: 35%;
  padding: 10px;
  border-radius: 5px;

  @media (max-width: 520px) {
    width: 90%;
    padding: 0;
  }

  button {
    color: ${theme.colors.white};
    border-radius: 5px;
    border: none;
    font-size: 12px;
    margin-top: 10px;
  }
`
