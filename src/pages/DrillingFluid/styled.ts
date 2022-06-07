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

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    font-size: 20px;
  }

  ul {
    list-style: none;
  }
  select {
    width: 350px;
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
  }
`

export const GridConfirmation = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
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
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
  justify-items: center;
  align-items: center;

  button {
    width: 90%;
    height: 44px;
    border-radius: 5px;
    background: ${theme.colors.green};
    border: 0;
    transition: 1s;
    margin-bottom: 20px;
    margin-right: 10px;

    :hover {
      opacity: 80%;
    }
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
    width: 90%;
    height: 44px;
    border-radius: 5px;
    background: ${theme.colors.green};
    border: 0;
    transition: 1s;
    margin-bottom: 20px;
    margin-right: 20px;

    :hover {
      opacity: 80%;
    }
  }
`
export const Container = styled.aside`
  max-width: 780px;
  margin: 0 auto;
`
