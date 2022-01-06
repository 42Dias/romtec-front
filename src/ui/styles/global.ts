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


`
