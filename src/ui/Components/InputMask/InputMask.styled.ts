import styled from 'styled-components/macro'
import { theme } from '../../styles/theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  input {
    width: 345px;
    height: 48px;
    box-sizing: border-box;
    border-radius: 4px;
    margin: 10px 0;
    padding: 0 7px;
    border: 1px solid ${theme.colors.black};
    background: ${theme.colors.darkBlack};
    color: ${theme.colors.white};

    :focus {
      border: 1px solid ${theme.colors.yellow};
      background: transparent;
    }
  }
`
