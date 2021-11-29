import image from '../../assets/erro.svg'

import { Link } from 'react-router-dom'

import * as S from './Error.styled'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'

export function Error () {
  return (
    <S.ContainerError>
      <Sidebar />
      <Navbar />
      <h2>Ops! Página não encontrada</h2>
      <S.ContentError>
        <img src={image} alt='error' />
        <Link to='/home'>Voltar</Link>
      </S.ContentError>
    </S.ContainerError>
  )
}
