import { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { IconContext } from 'react-icons'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import * as S from './Sidebar.styled'

export default function Sidebar () {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      <IconContext.Provider value={{}}>
        <S.Navbar>
          <div>
            <Link to='#'>
              <FaIcons.FaBars
                onClick={showSidebar}
              />
            </Link>

            <input type='text' placeholder='Pesquisar' />
            <button>
              <FaIcons.FaSearch />
            </button>
          </div>

        </S.Navbar>
        <nav>
          <div onClick={showSidebar}>
            <div>
              <Link to='#'>
                <AiIcons.AiOutlineClose />
              </Link>
            </div>

            <ul>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      <span>{item.title}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  )
}
