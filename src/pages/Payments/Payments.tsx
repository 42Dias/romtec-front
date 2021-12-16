import * as S from './Payments.styled'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'

import { TextField } from '../../ui/Components/TextField'
import { useForm } from 'react-hook-form'
import { FiPlus } from 'react-icons/fi'
import { useState } from 'react'

type FormData = {
  year: Date,
  month: Date,
  payday: Date,
  amountPaid: string,
}

export function Payments () {
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
        <h2>Pagamentos</h2>
        <button onClick={() => setIsOpen(true)}><FiPlus /></button>

        <S.GridConfirmation>
          <span>Ano de pagamento</span>
          <span>Mês de pagamento</span>
          <span>Dia de pagamento</span>
          <span>Valor de pagamento</span>
        </S.GridConfirmation>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <S.Container>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                label='Ano de pagamento'
                errorMessage={errors.year?.message}
                type='date'
                id='year'
                {...register('year', {
                  required: {
                    value: true,
                    message: 'Todos os campos são obrigatórios',
                  },
                })}
              />

              <TextField
                label='Mês de pagamento'
                type='date'
                id='month'
                {...register('month', {
                  required: true,
                })}
              />

              <TextField
                label='Dia de pagamento'
                type='date'
                id='payday'
                {...register('payday', {
                  required: true,
                })}
              />

              <TextField
                label='Valor de pagamento'
                type='number'
                id='amountpaid'
                {...register('amountPaid', {
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
