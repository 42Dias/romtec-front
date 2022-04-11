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

  input, textarea{
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
    button {
      background: ${theme.colors.green};
      width: 120px;
      height: 39px;
      border: 0;
      border-radius: 5px;
      margin-top: 10px;
    }
    .buttonAddInter {
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 6px;
    }
    .selectPlus {
      display: flex;
      flex-direction: row;
      select {
        width: 415px;
  
        @media(max-width: 520px) {
          margin: 10px 0;
          margin-right: 50px;
          padding: 0;
          width: 100% !important;
          max-width: 380px;
        }
        
      }
  
      button {
        margin-left: 10px;
        width: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .ant-select-selection-search {
      width: 100% !important;
    }

    .ant-select-selection-overflow {width: 100% !important; }

    .ant-select-selection-overflow-item {
      width: 100% !important;
      margin: 5px 0 !important;
    }

    .ant-select-show-search.ant-select:not(.ant-select-customize-input) .ant-select-selector {
      height: 44px !important;
      position: relative;
      bottom: 9px;
      background: transparent !important; 
      border-radius: 5px !important;
      border: 1px solid #252332 !important;
      margin-top: 17px;
    } 

    .ant-select-selection-overflow {
      margin: 0 !important;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      /* grid-template-columns: 1fr; */
      overflow: hidden;
    }

    .select {
      width: 415px !important;
      margin: 0 !important;
      @media(max-width: 520px) {
        margin: 10px 0;
        margin-right: 50px;
        padding: 0;
        width: 100% !important;
        max-width: 380px;
      }

    }
    .tabela{
      width: 200%;
      table-layout: fixed;
      @media (max-width: 520px) {
        width: 100%;
        overflow-x: scroll;

          display: grid;
          justify-content: 1fr 1fr 1fr 1fr;
      
          th {
            padding: 0 10px;
            text-align: left;
          }
        span {
          margin: 0 30px;
        }
      }
    }
    table td {
      padding-left: 15px;
      padding-right: 15px;
    }
    .button {
      background: transparent;
      cursor: pointer;
      width: 50px;
      height: 50px;
    }
    .excluirEtapa{
      width: 100%;
      background-color: #d42a2a;
      margin-top: -20%;
    }
`
