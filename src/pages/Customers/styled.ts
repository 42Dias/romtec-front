import styled from 'styled-components/macro'
import { theme } from '../../ui'

export const ContainerConfirmation = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px 15px;

  h2 {
    color: ${theme.colors.white};
    font-size: 24px;
    padding: 20px 0;
  }

  button {
    width: 54px;
    height: 44px;
    border-radius: 5px;
    background: ${theme.colors.green};
    border: 0;
    transition: 1s;
    position: relative;
    top: 0;

    :hover {
      opacity: 80%;
    }
  }

  ul {
    list-style: none;
  }
`

export const GridConfirmation = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  justify-items: center;
  align-items: center;
  background-color: ${theme.colors.black};
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 13px;

  span {
    font-size: 14px;
    color: ${theme.colors.white};
    transition: 1s;

    :hover {
      opacity: 80%;
    }
  }

  @media (max-width: 520px) {
    overflow: auto;
    span {
      margin: 0 30px;
    }
  }
`

export const Form = styled.form`
  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: flex-start;
    align-items: center;

    @media (max-width: 520px) {
      grid-template-columns: 1fr;
    }

    .form-control-group {
      display: flex;
      flex-direction: column;
    }

    .form-control-group select {
      width: 345px;
      height: 48px;
      box-sizing: border-box;
      border-radius: 4px;
      margin: 10px 0;
      padding: 0 7px;
      border: 1px solid ${theme.colors.black};
      background: ${theme.colors.darkBlack};
      color: #ccc;

      option {
        color: black;
      }

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
    }

    .form-control-group input[type=text] {
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
    }

  button {
    width: 101px;
    height: 44px;
    border-radius: 5px;
    background: ${theme.colors.green};
    border: 0;
    transition: 1s;
    margin-bottom: 20px;
    margin-right: 250px;

    :hover {
      opacity: 80%;
    }
  }

  @media (max-width: 768px) {
    input {
      max-width: 290px;
    }

    margin-left: 10px;
  }
`
export const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr ;
  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
  justify-items: center;
  align-items: center;

  button {
    width: 101px;
    height: 44px;
    border-radius: 5px;
    background: ${theme.colors.green};
    border: 0;
    transition: 1s;
    margin-bottom: 20px;
    margin-right: 250px;

    :hover {
      opacity: 80%;
    }
  }
`
export const Container = styled.aside`
  max-width: 780px;
  margin: 0 auto;
`
