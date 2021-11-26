import image from '../../assets/erro.svg'

import { Link } from 'react-router-dom'

import * as S from './Error.styled'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'

export function Error () {
  return (
    <S.ContainerError>
      <Sidebar />
      <h2>Ops! Página não encontrada</h2>
      <S.ContentError>
        <img src={image} alt='error' />
        <Link to='/home'>Voltar</Link>
      </S.ContentError>
    </S.ContainerError>
  )
}
