import { FiTrash } from 'react-icons/fi'

type Props = {
  onDelete: () => void
}

const DeleteButton = ({ onDelete }: Props) => {
  return (
    <>
      <button
        onClick={onDelete}
        style={{ background: 'none' }}
      >
        <FiTrash size={20} />
      </button>
    </>
  )
}

export default DeleteButton
