import * as S from './ProbeHolder.styled'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'

import { FiPlus } from 'react-icons/fi'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

type FormData = {
  name: string;
  expectedViscosity: string;
  quantityWater: string;
  baseQuantityFormulation: string;
  flowLimit: string;
  sandContent: string;
}

export function ProbeHolder () {
  const [isOpen, setIsOpen] = useState(false)

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  function onSubmit ({
    name,
    expectedViscosity,
    quantityWater,
    baseQuantityFormulation,
    flowLimit,
    sandContent,
  }: FormData) {
    const submit = {
      name,
      expectedViscosity,
      quantityWater,
      baseQuantityFormulation,
      flowLimit,
      sandContent,
    }
    reset()

    console.log(submit)
  }

  return (
    <>
      <Sidebar />
      <Navbar />
      <S.ContainerConfirmation>
        <h2>Porta sonda</h2>
        <button onClick={() => setIsOpen(true)}><FiPlus /></button>
        <S.GridConfirmation>
          <span>Código de ferramenta</span>
          <span>Máquina</span>
          <span>Diâmetro</span>
          <span>Capacidade de carga</span>
          <span>Descrição</span>
        </S.GridConfirmation>
        {isOpen
          ? <Modal onClose={() => setIsOpen(false)}>
            <S.Container>
              <S.Form onSubmit={handleSubmit(onSubmit)}>

                <div className='grid'>
                  <S.ContentForm>
                    <fieldset>
                      <label htmlFor='name'>SONDA COMPATÍVEL/MARCA*</label>
                      <input
                        id='name' placeholder='SONDA COMPATÍVEL/MARCA*'
                        {...register('name', {
                          required: {
                            value: true,
                            message: 'Todos os campos são obrigatórios',
                          },
                        })}
                      />
                      <span>{errors.name?.message}</span>
                    </fieldset>
                  </S.ContentForm>

                  <S.ContentForm>
                    <fieldset>
                      <label htmlFor='expectedViscosity'>PÁ COMPATÍVEL*</label>
                      <input
                        id='expectedViscosity' placeholder='PÁ COMPATÍVEL'
                        {...register('expectedViscosity', {
                          required: {
                            value: true,
                            message: 'Todos os campos são obrigatórios',
                          },
                        })}
                      />
                    </fieldset>
                  </S.ContentForm>

                  <S.ContentForm>
                    <fieldset>
                      <label htmlFor='quantityWater'>NÚMERO DE JATOS*</label>
                      <input
                        id='quantityWater' placeholder='NÚMERO DE JATOS'
                        {...register('quantityWater', {
                          required: {
                            value: true,
                            message: 'Todos os campos são obrigatórios',
                          },
                        })}
                      />
                    </fieldset>
                  </S.ContentForm>

                  <S.ContentForm>
                    <fieldset>
                      <label htmlFor='baseQuantityFormulation'>CONEXÃO/ROSCA*</label>
                      <input
                        id='baseQuantityFormulation' placeholder='CONEXÃO/ROSCA*'
                        {...register('baseQuantityFormulation', {
                          required: {
                            value: true,
                            message: 'Todos os campos são obrigatórios',
                          },
                        })}
                      />
                    </fieldset>
                  </S.ContentForm>

                  <S.ContentForm>
                    <fieldset>
                      <label htmlFor='name'>INFORMAÇÃO DE OBRIGATORIEDADE DE PREENCHIMENTO*</label>
                      <input
                        id='name' placeholder='INFORMAÇÃO DE OBRIGATORIEDADE DE PREENCHIMENTO*'
                        {...register('name', {
                          required: {
                            value: true,
                            message: 'Todos os campos são obrigatórios',
                          },
                        })}
                      />
                      <span>{errors.name?.message}</span>
                    </fieldset>
                  </S.ContentForm>
                </div>

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
