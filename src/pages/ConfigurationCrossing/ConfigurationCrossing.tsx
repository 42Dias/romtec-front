import DeleteButton from '../../ui/Components/DeleteButton/DeleteButton'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'
import * as S from './ConfigurationCrossing.styled'

import { TextField } from '../../ui/Components/TextField'
import { useForm } from 'react-hook-form'
import { FiPlus } from 'react-icons/fi'
import { useState } from 'react'

type FormData = {
  description: string;
  name: Date;
}

export function ConfigurationCrossing () {
  const [isOpen, setIsOpen] = useState(false)
  const [configurationCrossings, setConfigurationCrossings] = useState<any[]>([])

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  function onSubmit (data: FormData) {
    console.log(data)

    reset()
  }

  function handleDelete (id: string) {
    setConfigurationCrossings(configurationCrossings =>
      configurationCrossings.filter(configurationCrossing => configurationCrossing.id !== id),
    )
  }

  return (
    <>
      <Sidebar />
      <Navbar />
      <S.ContainerConfirmation>
        <h2>Configurações</h2>
        <button onClick={() => setIsOpen(true)}><FiPlus /></button>

        <S.GridConfirmation>
          <span>Nome</span>
          <span>Descrição</span>
        </S.GridConfirmation>

        <ul>
          {configurationCrossings.map((configurationCrossing) =>
            <li key={configurationCrossing.id}>
              <S.GridConfirmation>
                <span>
                  {configurationCrossing}
                </span>
                <DeleteButton
                  onDelete={() => handleDelete(configurationCrossing.id)}
                />
              </S.GridConfirmation>
            </li>,
          )}
        </ul>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <S.Container>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                label='Descrição'
                errorMessage={errors.description?.message}
                {...register('description', {
                  required: {
                    value: true,
                    message: 'Todos os campos são obrigatórios',
                  },
                })}
              />

              <TextField
                label='Nome'
                {...register('name', {
                  required: {
                    value: true,
                    message: '',
                  },
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
