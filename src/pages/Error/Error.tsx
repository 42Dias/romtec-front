import image from '../../assets/erro.svg'

import { Link } from 'react-router-dom'

import * as S from './Error.styled'

export function Error () {
  return (
    <S.ContainerError>
      <h2>Ops! Página não encontrada</h2>
      <S.ContentError>
        <img src={image} alt='error' />
        <Link to='/home'>Voltar</Link>
      </S.ContentError>
    </S.ContainerError>
  )
}
