import * as S from './styled'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'

import { FiPlus } from 'react-icons/fi'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { TextField } from '../../ui/Components/TextField'

type FormData = {
  responsible: string;
  tools: string;
  equipment: string;
  documents: string;
  information: string;
}

export default function
DitchOpening () {
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
        <h2>Abertura da vala</h2>
        <button onClick={() => setIsOpen(true)}><FiPlus /></button>

        <S.GridConfirmation>
          <span>Responsável</span>
          <span>Ferramentas</span>
          <span>Equipamentos</span>
          <span>Documentos</span>
          <span>Informações Envolvidas</span>
        </S.GridConfirmation>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
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
                label='Ferramentas'
                {...register('tools', {
                  required: true,
                })}
              />

              <TextField
                label='Equipamentos'
                {...register('equipment', {
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
                label='Informações Envolvidas'
                {...register('information', {
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
