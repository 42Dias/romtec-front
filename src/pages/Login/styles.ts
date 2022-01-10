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
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  border-radius: 5px;

  h1 {
    font-size: 24px;
    color: ${theme.colors.white};
  }

  fieldset {
    border: 0;
  }

  span {
    color: ${theme.colors.red};
    font-size: 10px;
  }

  p {
    max-width: 445px;
    padding: 10px 0;

    @media (max-width: 520px) {
      width: 320px;
      text-align: center;
      padding: 20px 0;
    }
  }

  strong {
    padding: 20px 0;
  }

  a {
    padding: 20px 0;
  }
`

export const Form = styled.form`
  label {
    color: ${theme.colors.white};
  }

  span {
    color: ${theme.colors.red};
    font-size: 10px;
  }

  button {
    margin: 10px 0 0 0;
    font-size: 15px;
    color: ${theme.colors.white};
    background: ${theme.colors.yellow};
    border-radius: 5px;
    height: 50px;
    width: 444px;
    border: 0;
    transition: 1s;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
      opacity: 65%;
    }

    @media (max-width: 520px) {
      width: 320px;
    }
  }

  a {
    color: ${theme.colors.white};
     
    @media (max-width: 520px) {
      text-align: center !important;
      display: flex;
      align-items: center !important;
      justify-content: center !important;
    }
  }
`

export const Input = styled.input`
  height: 40px;
  width: 444px;
  background: ${theme.colors.darkBlack};
  border: 2px solid ${theme.colors.black};
  border-radius: 5px;
  outline: none;
  margin: 10px 0;
  color: ${theme.colors.yellow};
  padding: 0 5px;
  :focus {
    border: 1px solid ${theme.colors.yellow}
  }

  @media (max-width: 520px) {
    width: 320px;
  }
`

export const Password = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;

  fieldset {
    flex-direction: column;
    display: flex;
  }

  button {
    position: absolute;
    height: 40px;
    width: 30px;
    background: none !important;
    border: 0;
    transition: 1s;
    right: 0;
    bottom: 0;
    left: 410px;
    top: 25px;

    @media (max-width: 520px) {
      left: 280px;
    }

    svg {
      color: ${theme.colors.yellow};
      position: relative;
      :hover {
        opacity: 85%;
      }
    }
  }
`

export const LoginInput = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  fieldset {
    flex-direction: column;
    display:flex;
  }
`
