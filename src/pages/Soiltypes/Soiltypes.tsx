import * as S from './Soiltypes.styled'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'

import { FiPlus } from 'react-icons/fi'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

type FormData = {
  soilSpecification: string;
  dryResistance: string;
  description: string;
  reactionDilation: string;
  plasticHardness: string;
  plasticityIndex: string;
}

export function SoilTypes () {
  const [isOpen, setIsOpen] = useState(false)

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  function onSubmit ({
    soilSpecification,
    dryResistance,
    description,
    reactionDilation,
    plasticHardness,
    plasticityIndex,
  }: FormData) {
    const submit = {
      soilSpecification,
      dryResistance,
      description,
      reactionDilation,
      plasticHardness,
      plasticityIndex,
    }
    reset()

    console.log(submit)
  }

  return (
    <>
      <Sidebar />
      <Navbar />
      <S.ContainerConfirmation>
        <h2>Tipos de solo</h2>
        <button onClick={() => setIsOpen(true)}><FiPlus /></button>
        <S.GridConfirmation>
          <span>Nome </span>
          <span>Resistencia Seca</span>
          <span>Reação a dilatação</span>
          <span>Dureza Plástica</span>
          <span>Indice de plasticidade</span>
        </S.GridConfirmation>
        {isOpen
          ? <Modal onClose={() => setIsOpen(false)}>
            <S.Container>
              <S.Form onSubmit={handleSubmit(onSubmit)}>
                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='soil'>Especificação do solo*</label>
                    <input
                      id='soil' placeholder='Solo'
                      {...register('soilSpecification', {
                        required: {
                          value: true,
                          message: 'Solo é obrigatório',
                        },
                      })}
                    />
                    <span>{errors.soilSpecification?.message}</span>
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='dryResistance'>Resistência seca*</label>
                    <input
                      id='dryResistance' placeholder='Resistência'
                      {...register('dryResistance', {
                        required: {
                          value: true,
                          message: 'Resistência é obrigatória',
                        },
                      })}
                    />
                    <span>{errors.dryResistance?.message}</span>
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='description'>Descrição</label>
                    <input
                      id='description' placeholder='Descrição'
                      {...register('description', {
                        required: {
                          value: true,
                          message: 'Descrição é obrigatória',
                        },
                      })}
                    />
                    <span>{errors.description?.message}</span>
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='reactionDilation'>Reação a dilatação</label>
                    <input
                      id='reactionDilation' placeholder='Dilatação'
                      {...register('reactionDilation', {
                        required: {
                          value: true,
                          message: 'Dilatação é obrigatória',
                        },
                      })}
                    />
                    <span>{errors.reactionDilation?.message}</span>
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='plasticHardness'>Dureza plastica*</label>
                    <input
                      id='plasticHardness' placeholder='Dureza'
                      {...register('plasticHardness', {
                        required: {
                          value: true,
                          message: 'Dureza é obrigatória',
                        },
                      })}
                    />
                    <span>{errors.plasticHardness?.message}</span>
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='plasticityIndex'>Índice de plasticidade*</label>
                    <input
                      id='plasticityIndex' placeholder='Índice'
                      {...register('plasticityIndex', {
                        required: {
                          value: true,
                          message: 'Índice é obrigatório',
                        },
                      })}
                    />
                    <span>{errors.plasticityIndex?.message}</span>
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
