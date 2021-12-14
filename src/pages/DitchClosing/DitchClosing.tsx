import * as S from './DitchClosing.styled'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'

import { FiPlus } from 'react-icons/fi'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

type FormData = {
  responsible: string;
  tools: string;
  equipment: string;
  documents: string;
  information: string;
}

export function DitchClosing () {
  const [isOpen, setIsOpen] = useState(false)

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  function onSubmit ({
    responsible,
    tools,
    equipment,
    documents,
    information,
  }: FormData) {
    const submit = {
      responsible,
      tools,
      equipment,
      documents,
      information,
    }
    reset()

    console.log(submit)
  }

  return (
    <>
      <Sidebar />
      <Navbar />
      <S.ContainerConfirmation>
        <h2>Fechamento da vala</h2>
        <button onClick={() => setIsOpen(true)}><FiPlus /></button>
        <S.GridConfirmation>
          <span>Responsável</span>
          <span>Ferramentas</span>
          <span>Equipamentos</span>
          <span>Documentos</span>
          <span>Informações Envolvidas</span>
        </S.GridConfirmation>
        {isOpen
          ? <Modal onClose={() => setIsOpen(false)}>
            <S.Container>
              <S.Form onSubmit={handleSubmit(onSubmit)}>
                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='responsible'>Responsável</label>
                    <input
                      id='responsible' placeholder='Nome'
                      {...register('responsible', {
                        required: {
                          value: true,
                          message: 'Todos os campos são obrigatórios',
                        },
                      })}
                    />
                    <span>{errors.responsible?.message}</span>
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='tools'>Ferramentas</label>
                    <input
                      id='tools' placeholder='Nome das ferramentas'
                      {...register('tools', {
                        required: {
                          value: true,
                          message: 'Ferramentas são obrigatórias',
                        },
                      })}
                    />
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='equipment'>Equipamentos</label>
                    <input
                      id='equipment' placeholder='Nome dos equipamentos'
                      {...register('equipment', {
                        required: {
                          value: true,
                          message: 'Equipamentos são obrigatórios',
                        },
                      })}
                    />
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='documents'>Documentos</label>
                    <input
                      id='documents' placeholder='Documentos aqui'
                      {...register('documents', {
                        required: {
                          value: true,
                          message: 'Documentos são obrigatórios',
                        },
                      })}
                    />
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='information'>Informações Envolvidas</label>
                    <input
                      id='information' placeholder='Informações da abertura'
                      {...register('information', {
                        required: {
                          value: true,
                          message: 'Informações são obrigatórios',
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
          : null}
      </S.ContainerConfirmation>
    </>
  )
}
