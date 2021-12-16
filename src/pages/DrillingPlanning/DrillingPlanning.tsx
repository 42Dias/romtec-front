import * as S from './DrillingPlanning.styled'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'

import { TextField } from '../../ui/Components/TextField'
import { useForm } from 'react-hook-form'

type FormData = {
  latEntryCheckpoint: string;
  longEntryCheckpoint: string;
  latOutputCheckpoint: string;
  longOutputCheckpoint: string;
  pipeType: string;
  drillingDiameter: string;
  soilTypes: string;
}

export function DrillingPlanning () {
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
        <h2>Planejamento de perfuração</h2>
        <S.Container>
          <S.Form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label='Ponto de verificação de entrada (lat)'
              errorMessage={errors.latEntryCheckpoint?.message}
              placeholder='Latitude'
              type='number'
              {...register('latEntryCheckpoint', {
                required: {
                  value: true,
                  message: 'Todos os campos são obrigatórios',
                },
              })}
            />

            <TextField
              label='Ponto de verificação de entrada (long)'
              placeholder='Longitude'
              type='number'
              {...register('longEntryCheckpoint', {
                required: true,
              })}
            />

            <TextField
              label='Ponto de verificação de saída (lat)'
              placeholder='Latitude'
              type='number'
              {...register('latOutputCheckpoint', {
                required: true,
              })}
            />

            <TextField
              label='Ponto de verificação de saída (long)'
              placeholder='Longitude'
              type='number'
              {...register('longOutputCheckpoint', {
                required: true,
              })}
            />

            <TextField
              label='Tipo de tubulação'
              placeholder='Fibra óptica'
              {...register('pipeType', {
                required: true,
              })}
            />

            <TextField
              label='Diâmetro de perfuração'
              placeholder='20 metros'
              {...register('drillingDiameter', {
                required: true,
              })}
            />

            <TextField
              label='Tipos de solo'
              placeholder='Barro'
              {...register('soilTypes', {
                required: true,
              })}
            />

            <button type='submit'>Salvar</button>
          </S.Form>
        </S.Container>
      </S.ContainerConfirmation>
    </>
  )
}
