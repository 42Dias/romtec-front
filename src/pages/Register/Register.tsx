
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

import * as S from './Register.styled'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ip } from '../../services/api'
import { toast } from 'react-toastify'
import axios from 'axios'

type FormData = {
  name: string;
  email: string;
  password: string;
  terms: boolean;
}

export function Register () {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()
  const [loading, setLoading] = useState(false)

  function onSubmit ({ email, password, name, terms }: FormData) {
    const submit = {
      name,
      email,
      password,
      terms,
    }
    Cadastro(submit)
    reset()

    console.log(submit)
  }
  function handleLocalStorage (emailA: string, passwordB: string) {
    localStorage.setItem('email', JSON.stringify(emailA))// saves client's data into localStorage:
    localStorage.setItem('password', JSON.stringify(passwordB))// saves client's data into localStorage:
    console.log()
  }
  function handleLocalStorageToken (token: string[]) {
    const setLocalStorage = (data: string[]) => {
      localStorage.setItem('token', JSON.stringify(data)) // saves client's data into localStorage:
      console.log('OK!!!')
    }
    setLocalStorage(token)
    loadUser(token)
  }

  async function Cadastro (submit:any) {
    setLoading(true)
    const responser = axios.post(ip + ':8145/api/auth/sign-up', {
      nome: submit.name,
      email: submit.email,
      password: submit.password,

    }).then((response) => {
      console.log(response)
      if (response.statusText === 'OK') {
        toast.success('Opa, recebemos o seu registro')
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
      console.log(responser)
      toast.error(res.response.data)
      setLoading(false)
    })
  }
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
      navigate('/home', { replace: true })
      return response.data
    })
    console.log(response)
    // console.log(response.tenants[0].roles[0]);
    // localStorage.setItem("roles", JSON.stringify(response.tenants[0].roles[0]));//saves client's data into localStorage:
    // console.log(response.tenants[0].tenant.id);
    // localStorage.setItem("tenantId", JSON.stringify(response.tenants[0].tenant.id));//saves client's data into localStorage:
    localStorage.setItem('id', JSON.stringify(response.id))// saves client's data into localStorage:
    localStorage.setItem('nome', JSON.stringify(response.firstName))
  // localStorage.setItem("status", JSON.stringify(response.tenants[0].status));//saves client's data into localStorage:
  }
  return (
    <S.ContainerRegister>
      <S.Content>
        <h1>Cadastro</h1>
        <p>Faça o cadastro em nossa plataforma para aproveitar ao máximo todo o nosso sistema</p>
        <S.Form>
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
              <label htmlFor='name'>Nome</label>
              <S.Input
                id='name' placeholder='Seu nome'
                {...register('name', {
                  required: {
                    value: true,
                    message: 'Todos os campos são obrigatórios',
                  },
                })}
              />
              <span>{errors.name?.message}</span>
            </fieldset>
            <fieldset>
              <label htmlFor='email'>E-mail</label>
              <S.Input
                id='email' placeholder='Seu melhor e-mail'
                {...register('email', {
                  required: {
                    value: true,
                    message: 'E-mail é obrigatório',
                  },
                })}
              />
            </fieldset>

            <fieldset>
              <label htmlFor='password'>Senha</label>
              <S.Input
                id='password'
                placeholder='Sua melhor senha'
                type='password'
                {...register('password', {
                  required: {
                    value: true,
                    message: 'Senha é obrigatória',
                  },
                })}
              />
            </fieldset>

            <fieldset>
              <input
                id='terms'
                type='checkbox'
                {...register('terms', {
                  required: {
                    value: true,
                    message: 'Aceitação dos termos é obrigatória',
                  },
                })}
              />
              <label htmlFor='terms'>
                Aceito os <Link to='/termos'>Termos e condições</Link>
                e autorizo o uso de meus dados de acordo com a Declaração de privacidade.
              </label>
            </fieldset>

            <button type='submit'>{loading ? <img width='40px' style={{ margin: 'auto' }} height='' src='https://contribua.org/mb-static/images/loading.gif' alt='Loading' /> : 'Entrar'}</button>
          </form>
        </S.Form>
      </S.Content>
    </S.ContainerRegister>
  )
}
