import * as S from './EditButton.styled'
import { FaEdit } from 'react-icons/fa'
import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
  onEdit: () => void
}

const EditButton = ({ onEdit, children }: Props) => {
  return (
    <S.Content>
      <button
        onChange={onEdit}
        style={{ background: 'none' }}
        title='Editar?'
      >
        <FaEdit size={20} />
      </button>
      {children}
    </S.Content>
  )
}

export default EditButton
