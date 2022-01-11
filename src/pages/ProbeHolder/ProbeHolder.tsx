import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'

import * as S from './ProbeHolder.styled'

import { TextField } from '../../ui/Components/TextField'
import { useForm } from 'react-hook-form'
import { FiPlus } from 'react-icons/fi'
import { useState } from 'react'
import DeleteButton from '../../ui/Components/DeleteButton/DeleteButton'
import EditButton from '../../ui/Components/EditButton/EditButton'

type FormData = {
  code: string;
  compatibleProbe: string;
  compatibleShovel: string;
  numberJets: string;
  connection: string;
}

export function ProbeHolder () {
  const [isOpen, setIsOpen] = useState(false)
  const [probeHolders, setProbeHolders] = useState<any[]>([])

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  function onSubmit (data: FormData) {
    console.log(data)

    reset()
  }

  function handleDelete (id: string) {
    setProbeHolders(probeHolders =>
      probeHolders.filter(probeHolder => probeHolder.id !== id),
    )
  }

  const handleUpdate = (id: string) => {
    setProbeHolders(probeHolders => probeHolders.map(probeHolder => {
      if (probeHolder.id === id) {
        return {
          ...probeHolder,
        }
      }

      return probeHolder
    }))
  }

  return (
    <>
      <Sidebar />
      <Navbar />
      <S.ContainerConfirmation>
        <h2>Porta sonda</h2>
        <button onClick={() => setIsOpen(true)}><FiPlus /></button>

        <S.GridConfirmation>
          <span>Sonda compatível/marca</span>
          <span>Pá compatível</span>
          <span>Número de Jatos</span>
          <span>Conexão/Rosca</span>
        </S.GridConfirmation>

        <ul>
          {probeHolders.length > 0
            ? probeHolders.map((probeHolder) =>
              <li key={probeHolder.id}>
                <S.GridConfirmation>
                  <span>
                    {probeHolder}
                  </span>
                  <DeleteButton
                    onDelete={() => handleDelete(probeHolder.id)}
                  />
                  <EditButton
                    onEdit={() => handleUpdate(probeHolder.id)}
                  />
                </S.GridConfirmation>
              </li>,
            )
            : <p>🤔 Nenhum porta sonda encontrado</p>}
        </ul>

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
                label='Sonda compatível/marca'
                id='compatibleProbe'
                {...register('compatibleProbe', {
                  required: true,
                })}
              />

              <TextField
                label='Pá compatível'
                id='compatibleShovel'
                {...register('compatibleShovel', {
                  required: true,
                })}
              />

              <TextField
                label='Número de Jatos'
                id='numberJets'
                {...register('numberJets', {
                  required: true,
                })}
              />

              <TextField
                label='Conexão/Rosca'
                id='connection'
                {...register('connection', {
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
