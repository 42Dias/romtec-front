import * as S from './DrillingFluid.styled'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'

import { FiPlus } from 'react-icons/fi'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { TextField } from '../../ui/Components/TextField'

type FormData = {
  identification: string;
  expectedViscosity: string;
  phWater: string;
  baseQuantityFormulation: string;
  flowLimit: string;
  sandContent: string;
}

export function DrillingFluid () {
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
        <h2>Fluídos de perfuração</h2>
        <button onClick={() => setIsOpen(true)}><FiPlus /></button>

        <S.GridConfirmation>
          <span>Identificação</span>
          <span>Viscosidade</span>
          <span>pH</span>
          <span>base para formulação</span>
          <span>Escoamento</span>
          <span>Teor da areia</span>
        </S.GridConfirmation>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <S.Container>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                label='Identificação'
                errorMessage={errors.identification?.message}
                {...register('identification', {
                  required: {
                    value: true,
                    message: 'Todos os campos são obrigatórios',
                  },
                })}
              />

              <TextField
                label='Viscosidade esperada (Segundos Marsh - cP)'
                {...register('expectedViscosity', {
                  required: true,
                })}
              />

              <TextField
                label='pH da Água'
                {...register('phWater', {
                  required: true,
                })}
              />

              <TextField
                label='Quantidade base para formulação (Metros cúbicos - m²)'
                {...register('baseQuantityFormulation', {
                  required: true,
                })}
              />

              <TextField
                label='Limite de escoamento (Número - N)'
                {...register('flowLimit', {
                  required: true,
                })}
              />

              <TextField
                label='Teor de areia (Porcentagem - %)'
                {...register('sandContent', {
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
