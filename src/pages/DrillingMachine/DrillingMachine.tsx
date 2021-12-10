import * as S from './DrillingMachine.styled'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'

import { FiPlus } from 'react-icons/fi'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

type FormData = {
  machineCode: string;
  manufacturer: string;
  drillingMachineName: string;
  hourmeter: string;
  lastOverhaul: Date;
  nextOverhaul: Date;
  reviewUpload: string;
  revisionSubtypes: string;
  traction: string;
  compression: string;
  torque: string;
  spindleRotation: string;
  tractionSpeed: string;
  CompressionSpeed: string;
  pilotHoleDiameter: string;
  entryAngle: string;
  nominalDiameter: string;
  radiusCurvature: string;
  length: string;
  flow: string;
  pressure: string;
  maximumExtension: string;
}

export function DrillingMachine () {
  const [isOpen, setIsOpen] = useState(false)

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  function onSubmit ({
    machineCode,
    manufacturer,
    drillingMachineName,
    hourmeter,
    lastOverhaul,
    nextOverhaul,
    reviewUpload,
    revisionSubtypes,
    traction,
    compression,
    torque,
    spindleRotation,
    tractionSpeed,
    CompressionSpeed,
    pilotHoleDiameter,
    entryAngle,
    nominalDiameter,
    radiusCurvature,
    length,
    flow,
    pressure,
    maximumExtension,
  }: FormData) {
    const submit = {
      machineCode,
      manufacturer,
      drillingMachineName,
      hourmeter,
      lastOverhaul,
      nextOverhaul,
      reviewUpload,
      revisionSubtypes,
      traction,
      compression,
      torque,
      spindleRotation,
      tractionSpeed,
      CompressionSpeed,
      pilotHoleDiameter,
      entryAngle,
      nominalDiameter,
      radiusCurvature,
      length,
      flow,
      pressure,
      maximumExtension,
    }
    reset()

    console.log(submit)
  }

  return (
    <>
      <Sidebar />
      <Navbar />
      <S.ContainerConfirmation>
        <h2>Máquina Perfuratriz</h2>
        <button onClick={() => setIsOpen(true)}><FiPlus /></button>
        <S.GridConfirmation>
          <span>Modelo</span>
          <span>Fabricante</span>
          <span>Tração(KN)</span>
          <span>Torque(N.m)</span>
          <span>Alargamento máximo</span>
        </S.GridConfirmation>
        {isOpen
          ? <Modal onClose={() => setIsOpen(false)}>
            <S.Container>
              <S.Form onSubmit={handleSubmit(onSubmit)}>
                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='machineCode'>Código da maquina</label>
                    <input
                      id='machineCode' placeholder='Insira o código da máquina'
                      {...register('machineCode', {
                        required: {
                          value: true,
                          message: 'Todos os campos são obrigatórios',
                        },
                      })}
                    />
                    <span>{errors.machineCode?.message}</span>
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='manufacturer'>Fabricante</label>
                    <input
                      id='manufacturer' placeholder='Nome do fabricante'
                      {...register('manufacturer', {
                        required: {
                          value: true,
                          message: 'Fabricante é obrigatório',
                        },
                      })}
                    />
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='drillingMachineName'>Nome da Máquina Perfuratriz</label>
                    <input
                      id='drillingMachineName' placeholder='Máquina Perfuratriz'
                      {...register('drillingMachineName', {
                        required: {
                          value: true,
                          message: 'Nome da maquina é obrigatório',
                        },
                      })}
                    />
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='hourmeter'>Horimetro</label>
                    <input
                      id='hourmeter' placeholder='Horimetro'
                      {...register('hourmeter', {
                        required: {
                          value: true,
                          message: 'Horimetro é obrigatório',
                        },
                      })}
                    />
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='lastOverhaul'>Última revisão/manutenção</label>
                    <input
                      id='lastOverhaul' placeholder='Insira a data' type='date'
                      {...register('lastOverhaul', {
                        required: {
                          value: true,
                          message: 'Data de revisão é obrigatória',
                        },
                      })}
                    />
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='nextOverhaul'>Próxima revisão/manutenção</label>
                    <input
                      id='nextOverhaul' placeholder='Insira a data' type='date'
                      {...register('nextOverhaul', {
                        required: {
                          value: true,
                          message: 'Data de revisão é obrigatória',
                        },
                      })}
                    />
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='reviewUpload'>Upload da revisão</label>
                    <input
                      id='reviewUpload' placeholder='Upload da revisão'
                      {...register('reviewUpload', {
                        required: {
                          value: true,
                          message: 'Upload da revisão é obrigatório',
                        },
                      })}
                    />
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='revisionSubtypes'>Subtipos de revisão</label>
                    <input
                      id='revisionSubtypes' placeholder='Subtipos'
                      {...register('revisionSubtypes', {
                        required: {
                          value: true,
                          message: 'Subtipos é obrigatório',
                        },
                      })}
                    />
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='traction'>Tração (ton)</label>
                    <input
                      id='traction' placeholder='Tração'
                      {...register('traction', {
                        required: {
                          value: true,
                          message: 'Tração é obrigatória',
                        },
                      })}
                    />
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='compression'>Compressão (KN)</label>
                    <input
                      id='compression' placeholder='Compressão'
                      {...register('compression', {
                        required: {
                          value: true,
                          message: 'Compressão é obrigatório',
                        },
                      })}
                    />
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='torque'>Torque (N.m)</label>
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
                    <label htmlFor='spindleRotation'>Rotação Spindle (RPM)</label>
                    <input
                      id='spindleRotation' placeholder='Rotação'
                      {...register('spindleRotation', {
                        required: {
                          value: true,
                          message: 'Rotação é obrigatória',
                        },
                      })}
                    />
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='tractionSpeed'>Velocidade Tração (m/min)</label>
                    <input
                      id='tractionSpeed' placeholder='Velocidade'
                      {...register('tractionSpeed', {
                        required: {
                          value: true,
                          message: 'Velocidade é obrigatória',
                        },
                      })}
                    />
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='CompressionSpeed'>Velocidade Compressão (m/min)</label>
                    <input
                      id='CompressionSpeed' placeholder='Velocidade'
                      {...register('CompressionSpeed', {
                        required: {
                          value: true,
                          message: 'Velocidade é obrigatório',
                        },
                      })}
                    />
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='pilotHoleDiameter'>Diâmetro furo piloto (pol)</label>
                    <input
                      id='pilotHoleDiameter' placeholder='Diâmetro'
                      {...register('pilotHoleDiameter', {
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
                    <label htmlFor='entryAngle'>Ângulo de entrada</label>
                    <input
                      id='entryAngle' placeholder='Ângulo'
                      {...register('entryAngle', {
                        required: {
                          value: true,
                          message: 'Ângulo é obrigatório',
                        },
                      })}
                    />
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='nominalDiameter'>Diâmetro nominal (mm)</label>
                    <input
                      id='nominalDiameter' placeholder='Diâmetro'
                      {...register('nominalDiameter', {
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
                    <label htmlFor='radiusCurvature'>Raio de curvatura (m)</label>
                    <input
                      id='radiusCurvature' placeholder='Raio'
                      {...register('radiusCurvature', {
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
                    <label htmlFor='length'>Comprimento (m)</label>
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
                    <label htmlFor='flow'>Vazão (L/min)</label>
                    <input
                      id='flow' placeholder='Vazão'
                      {...register('flow', {
                        required: {
                          value: true,
                          message: 'Vazão é obrigatório',
                        },
                      })}
                    />
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='pressure'>Pressão (psi)</label>
                    <input
                      id='pressure' placeholder='Pressão'
                      {...register('pressure', {
                        required: {
                          value: true,
                          message: 'Pressão é obrigatória',
                        },
                      })}
                    />
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='maximumExtension'>Alargamento máximo (pol)</label>
                    <input
                      id='maximumExtension' placeholder='Alargamento máximo'
                      {...register('maximumExtension', {
                        required: {
                          value: true,
                          message: 'Alargamento é obrigatório',
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
