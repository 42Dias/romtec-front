import * as S from './Companies.styled'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'

import { FiPlus } from 'react-icons/fi'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { TextField } from '../../ui/Components/TextField'

type FormData = {
  cnpj: string;
  corporateName: string;
  fantasyName: string;
  zipCode: string;
  city: string;
  state: string;
  district: string;
  publicPlace: string;
  number: string;
  email: string;
  phone: string;
  technicalManager: string;
}

export function Companies () {
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
        <h2>Companhias</h2>
        <button onClick={() => setIsOpen(true)}><FiPlus /></button>
        <S.GridConfirmation>
          <span>Nome fantasia</span>
          <span>Estado</span>
          <span>Cidade</span>
          <span>E-mail</span>
          <span>Responsável Técnico</span>
        </S.GridConfirmation>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <S.Container>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                label='CNPJ'
                errorMessage={errors.cnpj?.message}
                {...register('cnpj', {
                  required: {
                    value: true,
                    message: 'Todos os campos são obrigatórios',
                  },
                })}
              />

              <TextField
                label='Razão Social'
                {...register('corporateName', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />

              <TextField
                label='Nome Fantasia'
                {...register('fantasyName', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />

              <TextField
                label='CEP'
                {...register('zipCode', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />

              <TextField
                label='Cidade'
                {...register('city', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />

              <TextField
                label='Estado'
                {...register('state', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />

              <TextField
                label='Bairro'
                {...register('district', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />

              <TextField
                label='Logradouro'
                {...register('publicPlace', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />

              <TextField
                label='Número'
                {...register('number', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />

              <TextField
                label='E-mail'
                {...register('email', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />

              <TextField
                label='Telefone'
                {...register('phone', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />

              <TextField
                label='Responsável Técnico'
                {...register('technicalManager', {
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
