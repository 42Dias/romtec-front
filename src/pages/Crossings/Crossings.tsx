import * as S from './Crossings.styled'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'

import { FiPlus } from 'react-icons/fi'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { TextField } from '../../ui/Components/TextField'

type FormData = {
  name: string;
  crossing: string;
  workers: string;
  company: string;
  drillingFluid: string;
  hurry: string;
  drillingMachine: string;
}

export function Crossings () {
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
        <h2>Perfurações</h2>
        <button onClick={() => setIsOpen(true)}><FiPlus /></button>

        <S.GridConfirmation>
          <span>Nome</span>
          <span>Travessia</span>
          <span>Trabalhadores</span>
          <span>Companhia</span>
          <span>Fluido de perfuração</span>
          <span>Pressa</span>
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
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />

              <TextField
                label='Trabalhadores'
                {...register('workers', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />

              <TextField
                label='Companhia'
                {...register('company', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />

              <TextField
                label='Fluído de perfuração'
                {...register('drillingFluid', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />

              <TextField
                label='Pressa'
                {...register('hurry', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />

              <TextField
                label='Máquina Perfuratriz'
                {...register('drillingMachine', {
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
