import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import * as S from './styled'
import image from '../../assets/obra.png'
import Modal from '../../ui/Components/Modal/Modal'
import { useEffect, useState } from 'react'
import { FiTool } from 'react-icons/fi'
import { toast } from 'react-toastify'
import { api, ip } from '../../services/api'

export default function
Users () {
  const [isOpen, setIsOpen] = useState(false)
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false)
  const [user, setUsers] = useState<any[]>([])
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
          <h2>Usuários</h2>
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

      </S.Container>
    </>
  )
}
