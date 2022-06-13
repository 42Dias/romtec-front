import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import * as S from './styled'
import { FiSettings } from 'react-icons/fi'
import image from '../../assets/obra.png'
import axios from 'axios'
import { useEffect } from 'react'
import { ip, password, port, token } from '../../services/api'
import { toast } from 'react-toastify'
import { Toast } from 'react-toastify/dist/components'

export default function
Home () {
  async function loadUser (token:any) {
    // toast.info(token)
    const response = await axios({
      method: 'get',
      url: `${ip}:${port}/api/auth/me`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      timeout: 50000,
    }).then(response => {
      if (password === "K4bXm93xexrc3Sd") {
        console.log("Mudar senha")
        window.location.href = window.location.href.replace("home","atualizar-senha/") + token
      }
      return response.data
    }).catch((error) =>
      toast.error(error),
    )
    console.log(response)
    console.log(response.tenants[0].roles[0])
    localStorage.setItem('roles', JSON.stringify(response.tenants[0].roles[0]))// saves client's data into localStorage:
    console.log(response.tenants[0].tenant.id)
    localStorage.setItem('tenantId', JSON.stringify(response.tenants[0].tenant.id))// saves client's data into localStorage:
    localStorage.setItem('id', JSON.stringify(response.id))// saves client's data into localStorage:
    localStorage.setItem('status', JSON.stringify(response.tenants[0].status))// saves client's data into localStorage:
  }
  useEffect(() => {
    if (token == undefined) {
      window.location.reload()
    }
    console.log(token)
    loadUser(token)
  }, [token])
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
      </S.Container>
    </>
  )
}
