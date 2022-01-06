import styled from 'styled-components/macro'
import { theme } from '../../ui'

export const ContainerRegister = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  border-radius: 5px;

  p.register {
    max-width: 444px;

    @media (max-width: 520px) {
      width: 100%;
      text-align: center;
    }
  }

  h1 {
    font-size: 24px;
    color: ${theme.colors.white};
    margin: 30px 1px 2px 14px;
  }

  fieldset {
    display: flex;
    flex-direction: column;

    @media (max-width: 520px) {
      justify-content: center;
      align-items: flex-start;
      width: 320px;
      margin: 20px 0;
    }
  }

  span {
    color: ${theme.colors.red};
    font-size: 10px;
  }

  strong {
    margin: 30px 1px 2px 220px;
  }

  a {
    color: ${theme.colors.yellow} !important;
  }

  .input-box {
    display: flex;
    justify-content: center;
    max-width: 444px;
    margin: 20px 0 0 0;
    p {
      position: relative;
      bottom: 17px;
      margin-left: 16px;
    }

    @media (max-width: 520px) {
      a {
        position: relative;
        bottom: 20px;
        margin-left: 16px;
      }

      p {
        position: relative;
        bottom: 17px;
        margin-left: 16px;
      }
    }
  }
`

export const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  label {
    color: ${theme.colors.white};
  }

  span {
    color: ${theme.colors.red};
    font-size: 10px;
  }

  button {
    margin: 0 auto;
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
    display: flex;
    align-items: center;
    margin: 0 auto;
    margin-top: 10px;
  }
`
