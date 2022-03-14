import styled from 'styled-components/macro'
import { theme } from '../../ui'

export const Container = styled.div`
  padding: 70px 15px;

  button.btn {
    background: ${theme.colors.yellow};
    border: 0;
    width: 130px;
    height: 40px;
    border-radius: 5px;
    color: black;
  }
`

export const CrossingsTable = styled.div`
  width: 100%;
  border-radius: 5px;
  height: 85px;
  background: #252332;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  padding: 10px;
`

export const TableIcons = styled.div`
  display: flex;
  align-items: center;

  a {
    background: ${theme.colors.yellow};
    border: 0;
    width: 110px;
    height: 30px;
    border-radius: 5px;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    background: transparent !important;
    border: 0;
    margin-left: 10px;
    display: flex;
    align-items: center;
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
