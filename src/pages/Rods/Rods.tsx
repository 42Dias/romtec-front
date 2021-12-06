import * as S from './Rods.styled'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'

import { FiPlus } from 'react-icons/fi'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

type FormData = {
  code: string;
  ray: string;
  diameter: string;
  condition: string;
  toolJoin: string;
  torque: string;
  length: string;
  screwThread: string;
}

export function Rods () {
  const [isOpen, setIsOpen] = useState(false)

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  function onSubmit ({
    code,
    ray,
    diameter,
    condition,
    toolJoin,
    torque,
    length,
    screwThread,
  }: FormData) {
    const submit = {
      code,
      ray,
      diameter,
      condition,
      toolJoin,
      torque,
      length,
      screwThread,
    }
    reset()

    console.log(submit)
  }

  return (
    <>
      <Sidebar />
      <Navbar />
      <S.ContainerConfirmation>
        <h2>Hastes</h2>
        <button onClick={() => setIsOpen(true)}><FiPlus /></button>
        <S.GridConfirmation>
          <span>Código </span>
          <span>Diametro do tubo(mm)</span>
          <span>Diametro do Tool Joint(mm)</span>
          <span>Comprimento total(m)</span>
          <span>Modelo da rosca</span>
        </S.GridConfirmation>
        {isOpen
          ? <Modal onClose={() => setIsOpen(false)}>
            <S.Container>
              <S.Form onSubmit={handleSubmit(onSubmit)}>
                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='code'>Código do jogo de Hastes</label>
                    <input
                      id='code' placeholder='Seu código'
                      {...register('code', {
                        required: {
                          value: true,
                          message: 'Todos os campos são obrigatórios',
                        },
                      })}
                    />
                    <span>{errors.code?.message}</span>
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='ray'>Raio de curvatura</label>
                    <input
                      id='ray' placeholder='Raio da haste'
                      {...register('ray', {
                        required: {
                          value: true,
                          message: 'Raio é obrigatório',
                        },
                      })}
                    />
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='diameter'>Diâmetro do tubo(mm)</label>
                    <input
                      id='diameter' placeholder='Diâmetro'
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
                    <label htmlFor='condition'>Estado geral/condição</label>
                    <input
                      id='condition' placeholder='Sua condição'
                      {...register('condition', {
                        required: {
                          value: true,
                          message: 'Condição é obrigatória',
                        },
                      })}
                    />
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='toolJoin'>Diâmetro do Tool Joint(mm)</label>
                    <input
                      id='toolJoin' placeholder='Tool Join'
                      {...register('toolJoin', {
                        required: {
                          value: true,
                          message: 'Tool Join é obrigatório',
                        },
                      })}
                    />
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='torque'>Torque máximo</label>
                    <input
                      id='torque' placeholder='Torque'
                      {...register('torque', {
                        required: {
                          value: true,
                          message: 'Torque é obrigatório',
                        },
                      })}
                    />
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='length'>Comprimento total(m)</label>
                    <input
                      id='length' placeholder='Comprimento'
                      {...register('length', {
                        required: {
                          value: true,
                          message: 'Comprimento é obrigatório',
                        },
                      })}
                    />
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='screwThread'>Modelo da Rosca</label>
                    <input
                      id='screwThread' placeholder='Modelo'
                      {...register('screwThread', {
                        required: {
                          value: true,
                          message: 'Modelo é obrigatório',
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
