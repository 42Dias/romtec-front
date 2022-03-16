import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'
import 'react-toastify/dist/ReactToastify.css'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: ${theme.colors.darkBlack};
    color: ${theme.colors.white};
    font-family: ${theme.font.family};
    overflow-x: hidden;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  &::selection {
    color: ${theme.colors.white};
    background: ${theme.colors.yellow};
  }

  h1, h2, h3, h4, h5, h6 {
    color: white;
  }

  .phaes-modal { 
    position: absolute;
    background: #1B1925;
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    border-radius: 5px;
    border: 0;
    width: 1005px;
    height: calc(100% - 100px);
    padding: 20px;
    overflow: auto;

    @media (max-width: 520px) {
      width: calc(100% - 40px);
    }
  }


  .react-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.59);
  }
  
  .react-modal-content {
    position: relative;
    padding: 3rem;
    width: 100%;
    max-width: 576px;
    background: #1B1925;
    border-radius: 0.25rem;
    margin: 15px;

    .init {
      width: 100%;
      height: 40px;
      margin: 20px 0 0 0;
      background: #00E1AF;
      border: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
    }

    .ant-select {
      width: 100%;
      height: 48px !important;
      border: 0;

      .ant-select-selector {
        background: transparent !important;
        height: 48px !important;
        border: 1px solid #252332 !important;
      }
    }

    .flexBtns {
      display: flex;

      margin: 30px 0;
      height: 40px;
      button {
        border-radius: 5px;
        width: 50%;
        border: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 1px;
        background: #252332;

        :last-child {
          background: #FECE51;
          color: black;
        }
      }
    }

    input {
      width: 248px;
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
      width: 248px;
      height: 44px;

      /* green */

      background: #00E1AF;
      border-radius: 5px;
      border: 0;
      margin-top: 10px;
    }
  }

  .react-modal-close {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    background: transparent;
    border: 0;
    transition: filter 0.2s ease-in-out;
    
    &:hover {
      filter: brightness(0.8);
    }
  }
`
