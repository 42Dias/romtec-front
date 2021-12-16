import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'

import * as S from './Equipment.styled'

import { TextField } from '../../ui/Components/TextField'
import { useForm } from 'react-hook-form'
import { FiPlus } from 'react-icons/fi'
import { useState } from 'react'

type FormData = {
  drillMachine: string;
  probe: string;
  receiver: string;
  drillingRods: string;
  mixerTank: string;
  generator: string;
  compressor: string;
  centrifugalPumps: string;
  hoses: string;
  backgroundEngines: string;
  equipments: string;
}

export function Equipment () {
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
        <h2>Equipamentos</h2>
        <button onClick={() => setIsOpen(true)}><FiPlus /></button>

        <S.GridConfirmation>
          <span>Código de ferramenta</span>
          <span>Máquina</span>
          <span>Diâmetro</span>
          <span>Capacidade de carga</span>
          <span>Descrição</span>
        </S.GridConfirmation>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <S.Container>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                label='Máquina Perfuratriz'
                errorMessage={errors.drillMachine?.message}
                {...register('drillMachine', {
                  required: {
                    value: true,
                    message: 'Todos os campos são obrigatórios',
                  },
                })}
              />

              <TextField
                label='Sonda'
                {...register('probe', {
                  required: true,
                })}
              />

              <TextField
                label='Receptor/Emissor'
                {...register('receiver', {
                  required: true,
                })}
              />

              <TextField
                label='Hastes de perfuração'
                {...register('drillingRods', {
                  required: true,
                })}
              />

              <TextField
                label='Tanque Misturador c/ Venturi ou Hélice rotativa'
                {...register('mixerTank', {
                  required: true,
                })}
              />

              <TextField
                label='Gerador S/N'
                {...register('generator', {
                  required: true,
                })}
              />

              <TextField
                label='Compressor S/N'
                {...register('compressor', {
                  required: true,
                })}
              />

              <TextField
                label='Bombas Centrífugas S/N'
                {...register('centrifugalPumps', {
                  required: true,
                })}
              />

              <TextField
                label='Mangueiras'
                {...register('hoses', {
                  required: true,
                })}
              />

              <TextField
                label='Motores de Fundo'
                {...register('backgroundEngines', {
                  required: true,
                })}
              />

              <S.ContentForm>
                <fieldset>
                  <label htmlFor='equipments'>Equipamentos</label>
                  <select id='equipments' {...register('equipments')}>
                    <option value=''>Select...</option>
                    <option value='Gerador'>Gerador</option>
                    <option value='Misturador'>Misturador</option>
                    <option value='Bomba centrífuga'>Bomba centrífuga</option>
                    <option value='Tremonha de Carga'>Tremonha de Carga</option>
                    <option value='Venturi'>Venturi</option>
                    <option value='Mangueiras'>Mangueiras</option>
                    <option value='Tanques com jato de agitação'>Tanques com jato de agitação</option>
                    <option value='Componentes de fluido'>Componentes de fluido</option>
                  </select>
                </fieldset>
              </S.ContentForm>

              <button type='submit'>Salvar</button>
            </S.Form>
          </S.Container>
        </Modal>
      </S.ContainerConfirmation>
    </>
  )
}
