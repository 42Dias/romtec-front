import * as S from './Modal.styled'
import { ReactNode } from 'react'
import { FiX } from 'react-icons/fi'

type Props = {
  isOpen?: boolean;
  children?: ReactNode
  onClose: () => void
  className?: string
}

const Modal = ({ onClose, children, isOpen = false, className }: Props) => {
  if (!isOpen) { return null }

  return (
    <S.Modal className={className}>
      <S.Container>
        <button onClick={onClose} style={{ background: 'none' }}><FiX size={20} /></button>
        {children}
      </S.Container>
    </S.Modal>
  )
}

export default Modal
