import * as S from './InterferenceVerification.styled'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'

import { FiPlus } from 'react-icons/fi'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

type FormData = {
  responsible: string;
  equipment: string;
  documents: string;
  geolocationPoints: string;
  interferenceDiameter: string;
  typeOfNetwork: string;
  owningCompany: string;
  interferenceProbe: string;
  whenHappens: string;
}

export function InterferenceVerification () {
  const [isOpen, setIsOpen] = useState(false)

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  function onSubmit ({
    responsible,
    equipment,
    documents,
    geolocationPoints,
    interferenceDiameter,
    typeOfNetwork,
    owningCompany,
    interferenceProbe,
    whenHappens,
  }: FormData) {
    const submit = {
      responsible,
      equipment,
      documents,
      geolocationPoints,
      interferenceDiameter,
      typeOfNetwork,
      owningCompany,
      interferenceProbe,
      whenHappens,
    }
    reset()

    console.log(submit)
  }

  return (
    <>
      <Sidebar />
      <Navbar />
      <S.ContainerConfirmation>
        <h2>Verificação de Interferências Físicas e Magnéticas</h2>
        <button onClick={() => setIsOpen(true)}><FiPlus /></button>
        <S.GridConfirmation>
          <span>Responsável</span>
          <span>Equipamentos</span>
          <span>Documentos</span>
          <span>Pontos de Geolocalização</span>
          <span>Diâmetro da interferência</span>
          <span>Tipo de rede</span>
          <span>Empresa proprietária</span>
          <span>Sondagem da interferência</span>
          <span>Quando acontece</span>
        </S.GridConfirmation>
        {isOpen
          ? <Modal onClose={() => setIsOpen(false)}>
            <S.Container>
              <S.Form onSubmit={handleSubmit(onSubmit)}>
                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='responsible'>Responsável</label>
                    <input
                      id='responsible' placeholder='Nome'
                      {...register('responsible', {
                        required: {
                          value: true,
                          message: 'Todos os campos são obrigatórios',
                        },
                      })}
                    />
                    <span>{errors.responsible?.message}</span>
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='equipment'>Equipamentos</label>
                    <input
                      id='equipment' placeholder='Equipamentos'
                      {...register('equipment', {
                        required: {
                          value: true,
                          message: 'Equipamentos são obrigatórios',
                        },
                      })}
                    />
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='documents'>Documentos</label>
                    <input
                      id='documents' placeholder='Documentos'
                      {...register('documents', {
                        required: {
                          value: true,
                          message: 'Documentos são obrigatórios',
                        },
                      })}
                    />
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='geolocationPoints'>Pontos de geolocalização</label>
                    <input
                      id='geolocationPoints' placeholder='Pontos de geolocalização'
                      {...register('geolocationPoints', {
                        required: {
                          value: true,
                          message: 'Pontos são obrigatórios',
                        },
                      })}
                    />
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='interferenceDiameter'>Diâmetro de interferência</label>
                    <input
                      id='interferenceDiameter' placeholder='Sua UF'
                      {...register('interferenceDiameter', {
                        required: {
                          value: true,
                          message: 'UF é obrigatória',
                        },
                      })}
                    />
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='typeOfNetwork'>Tipo de rede</label>
                    <input
                      id='typeOfNetwork' placeholder='Tipo da rede'
                      {...register('typeOfNetwork', {
                        required: {
                          value: true,
                          message: 'Rede é obrigatória',
                        },
                      })}
                    />
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='owningCompany'>Empresa proprietária</label>
                    <input
                      id='owningCompany' placeholder='Nome da Empresa'
                      {...register('owningCompany', {
                        required: {
                          value: true,
                          message: 'Empresa é obrigatória',
                        },
                      })}
                    />
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='interferenceProbe'>Sondagem da interferência</label>
                    <input
                      id='interferenceProbe' placeholder='Confirmação da sondagem'
                      {...register('interferenceProbe', {
                        required: {
                          value: true,
                          message: 'Sondagem é obrigatória',
                        },
                      })}
                    />
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='whenHappens'>Quando acontece</label>
                    <input
                      id='whenHappens' placeholder='12/07/2022' type='date'
                      {...register('whenHappens', {
                        required: {
                          value: true,
                          message: 'Data é obrigatória',
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
