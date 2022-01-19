import styled from 'styled-components/macro'
import { theme } from '../../styles/theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const InputLabel = styled.label`
  font-size: 14px;
  color: ${theme.colors.white};
`

export const Input = styled.input`
  width: 345px;
  height: 48px;
  box-sizing: border-box;
  border-radius: 4px;
  margin: 10px 0;
  padding: 0 7px;
  border: 1px solid ${theme.colors.black};
  background: ${theme.colors.darkBlack};
  color: #ccc;


  :focus {
    border: 1px solid ${theme.colors.yellow};
    background: transparent;
  } 

  @media(max-width: 520px) {
    width: 290px;  
    margin: 10px 0;
    margin-right: 50px;
    padding: 0;
  }
`

export const ErrorMessage = styled.span`
  color: ${theme.colors.red};
  font-size: 10px;
`
