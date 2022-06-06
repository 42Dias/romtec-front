import styled from 'styled-components/macro'
import { theme } from '../../ui'

export const ContainerConfirmation = styled.div`
    width: 100%;
    height: 100%;
    padding: 50px 15px;

    @media (max-width: 520px) {
      display: none;
    }

    .button-delete {
      /* position: absolute; */
      background: transparent !important;
    }

    .interferenciasForm {
      display: flex;
      flex-direction: column;
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

      :last-child {
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        button {
          background: #00E1AF;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 5px;

          width: 100%;
          height: 194px;
          svg {
            color: white;
          }
        }
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

        svg {
          font-size: 32px;
          color: ${theme.colors.green};
        }
      }
    }

    .containerForm {
      button {
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

    h2 {
      color: ${theme.colors.white};
      font-size: 24px;
      padding: 20px 0;
    }

    .buttons {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }

    button {
      border: 0;
    }

    .import {
      width: 159px;
      height: 44px;
      margin-bottom: 20px;
      background: ${theme.colors.yellow};
      color: ${theme.colors.black};
      border-radius: 5px;
      margin-left: 20px;
    }

    button.add {
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

    .btn-close {
      width: 120px;
    }

    .buttonOpenPhases {
      width: 40px;
      height: 40px;
      background: black;

      svg {
        width: 40px;
        height: 40px;
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

    background: ${theme.colors.green};
    border-radius: 5px;
    color: white;
    border: 0;
  }
`
export const Div = styled.div`
  button {
    width: 101px;
    height: 44px;

    background: ${theme.colors.green};
    border-radius: 5px;
    color: white;
    border: 0;
  }

  .finishPhase {
    width: 161px;
    height: 44px;

    background: #FECE51;
    color: black;
    border-radius: 5px;

    margin-left: 10px;
  }

  table {
    background: #252332;
    margin: 40px 0;
    border-radius: 5px;
  }

  .buttonAddInter {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 6px;
  }

  td, th {
    text-align: left;
    padding: 10px 0;
  }

  tr {
    margin: 40px 0 90px 0 !important;
    height: 53px;
    width: 400px;
    th {
      padding: 20px;
    }
    td {
      padding: 20px;
      width: 400px;
      button {
        background: transparent;
        cursor: pointer;
        width: 50px;
        height: 50px;
      }
    }
  }
`

