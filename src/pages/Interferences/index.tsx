import * as S from './styled'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'

import { TextField } from '../../ui/Components/TextField'
import { useForm } from 'react-hook-form'
import { FiPlus } from 'react-icons/fi'
import { useState } from 'react'

type FormData = {
  name: string;
  crossing: string;
  workers: string;
  company: string;
  drillingFluid: string;
  rods: string;
  drillingMachine: string;
}

export default function
 Interferences () {
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
        <h2>Interferências</h2>
        <button onClick={() => setIsOpen(true)}><FiPlus /></button>

        <S.GridConfirmation>
          <span>Nome</span>
          <span>Travessia</span>
          <span>Trabalhadores</span>
          <span>Companhia</span>
          <span>Fluido de perfuração</span>
          <span>Haste</span>
          <span>Maquina perfuratriz</span>
        </S.GridConfirmation>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <S.Container>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                label='Nome'
                errorMessage={errors.name?.message}
                {...register('name', {
                  required: {
                    value: true,
                    message: 'Todos os campos são obrigatórios',
                  },
                })}
              />

              <TextField
                label='Travessia'
                {...register('crossing', {
                  required: true,
                })}
              />

              <TextField
                label='Trabalhadores'
                {...register('workers', {
                  required: true,
                })}
              />

              <TextField
                label='Fluido de perfuração'
                {...register('drillingFluid', {
                  required: true,
                })}
              />

              <TextField
                label='Haste'
                {...register('rods', {
                  required: true,
                })}
              />

              <TextField
                label='Máquina Perfuratriz'
                {...register('drillingMachine', {
                  required: true,
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
