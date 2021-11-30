import * as S from './Modal.styled'
import { ReactNode } from 'react'
import { FiX } from 'react-icons/fi'

type Props = {
  children?: ReactNode
  onClose: () => void
}

const Modal = ({ onClose, children }: Props) => {
  return (
    <S.Modal>
      <S.Container>
        {children}
        <button onClick={onClose} style={{ background: 'none' }}><FiX size={20} /></button>
      </S.Container>
    </S.Modal>
  )
}

export default Modal
