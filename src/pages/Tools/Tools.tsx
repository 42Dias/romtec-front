import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'

import * as S from './Tools.styled'

import { TextField } from '../../ui/Components/TextField'
import { useForm } from 'react-hook-form'
import { FiPlus } from 'react-icons/fi'
import { useState } from 'react'

type FormData = {
  toolCode: string;
  drills: string;
  machine: string;
  bottomEngine: string;
  diameter: string;
  reamers: string;
  batteryCapacity: string;
  swivel: string;
  description: string;
  probeHolder: string;
  pullingHead: string;
  fusilink: string;
  components: string;
  initialStem: string;
  glove: string;
  cheeks: string;
  flexbar: string;
}

export function Tools () {
  const [isOpen, setIsOpen] = useState(false)

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  function onSubmit (data: FormData) {
    console.log(data)

    reset()
  }

  return (
    <>
      <Sidebar />
      <Navbar />
      <S.ContainerConfirmation>
        <h2>Ferramentas</h2>
        <button onClick={() => setIsOpen(true)}><FiPlus /></button>

        <S.GridConfirmation>
          <span>Código de ferramenta</span>
          <span>Máquina</span>
          <span>Diâmetro</span>
          <span>Capacidade de carga</span>
          <span>Descrição</span>
        </S.GridConfirmation>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <S.Container>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                label='Código da ferramenta'
                errorMessage={errors.toolCode?.message}
                {...register('toolCode', {
                  required: {
                    value: true,
                    message: 'Todos os campos são obrigatórios',
                  },
                })}
              />

              <TextField
                label='Brocas'
                placeholder='pá, broca tricônica, rock bit'
                {...register('drills', {
                  required: true,
                })}
              />

              <TextField
                label='Máquina'
                {...register('machine', {
                  required: true,
                })}
              />

              <TextField
                label='Motor de fundo'
                {...register('bottomEngine', {
                  required: true,
                })}
              />

              <TextField
                label='Diâmetro'
                {...register('diameter', {
                  required: true,
                })}
              />

              <TextField
                label='Alargadores'
                placeholder='Cortadores, compactadores, limpeza'
                {...register('reamers', {
                  required: true,
                })}
              />

              <TextField
                label='Capacidade de carga'
                {...register('batteryCapacity', {
                  required: true,
                })}
              />

              <TextField
                label='Swivel'
                {...register('swivel', {
                  required: true,
                })}
              />

              <TextField
                label='Descrição'
                {...register('description', {
                  required: true,
                })}
              />

              <TextField
                label='Porta Sonda'
                {...register('probeHolder', {
                  required: true,
                })}
              />

              <TextField
                label='Pulling Head'
                {...register('pullingHead', {
                  required: true,
                })}
              />

              <TextField
                label='Fusilink'
                {...register('fusilink', {
                  required: true,
                })}
              />

              <TextField
                label='Componentes'
                placeholder='Coluna de perfuraçãoo Conexões e Adaptadores'
                {...register('components', {
                  required: true,
                })}
              />

              <TextField
                label='Haste inicial'
                {...register('initialStem', {
                  required: true,
                })}
              />

              <TextField
                label='Luva'
                {...register('glove', {
                  required: true,
                })}
              />

              <TextField
                label='Mordentes'
                {...register('cheeks', {
                  required: true,
                })}
              />

              <TextField
                label='Flexobarra'
                {...register('flexbar', {
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
