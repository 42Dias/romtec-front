import { ReactNode } from 'react'
import { FiX, FiHome, FiUser, FiFileText, FiBriefcase, FiClipboard, FiTool, FiMapPin } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import * as S from './Menu.styled'

type Props = {
  children?: ReactNode
  onClose: () => void
}

const Menu = ({ children, onClose }: Props) => {
  return (
    <S.Aside>
      <button onClick={onClose}><FiX size={20} /></button>
      <S.Container>
        <S.List>
          <li>
            <FiHome size={20} />
            <Link to='/home'>Início</Link>
          </li>
          <li>
            <FiUser size={20} />
            <Link to='/usuarios'>Usuários</Link>
          </li>
          <h4><FiMapPin size={20} />Travessias</h4>
          <li>
            <Link to='/etapas-da-travessia'>Etapas da travessia</Link>
          </li>
          <li>
            <Link to='/configuracao-da-travessia'>Config. da travessia</Link>
          </li>
          <li >
            <Link to='/execucao-da-travessia'>Execução da travessia</Link>
          </li>
          <li className='exec-mobile'>
            <Link to='/execucao-da-travessia-mobile'>Execução da travessia</Link>
          </li>
          <h4><FiFileText size={20} />Cadastros</h4>
          <li>
            <Link to='/mao-de-obra'>Mão de obra</Link>
          </li>
          <li>
            <Link to='/maquina-perfuratriz'>Maquina Perfuratriz</Link>
          </li>
          <li>
            <Link to='/tipos-de-solo'>Tipos de Solos</Link>
          </li>
          <li>
            <Link to='/fluido-de-perfuracao'>Fluido de Perfuração</Link>
          </li>
          <li>
            <Link to='/companhias'>Companhias</Link>
          </li>
          <h4><FiTool size={20} />Ferramentas</h4>
          {/* <Link to='/ferramentas'>Cadastrar</Link> */}
          <li>
            <Link to='/alargador'>Alargador</Link>
          </li>
          <li>
            <Link to='/porta-sonda'>Porta Sonda</Link>
          </li>
          <li>
            <Link to='/hastes'>Hastes</Link>
          </li>
          <h4><FiBriefcase size={20} />Comercial</h4>
          <li>
            <Link to='/clientes'>Clientes</Link>
          </li>
          <li>
            <Link to='/pagamentos'>Pagamentos</Link>
          </li>
          <li>
            <Link to='/planos'>Planos</Link>
          </li>
          <h4><FiClipboard size={20} />Relatórios</h4>
          <li>
            <Link to='/relatorios'>Relatórios</Link>
          </li>
        </S.List>
      </S.Container>
      {children}
    </S.Aside>
  )
}

export default Menu
