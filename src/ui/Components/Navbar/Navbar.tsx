import * as FiIcons from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function Navbar () {
  return (
    <div>
      <input type='text' placeholder='Pesquisar' />
      <button>
        <FiIcons.FiSearch />
      </button>
      <h3>Olá</h3>
      <Link to='/'><FiIcons.FiLogIn /></Link>
    </div>
  )
}
