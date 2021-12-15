import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import * as S from './Users.styled'
import image from '../../assets/obra.png'
import Modal from '../../ui/Components/Modal/Modal'
import { useState } from 'react'
import { FiTool } from 'react-icons/fi'

export function Users () {
  const [isOpen, setIsOpen] = useState(false)

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

          <S.ContainerUsers>
            <div>
              <h4>Luciano</h4>
              <span>Luciano@gmail.com</span> <br />
              <span>CNPJ: XX. XXX. XXX/0001-XX</span> <br />
              <span>Telefone: (12) 9 9999-9999</span>
            </div>

            <button onClick={() => setIsOpen(true)}>Atribuir perfil</button>
          </S.ContainerUsers>
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

                <S.TitleUser>
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
              <button>Salvar</button>
              <button>Cancelar</button>
            </S.Btns>

          </S.ContainerModal>
        </Modal>

      </S.Container>
    </>
  )
}
