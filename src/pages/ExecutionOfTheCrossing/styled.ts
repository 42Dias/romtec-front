import styled from 'styled-components/macro'
import { theme } from '../../ui'

export const ContainerConfirmation = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px 15px;

  ul {
    list-style-type: none;
  }

  h2 {
    color: ${theme.colors.white};
    font-size: 24px;
    padding: 20px 0;
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    font-size: 20px;
  }

  button {
    width: 54px;
    height: 44px;
    border-radius: 5px;
    background: ${theme.colors.green};
    border: 0;
    transition: 1s;
    position: relative;
    top: 0;
    margin: 0 0 20px 0;

    :hover {
      opacity: 80%;
    }

    @media (max-width: 520px) {
      width: 113px;
      height: 34px;
      background: ${theme.colors.yellow};

      .bntAddInter svg {
        color: black;
      }
    }
  }

  a {
    width: 155px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: ${theme.colors.yellow};
    margin-bottom: 20px;

    span {
      color: ${theme.colors.black};
      font-weight: bold;
    }
  }
`

export const GridConfirmation = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: center;
  align-items: center;
  background-color: ${theme.colors.black};
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 13px;

  a {
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    margin-left: 20px;
  }

  button {
    font-size: 14px;
    color: ${theme.colors.white};
    transition: 1s;
    width: 155px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: ${theme.colors.yellow};
    margin-bottom: 0;
    color: ${theme.colors.black};
    font-weight: bold;
  }

  span {
    font-size: 14px;
    color: ${theme.colors.white};
    transition: 1s;
    :hover {
      opacity: 80%;
    }
  }

  @media (max-width: 520px) {
    padding: 10px;
    grid-template-columns: repeat(2, 1fr);
    justify-items: space-between;
    align-items: center;
    
    span {
      max-width: 120px;
    }

    a {
      width: 113px;
      margin-left: 20px;
      span {
        font-size: 10px;
      }
    }

    button {
      width: 25px;
      height: 36px;
    }

    .none {
      display: none;
    }
  }
`

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 500px;
  padding: 0 4%;

  select {
    width: 345px;
    height: 48px;
    margin-top: 10px;
    border-radius: 4px;
    padding: 0 7px;
    border: 1px solid #252332;
    background: #1B1925;
    color: #ccc;

    @media (max-width: 520px) {
      width: 290px;
      padding: 0 7px;
    }
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }

  button {
    width: 101px;
    height: 44px;
    border-radius: 5px;
    background: ${theme.colors.green};
    border: 0;
    transition: 1s;
    margin-bottom: 20px;
    margin-right: 250px;
    margin-top: 20px;
    :hover {
      opacity: 80%;
    }
  }
`
export const Div = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
&.form-check {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

@media (max-width: 520px) {
  grid-template-columns: 1fr;
}

.first {
  margin-left: 8px !important;
}

.form-control-group-check {
  display: flex;
  flex-direction: column;
  margin: 20px auto 20px -7px;
}

.form-control-group-check span {
  color: white;
}

  .form-control-group {
    width: 364px;
  }

  .form-control-group select {
    width: 345px;
   
    height: 48px;
    box-sizing: border-box;
    border-radius: 4px;
    margin: 10px 0;
    padding: 0 7px;
    border: 1px solid ${theme.colors.black};
    background: ${theme.colors.darkBlack};
    color: #ccc;

    option {
      color: black;
    }

    :focus {
      border: 1px solid ${theme.colors.yellow};
      background: transparent;
    } 

    @media(max-width: 520px) {
      width: 290px;  
      margin: 10px 0;
      margin-right: 50px;
      padding: 0;
    }
  }
justify-items: center;
  align-items: center;
  position: relative;

button {
  width: 101px;
  height: 44px;
  border-radius: 5px;
  background: ${theme.colors.green};
  border: 0;
  transition: 1s;
  margin-bottom: 20px;
  margin-right: 260px;

  :hover {
    opacity: 80%;
  }
}
`
export const Container = styled.aside`
  max-width: 780px;
  margin: 0 auto;
`
