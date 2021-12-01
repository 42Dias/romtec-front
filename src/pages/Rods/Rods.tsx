import * as S from './Rods.styled'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'

import { FiPlus } from 'react-icons/fi'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

type FormData = {
  identification: string;
  name: string;
  rg: string;
  cpf: string;
  phone: string;
  zipCode: string;
  state: string;
  city: string;
  district: string;
  publicPlace: string;
  number: string;
  complement: string;
  occupation: string;
  experience: string;
  certificateValidity: Date;
}

export function Rods () {
  const [isOpen, setIsOpen] = useState(false)

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  function onSubmit ({
    identification,
    name,
    rg,
    cpf,
    phone,
    zipCode,
    state,
    city,
    district,
    publicPlace,
    number,
    complement,
    occupation,
    experience,
    certificateValidity,
  }: FormData) {
    const submit = {
      identification,
      name,
      rg,
      cpf,
      phone,
      zipCode,
      state,
      city,
      district,
      publicPlace,
      number,
      complement,
      occupation,
      experience,
      certificateValidity,
    }
    reset()

    console.log(submit)
  }

  return (
    <>
      <Sidebar />
      <Navbar />
      <S.ContainerConfirmation>
        <h2>Hastes</h2>
        <button onClick={() => setIsOpen(true)}><FiPlus /></button>
        {isOpen
          ? <Modal onClose={() => setIsOpen(false)}>
            <S.Container>
              <S.Form onSubmit={handleSubmit(onSubmit)}>
                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='identification'>Código do jogo de Hastes</label>
                    <input
                      id='identification' placeholder='Sua identificação'
                      {...register('identification', {
                        required: {
                          value: true,
                          message: 'Identificação é obrigatória',
                        },
                      })}
                    />
                    <span>{errors.identification?.message}</span>
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='name'>Raio de curvatura</label>
                    <input
                      id='name' placeholder='Seu nome'
                      {...register('name', {
                        required: {
                          value: true,
                          message: 'Nome é obrigatório',
                        },
                      })}
                    />
                    <span>{errors.name?.message}</span>
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='rg'>Diâmetro do tubo(mm)</label>
                    <input
                      id='rg' placeholder='Seu rg'
                      {...register('rg', {
                        required: {
                          value: true,
                          message: 'Seu RG é obrigatório',
                        },
                      })}
                    />
                    <span>{errors.rg?.message}</span>
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='cpf'>Estado geral/condição</label>
                    <input
                      id='cpf' placeholder='Seu CPF'
                      {...register('cpf', {
                        required: {
                          value: true,
                          message: 'CPF é obrigatório',
                        },
                      })}
                    />
                    <span>{errors.cpf?.message}</span>
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='phone'>Diâmetro do Tool Joint(mm)</label>
                    <input
                      id='phone' placeholder='Seu celular'
                      {...register('phone', {
                        required: {
                          value: true,
                          message: 'Celular é obrigatório',
                        },
                      })}
                    />
                    <span>{errors.phone?.message}</span>
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='zipCode'>Torque máximo</label>
                    <input
                      id='zipCode' placeholder='Seu CEP' type='number'
                      {...register('zipCode', {
                        required: {
                          value: true,
                          message: 'CEP é obrigatório',
                        },
                      })}
                    />
                    <span>{errors.zipCode?.message}</span>
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='state'>Comprimento total(m)</label>
                    <input
                      id='state' placeholder='Seu estado'
                      {...register('state', {
                        required: {
                          value: true,
                          message: 'Estado é obrigatório',
                        },
                      })}
                    />
                    <span>{errors.state?.message}</span>
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='city'>Modelo da Rosca</label>
                    <input
                      id='city' placeholder='Sua cidade'
                      {...register('city', {
                        required: {
                          value: true,
                          message: 'Cidade é obrigatória',
                        },
                      })}
                    />
                    <span>{errors.city?.message}</span>
                  </fieldset>
                </S.ContentForm>

                <button type='submit'>Salvar</button>
              </S.Form>
            </S.Container>
            {/* eslint-disable-next-line */}
            </Modal>
          : null}
        <S.GridConfirmation>
          <span>Código </span>
          <span>Diametro do tubo(mm)</span>
          <span>Diametro do Tool Joint(mm)</span>
          <span>Comprimento total(m)</span>
          <span>Modelo da rosca</span>
        </S.GridConfirmation>
      </S.ContainerConfirmation>
    </>
  )
}
