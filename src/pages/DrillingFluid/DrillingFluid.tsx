import * as S from './DrillingFluid.styled'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'

import { FiPlus } from 'react-icons/fi'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

type FormData = {
  identification: string;
  expectedViscosity: string;
  phWater: string;
  baseQuantityFormulation: string;
  flowLimit: string;
  sandContent: string;
}

export function DrillingFluid () {
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
        <h2>Fluídos de perfuração</h2>
        <button onClick={() => setIsOpen(true)}><FiPlus /></button>
        <S.GridConfirmation>
          <span>Nome</span>
        </S.GridConfirmation>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <S.Container>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <S.ContentForm>
                <fieldset>
                  <label htmlFor='identification'>Identificação</label>
                  <input
                    id='identification' placeholder='Identificação do fluído'
                    {...register('identification', {
                      required: {
                        value: true,
                        message: 'Todos os campos são obrigatórios',
                      },
                    })}
                  />
                  <span>{errors.identification?.message}</span>
                </fieldset>
              </S.ContentForm>

              <S.ContentForm>
                <fieldset>
                  <label htmlFor='expectedViscosity'>Viscosidade esperada (Segundos Marsh - cP)</label>
                  <input
                    id='expectedViscosity' placeholder='Sua razão social'
                    {...register('expectedViscosity', {
                      required: {
                        value: true,
                        message: 'Razão Social é obrigatória',
                      },
                    })}
                  />
                </fieldset>
              </S.ContentForm>

              <S.ContentForm>
                <fieldset>
                  <label htmlFor='phWater'>pH da água</label>
                  <input
                    id='phWater' placeholder='pH da água no fluído'
                    {...register('phWater', {
                      required: {
                        value: true,
                        message: 'pH da água é obrigatório',
                      },
                    })}
                  />
                </fieldset>
              </S.ContentForm>

              <S.ContentForm>
                <fieldset>
                  <label htmlFor='baseQuantityFormulation'>Quantidade base para formulação (m²)</label>
                  <input
                    id='baseQuantityFormulation' placeholder='Quantidade base para formulação do fluído'
                    {...register('baseQuantityFormulation', {
                      required: {
                        value: true,
                        message: 'Quantidade base é obrigatório',
                      },
                    })}
                  />
                </fieldset>
              </S.ContentForm>

              <S.ContentForm>
                <fieldset>
                  <label htmlFor='flowLimit'>Limite de escoamento (Número - N)</label>
                  <input
                    id='flowLimit' placeholder='Limite de escoamento do fluído'
                    {...register('flowLimit', {
                      required: {
                        value: true,
                        message: 'Limite de escoamento é obrigatório',
                      },
                    })}
                  />
                </fieldset>
              </S.ContentForm>

              <S.ContentForm>
                <fieldset>
                  <label htmlFor='sandContent'>Teor de areia (Porcentagem - %)</label>
                  <input
                    id='sandContent' placeholder='Teor de areia no fluído'
                    {...register('sandContent', {
                      required: {
                        value: true,
                        message: 'Teor de areia é obrigatório',
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
