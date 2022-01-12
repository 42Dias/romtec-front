import * as S from './styled'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'

import { TextField } from '../../ui/Components/TextField'
import { useForm } from 'react-hook-form'
import { FiPlus } from 'react-icons/fi'
import { useState } from 'react'
import DeleteButton from '../../ui/Components/DeleteButton/DeleteButton'
import EditButton from '../../ui/Components/EditButton/EditButton'
import { FaEdit } from 'react-icons/fa'

type FormData = {
  code: string;
  swivelCapacity: string;
  conditionOfUse: string;
  typeOfReamer: string;
  indicationIdealGroundForWork: string;
  numberJets: string;
  unitOfMeasurement: string;
  screwThread: string;
}

export default function
Reamer () {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenUpdate, setIsOpenUpdate] = useState(false)
  const [reamers, setReamers] = useState<any[]>([])

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  function onSubmit (data: FormData) {
    console.log(data)

    reset()
  }

  function handleDelete (id: string) {
    setReamers(reamers =>
      reamers.filter(reamer => reamer.id !== id),
    )
  }

  const handleUpdate = (id: string) => {
    setReamers(reamers => reamers.map(reamer => {
      if (reamer.id === id) {
        return {
          ...reamer,
        }
      }

      return reamer
    }))
  }

  return (
    <>
      <Sidebar />
      <Navbar />
      <S.ContainerConfirmation>
        <h2>Alargador</h2>
        <button onClick={() => setIsOpen(true)}><FiPlus /></button>

        <S.GridConfirmation>
          <span>Código de ferramenta</span>
          <span>Máquina</span>
          <span>Diâmetro</span>
          <span>Capacidade de carga</span>
          <span>Descrição</span>
        </S.GridConfirmation>

        <ul>
          {reamers.length > 0
            ? reamers.map((reamer) =>
              <li key={reamer.id}>
                <S.GridConfirmation>
                  <span>
                    {reamer}
                  </span>
                  <DeleteButton
                    onDelete={() => handleDelete(reamer.id)}
                  />
                  {/* <EditButton
                    onEdit={() => handleUpdate(reamer.id)}
                  /> */}
                  <button
                    // onChange={onEdit}
                    onClick={() => setIsOpenUpdate(true)}
                    style={{ background: 'none', color: 'yellow' }}
                    title='Editar?'
                  >
                    <FaEdit size={20} />
                  </button>
                </S.GridConfirmation>
              </li>,
            )
            : <p>🤔 Nenhum alargador encontrado</p>}
        </ul>

        <Modal isOpen={isOpenUpdate} onClose={() => setIsOpenUpdate(false)}>
          <S.Container>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                label='Código'
                errorMessage={errors.code?.message}
                id='code'
                {...register('code', {
                  required: {
                    value: true,
                    message: 'Todos os campos são obrigatórios',
                  },
                })}
              />

              <TextField
                label='Capacidade do Swivel'
                {...register('swivelCapacity', {
                  required: true,
                })}
              />

              <TextField
                label='Condições de uso'
                {...register('conditionOfUse', {
                  required: true,
                })}
              />

              <TextField
                label='Tipo de alargador'
                {...register('typeOfReamer', {
                  required: true,
                })}
              />

              <TextField
                label='Indicação de tipo ideal de solo para trabalho'
                {...register('indicationIdealGroundForWork', {
                  required: true,
                })}
              />

              <TextField
                label='Número de jatos'
                {...register('numberJets', {
                  required: true,
                })}
              />

              <TextField
                label='Diâmetro(mm)'
                {...register('unitOfMeasurement', {
                  required: true,
                })}
              />

              <TextField
                label='Rosca'
                {...register('screwThread', {
                  required: true,
                })}
              />
              <button type='submit'>Salvar</button>
            </S.Form>
          </S.Container>
        </Modal>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <S.Container>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                label='Código'
                errorMessage={errors.code?.message}
                id='code'
                {...register('code', {
                  required: {
                    value: true,
                    message: 'Todos os campos são obrigatórios',
                  },
                })}
              />

              <TextField
                label='Capacidade do Swivel'
                {...register('swivelCapacity', {
                  required: true,
                })}
              />

              <TextField
                label='Condições de uso'
                {...register('conditionOfUse', {
                  required: true,
                })}
              />

              <TextField
                label='Tipo de alargador'
                {...register('typeOfReamer', {
                  required: true,
                })}
              />

              <TextField
                label='Indicação de tipo ideal de solo para trabalho'
                {...register('indicationIdealGroundForWork', {
                  required: true,
                })}
              />

              <TextField
                label='Número de jatos'
                {...register('numberJets', {
                  required: true,
                })}
              />

              <TextField
                label='Diâmetro(mm)'
                {...register('unitOfMeasurement', {
                  required: true,
                })}
              />

              <TextField
                label='Rosca'
                {...register('screwThread', {
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
