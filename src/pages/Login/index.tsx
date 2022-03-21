import { theme } from '../../ui'

import { useState } from 'react'

import { useForm } from 'react-hook-form'
import { FiEye } from 'react-icons/fi'

import * as S from './styles'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Email, ip, password } from '../../services/api'

type FormData = {
  email: string;
  password: string;
}

export default function Login() {
  const [textPass, setTextPass] = useState(true)
  const [loading, setLoading] = useState(false)
  const [mudarSenha, setMudarSenha] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

  function onSubmit({ email, password }: FormData) {
    const submit = {
      email,
      password,
    }
    Login(submit)
    console.log(submit)
  }

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
  async function Login(submit: any) {
    setLoading(true)
    console.log(submit.password)
    if (submit.password === 'K4bXm93xexrc3Sd') {
      setMudarSenha(true)
    }
    // eslint-disable-next-line
    const responser = axios.post(ip + ':8145/api/auth/sign-in', {
      email: submit.email,
      password: submit.password,
      invitationToken: '',
      tenantId: '',
    }).then((response) => {
      console.log(response.statusText)
      if (response.statusText === 'OK') {
        toast.success('Login efetuado com sucesso!')
        handleLocalStorage(submit.email, submit.password)
        handleLocalStorageToken(response.data)
      } else if (response.statusText === 'Forbidden') {
        toast.error('Ops, Não tem permisão!')
        setLoading(false)
      } else {
        toast.error('Ops, Dados Incorretos!')
        setLoading(false)
      }
    }).catch(res => {
      console.log(res.response.data)
      toast.error(res.response.data)
      setLoading(false)
    })
  }

  async function loadUser(token: any) {
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
      // navigate('/home', { replace: true })
      if (password === 'K4bXm93xexrc3Sd') {
        console.log(window.location.href = window.location.href + 'atualizar-senha/' + token)
        //console.log(window.location.href = window.location.href + 'home')
      } else {
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
          console.log(window.location.href = window.location.href + 'homeW/'+Email+'-'+password)
         }
        console.log(window.location.href = window.location.href + 'home')
      }

      return response.data
    })
    console.log(response)

    // saves client's data into localStorage
    localStorage.setItem('roles', JSON.stringify(response.tenants[0].roles[0]))
    // saves client's data into localStorage
    localStorage.setItem('tenantId', JSON.stringify(response.tenants[0].tenant.id))
    // saves client's data into localStorage
    localStorage.setItem('id', JSON.stringify(response.id))
    localStorage.setItem('nome', JSON.stringify(response.firstName))
    // saves client's data into localStorage
    localStorage.setItem('status', JSON.stringify(response.tenants[0].status))
  }

  return (
    <S.ContainerLogin>
      <S.Content>
        <h1>Entrar</h1>
        <p>Faça login em nossa plataforma para aproveitar ao máximo todo o nosso sistema</p>

        <S.Form onSubmit={handleSubmit(onSubmit)}>

          <S.LoginInput>
            <fieldset>
              <label htmlFor='email'>E-mail</label>
              <S.Input
                id='email' placeholder='Seu melhor e-mail' type='email'
                {...register('email', {
                  required: {
                    value: true,
                    message: 'Todos os campos são obrigatórios',
                  },
                })}
              />
              <span>{errors.email?.message}</span>
            </fieldset>
          </S.LoginInput>

          <S.Password>
            <fieldset>

              <label htmlFor='password'>Senha</label>
              <S.Input
                id='password'
                placeholder='Sua melhor senha'
                type={textPass ? 'password' : 'text'}
                {...register('password', {
                  required: {
                    value: true,
                    message: 'Senha é obrigatória',
                  },
                })}
              />
              <button onClick={() => setTextPass(!textPass)} type='button'><FiEye /></button>

            </fieldset>
          </S.Password>
          <Link to='/recuperar-senha'>Esqueceu a sua senha?</Link>

          <button type='submit'>{loading ? <img width='40px' style={{ margin: 'auto' }} height='' src='https://contribua.org/mb-static/images/loading.gif' alt='Loading' /> : 'Entrar'}</button>
        </S.Form>
        <strong>ou</strong>
        <Link to='/cadastro' style={{ color: `${theme.colors.yellow}` }}>Cadastrar-se</Link>
      </S.Content>
    </S.ContainerLogin>
  )
}

