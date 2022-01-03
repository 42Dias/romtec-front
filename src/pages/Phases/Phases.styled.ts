import styled from 'styled-components/macro'
import { theme } from '../../ui'

export const ContainerConfirmation = styled.div`
    width: 100%;
    height: 100%;
    padding: 50px 15px;

    .swiper-container {
      margin: 0 auto;
      text-align: center;
      z-index: 0 !important;
    }

    .swiper-slide {
      background: #252332;
      width: 247px;
      height: 194px;
      border-radius: 20px;
      z-index: 1 !important;
      button {
        background: #252332;
        width: 100%;
        height: 194px;
        border-radius: 20px;

        &:focus {
          border: 1px solid ${theme.colors.yellow};
        }

        h1 {
          font-size: 14px;
          color: white;
        }

        svg {
          font-size: 32px;
          color: ${theme.colors.green};
        }
      }
    }

    .swiper-pagination {
      display: none;
    }

    .swiper-button-next, .swiper-button-prev {
      color: ${theme.colors.white};
    }

    .swiper-button-disabled {
      color: ${theme.colors.white};
    }

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

export const FormContent = styled.form`
  button {
    width: 101px;
    height: 44px;

    background: #00E1AF;
    border-radius: 5px;
    color: white;
    border: 0;
  }
`

export const GridForm = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  div {
    display: flex;
    flex-direction: column;
    margin: 20px 0 0 0;

    label {
      font-size: 12px;
    }

    input {
      width: 480px;
      height: 48px;
      font-size: 12px;
      border-radius: 5px;
      border: 1px solid #252332;
      background-color: ${theme.colors.darkBlack};
      color: rgba(255, 255, 255, 0.35);
      padding: 7px;
      margin: 10px 0;

      transition: .4s;

      &:focus {
        border: 1px solid ${theme.colors.yellow};
      }
    }
  }
`
