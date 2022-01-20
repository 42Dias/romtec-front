import axios from 'axios'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { token, ip, api, id } from '../../services/api'
import { TextField } from '../../ui/Components/TextField'

import * as S from './styled'

type FormData = {
  password: string;
  confirmPassword: string;
}

export function UpdatePassword() {
  const { register, handleSubmit } = useForm<FormData>()
  const [loading, setLoading] = useState(false);

  function onSubmit(data: FormData) {
    console.log(data)
  }
  useEffect(() => { 

    const hash = window.location.hash.replace(`${ip}/romtec/#/`, '');
    console.log(hash)
    if (hash) {

      var token = hash.replace('#/resetar-senha/', '');
      console.log(token)
      if (token) {
        localStorage.setItem("token", JSON.stringify(token));
        loadUser()
      }
    }
  }

    , []
  )
  async function loadUser() {
    if (!token) {
      //window.location.reload()
    }
    const response = await axios({
      method: "get",
      url: `${ip}:8157/api/auth/me`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      timeout: 50000,
    }).then((response) => {
      return response.data;
    });
    //console.log(response);
    //console.log(response.tenants[0].roles[0]);
    let setRole = response.tenants[0].roles
    const roleHelper = JSON.parse(setRole)
    console.log(roleHelper[0])
    localStorage.setItem("roles", JSON.stringify(roleHelper[0])); //saves client's data into localStorage:

    //response.tenants[0].tenant.id);
    localStorage.setItem(
      "tenantId",
      JSON.stringify(response.tenants[0].tenant.id)
    ); //saves client's data into localStorage:
    localStorage.setItem("id", JSON.stringify(response.id)); //saves client's data into localStorage:
    localStorage.setItem("status", JSON.stringify(response.tenants[0].status)); //saves client's data into localStorage:
    localStorage.setItem("email", JSON.stringify(response.email));
  }

  async function resetSenha(dataU: any) {
    setLoading(true)
    const data = await api.get("user/" + id).then((response) => {
      update(response.data)
      return response.data;
    });
    console.log(data)

    async function update(data: any) {
      if (data) {
        data.password = dataU.senha
        const response = await axios.put(`${ip}:8157/api/auth/password-reset/`, {
          token: id,
          password: dataU.senha
        }).then((response) => {
          setLoading(false)
          return response.data;
        }).catch(error => {
          toast.error("Link de redefinição de senha inválido ou expirado")
          setLoading(false)
        })
      }
    }
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
