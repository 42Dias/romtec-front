import axios from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ip } from '../../services/api'
import { TextField } from '../../ui/Components/TextField'
import Load from './../../assets/load.gif'
import * as S from './styled'

type FormData = {
  email: string;
}

export default function ForgotPassword () {
  const { register, handleSubmit } = useForm<FormData>()
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  function onSubmit (data: FormData) {
    console.log(data)
    senEmail(data.email)
  } 
  async function senEmail(email:string) {
    setLoading(true)
    axios.post(`${ip}:8145/api/trocarSenha`, {
      email: email
    }).then((response) => {
      if (response.statusText == "OK") {
        toast.success('Email enviado com sucesso!');
        setLoading(false)
      } else {
        toast.error('Email não enviado com sucesso!');
      }
    }).catch((error) => {
      setLoading(false)
      toast.error(error.response.data)
    });
  }

  return (
    <S.ContainerLogin>
      <S.Content>
        <h1>Esqueceu a senha?</h1>
        <p>Coloque seu e-mail que informaremos o passo a passo para sua recuperação</p>
        <div >
          <TextField
            label='E-mail'
            placeholder='example@gmail.com'
            value={email}
            {...register('email', {
              required: true,
            })}
            onChange={(text) => setEmail(text.target.value)}
          />
        </div>
        <button onClick={() => senEmail(email)}>{loading ? <img width='40px' style={{ margin: 'auto' }} height='' src={Load} alt='Loading' /> :'Enviar'}</button>
        <Link to='/'>Voltar para o login</Link>
      </S.Content>
    </S.ContainerLogin>
  )
}
