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
`
