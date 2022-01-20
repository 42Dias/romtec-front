import image from '../../assets/erro.svg'

import { Link } from 'react-router-dom'

import * as S from './styled'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'

export default function
Error () {
  return (
    <>
      <Sidebar />
      <Navbar />
      <S.ContainerError>
        <h2>Ops! Página não encontrada</h2>
        <S.ContentError>
          <img src={image} alt='error' />
          <Link to='/home'>Voltar</Link>
        </S.ContentError>
      </S.ContainerError>
    </>
  )
}
