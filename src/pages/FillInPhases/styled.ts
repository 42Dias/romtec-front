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

  form {
    margin: 50px 0;

    .flexBtns {
      display: flex;

      margin: 30px 0;
      height: 40px;
      button {
        border-radius: 5px;
        width: 50%;
        border: 0;
        
        margin: 0 1px;
        background: #252332;

        :last-child {
          background: #FECE51;
          color: black;
        }
      }
    }
  }

  input {
    width: 100%;
    height: 48px;

    /* black secondary */

    border: 1px solid #252332;
    box-sizing: border-box;
    border-radius: 6px;
    background: transparent;
    padding: 7px;

    + input {
      margin-top: 10px;
    }
    :focus {
      border: 1px solid ${theme.colors.yellow};
    }
  }

  select {
    width: 100%;
    height: 48px;

    /* black secondary */

    border: 1px solid #252332;
    box-sizing: border-box;
    border-radius: 6px;
    background: transparent;
    padding: 7px;
    margin-top: 10px;
    color: #726e6d;

    option {
      width: 248px;
      height: 48px;
    }

    :focus {
      border: 1px solid ${theme.colors.yellow};
    }
  }
  
  button.add {
    width: 100%;
    height: 44px;

    /* green */

    background: #00E1AF;
    border-radius: 5px;
    border: 0;
    margin-top: 10px;
  }

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
      display: flex;
      justify-content: center;
      button {
        background: transparent;
        border: 0;
      }

      h1 {
        font-size: 16px;
      }

      svg {
        font-size: 32px;
        color: ${theme.colors.green};
      }

      div {
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
      }
    }

    .containerForm {

      button {
        border-radius: 20px;
        background: #FECE51 !important;
      }
    }

    .containerDisabled {
      button {
        cursor: not-allowed !important;
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

`
