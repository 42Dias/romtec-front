import * as FiIcons from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { theme } from '../..'
import * as S from './Navbar.styled'

export default function Navbar () {
  return (
    <S.Nav>
      <div>
        <input type='text' placeholder='Pesquisar' />
        <button>
          <FiIcons.FiSearch size={15} />
        </button>
      </div>
      <S.ContentNav>
        <h4>Olá, pessoa!</h4>
        <Link to='/'><FiIcons.FiLogIn style={{ color: `${theme.colors.red}` }} /></Link>
      </S.ContentNav>
    </S.Nav>
  )
}
