import * as S from './Plans.styled'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'

import { FiPlus } from 'react-icons/fi'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

type FormData = {
  name: string,
  value: string,
  timeCourse: string,
}

export function Plans () {
  const [isOpen, setIsOpen] = useState(false)

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  function onSubmit ({
    name,
    value,
    timeCourse,
  }: FormData) {
    const submit = {
      name,
      value,
      timeCourse,
    }
    reset()

    console.log(submit)
  }

  return (
    <>
      <Sidebar />
      <Navbar />
      <S.ContainerConfirmation>
        <h2>Planos</h2>
        <button onClick={() => setIsOpen(true)}><FiPlus /></button>
        <S.GridConfirmation>
          <span>Nome</span>
          <span>Valor</span>
          <span>Periodo</span>
        </S.GridConfirmation>
        {isOpen
          ? <Modal onClose={() => setIsOpen(false)}>
            <S.Container>
              <S.Form onSubmit={handleSubmit(onSubmit)}>
                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='name'>Nome</label>
                    <input
                      id='name' placeholder='Nome do plano'
                      {...register('name', {
                        required: {
                          value: true,
                          message: 'Todos os campos são obirgatórios',
                        },
                      })}
                    />
                    <span>{errors.name?.message}</span>
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='value'>Valor</label>
                    <input
                      id='value' placeholder='Valor do plano'
                      {...register('value', {
                        required: {
                          value: true,
                          message: 'Valor é obrigatório',
                        },
                      })}
                    />
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='timeCourse'>Periodo</label>
                    <input
                      id='timeCourse' placeholder='Mensal, Semestral, Anual...'
                      {...register('timeCourse', {
                        required: {
                          value: true,
                          message: 'Periodo é obrigatório',
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
