import * as S from './Labor.styled'
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

export function Labor () {
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
        <h2>Mão de obra</h2>
        <button onClick={() => setIsOpen(true)}><FiPlus /></button>
        {isOpen
          ? <Modal onClose={() => setIsOpen(false)}>
            <S.Container>
              <S.Form onSubmit={handleSubmit(onSubmit)}>
                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='identification'>Identificação</label>
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
                    <label htmlFor='name'>Nome</label>
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
                    <label htmlFor='rg'>Registro Geral(RG)</label>
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
                    <label htmlFor='cpf'>Cadastro de Pessoa Física(CPF)</label>
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
                    <label htmlFor='phone'>Celular</label>
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
                    <label htmlFor='zipCode'>Código de Endereçamento Postal(CEP)</label>
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
                    <label htmlFor='state'>Estado</label>
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
                    <span>{errors.city?.message}</span>
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
                    <span>{errors.district?.message}</span>
                  </fieldset>
                </S.ContentForm>

                <S.ContentForm>
                  <fieldset>
                    <label htmlFor='publicPlace'>Logradouro</label>
                    <input
                      id='publicPlace' placeholder='Seu logradouro'
                      {...register('publicPlace')}
                    />
                    <span>{errors.publicPlace?.message}</span>
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
                    <span>{errors.number?.message}</span>
                  </fieldset>
                </S.ContentForm>

                <fieldset>
                  <label htmlFor='complement'>Complemento</label>
                  <input
                    id='complement' placeholder='Seu complemento' type='number'
                    {...register('complement')}
                  />
                  <span>{errors.complement?.message}</span>
                </fieldset>

                <fieldset>
                  <label htmlFor='occupation'>Função</label>
                  <input
                    id='occupation' placeholder='Sua função'
                    {...register('occupation', {
                      required: {
                        value: true,
                        message: 'Função é obrigatória',
                      },
                    })}
                  />
                  <span>{errors.occupation?.message}</span>
                </fieldset>

                <fieldset>
                  <label htmlFor='experience'>Experiência</label>
                  <input
                    id='experience' placeholder='Sua experiência'
                    {...register('experience', {
                      required: {
                        value: true,
                        message: 'Experiência é obrigatória',
                      },
                    })}
                  />
                  <span>{errors.experience?.message}</span>
                </fieldset>

                <fieldset>
                  <label htmlFor='certificateValidity'>Validade do certificado</label>
                  <input
                    id='certificateValidity' placeholder='Validade do certificado'
                    type='date'
                    {...register('certificateValidity', {
                      required: {
                        value: true,
                        message: 'Validade do seu certificado é obrigatória',
                      },
                    })}
                  />
                  <span>{errors.certificateValidity?.message}</span>
                </fieldset>

                <button type='submit'>Salvar</button>
              </S.Form>
            </S.Container>
          </Modal>
          : null}
        <S.GridConfirmation>
          <span>N° de identificação</span>
          <span>Nome</span>
          <span>Estado</span>
          <span>Cidade</span>
          <span>Função</span>
          <span>Experiência</span>
          <span>Validade do certificado</span>
        </S.GridConfirmation>
      </S.ContainerConfirmation>
    </>
  )
}
/*
      <S.Container>
        <S.Form>
          <S.ContentForm>
            <label htmlFor='name-product'>Nome do produto</label>
            <input type='text' id='name-product' />
          </S.ContentForm>

          <S.ContentForm>
            <label htmlFor='code'>Código</label>
            <input type='text' id='code' />
          </S.ContentForm>

          <S.ContentForm>
            <label htmlFor='description'>Descrição</label>
            <input type='text' id='description' />
          </S.ContentForm>

          <S.ContentForm>
            <label htmlFor='ref'>Referência técnica</label>
            <input type='text' id='ref' />
          </S.ContentForm>
        </S.Form>
      </S.Container>
*/
