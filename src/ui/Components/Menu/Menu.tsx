import { ReactNode } from 'react'
import { FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import * as S from './Menu.styled'

type Props = {
  children?: ReactNode
  onClose: () => void
}

const Menu = ({ children, onClose }: Props) => {
  return (
    <S.Modal>
      <button onClick={onClose}><FiX size={20} /></button>
      <S.Container>
        <S.List>
          <li><Link to='/home'>Início</Link></li>
          <li><Link to=''>Usuários</Link></li>
          <h4>Cadastros</h4>
          <li><Link to=''>Mão de obra</Link></li>
          <li><Link to=''>Maquina Perfuratriz</Link></li>
          <li><Link to=''>Hastes</Link></li>
          <li><Link to=''>Tipos de Solos</Link></li>
          <li><Link to=''>Ferramentas</Link></li>
          <li><Link to=''>Fluido de Perfuração</Link></li>
          <li><Link to=''>Companhias</Link></li>
          <li><Link to=''>Topografia</Link></li>
          <li><Link to=''>Config. da travessia</Link></li>
          <h4>Comercial</h4>
          <li><Link to=''>Clientes</Link></li>
          <li><Link to=''>Pagamentos</Link></li>
          <li><Link to=''>Planos</Link></li>
          <h4>Relatórios</h4>
          <li><Link to=''>Relatórios</Link></li>
          <h4>Travessias</h4>
          <li><Link to=''>Perfurações</Link></li>
        </S.List>
      </S.Container>
      {children}
    </S.Modal>
  )
}

export default Menu
