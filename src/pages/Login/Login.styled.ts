import styled from 'styled-components/macro'
import { theme } from '../../ui'

export const ContainerLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  background: ${theme.colors.white[50]};
  width: 500px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  border-radius: 5px;
  margin: 0 0 0 20px;

  h1 {
    font-size: 24px;
    color: ${theme.colors.white};
    margin: 30px 1px 2px 14px;
  }

  fieldset {
    border: 0;
    margin: 5px 1px 5px 14px;
  }

  span {
    color: ${theme.colors.red};
    font-size: 10px;
  }

  p {
    margin: 15px 0 2px 14px;
  }

  strong {
    margin: 30px 1px 2px 220px;
  }

  a {
    margin: 30px 1px 2px 170px;
  }
`

export const Form = styled.div`
  p {
    max-width: 400px;
  }

  label {
    color: ${theme.colors.white};
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
    height: 50px;
    width: 444px;
    border: 0;
    margin: 30px 1px 2px 14px;
  }

  a {
    color: ${theme.colors.white};
    margin: 30px 1px 2px 14px;
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
  color: ${theme.colors.yellow};

  :focus {
    border: 1px solid ${theme.colors.yellow}
  }
`
