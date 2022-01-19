import * as FiIcons from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { theme } from '../..'
import { nome } from '../../../services/api'
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
        <h4>Olá, {nome === 'null' ? 'Convidado' : nome} !</h4>
        <Link onClick={() => localStorage.clear()} to='/'><FiIcons.FiLogIn style={{ color: `${theme.colors.red}` }} /></Link>
      </S.ContentNav>
    </S.Nav>
  )
}
