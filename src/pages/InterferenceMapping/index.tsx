import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'

import { TextField } from '../../ui/Components/TextField'
import { useForm } from 'react-hook-form'

import * as S from './styled'

type FormData = {
  responsible: string;
  equipments: string;
  documents: string;
  networkType: string;
  owningCompany: string;
  ConfirmationInterferenceProbe: string;
  survey: string;
  creatingHolePlan: string;
  whenHappens: Date;
}

export default function
InterferenceMapping () {
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
        <h2>Levantamento e Mapeamento de interferências</h2>
        <S.Container>
          <S.Form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label='Responsável'
              errorMessage={errors.responsible?.message}
              {...register('responsible', {
                required: {
                  value: true,
                  message: 'Todos os campos são obrigatórios',
                },
              })}
            />

            <TextField
              label='Equipamentos'
              {...register('equipments', {
                required: true,
              })}
            />

            <TextField
              label='Documentos'
              {...register('documents', {
                required: true,
              })}
            />

            <TextField
              label='Tipo de rede'
              {...register('networkType', {
                required: true,
              })}
            />

            <TextField
              label='Empresa proprietária'
              {...register('owningCompany', {
                required: true,
              })}
            />

            <TextField
              label='Confirmação da sondagem da interferência'
              {...register('ConfirmationInterferenceProbe', {
                required: true,
              })}
            />

            <TextField
              label='Sondagem'
              {...register('survey', {
                required: true,
              })}
            />

            <TextField
              label='Criação do plano de furo'
              {...register('creatingHolePlan', {
                required: true,
              })}
            />

            <TextField
              label='Quando acontece'
              type='date'
              {...register('whenHappens', {
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
