import * as S from './Reamer.styled'
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

export function Reamer () {
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
        <h2>Alargador</h2>
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
                      <label htmlFor='name'>CAPACIDADE DO SWIVEL*</label>
                      <input
                        id='name' placeholder='CAPACIDADE DO SWIVEL*'
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
                      <label htmlFor='expectedViscosity'>CONDIÇÃO DE USO*</label>
                      <input
                        id='expectedViscosity' placeholder='CONDIÇÃO DE USO'
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
                      <label htmlFor='quantityWater'>TIPO DE ALARGADOR*</label>
                      <input
                        id='quantityWater' placeholder='TIPO DE ALARGADOR'
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
                      <label htmlFor='baseQuantityFormulation'>INDICAÇÃO DE SOLO IDEAL PARA TRABALHO*</label>
                      <input
                        id='baseQuantityFormulation' placeholder='INDICAÇÃO DE SOLO IDEAL PARA TRABALHO'
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
                      <label htmlFor='flowLimit'>NÚMERO DE JATOS *</label>
                      <input
                        id='flowLimit' placeholder='NÚMERO DE JATOS'
                        {...register('flowLimit', {
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
                      <label htmlFor='sandContent'>OPÇÃO DE ESCOLHA DA UNIDADE DE MEDIDA PARA O DIÂMETRO </label>
                      <input
                        id='sandContent' placeholder='OPÇÃO DE ESCOLHA DA UNIDADE DE MEDIDA PARA O DIÂMETRO*'
                        {...register('sandContent', {
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
                      <label htmlFor='sandContent'>ROSCA/CONEXÃO/EIXO*</label>
                      <input
                        id='sandContent' placeholder='ROSCA/CONEXÃO/EIXO'
                        {...register('sandContent', {
                          required: {
                            value: true,
                            message: 'Todos os campos são obrigatórios',
                          },
                        })}
                      />
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
