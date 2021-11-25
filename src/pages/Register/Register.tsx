
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

import * as S from './Register.styled'
import { Link } from 'react-router-dom'

type FormData = {
  name: string;
  email: string;
  password: string;
  terms: boolean;
}

export function Register () {
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  function onSubmit ({ email, password, name, terms }: FormData) {
    const submit = {
      name,
      email,
      password,
      terms,
    }
    reset()

    navigate('/home', { replace: true })

    console.log(submit)
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
                    message: 'Nome é obrigatório',
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
              <span>{errors.email?.message}</span>
            </fieldset>

            <fieldset>
              <label htmlFor='password'>Senha</label>
              <S.Input
                id='password' placeholder='Sua melhor senha'
                {...register('password', {
                  required: {
                    value: true,
                    message: 'Senha é obrigatória',
                  },
                })}
              />
              <span>{errors.password?.message}</span>
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
              <label htmlFor='terms'> Aceito os <Link to='/termos'>Termos e condições</Link> e autorizo o uso de meus dados de acordo com a Declaração de privacidade.</label>
              <span>{errors.terms?.message}</span>
            </fieldset>

            <button type='submit'>Entrar</button>
          </form>
        </S.Form>
      </S.Content>
    </S.ContainerRegister>
  )
}
