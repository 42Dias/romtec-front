import * as S from './DrillingMachine.styled'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'

import { FiPlus } from 'react-icons/fi'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

type FormData = {
  cnpj: string;
  corporateName: string;
  fantasyName: string;
  zipCode: string;
  uf: string;
  city: string;
  district: string;
  publicPlace: string;
  number: string;
  complement: string;
}

export function DrillingMachine () {
  const [isOpen, setIsOpen] = useState(false)

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  function onSubmit ({
    cnpj,
    corporateName,
    fantasyName,
    zipCode,
    uf,
    city,
    district,
    publicPlace,
    number,
    complement,
  }: FormData) {
    const submit = {
      cnpj,
      corporateName,
      fantasyName,
      zipCode,
      uf,
      city,
      district,
      publicPlace,
      number,
      complement,
    }
    reset()

    console.log(submit)
  }

  return (
    <>
      <Sidebar />
      <Navbar />
      <S.ContainerConfirmation>
        <h2>Máquina Perfuratriz</h2>
        <button onClick={() => setIsOpen(true)}><FiPlus /></button>
        <S.GridConfirmation>
          <span>Modelo</span>
          <span>Fabricante</span>
          <span>Tração(KN)</span>
          <span>Torque(N.m)</span>
          <span>Alargamento máximo</span>
        </S.GridConfirmation>
        {isOpen
          ? <Modal onClose={() => setIsOpen(false)}>
            <S.Container>
              <S.Form onSubmit={handleSubmit(onSubmit)}>
                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='cnpj'>CNPJ</label>
                    <input
                      id='cnpj' placeholder='Seu CNPJ'
                      {...register('cnpj', {
                        required: {
                          value: true,
                          message: 'Todos os campos são obrigatórios',
                        },
                      })}
                    />
                    <span>{errors.cnpj?.message}</span>
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='corporateName'>Razão Social</label>
                    <input
                      id='corporateName' placeholder='Sua razão social'
                      {...register('corporateName', {
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
                    <label htmlFor='fantasyName'>Nome Fantasia</label>
                    <input
                      id='fantasyName' placeholder='Seu nome fantasia'
                      {...register('fantasyName', {
                        required: {
                          value: true,
                          message: 'Nome fanstasia é obrigatório',
                        },
                      })}
                    />
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='zipCode'>Código de Endereçamento Postal(CEP)</label>
                    <input
                      id='zipCode' placeholder='Seu CEP'
                      {...register('zipCode', {
                        required: {
                          value: true,
                          message: 'CEP é obrigatório',
                        },
                      })}
                    />
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='uf'>Unidade Federativa(UF)</label>
                    <input
                      id='uf' placeholder='Sua UF'
                      {...register('uf', {
                        required: {
                          value: true,
                          message: 'UF é obrigatória',
                        },
                      })}
                    />
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='city'>Cidade</label>
                    <input
                      id='city' placeholder='Sua cidade'
                      {...register('city', {
                        required: {
                          value: true,
                          message: 'Cidade é obrigatória',
                        },
                      })}
                    />
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='district'>Bairro</label>
                    <input
                      id='district' placeholder='Seu bairro'
                      {...register('district', {
                        required: {
                          value: true,
                          message: 'Bairro é obrigatório',
                        },
                      })}
                    />
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='publicPlace'>Logradouro</label>
                    <input
                      id='publicPlace' placeholder='Seu logradouro'
                      {...register('publicPlace', {
                        required: {
                          value: true,
                          message: 'Logradouro é obrigatório',
                        },
                      })}
                    />
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='number'>Número</label>
                    <input
                      id='number' placeholder='Seu número'
                      {...register('number', {
                        required: {
                          value: true,
                          message: 'Número é obrigatório',
                        },
                      })}
                    />
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='complement'>Complemento</label>
                    <input
                      id='complement' placeholder='Seu complemento'
                      {...register('complement', {
                        required: {
                          value: true,
                          message: 'Complemento é obrigatório',
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
