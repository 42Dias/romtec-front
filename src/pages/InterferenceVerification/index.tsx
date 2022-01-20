import * as S from './styled'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'

import { TextField } from '../../ui/Components/TextField'
import { useForm } from 'react-hook-form'
import { FiPlus } from 'react-icons/fi'
import { useState } from 'react'

type FormData = {
  responsible: string;
  equipment: string;
  documents: string;
  geolocationPoints: string;
  interferenceDiameter: string;
  typeOfNetwork: string;
  owningCompany: string;
  interferenceProbe: string;
  whenHappens: Date;
}

export default function
InterferenceVerification () {
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
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <S.Container>
            <S.Form onSubmit={handleSubmit(onSubmit)}>

              <TextField
                label='Responsável'
                errorMessage={errors.responsible?.message}
                id='responsible'
                {...register('responsible', {
                  required: {
                    value: true,
                    message: 'Todos os campos são obrigatórios',
                  },
                })}
              />

              <TextField
                label='Equipamentos'
                id='equipment'
                {...register('equipment', {
                  required: true,
                })}
              />

              <TextField
                label='Documentos'
                id='documents'
                {...register('documents', {
                  required: true,
                })}
              />

              <TextField
                label='Pontos de Geolocalização'
                id='geolocationPoints'
                {...register('geolocationPoints', {
                  required: true,
                })}
              />

              <TextField
                label='Diâmetro da interferência'
                id='interferenceDiameter'
                {...register('interferenceDiameter', {
                  required: true,
                })}
              />

              <TextField
                label='Tipo de rede'
                id='typeOfNetwork'
                {...register('typeOfNetwork', {
                  required: true,
                })}
              />

              <TextField
                label='Empresa proprietária'
                id='owningCompany'
                {...register('owningCompany', {
                  required: true,
                })}
              />

              <TextField
                label='Sondagem da interferência'
                id='interferenceProbe'
                {...register('interferenceProbe', {
                  required: true,
                })}
              />

              <TextField
                label='Quando acontece'
                type='date'
                id='whenHappens'
                {...register('whenHappens', {
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
