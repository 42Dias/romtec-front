import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import * as S from './styled'
import { FiSettings } from 'react-icons/fi'
import image from '../../assets/obra.png'
import axios from 'axios'
import { useEffect } from 'react'
import { ip, port } from '../../services/api'
import { toast } from 'react-toastify'

export default function
  HomeW() {
  let token = window.location.hash.split('homeW/')[1];

  function handleLocalStorage(emailA: string, passwordB: string) {
    localStorage.setItem('email', JSON.stringify(emailA))
    localStorage.setItem('password', JSON.stringify(passwordB))
    console.log()
  }
  function handleLocalStorageToken(token: string[]) {
    const setLocalStorage = (data: string[]) => {
      localStorage.setItem('token', JSON.stringify(data))
      console.log('OK!!!')
    }
    setLocalStorage(token)
    loadUser(token)
  }
  async function Login(email: string, password: string) {
    // eslint-disable-next-line
    console.log(email + " - "+ password)
    const responser = axios.post(`${ip}:${port}/api/auth/sign-in`, {
      email: email,
      password: password,
      invitationToken: '',
      tenantId: '',
    }).then((response) => {
      console.log(response.statusText)
      if (response.statusText === 'OK') {
        toast.success('Login efetuado com sucesso!')
        handleLocalStorage(email, password)
        handleLocalStorageToken(response.data)
      } else if (response.statusText === 'Forbidden') {
        toast.error('Ops, Não tem permisão!')
        //setLoading(false)
      } else {
        toast.error('Ops, Dados Incorretos!')
        //setLoading(false)
      }
    }).catch(res => {
      console.log(res.response)
      if(res.response !== undefined){
         toast.error(res.response.data)
      }else {
        toast.error('Erro no servidor!')
      }
     
      //setLoading(false)
    })
  }
  async function loadUser(token: any) {
    const response = await axios({
      method: 'get',
      url: `${ip}:${port}/api/auth/me`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token.replace(/"/g,),
      },
      timeout: 50000,
    }).then(response => {
      //toast.info(token.split('homeW/')[1])
      console.log(response)
      //console.log(response.tenants[0].roles[0]);
      // saves client's data into localStorage
      localStorage.setItem('roles', JSON.stringify(response.data.tenants[0].roles[0]))
      // saves client's data into localStorage
      localStorage.setItem('tenantId', JSON.stringify(response.data.tenants[0].tenant.id))
      // saves client's data into localStorage
      localStorage.setItem('id', JSON.stringify(response.data.id))
      localStorage.setItem('nome', JSON.stringify(response.data.firstName))
      // saves client's data into localStorage
      localStorage.setItem('status', JSON.stringify(response.data.tenants[0].status))
      console.log('token')
      console.log(token)
      localStorage.setItem('token', JSON.stringify(token))
      //setTimeout(function () {
        window.location.href = ip + ':42080/romtec/#/home'
      //}, 1000);
      return response.data
    }).catch((error) => {
      toast.error(error)
    })


  }
  useEffect(() => {
    // if (!token) {
    //   window.location.reload()
    // }
    // let data = {
    //   email: token.split('homeW/')[1].split('-')[0],
    //   password: token.split('homeW/')[1].split('-')[1]
    // }

    Login(token.split('-')[0], token.split('-')[1])
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
              <h4 style={{ width: '50px' }}>{token}</h4>
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
