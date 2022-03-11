import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import * as S from './styled'
import { FiSettings } from 'react-icons/fi'
import image from '../../assets/obra.png'
import axios from 'axios'
import { useEffect } from 'react'
import { ip, token } from '../../services/api'

export default function
 Home () {
  async function loadUser (token:any) {
    const response = await axios({
      method: 'get',
      url: `${ip}:8145/api/auth/me`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      timeout: 50000,
    }).then(response => {
      return response.data
    })
    console.log(response)
    console.log(response.tenants[0].roles[0]);
    localStorage.setItem("roles", JSON.stringify(response.tenants[0].roles[0]));//saves client's data into localStorage:
    console.log(response.tenants[0].tenant.id);
    localStorage.setItem('tenantId', JSON.stringify(response.tenants[0].tenant.id))// saves client's data into localStorage:
    localStorage.setItem('id', JSON.stringify(response.id))// saves client's data into localStorage:
    localStorage.setItem("status", JSON.stringify(response.tenants[0].status));//saves client's data into localStorage:
  }
  useEffect(() => {
    if (!token) {
      window.location.reload()
    }
    loadUser(token)
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
          <h2>Etapas</h2>
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
        </S.Steps>

        <S.Steps>
          <h2>Últimas Atualizações</h2>
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
        </S.Steps>
      </S.Container>

    </>
  )
}
