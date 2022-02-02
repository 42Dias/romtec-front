import styled from 'styled-components/macro'
import { theme } from '../../ui'

export const ContainerConfirmation = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px 15px;

  ul {
    list-style-type: none;
  }

  h2 {
    color: ${theme.colors.white};
    font-size: 24px;
    padding: 20px 0;
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    font-size: 20px;
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
    margin: 0 0 20px 0;

    :hover {
      opacity: 80%;
    }
  }

  a {
    width: 155px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: ${theme.colors.yellow};
    margin-bottom: 20px;

    span {
      color: ${theme.colors.black};
      font-weight: bold;
    }
  }
`

export const GridConfirmation = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  justify-items: center;
  align-items: center;
  background-color: ${theme.colors.black};
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 13px;

  button {
    font-size: 14px;
    color: ${theme.colors.white};
    transition: 1s;
    width: 155px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: ${theme.colors.yellow};
    margin-bottom: 20px;
    color: ${theme.colors.black};
    font-weight: bold;


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
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .buttons-points {
    display: flex;
    align-items: center;
    button {
      width: 170px;
      background-color: ${theme.colors.yellow};
      color: ${theme.colors.darkBlack};
      font-weight: bold;
    }
  }

  &.form-check {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }

  .first {
    margin-left: 8px !important;
  }

  .form-control-group {
    display: flex;
    flex-direction: column;
  }

  .form-control-group-check {
    display: flex;
    flex-direction: column;
  }

  .form-control-group-check span {
    color: white;
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

  .ant-switch-handle::before {
    display: none;
  }

  .ant-switch-handle {
    width: 32px;
    height: 32px;
    top: 4px;
    border-radius: 4px;
  }

  .ant-switch {
    border-radius: 4px;
  }

  .ant-switch-inner {
    margin: 0;
  }

  .ant-switch {
    -webkit-appearance: button;
    margin-top: 10px;
    width: 250px;
    height: 45px;

    border: 1px solid ${theme.colors.green} !important;
    background: transparent;
  }

  .ant-switch-checked {
    background-color: ${theme.colors.green}
  }
`
export const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    cursor: pointer;
    display: flex;
    justify-items: space-between;
    margin-top: 10px;
    width: 237px;
    height: 35px; 

    border: 1px solid #00E1AF;
    box-sizing: border-box;
    border-radius: 5px;
    font-size: 12px;
  }

  .buttons-points {
    display: flex;
    align-items: center;
    button {
      width: 170px;
      background-color: ${theme.colors.yellow};
      color: ${theme.colors.darkBlack};
      font-weight: bold;
    }
  }

  &.form-check {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 12px;
    @media (max-width: 768px) {
      width: 345px !important;
    }
  }

  .form-control-group {
    display: flex;
    flex-direction: column;
  }

  .form-control-group-check {
    display: flex;
    flex-direction: column;
  }

  .form-control-group-check span {
    color: white;
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

  button {
    width: 101px;
    height: 44px;
    border-radius: 5px;
    background: ${theme.colors.green};
    border: 0;
    transition: 1s;
    margin-bottom: 20px;
    margin-right: 250px;
    margin-top: 10px;
    :hover {
      opacity: 80%;
    }
  }

  .ant-switch-handle::before {
    display: none;
  }

  .ant-switch-handle {
    width: 32px;
    height: 32px;
    top: 4px;
    border-radius: 4px;
  }

  .ant-switch {
    border-radius: 4px;
  }

  .ant-switch-inner {
    margin: 0;
  }

  .ant-switch {
    -webkit-appearance: button;
    margin-top: 10px;
    width: 250px;
    height: 45px;

    border: 1px solid ${theme.colors.green} !important;
    background: transparent;
  }

  .ant-switch-checked {
    background-color: ${theme.colors.green}
  }
`
export const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
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
