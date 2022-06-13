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
  }

  ul {
    list-style-type: none;
  }

  .flex-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 80px 0 20px 0;
    
    button {
      width: 200px;
      height: 40px;
      border: 0;
      border-radius: 5px;
      background: ${theme.colors.yellow};
      color: ${theme.colors.darkBlack};
      font-weight: bold;
    }
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
  padding: 0 50px;

  @media (max-width: 520px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 20px;
    height: auto;
    margin: 20px 0;

    div {
      span {
        max-width: 60px;
      }
    }
  }

  button {
    width: 120px;
    height: 35px;
    border-radius: 5px;
    border: 0;
    background-color: ${theme.colors.yellow};
    color: ${theme.colors.black};
    font-weight: bold;
  }
`

export const NavList = styled.nav`
  display: flex;
  li {
    margin: 10px 40px;
  } 
`

export const GridModal = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 20px !important;

  @media (max-width: 520px) {
    margin: 0;
    grid-template-columns: 1fr;
  }
`

export const ContainerModal = styled.div`
  margin: 40px 0;

  h1 {
    text-align: center;
  }

  @media (max-width: 520px) {
    margin: 0;

    h1 {
      font-size: 22px;
    }
  }

  button {
    margin: 10px 20px;
    @media (max-width: 520px) {
      margin: 10px 0;
    }
  }
  
  svg {
    color: ${theme.colors.yellow};
    font-size: 22px;
  }
`

export const BoxModal = styled.button`
  width: 258px;
  height: 232px;
  background: #252332;
  box-shadow: 0px 4px 15px -10px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  border: 0;
  display: flex;
  flex-direction: column;

  @media (max-width: 520px) {
    margin: 0;
    width: 100%;
  }
  
  &:focus {
    border: 1px solid ${theme.colors.yellow};
  }
`

export const TitleUser = styled.div`
  display: flex;
  align-items: center;
  padding: 40px 20px 10px 20px;
  h2 {
    margin-left: 20px;
  }
`

export const Btns = styled.div`
  display: flex;  
  align-items: center;
  justify-content: center;

  button {
    width: 101px;
    height: 44px;
    background-color: ${theme.colors.green};
    font-weight: bold;
  }

  button:last-child {
    background-color: ${theme.colors.red};
  }
`

export const GridInvite = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    label {
      margin-top: 10px;
    }
  }

  input, select {
    width: 400px;
    height: 45px;
    border-radius: 5px;
    border: 0;
    margin-top: 7px;
    padding: 7px;
    background: #252332;

    @media (max-width: 768px) {
      width: 300px !important;
    }
  }

  select {
    color: white;
  }
`
