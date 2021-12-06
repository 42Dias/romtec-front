import * as S from './Tools.styled'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'

import { FiPlus } from 'react-icons/fi'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

type FormData = {
  toolCode: string;
  machine: string;
  diameter: string;
  batteryCapacity: string;
  description: string;
}

export function Tools () {
  const [isOpen, setIsOpen] = useState(false)

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  function onSubmit ({
    toolCode,
    machine,
    diameter,
    batteryCapacity,
    description,
  }: FormData) {
    const submit = {
      toolCode,
      machine,
      diameter,
      batteryCapacity,
      description,
    }
    reset()

    console.log(submit)
  }

  return (
    <>
      <Sidebar />
      <Navbar />
      <S.ContainerConfirmation>
        <h2>Ferramentas</h2>
        <button onClick={() => setIsOpen(true)}><FiPlus /></button>
        <S.GridConfirmation>
          <span>Código de ferramenta</span>
          <span>Máquina</span>
          <span>Diâmetro</span>
          <span>Capacidade de carga</span>
          <span>Descrição</span>
        </S.GridConfirmation>
        {isOpen
          ? <Modal onClose={() => setIsOpen(false)}>
            <S.Container>
              <S.Form onSubmit={handleSubmit(onSubmit)}>
                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='toolCode'>Código de ferramenta</label>
                    <input
                      id='toolCode' placeholder='Código'
                      {...register('toolCode', {
                        required: {
                          value: true,
                          message: 'Todos os campos são obrigatórios',
                        },
                      })}
                    />
                    <span>{errors.toolCode?.message}</span>
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='machine'>Máquina</label>
                    <input
                      id='machine' placeholder='Sua máquina'
                      {...register('machine', {
                        required: {
                          value: true,
                          message: 'Máquina é obrigatória',
                        },
                      })}
                    />
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='diameter'>Diâmetro</label>
                    <input
                      id='diameter' placeholder='Diâmetro da ferramenta'
                      {...register('diameter', {
                        required: {
                          value: true,
                          message: 'Diâmetro é obrigatório',
                        },
                      })}
                    />
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='batteryCapacity'>Capacidade de carga</label>
                    <input
                      id='batteryCapacity' placeholder='Capacidade de carga'
                      {...register('batteryCapacity', {
                        required: {
                          value: true,
                          message: 'Carga é obrigatória',
                        },
                      })}
                    />
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='description'>Descrição</label>
                    <input
                      id='description' placeholder='Descrição da ferramenta'
                      {...register('description', {
                        required: {
                          value: true,
                          message: 'Descrição é obrigatória',
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
