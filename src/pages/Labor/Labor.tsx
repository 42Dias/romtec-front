import * as S from './Labor.styled'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'

import { TextField } from '../../ui/Components/TextField'
import { useForm } from 'react-hook-form'
import { FiPlus } from 'react-icons/fi'
import { useState } from 'react'

type FormData = {
  identification: string;
  name: string;
  rg: string;
  cpf: string;
  phone: string;
  zipCode: string;
  city: string;
  occupation: string;
  certificateValidity: Date;
  certificateNumber: string;
  certificate: string;
}

export function Labor () {
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
        <h2>Mão de obra</h2>
        <button onClick={() => setIsOpen(true)}><FiPlus /></button>

        <S.GridConfirmation>
          <span>N° de identificação</span>
          <span>Nome</span>
          <span>CEP</span>
          <span>Cidade</span>
          <span>Função</span>
          <span>Celular</span>
          <span>Validade do certificado</span>
        </S.GridConfirmation>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <S.Container>
            <S.Form onSubmit={handleSubmit(onSubmit)}>

              <TextField
                label='N° de identificação'
                type='number'
                id='identification'
                errorMessage={errors.identification?.message}
                {...register('identification', {
                  required: {
                    value: true,
                    message: 'Todos os campos são obrigatórios',
                  },
                })}
              />

              <TextField
                label='Nome'
                id='name'
                {...register('name', {
                  required: true,
                })}
              />

              <TextField
                label='RG'
                id='rg'
                type='number'
                {...register('rg', {
                  required: true,
                })}
              />

              <TextField
                label='CPF'
                id='cpf'
                type='number'
                {...register('cpf', {
                  required: true,
                })}
              />

              <TextField
                label='Celular'
                id='phone'
                type='number'
                {...register('phone', {
                  required: true,
                })}
              />

              <TextField
                label='CEP'
                id='cep'
                type='number'
                {...register('zipCode', {
                  required: true,
                })}
              />

              <TextField
                label='Cidade'
                id='city'
                {...register('city', {
                  required: true,
                })}
              />

              <TextField
                label='Função'
                id='occupation'
                {...register('occupation', {
                  required: true,
                })}
              />

              <TextField
                label='Validade do certificado'
                type='date'
                id='certificateValidity'
                {...register('certificateValidity', {
                  required: true,
                })}
              />

              <TextField
                label='Número do certificado'
                type='number'
                id='certificateNumber'
                {...register('certificateNumber', {
                  required: true,
                })}
              />

              <fieldset>
                <label htmlFor='certificate'>Certificado</label>
                <select id='certificate' {...register('certificate')}>
                  <option value=''>Select...</option>
                  <option value='Navegador'>Navegador</option>
                  <option value='Operador'>Operador</option>
                  <option value='Outro'>Outro</option>
                </select>
              </fieldset>

              <button type='submit'>Salvar</button>
            </S.Form>
          </S.Container>
        </Modal>
      </S.ContainerConfirmation>
    </>
  )
}
