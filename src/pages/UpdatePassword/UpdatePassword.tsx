import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { TextField } from '../../ui/Components/TextField'

import * as S from './UpdatePassword.styled'

type FormData = {
  password: string;
  confirmPassword: string;
}

export function UpdatePassword () {
  const { register, handleSubmit } = useForm<FormData>()

  function onSubmit (data: FormData) {
    console.log(data)
  }

  return (
    <S.ContainerLogin>
      <S.Content>
        <h1>Atualize sua senha</h1>
        <p>Troque sua senha nos campos abaixo</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label='Senha'
            placeholder='sua melhor senha'
            id='password'
            {...register('password', {
              required: true,
            })}
          />
          <TextField
            label='Digite sua senha novamente'
            placeholder='sua melhor senha novamente'
            id='confirmPassword'
            {...register('confirmPassword', {
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
