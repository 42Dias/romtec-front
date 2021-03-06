import axios from 'axios'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ip, token, api, id } from '../../services/api'
import { TextField } from '../../ui/Components/TextField'
import * as S from './styled'

type FormData = {
  fullName: string;
  password: string;
  confirmPassword: string;
}

export default function UpdatePassword () {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()
  const [loading, setLoading] = useState(false)
  const [nome, setNome] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')

  function onSubmit () {
    const data = {
      fullName: nome,
      password: password,
    }
    console.log(data)
    if (password === confirmPassword) {
      resetSenha(data)
    } else {
      toast.error('As senhas não são iguais!')
    }
  }
  useEffect(() => {
    const hash = window.location.hash.replace(ip + '/romtec/#/atualizar-senha/', '')

    console.log(hash)
    if (hash) {
      const token = hash.replace('#/atualizar-senha/', '')
      console.log(token)
      if (token) {
        localStorage.setItem('token', JSON.stringify(token.replace('#/atualizar-senha/', '')))
        loadUser()
      }
    }
  }

  , [],
  )
  async function loadUser () {
    if (!token) {
      // window.location.reload()
    }
    const response = await axios({
      method: 'get',
      url: `${ip}:8145/api/auth/me`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      timeout: 50000,
    }).then((response) => {
      return response.data
    })
    // console.log(response);
    // console.log(response.tenants[0].roles[0]);
    const setRole = response.tenants[0].roles
    const roleHelper = JSON.parse(setRole)
    console.log(roleHelper[0])
    localStorage.setItem('roles', JSON.stringify(roleHelper[0])) // saves client's data into localStorage:

    // response.tenants[0].tenant.id);
    localStorage.setItem(
      'tenantId',
      JSON.stringify(response.tenants[0].tenant.id),
    ) // saves client's data into localStorage:
    localStorage.setItem('id', JSON.stringify(response.id)) // saves client's data into localStorage:
    localStorage.setItem('status', JSON.stringify(response.tenants[0].status)) // saves client's data into localStorage:
    localStorage.setItem('email', JSON.stringify(response.email))
  }

  async function resetSenha (dataU: any) {
    setLoading(true)
    const data = await api.get('user/' + id).then((response) => {
      response.data.fullName = dataU.fullName
      update(response.data)
      console.log(response.data)
      return response.data
    }).catch(res => {
      console.log(res)
      toast.error(res.response.data)
      setLoading(false)
    })
    console.log(data)

    async function update (data: any) {
      if (data) {
        data.password = dataU.senha
        await api.put('user/', {
          data: data,
        }).then((response) => {
          console.log(window.location.href = window.location.href + 'home')
          console.log(response.data)
          return response.data
        }).catch(res => {
          console.log(res)
          toast.error(res.response.data)
          setLoading(false)
        })
        // const response = await axios.put(`${ip}:8145/api/auth/password-reset/`, {
        //   token: token,
        //   password: dataU.senha
        // }).then((response) => {
        //   setLoading(false)
        //   toast.success(response.data)
        //   return response.data;
        // }).catch(res => {
        //   console.log(res)
        //   toast.error(res.response.data)
        //   setLoading(false)
        // });
      }
    }
  }

  return (
    <S.ContainerLogin>
      <S.Content>
        <h1>Atualize sua senha</h1>
        <p>Troque sua senha nos campos abaixo</p>
        <div onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label='Nome '
            placeholder='Nome'
            value={nome}
            onChange={(text) => setNome(text.target.value)}
          />
          <TextField
            label='Senha'
            placeholder='sua melhor senha'
            type='password'
            id='password'
            value={password}
            onChange={(text) => setPassword(text.target.value)}
          />
          <TextField
            label='Digite sua senha novamente'
            placeholder='sua melhor senha novamente'
            id='confirmPassword'
            value={confirmPassword}
            onChange={(text) => setconfirmPassword(text.target.value)}
          />
        </div>
        <button onClick={() => onSubmit()}>{loading ? <img width='40px' style={{ margin: 'auto' }} height='' src='https://contribua.org/mb-static/images/loading.gif' alt='Loading' /> : 'Enviar'}</button>
        <Link to='/'>Voltar para o login</Link>
      </S.Content>
    </S.ContainerLogin>
  )
}
