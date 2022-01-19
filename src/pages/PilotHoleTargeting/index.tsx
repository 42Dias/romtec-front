import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'

import * as S from './styled'

import { TextField } from '../../ui/Components/TextField'
import { useForm } from 'react-hook-form'
import { FiPlus } from 'react-icons/fi'
import { useState } from 'react'

type FormData = {
  responsible: string;
  tools: string;
  equipment: string;
  documents: string;
  information: string;
  whenHappens: Date;
}

export default function
 PilotHoleTargeting () {
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
        <h2>Direcionamento do Furo Piloto</h2>
        <button onClick={() => setIsOpen(true)}><FiPlus /></button>

        <S.GridConfirmation>
          <span>Responsável</span>
          <span>Ferramentas</span>
          <span>Equipamentos</span>
          <span>Documentos</span>
          <span>Informações Envolvidas</span>
          <span>Quando acontece</span>
        </S.GridConfirmation>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <S.Container>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                label='Responsável'
                id='responsible'
                errorMessage={errors.responsible?.message}
                {...register('responsible', {
                  required: {
                    value: true,
                    message: 'Todos os campos são obrigatórios',
                  },
                })}
              />

              <TextField
                label='Ferramentas'
                id='tools'
                {...register('tools', {
                  required: true,
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
                label='informações Envolvidas'
                id='information'
                {...register('information', {
                  required: true,
                })}
              />

              <TextField
                label='Quando acontece'
                id='whenHappens'
                type='date'
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
