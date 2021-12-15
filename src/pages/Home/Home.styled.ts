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

export const ContainerSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 20px 0 80px 0;
  min-height: 200px;
`

export const ContentSteps = styled.div`
  padding-left: 20px;

  h4 {
    font-size: 14px;
  }

  p {
    max-width: 210px;
    font-size: 13px;
  }

  svg {
    color: ${theme.colors.yellow};
  }
`
