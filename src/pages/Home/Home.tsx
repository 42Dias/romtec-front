import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import * as S from './Home.styled'
import { FiSettings } from 'react-icons/fi'
import image from '../../assets/obra.png'

export function Home () {
  return (
    <>
      <Sidebar />
      <Navbar />
      <S.Container>
        <S.Content>
          <span>Bem vindo</span>
          <h2>Veja o passo-a-passo para utilizar nosso sistema da melhor forma</h2>
          <p>Com esse guia rápido você entenderá como nosso sistema funciona</p>
          <img src={image} alt='' />
        </S.Content>

        <h3>Etapas</h3>
        <S.ContainerSteps>
          <S.ContentSteps>
            <FiSettings size={20} />
            <h4>Morbi vitae lorem nisl.</h4>
            <p>Morbi vitae lorem nisl. Sed lobortis non sapien sit amet consectetur.</p>
          </S.ContentSteps>

          <S.ContentSteps>
            <FiSettings size={20} />
            <h4>Morbi vitae lorem nisl.</h4>
            <p>Morbi vitae lorem nisl. Sed lobortis non sapien sit amet consectetur.</p>
          </S.ContentSteps>

          <S.ContentSteps>
            <FiSettings size={20} />
            <h4>Morbi vitae lorem nisl.</h4>
            <p>Morbi vitae lorem nisl. Sed lobortis non sapien sit amet consectetur.</p>
          </S.ContentSteps>

          <S.ContentSteps>
            <FiSettings size={20} />
            <h4>Morbi vitae lorem nisl.</h4>
            <p>Morbi vitae lorem nisl. Sed lobortis non sapien sit amet consectetur.</p>
          </S.ContentSteps>
        </S.ContainerSteps>
      </S.Container>
    </>
  )
}
