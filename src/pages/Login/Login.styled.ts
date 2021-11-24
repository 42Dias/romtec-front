import styled from 'styled-components/macro'
import { theme } from '../../ui'

export const ContainerLogin = styled.div`

`

export const Content = styled.div`
  background: ${theme.colors.white[50]};
  width: 500px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  border-radius: 5px;

  h1 {
    color: ${theme.colors.white};
    padding: 30px;
    color: ${theme.colors.white[50]};
    font-size: 22px;
  }

  fieldset {
    border: 0;
  }

  label {
    color: ${theme.colors.white};
    margin: 20px 0 25px 0;
  }
  span {
    color: ${theme.colors.red};
    font-size: 10px;
    margin: 0 0 0 31px;
  }
`

export const Form = styled.div`

  h1 {
    text-align: right;
    display: flex;
    align-items: left;
    justify-content: left;
    font-size: 24px;
    font-weight: bold;
    margin: 20px 0;
    color: ${theme.colors.white};
  }

  p {
    max-width: 400px;
  }

  label {
    color: ${theme.colors.white};
    margin: 20px 0 25px 31px;
  }
  span {
    color: ${theme.colors.red};
    font-size: 10px;
    margin: 0 0 0 31px;
  }

  button {
    font-size: 15px;
    color: ${theme.colors.white};
    background: ${theme.colors.yellow};
    border-radius: 5px;
    margin: 20px 0 20px 0;
    width: 420px;
    height: 48px;
    border: 0;
  }
`

export const Input = styled.input`
  height: 40px;
  width: 444px;
  background: ${theme.colors.darkBlack};
  border: 2px solid ${theme.colors.black};
  border-radius: 5px;
  padding: 0 0 0 15px;
  outline: none;
  margin: 10px 0 9px 0;

  :focus {
    border: 1px solid ${theme.colors.yellow}
  }
`
