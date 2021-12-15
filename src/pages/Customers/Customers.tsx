import * as S from './Customers.styled'
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
  uf: string;
  city: string;
  district: string;
  publicPlace: string;
  number: string;
  complement: string;
}

export function Customers () {
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
        <h2>Clientes</h2>
        <button onClick={() => setIsOpen(true)}><FiPlus /></button>

        <S.GridConfirmation>
          <span>CNPJ</span>
          <span>Razão Social</span>
          <span>Nome Fantasia</span>
          <span>CEP</span>
          <span>UF</span>
          <span>Cidade</span>
          <span>Bairro</span>
          <span>Logradouro</span>
          <span>Número</span>
          <span>Complemento</span>
        </S.GridConfirmation>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <S.Container>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                label='CNPJ'
                type='number'
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
                type='number'
                {...register('zipCode', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />

              <TextField
                label='UF'
                {...register('uf', {
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
                type='number'
                {...register('number', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />

              <TextField
                label='Complemento'
                {...register('complement', {
                  required: {
                    value: true,
                    message: '',
                  },
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
