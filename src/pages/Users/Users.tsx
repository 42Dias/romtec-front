import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import * as S from './Users.styled'
import image from '../../assets/obra.png'

export function Users () {
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
          <h2>Etapas</h2>

          <S.ContainerUsers>
            <div>
              <h4>Luciano</h4>
              <span>Luciano@gmail.com</span> <br />
              <span>CNPJ: XX. XXX. XXX/0001-XX</span> <br />
              <span>Telefone: (12) 9 9999-9999</span>
            </div>

            <button>Atribuir perfil</button>
          </S.ContainerUsers>
        </S.Steps>

      </S.Container>
    </>
  )
}
