import { ReactNode } from 'react'
import { FiX } from 'react-icons/fi'

type Props = {
  children?: ReactNode
  onClose: () => void
}

const Menu = ({ children, onClose }: Props) => {
  return (
    <div>
      <div>
        <div>
          <button onClick={onClose}><FiX size={20} /></button>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Menu
