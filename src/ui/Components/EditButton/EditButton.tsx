import * as S from './EditButton.styled'
import { FaEdit } from 'react-icons/fa'
import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
  onEdit: () => void
}

const EditButton = ({ onEdit, children }: Props) => {
  return (
    <>
      <button
        onClick={onEdit}
        style={{ background: 'none' }}
        title='Deletar?'
      >
        <FaEdit size={20} />
      </button>
    </>
  )
}
