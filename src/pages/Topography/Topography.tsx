import * as S from './Topography.styled'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'

import { FiPlus } from 'react-icons/fi'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

type FormData = {
  responsibleTopography: string;
  executionDate: Date;
}

export function Topography () {
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
        <h2>Topografia</h2>
        <button onClick={() => setIsOpen(true)}><FiPlus /></button>
        <S.GridConfirmation>
          <span>Responsável pela Topografia</span>
          <span>Data da execução da Topografia</span>
        </S.GridConfirmation>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <S.Container>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <S.ContentForm>
                <fieldset>
                  <label htmlFor='responsibleTopography'>Responsável pela topografia</label>
                  <input
                    id='responsibleTopography' placeholder='Responsável'
                    {...register('responsibleTopography', {
                      required: {
                        value: true,
                        message: 'Todos os campos são obrigatórios',
                      },
                    })}
                  />
                  <span>{errors.responsibleTopography?.message}</span>
                </fieldset>
              </S.ContentForm>

              <S.ContentForm>
                <fieldset>
                  <label htmlFor='executionDate'>Data da execução da Topografia</label>
                  <input
                    id='executionDate' placeholder='Data de execução'
                    {...register('executionDate', {
                      required: {
                        value: true,
                        message: 'Data é obrigatória',
                      },
                    })}
                  />
                </fieldset>
              </S.ContentForm>

              <button type='submit'>Salvar</button>
            </S.Form>
          </S.Container>
          {/* eslint-disable-next-line */}
        </Modal>
      </S.ContainerConfirmation>
    </>
  )
}
