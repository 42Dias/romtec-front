import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import * as S from './styled'
import image from '../../assets/obra.png'
import Modal from '../../ui/Components/Modal/Modal'
import { useEffect, useState } from 'react'
import { FiTool } from 'react-icons/fi'
import { toast } from 'react-toastify'
import { api, ip, roles } from '../../services/api'

export default function
Users () {
  const [isOpenInvite, setIsOpenInvite] = useState(false)

  const [isOpen, setIsOpen] = useState(false)
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false)
  const [user, setUsers] = useState<any[]>([])
  const [email, setEmail] = useState('')
  // eslint-disable-next-line
  const [role, setRole] = useState('')

  async function users () {
    setLoading(true)
    // eslint-disable-next-line
    const responser = api.get('user/',
    ).then((response) => {
      console.log(response.data.rows)
      if (response.statusText === 'OK') {
        setUsers(response.data.rows)
        setLoading(false)
      }
    }).catch(res => {
      console.log(res.response.data)
      toast.error(res.response.data)
      setLoading(false)
    })
  }
  function editUser (user: any) {
    setLoading(true)
    // eslint-disable-next-line
    const responser = api.put(ip + 'user/', {
      data: user,
    },
    ).then((response) => {
      console.log(response.data.rows)
      if (response.statusText === 'OK') {
        setUsers(response.data.rows)
      }
    }).catch(res => {
      console.log(res.response.data)
      toast.error(res.response.data)
      setLoading(false)
    })
  }

  async function Cadastro () {
    setLoading(true)
    // eslint-disable-next-line
    const responser = api.post('user', {
      data: {
        emails: email,
        roles: role,
      },
    }).then((response) => {
      console.log(response)
      if (response.statusText === 'OK') {
        toast.success('Email enviado com sucesso!')
        setLoading(false)
        setIsOpen(false)
        setIsOpenInvite(false)
        users()
      } else if (response.statusText === 'Forbidden') {
        toast.error('Ops, Não tem permisão!')
        setLoading(false)
      } else {
        toast.error('Ops, Dados Incorretos!')
        setLoading(false)
      }
    }).catch(res => {
      console.log(res)
      // toast.error(res.response.data);
      setLoading(false)
    })
  }
  useEffect(() => {
    users()
  }, [])
  return (
    <>
      <Sidebar />
      <Navbar />
      <S.Container>
        <S.Content>
          <div>
            <span>Bem vindo</span>
            <h2>Veja o passo-a-passo para utilizar nosso sistema da melhor forma</h2>
            <p>Com esse guia rápido você entenderá como nosso sistema funciona</p>
          </div>
          <img src={image} alt='' />
        </S.Content>

        <S.Steps>
          <div className='flex-title'>
            <h2>Usuários</h2>
            <button
              onClick={() => setIsOpenInvite(true)}
              title='Editar?'
            >
              Convidar usuário
            </button>
          </div>
          <ul>
            {user.map((user) => (
              <li key={user.id}>
                <S.ContainerUsers>
                  <div>
                    <h4>{user.firstName}</h4>
                    <span>{user.email}</span> <br />
                    <span>CNPJ: {user.cnpj}</span> <br />
                    <span>Telefone: {user.tel}</span>
                  </div>

                  <button onClick={() => setIsOpen(true)}>Atribuir perfil</button>
                </S.ContainerUsers>
              </li>
            ))}
          </ul>
        </S.Steps>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <S.ContainerModal>

            <S.GridModal>
              <S.BoxModal>

                <S.TitleUser>
                  <FiTool />
                  <h2>Operador</h2>
                </S.TitleUser>

                <S.NavList>
                  <ul>
                    <li>Operação</li>
                  </ul>
                </S.NavList>

              </S.BoxModal>

              <S.BoxModal>

                <S.TitleUser>
                  <FiTool />
                  <h2>Equipe Civil</h2>
                </S.TitleUser>

                <S.NavList>
                  <ul>
                    <li>Operação</li>
                  </ul>
                </S.NavList>

              </S.BoxModal>

              <S.BoxModal>

                <S.TitleUser>
                  <FiTool />
                  <h2>Navegação</h2>
                </S.TitleUser>

                <S.NavList>
                  <ul>
                    <li>Operação</li>
                  </ul>
                </S.NavList>

              </S.BoxModal>

              <S.BoxModal>

                <S.TitleUser onClick={() => setRole('admin')}>
                  <FiTool />
                  <h2>Engenharia ADM</h2>
                </S.TitleUser>

                <S.NavList>
                  <ul>
                    <li>Configurações</li>
                    <li>Cadastros</li>
                    <li>Relatórios</li>
                  </ul>
                </S.NavList>

              </S.BoxModal>

              <S.BoxModal>

                <S.TitleUser>
                  <FiTool />
                  <h2>Engenharia User</h2>
                </S.TitleUser>

                <S.NavList>
                  <ul>
                    <li>Configurações</li>
                    <li>Cadastros</li>
                    <li>Relatórios</li>
                  </ul>
                </S.NavList>

              </S.BoxModal>

              <S.BoxModal>

                <S.TitleUser>
                  <FiTool />
                  <h2>Mapeamento</h2>
                </S.TitleUser>

                <S.NavList>
                  <ul>
                    <li>Operação</li>
                  </ul>
                </S.NavList>

              </S.BoxModal>
            </S.GridModal>

            <S.Btns>
              <button onClick={() => editUser(user)}>Salvar</button>
              <button onClick={() => setIsOpen(false)}>Cancelar</button>
            </S.Btns>

          </S.ContainerModal>
        </Modal>

        <Modal isOpen={isOpenInvite} onClose={() => setIsOpenInvite(false)}>
          <S.ContainerModal>

            <h1>Convidar usuário</h1>

            <S.GridInvite>
              <div>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' placeholder='Email do convidado' onChange={(text) => setEmail(text.target.value)} />
              </div>
              <div>
                <label htmlFor='select'>Selecione o tipo de permissão</label>
                <select name='' id='select' onChange={(text) => setRole(text.target.value)}>

                  <option value='clienteADM'>Cliente ADM</option>
                  <option value='equipeCivil'>Equipe civil</option>
                  <option value='engenharia'>Engenharia</option>
                  <option value='engenhariaADM'>Engenharia ADM</option>
                  <option value='mapeamento'>Mapeamento</option>
                  <option value='navegador'>Navegação</option>
                  <option value='operador'>Operador</option>
                  {roles === 'admin' ? <option value='admin'>Plataforma ADM</option> : false}

                </select>
              </div>
            </S.GridInvite>

            <S.Btns>
              <button onClick={() => Cadastro()}>{loading
                ? <img
                    width='40px'
                    style={{ margin: 'auto' }}
                    height=''
                    src='https://contribua.org/mb-static/images/loading.gif'
                    alt='Loading'
                  />
                : 'Salvar'}
              </button>
              <button>Cancelar</button>
            </S.Btns>

          </S.ContainerModal>
        </Modal>

      </S.Container>
    </>
  )
}
