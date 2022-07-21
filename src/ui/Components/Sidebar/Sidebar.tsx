import { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as S from './Sidebar.styled'
import Menu from '../Menu/Menu'

export default function Sidebar () {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <S.Navbar>
        <S.ShowSidebar>
          <button id='menu'
            onClick={() => setIsOpen(true)}
          >
            <FaIcons.FaBars />
          </button>
          {isOpen ? <Menu onClose={() => setIsOpen(false)} /> : null}
        </S.ShowSidebar>
      </S.Navbar>
    </>
  )
}
