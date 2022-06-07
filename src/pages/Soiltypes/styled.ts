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
    margin-bottom: 20px;

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
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  background-color: ${theme.colors.black};
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 13px;

  button {
    position: relative;
    top: 12px;
  }

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

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  
  justify-items: center;
  align-items: center;

  select {
    width: 345px;
    height: 48px;
    box-sizing: border-box;
    border-radius: 4px;
    margin: 10px 0;
    padding: 0 7px;
    border: 1px solid ${theme.colors.black};
    background: ${theme.colors.darkBlack};
    color: ${theme.colors.yellow};


    :focus {
      border: 1px solid ${theme.colors.yellow};
      background: transparent;
    }

    @media(max-width: 520px) {
      width: 280px;  
      margin: 10px 0;
      padding: 0;
      margin-right: 90px;
    }
  }

  button {
    width: 90%;
    height: 44px;
    border-radius: 5px;
    background: ${theme.colors.green};
    border: 0;
    transition: 1s;
    margin-bottom: 20px;
    margin-right: 40px;

    :hover {
      opacity: 80%;
    }
  }

  span {
    color: ${theme.colors.red};
    font-size: 10px;
    margin: 0 0 0 15px;
  }

  fieldset {
    border: 0;
    margin: 5px 1px 5px 22px;
  }
`

export const Div = styled.div`
   display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
    margin-left: -10px;
  }
  justify-items: center;
  align-items: center;

  select {
    width: 345px;
    height: 48px;
    box-sizing: border-box;
    border-radius: 4px;
    margin: 10px 0;
    padding: 0 7px;
    border: 1px solid ${theme.colors.black};
    background: ${theme.colors.darkBlack};
    color: ${theme.colors.yellow};


    :focus {
      border: 1px solid ${theme.colors.yellow};
      background: transparent;
    }

    @media(max-width: 520px) {
      width: 280px;  
      margin: 10px 0;
      padding: 0;
      margin-right: 90px;
    }
  }

  button {
    width: 80%;
    height: 44px;
    border-radius: 5px;
    background: ${theme.colors.green};
    border: 0;
    transition: 1s;
    margin-bottom: 20px;
    margin-right: 10px;
    margin-left: -20px;
    :hover {
      opacity: 80%;
    }
  }

  span {
    color: ${theme.colors.red};
    font-size: 10px;
    margin: 0 0 0 15px;
  }

  fieldset {
    border: 0;
    margin: 5px 1px 5px 22px;
  }
`
export const Container = styled.aside`
  max-width: 800px;
  margin: 0 auto;
`

export const ContentForm = styled.div`
  display: flex;
  flex-direction: column;
  label {
    font-size: 14px;
    color: ${theme.colors.white};
  }
`
