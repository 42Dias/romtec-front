import * as S from './Payments.styled'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'

import { FiPlus } from 'react-icons/fi'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

type FormData = {
  year: Date,
  month: Date,
  payday: Date,
  amountPaid: string,
}

export function Payments () {
  const [isOpen, setIsOpen] = useState(false)

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  function onSubmit ({
    year,
    month,
    payday,
    amountPaid,
  }: FormData) {
    const submit = {
      year,
      month,
      payday,
      amountPaid,
    }
    reset()

    console.log(submit)
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
        {isOpen
          ? <Modal onClose={() => setIsOpen(false)}>
            <S.Container>
              <S.Form onSubmit={handleSubmit(onSubmit)}>
                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='year'>Ano de pagamento</label>
                    <input
                      id='year' placeholder='Ano de pagamento'
                      {...register('year', {
                        required: {
                          value: true,
                          message: 'Todos os campos são obrigatórios',
                        },
                      })}
                    />
                    <span>{errors.year?.message}</span>
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='month'>Mês de pagamento</label>
                    <input
                      id='month' placeholder='Mês de pagamento'
                      {...register('month', {
                        required: {
                          value: true,
                          message: 'Mês é obrigatório',
                        },
                      })}
                    />
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='payday'>Data de Pagamento</label>
                    <input
                      id='payday' placeholder='Data'
                      {...register('payday', {
                        required: {
                          value: true,
                          message: 'Data é obrigatória',
                        },
                      })}
                    />
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='amountPaid'>Valor pago</label>
                    <input
                      id='amountPaid' placeholder='Valor'
                      {...register('amountPaid', {
                        required: {
                          value: true,
                          message: 'Valor é obrigatório',
                        },
                      })}
                    />
                  </fieldset>
                </S.ContentForm>

                <button type='submit'>Salvar</button>
              </S.Form>
            </S.Container>
            {/* eslint-disable-next-line */}
            </Modal>
          : null}
      </S.ContainerConfirmation>
    </>
  )
}
