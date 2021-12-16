import * as S from './Soiltypes.styled'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'

import { TextField } from '../../ui/Components/TextField'
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

  function onSubmit (data: FormData) {
    console.log(data)

    reset()
  }

  return (
    <>
      <Sidebar />
      <Navbar />
      <S.ContainerConfirmation>
        <h2>Tipos de solo</h2>
        <button onClick={() => setIsOpen(true)}><FiPlus /></button>

        <S.GridConfirmation>
          <span>Especificação do solo</span>
          <span>Resistencia Seca</span>
          <span>Reação a dilatação</span>
          <span>Dureza Plástica</span>
          <span>Indice de plasticidade</span>
        </S.GridConfirmation>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <S.Container>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                label='Especificação do solo'
                errorMessage={errors.soilSpecification?.message}
                {...register('soilSpecification', {
                  required: {
                    value: true,
                    message: 'Todos os campos são obrigatórios',
                  },
                })}
              />

              <TextField
                label='Resistência seca'
                {...register('dryResistance', {
                  required: true,
                })}
              />

              <TextField
                label='Descrição'
                {...register('description', {
                  required: true,
                })}
              />

              <TextField
                label='Reação a dilatação'
                {...register('reactionDilation', {
                  required: true,
                })}
              />

              <TextField
                label='Dureza plastica'
                {...register('plasticHardness', {
                  required: true,
                })}
              />

              <TextField
                label='Índice de plasticidade'
                {...register('plasticityIndex', {
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
