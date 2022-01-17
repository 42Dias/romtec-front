import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { TextField } from '../../ui/Components/TextField'

import * as S from './ForgotPassword.styled'

type FormData = {
  email: string;
}

export function ForgotPassword () {
  const { register, handleSubmit } = useForm<FormData>()

  function onSubmit (data: FormData) {
    console.log(data)
  }

  return (
    <S.ContainerLogin>
      <S.Content>
        <h1>Esqueceu a senha?</h1>
        <p>Coloque seu e-mail que informaremos o passo a passo para sua recuperação</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label='E-mail'
            placeholder='example@gmail.com'
            {...register('email', {
              required: true,
            })}
          />
        </form>
        <button type='submit'>Enviar</button>
        <Link to='/'>Voltar para o login</Link>
      </S.Content>
    </S.ContainerLogin>
  )
}