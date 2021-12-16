import * as S from './Rods.styled'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'

import { TextField } from '../../ui/Components/TextField'
import { useForm } from 'react-hook-form'
import { FiPlus } from 'react-icons/fi'
import { useState } from 'react'

type FormData = {
  code: string;
  ray: string;
  diameter: string;
  condition: string;
  toolJoin: string;
  torque: string;
  length: string;
  screwThread: string;
}

export function Rods () {
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
                errorMessage={errors.code?.message}
                {...register('code', {
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
                {...register('toolJoin', {
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
                {...register('length', {
                  required: true,
                })}
              />

              <TextField
                label='Modelo da Rosca'
                {...register('screwThread', {
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
