import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'

import * as S from './ProbeHolder.styled'

import { TextField } from '../../ui/Components/TextField'
import { useForm } from 'react-hook-form'
import { FiPlus } from 'react-icons/fi'
import { useState } from 'react'

type FormData = {
  compatibleProbe: string;
  compatibleShovel: string;
  numberJets: string;
  connection: string;
}

export function ProbeHolder () {
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
        <h2>Porta sonda</h2>
        <button onClick={() => setIsOpen(true)}><FiPlus /></button>

        <S.GridConfirmation>
          <span>Sonda compatível/marca</span>
          <span>Pá compatível</span>
          <span>Número de Jatos</span>
          <span>Conexão/Rosca</span>
        </S.GridConfirmation>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <S.Container>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                label='Sonda compatível/marca'
                errorMessage={errors.compatibleProbe?.message}
                id='compatibleProbe'
                {...register('compatibleProbe', {
                  required: {
                    value: true,
                    message: 'Todos os campos são obrigatórios',
                  },
                })}
              />

              <TextField
                label='Pá compatível'
                id='compatibleShovel'
                {...register('compatibleShovel', {
                  required: true,
                })}
              />

              <TextField
                label='Número de Jatos'
                id='numberJets'
                {...register('numberJets', {
                  required: true,
                })}
              />

              <TextField
                label='Conexão/Rosca'
                id='connection'
                {...register('connection', {
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
