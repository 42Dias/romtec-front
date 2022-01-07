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
    margin-bottom: 20px;

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


  .exec {
    width: 155px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: ${theme.colors.yellow};
    span {
      color: ${theme.colors.black};
      font-weight: bold;
    }
  }

  .del {
    background-color: transparent;
    margin-top: 20px;
    svg {
      color: ${theme.colors.red};
    }
  }

  .edit {
    background-color: transparent;
    margin-top: 20px;
    svg {
      color: ${theme.colors.yellow};
    }
  }

  span {
    font-size: 14px;
    color: ${theme.colors.white};
    transition: 1s;

    :hover {
      opacity: 80%;
    }
  }
`

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
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
