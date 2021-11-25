import { theme } from '../../ui'

import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

import * as S from './Login.styled'
import { Link } from 'react-router-dom'

type FormData = {
  email: string;
  password: string;
}

export function Login () {
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  function onSubmit ({ email, password }: FormData) {
    const submit = {
      email,
      password,
    }
    reset()

    navigate('/home', { replace: true })

    console.log(submit)
  }

  return (
    <S.ContainerLogin>
      <S.Content>
        <h1>Entrar</h1>
        <p>Faça login em nossa plataforma para aproveitar ao máximo todo o nosso sistema</p>
        <S.Form>
          <form onSubmit={handleSubmit(onSubmit)}>
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
            <Link to='/recuperar-senha'>Esqueceu a sua senha?</Link>

            <button type='submit'>Entrar</button>
          </form>
        </S.Form>
        <strong>ou</strong>
        <Link to='/cadastro' style={{ color: `${theme.colors.yellow}` }}>Cadastrar-se</Link>
      </S.Content>
    </S.ContainerLogin>
  )
}
