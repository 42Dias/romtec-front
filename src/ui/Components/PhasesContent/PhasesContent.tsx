
import * as S from './PhasesContent.styled'
import { ReactNode } from 'react'
import { FiX } from 'react-icons/fi'

type Props = {
  isOpenContent?: boolean;
  children?: ReactNode
  onClose: () => void
}

const PhasesContent = ({ onClose, children, isOpenContent = false }: Props) => {
  if (!isOpenContent) { return null }

  return (
    <S.Modal>
      <S.Container>
        <button onClick={onClose} style={{ background: 'none' }}><FiX size={20} /></button>
        {children}
      </S.Container>
    </S.Modal>
  )
}

export default PhasesContent
