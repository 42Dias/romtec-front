import styled from 'styled-components/macro'
import { theme } from '../../ui'
import banner from '../../assets/banner-mobile.png'

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

  @media (max-width: 520px) {
    background: url(${banner});
    height: 200px;
    border-radius: 10px;
    background-repeat: no-repeat;
    width: 100%;
    background-size: cover;
  }

  span {
    background: ${theme.colors.yellow};
    padding: 5px 15px 5px 15px;
    border-radius: 7px;
    margin-left: 36px;

    @media (max-width: 520px) {
      z-index: 4;
      font-size: 12px;
    }
  }

  h2 {
    max-width: 553px;
    margin-left: 36px;
    padding: 10px 0;
    
    @media (max-width: 520px) {
      z-index: 4;
      font-size: 16px;
    }
  }

  p {
    margin-left: 36px;

    @media (max-width: 520px) {
      z-index: 4;
      font-size: 14px;
    }
  }

  img {
    position: absolute;
    right: 0;
    border-radius: 0 20px 20px 0;

    @media (max-width: 520px) {
      display: none;
    }
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

  @media (max-width: 520px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`

export const ContentSteps = styled.div`
  padding-left: 20px;
  
  @media (max-width: 520px) {
    margin: 20px 0;
  }

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
