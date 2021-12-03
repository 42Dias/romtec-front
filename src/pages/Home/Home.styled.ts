import styled from 'styled-components/macro'
import { theme } from '../../ui'

export const Container = styled.div`
  padding: 20px 15px;
`

export const Content = styled.div`
  margin: 0 auto;
  background: ${theme.colors.black};
  width: 100%;
  height: 340px;
  padding: 15px;
  border-radius: 20px;

  span {
    background: ${theme.colors.yellow};
    padding: 5px 15px 5px 15px;
    border-radius: 7px;
    margin-left: 36px;
  }

  h2 {
    margin: 36px;
  }

  p {
    margin: 36px;
  }

  img {
   width: 350px;
   height: 340px;
   margin-left: 61.5rem;
   margin-top: -13rem;
   border-radius:20px;
   object-fit: cover;
  }
`

export const ContainerSteps = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
