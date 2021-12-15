import * as S from './Tools.styled'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'

import { FiPlus } from 'react-icons/fi'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { TextField } from '../../ui/Components/TextField'

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
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />

              <TextField
                label='Máquina'
                {...register('machine', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />

              <TextField
                label='Motor de fundo'
                {...register('bottomEngine', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />

              <TextField
                label='Diâmetro'
                {...register('diameter', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />

              <TextField
                label='Alargadores'
                placeholder='Cortadores, compactadores, limpeza'
                {...register('reamers', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />

              <TextField
                label='Capacidade de carga'
                {...register('batteryCapacity', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />

              <TextField
                label='Swivel'
                {...register('swivel', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />

              <TextField
                label='Descrição'
                {...register('description', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />

              <TextField
                label='Porta Sonda'
                {...register('probeHolder', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />

              <TextField
                label='Pulling Head'
                {...register('pullingHead', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />

              <TextField
                label='Fusilink'
                {...register('fusilink', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />

              <TextField
                label='Componentes'
                placeholder='Coluna de perfuraçãoo Conexões e Adaptadores'
                {...register('components', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />

              <TextField
                label='Haste inicial'
                {...register('initialStem', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />

              <TextField
                label='Luva'
                {...register('glove', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />

              <TextField
                label='Mordentes'
                {...register('cheeks', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />

              <TextField
                label='Flexobarra'
                {...register('flexbar', {
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
