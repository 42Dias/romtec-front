import * as S from './DrillingMachine.styled'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'

import { FiPlus } from 'react-icons/fi'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { TextField } from '../../ui/Components/TextField'

type FormData = {
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
  compressionSpeed: string;
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

  function onSubmit (data: FormData) {
    console.log(data)

    reset()
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

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <S.Container>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                label='Fabricante'
                errorMessage={errors.manufacturer?.message}
                {...register('manufacturer', {
                  required: {
                    value: true,
                    message: 'Todos os campos são obrigatórios',
                  },
                })}
              />

              <TextField
                label='Nome da Máquina Perfuratriz'
                {...register('drillingMachineName', {
                  required: true,
                })}
              />

              <TextField
                label='Horimetro'
                {...register('hourmeter', {
                  required: true,
                })}
              />

              <TextField
                label='Última revisão/manutenção'
                {...register('lastOverhaul', {
                  required: true,
                })}
              />

              <TextField
                label='Próxima revisão/manutenção'
                {...register('nextOverhaul', {
                  required: true,
                })}
              />

              <TextField
                label='Upload da revisão'
                {...register('reviewUpload', {
                  required: true,
                })}
              />

              <S.ContentForm>
                <fieldset>
                  <label htmlFor='revisionSubtypes'>Subtipos de revisão</label>
                  <select id='revisionSubtypes' {...register('revisionSubtypes')}>
                    <option value=''>Select...</option>
                    <option value='Navegador'>Preventiva</option>
                    <option value='Operador'>Preditiva</option>
                    <option value='Outro'>Corretiva</option>
                  </select>
                </fieldset>
              </S.ContentForm>

              <TextField
                label='Tração (ton)'
                {...register('traction', {
                  required: true,
                })}
              />

              <TextField
                label='Compressão (KN)'
                {...register('compression', {
                  required: true,
                })}
              />

              <TextField
                label='Torque'
                {...register('torque', {
                  required: true,
                })}
              />

              <TextField
                label='Rotação Spindle (RPM)'
                {...register('spindleRotation', {
                  required: true,
                })}
              />

              <TextField
                label='Velocidade Tração (m/min)'
                {...register('tractionSpeed', {
                  required: true,
                })}
              />

              <TextField
                label='Velocidade Compressão (m/min)'
                {...register('compressionSpeed', {
                  required: true,
                })}
              />

              <TextField
                label='Diâmetro furo piloto (pol)'
                {...register('pilotHoleDiameter', {
                  required: true,
                })}
              />

              <TextField
                label='Ângulo de entrada'
                {...register('entryAngle', {
                  required: true,
                })}
              />

              <TextField
                label='Diâmetro nominal (mm)'
                {...register('nominalDiameter', {
                  required: true,
                })}
              />

              <TextField
                label='Raio de curvatura (m)'
                {...register('radiusCurvature', {
                  required: true,
                })}
              />

              <TextField
                label='Comprimento (m)'
                {...register('length', {
                  required: true,
                })}
              />

              <TextField
                label='Vazão (L/min)'
                {...register('flow', {
                  required: true,
                })}
              />

              <TextField
                label='Pressão (psi)'
                {...register('pressure', {
                  required: true,
                })}
              />

              <TextField
                label='Alargamento máximo (pol)'
                {...register('maximumExtension', {
                  required: true,
                })}
              />

              <button type='submit'>Salvar</button>
            </S.Form>
          </S.Container>
        </Modal>
      </S.ContainerConfirmation>
    </>
  )
}