export const GridForm = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;

  padding: 40px 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  .addInterferencia {
    width: 208px;
    margin-top: 39px;
    height: 48px;
    color: black;
  }

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

      @media(max-width: 520px) {
        width: 100% !important;
        max-width: 330px;
      }
    }

    textarea {
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

      @media(max-width: 520px) {
        width: 100% !important;
        max-width: 330px;
      }
    }

    select {
      width: 480px;
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
    }
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

    button {
      margin-left: 10px;
      width: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .myChartDiv {
    max-width: 600px;
    max-height: 400px;
  }
`

export const PhasesModal = styled.div`
  h2 {
    font-size: 22px;
  }

  select {
    width: 420px;
    height: 48px;
    border: 1px solid #252332;
    border-radius: 6px;
    padding: 7px;
    background-color: transparent;

    transition: .5s;
    margin-top: 10px;

    @media (max-width: 520px) {
      width: 290px;
    }

    color: #878787;
    option {
      background-color: #252332;
      color: #878787;
    }
  }

  h3 {
    font-size: 18px;
    margin-top: 20px;
  }

  input {
    width: 420px;
    height: 48px;
    border: 1px solid #252332;
    border-radius: 6px;
    padding: 7px;
    background-color: transparent;

    transition: .5s;

    &:focus {
      border: 1px solid ${theme.colors.yellow};
    }

    @media (max-width: 520px) {
      width: 290px;
    }
  }

  .ant-switch-checked {
    border: 1px solid ${theme.colors.green};
    background: transparent;
  }

  .ant-switch-checked .ant-switch-handle {
    display: none;
  }

  .ant-switch-handle::before {
    display: none;
  }

  .ant-switch-handle {
    width: 32px;
    height: 32px;
    top: 4px;
    border-radius: 4px;
  }

  .ant-switch {
    border-radius: 4px;
  }

  .ant-switch-inner {
    margin: 0;
  }

  button {
    -webkit-appearance: button;
    margin-top: 10px;
    width: 180px;
    height: 40px;
  }

  div {
    display: flex;
    flex-direction: column;
    margin: 20px 0;
  }

  h4 {
    margin: 20px 0 20px 0;
  }

  .save {
    background: ${theme.colors.green};
    border: 0;
    border-radius: 5px;
  }

  .saveModel {
    background: ${theme.colors.yellow};
    border: 0;
    border-radius: 5px;
    margin-left: 20px;
    color: ${theme.colors.darkBlack};
  }

  .modelsContent {
    position: absolute;
    top: 50%;
    left: 10%;
    right: auto;
    bottom: auto;
    transform: translate(-10%, -50%);
  }
`

export const ModelsModal = styled.div`

  padding: 50px 0;

  button {
    width: 159px;
    height: 44px;
    margin-top: 10px;
  }

  div {
    display: flex;
    flex-direction: column;

    input {
      width: 420px;
      height: 48px;
      background: transparent;
      margin-top: 10px;
      padding: 7px;
      border: 1px solid #252332;
      box-sizing: border-box;
      border-radius: 6px;

      @media (max-width: 520px) {
        width: 290px;
      }
    }


  }


  .save {
    background: ${theme.colors.green};
    border: 0;
    border-radius: 5px;
  }

  .saveModel {
    background: ${theme.colors.yellow};
    border: 0;
    border-radius: 5px;
    color: ${theme.colors.darkBlack};

    transition: .4s;

    &:focus {
      background: transparent !important;
      color: white;
      border: 1px solid  ${theme.colors.yellow};
    }
  }

  .saveModel + .saveModel {
    margin-left: 20px;

    @media (max-width: 520px) {
      margin-left: 0;
    }
  }
  select {
    width: 420px;
    height: 48px;
    border: 1px solid #252332;
    background: transparent;
    padding: 0 7px;
    border-radius: 6px;
    margin-top: 11px;
    option {
      background: ${theme.colors.darkBlack};
    }
  }
  
`

export const InterferenciasForm = styled.form`
  div {
    display: flex;
    flex-direction: column;

    input {
      width: 420px;
      height: 48px;
      border: 1px solid #252332;
      background: transparent;
      padding: 0 7px;
      border-radius: 6px;
      margin-top: 11px;
    }

    select {
      width: 420px;
      height: 48px;
      border: 1px solid #252332;
      background: transparent;
      padding: 0 7px;
      border-radius: 6px;
      margin-top: 11px;
      option {
        background: ${theme.colors.darkBlack};
      }
    }
  }

  button {
    background: ${theme.colors.green};
    width: 120px;
    height: 39px;
    border: 0;
    border-radius: 5px;
    margin-top: 10px;
  }
`

export const ButtonOpenPhases = styled.div`
  button {
    width: 20%;
    height: 40px;
    background-color: #1B1925;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    cursor: pointer;
    svg {
    }
  }
`

export const ContentForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  label {
    font-size: 14px;
    color: ${theme.colors.white};
  }
  select {
    width: 350px;
    height: 48px;
    border: 1px solid #252332;
    background: transparent;
    padding: 0 7px;
    border-radius: 6px;
    margin-top: 11px;
    option {
      background: ${theme.colors.darkBlack};
    }
  }
`

export const ContainerNone = styled.div`  
  display: none;
  padding: 70px 15px;

  @media (max-width: 520px) {
    display: block;
  }

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
      display: flex;
      justify-content: center;
      align-items: center;
      a {
        background: #FECE51 !important;
        width: 100%;
        border-radius: 20px;
        height: 194px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
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
