import { FiPlus } from 'react-icons/fi'
import * as S from './Labor.styled'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'
import { ReactNode, useState } from 'react'

type Props = {
  children?: ReactNode
  onClose: () => void
}

export function Labor () {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Sidebar />
      <Navbar />
      <S.ContainerConfirmation>
        <h2>Mão de obra</h2>
        <button onClick={() => setIsOpen(true)}><FiPlus /></button>
        {isOpen ? <Modal onClose={() => setIsOpen(false)} /> : null}
        <S.GridConfirmation>
          <span>N° de identificação</span>
          <span>Nome</span>
          <span>Estado</span>
          <span>Cidade</span>
          <span>Função</span>
          <span>Experiência</span>
          <span>Validade do certificado</span>
        </S.GridConfirmation>
      </S.ContainerConfirmation>
    </>
  )
}
