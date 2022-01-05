import * as S from './ConfigurationCrossing.styled'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'

import { FiPlus } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { TextField } from '../../ui/Components/TextField'
import { toast } from 'react-toastify'
import { api } from '../../services/api'

type FormData = {
  description: string;
  name: Date;
}

export function ConfigurationCrossing () {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false);
  const [travessia, setTravessia] = useState<any[]>([]);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  function onSubmit (data: FormData) {
    console.log(data)

    reset()
  }
  async function Cadastro(submit: any) {
    setLoading(true)
    let responser = api.post(`companhia`, {
      data: submit,
    }).then((response) => {
      console.log(response);
      if (response.statusText === "OK") {
        toast.success('Recebemos o seu registro');
        setLoading(false)
        loadDados()
      } else if (response.statusText === "Forbidden") {
        toast.error("Ops, Não tem permisão!");
        setLoading(false)
      } else {
        toast.error("Ops, Dados Incorretos!");
        setLoading(false)
      }
    }).catch(res => {
      console.log(res);
      //toast.error(res.response.data);
      setLoading(false)
    })
  }

  async function loadDados() {
    setLoading(true)
    let responser = api.get('companhia',
    ).then((response) => {
      console.log(response.data.rows);
      if (response.statusText === "OK") {
        setTravessia(response.data.rows)
        setLoading(false)
      }
    }).catch(res => {
      console.log(res.response.data);
      toast.error(res.response.data);
      setLoading(false)
    })
  }
  useEffect(() => {
    setLoading(true)
    loadDados()
  }, []);
  return (
    <>
      <Sidebar />
      <Navbar />
      <S.ContainerConfirmation>
        <h2>Configurações</h2>
        <button onClick={() => setIsOpen(true)}><FiPlus /></button>

        <S.GridConfirmation>
          <span>Nome</span>
          <span>Descrição</span>
        </S.GridConfirmation>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <S.Container>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                label='Descrição'
                errorMessage={errors.description?.message}
                {...register('description', {
                  required: {
                    value: true,
                    message: 'Todos os campos são obrigatórios',
                  },
                })}
              />

              <TextField
                label='Nome'
                {...register('name', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />
              <button type='submit'>Salvar</button>
            </S.Form>
          </S.Container>
          {/* eslint-disable-next-line */}
        </Modal>
      </S.ContainerConfirmation>
    </>
  )
}
