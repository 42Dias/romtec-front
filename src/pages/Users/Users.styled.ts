import styled from 'styled-components/macro'
import { theme } from '../../ui'

export const Container = styled.div`
  padding: 20px 15px;
`

export const Content = styled.div`
  margin: 50px auto 0 auto;
  background: ${theme.colors.black};
  width: 100%;
  height: 246px;
  padding: 15px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  span {
    background: ${theme.colors.yellow};
    padding: 5px 15px 5px 15px;
    border-radius: 7px;
    margin-left: 36px;
  }
  h2 {
    max-width: 553px;
    margin-left: 36px;
    padding: 10px 0;
  }
  p {
    margin-left: 36px;
  }
  img {
    position: absolute;
    right: 0;
    border-radius: 0 20px 20px 0;
  }
`

export const Steps = styled.div`
  h2 {
    color: ${theme.colors.yellow};
    padding: 80px 0 20px 0;
  }
`

export const ContainerUsers = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 5px;
  background-color: ${theme.colors.black};

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;

  button {
    width: 145px;
    height: 35px;
    border-radius: 5px;
    border: 0;
    background-color: ${theme.colors.yellow};
    color: ${theme.colors.black};
    font-weight: bold;
  }
`
