import * as S from './Crossings.styled'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'

import { FiPlus } from 'react-icons/fi'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

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

  function onSubmit ({
    name,
    crossing,
    workers,
    company,
    drillingFluid,
    hurry,
    drillingMachine,
  }: FormData) {
    const submit = {
      name,
      crossing,
      workers,
      company,
      drillingFluid,
      hurry,
      drillingMachine,
    }
    reset()

    console.log(submit)
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
        {isOpen
          ? <Modal onClose={() => setIsOpen(false)}>
            <S.Container>
              <S.Form onSubmit={handleSubmit(onSubmit)}>
                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='name'>Nome</label>
                    <input
                      id='name' placeholder='Nome'
                      {...register('name', {
                        required: {
                          value: true,
                          message: 'Todos os campos são obrigatórios',
                        },
                      })}
                    />
                    <span>{errors.name?.message}</span>
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='crossing'>Travessia</label>
                    <input
                      id='crossing' placeholder='Sobre a travessia'
                      {...register('crossing', {
                        required: {
                          value: true,
                          message: 'Travessia é obrigatória',
                        },
                      })}
                    />
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='workers'>Trabalhadores</label>
                    <input
                      id='workers' placeholder='Trabalhadores na travessia'
                      {...register('workers', {
                        required: {
                          value: true,
                          message: 'Trabalhadores são obrigatórios',
                        },
                      })}
                    />
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='company'>Companhia</label>
                    <input
                      id='company' placeholder='Sua companhia'
                      {...register('company', {
                        required: {
                          value: true,
                          message: 'Companhia é obrigatória',
                        },
                      })}
                    />
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='drillingFluid'>Fluído de perfuração</label>
                    <input
                      id='drillingFluid' placeholder='Sobre o fluído'
                      {...register('drillingFluid', {
                        required: {
                          value: true,
                          message: 'Fluído é obrigatório',
                        },
                      })}
                    />
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='hurry'>Pressa</label>
                    <input
                      id='hurry' placeholder='Pressa'
                      {...register('hurry', {
                        required: {
                          value: true,
                          message: 'Pressa é obrigatório',
                        },
                      })}
                    />
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='drillingMachine'>Máquina Perfuratriz</label>
                    <input
                      id='drillingMachine' placeholder='Sobre a máquina'
                      {...register('drillingMachine', {
                        required: {
                          value: true,
                          message: 'Máquina perfuratriz é obrigatória',
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
