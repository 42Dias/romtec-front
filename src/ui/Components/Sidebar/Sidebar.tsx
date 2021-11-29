import { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import { IconContext } from 'react-icons'
import * as S from './Sidebar.styled'
import Menu from '../Menu/Menu'

export default function Sidebar () {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <IconContext.Provider value={{}}>
        <S.Navbar>
          <S.ShowSidebar>
            <button onClick={() => setIsOpen(true)}>
              <FaIcons.FaBars />
            </button>
            {isOpen ? <Menu onClose={() => setIsOpen(false)} /> : null}
          </S.ShowSidebar>
        </S.Navbar>
      </IconContext.Provider>
    </>
  )
}
