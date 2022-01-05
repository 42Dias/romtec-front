import * as S from './Rods.styled'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'

import { TextField } from '../../ui/Components/TextField'
import { useForm } from 'react-hook-form'
import { FiPlus } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { api } from '../../services/api'

type FormData = {
  codigo: string;
  ray: string;
  diameter: string;
  condition: string;
  diametroToolJoint: string;
  torque: string;
  comprimentoTotal: string;
  screwThread: string;
  quantities: string;
}

export function Rods () {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false);
  const [hastes, setHastes] = useState<any[]>([]);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  function onSubmit (data: FormData) {
    console.log(data)

    reset()
  }
  async function Cadastro(submit: any) {
    setLoading(true)
    let responser = api.post(`ferramenta`, {
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
    let responser = api.get('ferramenta',
    ).then((response) => {
      console.log(response.data.rows);
      if (response.statusText === "OK") {
        setHastes(response.data.rows)
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
        <h2>Hastes</h2>
        <button onClick={() => setIsOpen(true)}><FiPlus /></button>

        <S.GridConfirmation>
          <span>Código </span>
          <span>Diametro do tubo(mm)</span>
          <span>Diametro do Tool Joint(mm)</span>
          <span>Comprimento total(m)</span>
          <span>Modelo da rosca</span>
        </S.GridConfirmation>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <S.Container>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                label='Código do jogo de Hastes'
                errorMessage={errors.codigo?.message}
                {...register('codigo', {
                  required: {
                    value: true,
                    message: 'Todos os campos são obrigatórios',
                  },
                })}
              />

              <TextField
                label='Raio de curvatura'
                {...register('ray', {
                  required: true,
                })}
              />

              <TextField
                label='Diâmetro do tubo(mm)*'
                {...register('diameter', {
                  required: true,
                })}
              />

              <TextField
                label='Estado geral/condição'
                {...register('condition', {
                  required: true,
                })}
              />

              <TextField
                label='Diâmetro do Tool Joint(mm)'
                {...register('diametroToolJoint', {
                  required: true,
                })}
              />

              <TextField
                label='Torque máximo'
                {...register('torque', {
                  required: true,
                })}
              />

              <TextField
                label='Comprimento total(m)'
                {...register('comprimentoTotal', {
                  required: true,
                })}
              />

              <TextField
                label='Modelo da Rosca'
                {...register('screwThread', {
                  required: true,
                })}
              />

              <TextField
                label='Quantidade de hastes'
                type='number'
                {...register('quantities', {
                  required: true,
                })}
              />
              <button type='submit'>Salvar</button>
            </S.Form>
          </S.Container>
        </Modal>
      </S.ContainerConfirmation>
    </>
  )
}
