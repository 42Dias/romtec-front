import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import * as S from './styled'
import { FiSettings } from 'react-icons/fi'
import image from '../../assets/obra.png'
import axios from 'axios'
import { useEffect } from 'react'
import { ip} from '../../services/api'
import { toast } from 'react-toastify'

export default function
 HomeW () {
   let token = window.location.hash.split('homeW/')[1];

  async function loadUser (token:any) {
    const response = await axios({
      method: 'get',
      url: `${ip}:8145/api/auth/me`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token.replace(/"/g, ),
      },
      timeout: 50000,
    }).then(response => {
      toast.info(token.split('homeW/')[1])
      return response.data
    }).catch((error)=>{
      toast.error(error)
    })
    console.log(response)
    console.log(response.tenants[0].roles[0]);
    // saves client's data into localStorage
    localStorage.setItem('roles', JSON.stringify(response.tenants[0].roles[0]))
    // saves client's data into localStorage
    localStorage.setItem('tenantId', JSON.stringify(response.tenants[0].tenant.id))
    // saves client's data into localStorage
    localStorage.setItem('id', JSON.stringify(response.id))
    localStorage.setItem('nome', JSON.stringify(response.firstName))
    // saves client's data into localStorage
    localStorage.setItem('status', JSON.stringify(response.tenants[0].status))
    localStorage.setItem('token', JSON.stringify(token.split('homeW/')[1]))
    
    window.location.href = ip+':3000/romtec/#/home'
  }
  useEffect(() => {
    // if (!token) {
    //   window.location.reload()
    // }
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
              <h4 style={{width: '50px'}}>{token}</h4>
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
