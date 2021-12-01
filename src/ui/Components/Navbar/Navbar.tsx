import * as FiIcons from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { theme } from '../..'
import * as S from './Navbar.styled'

export default function Navbar () {
  return (
    <S.Nav>
      <input type='text' placeholder='Pesquisar' />
      <button>
        <FiIcons.FiSearch size={15} />
      </button>
      <h3>Olá, pessoa!</h3>
      <Link to='/'><FiIcons.FiLogIn style={{ color: `${theme.colors.red}` }} /></Link>
    </S.Nav>
  )
}
