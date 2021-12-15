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
  city: string;
  occupation: string;
  certificateValidity: Date;
  certificateNumber: string;
  certificate: string;
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
    city,
    occupation,
    certificateValidity,
    certificateNumber,
    certificate,
  }: FormData) {
    const submit = {
      identification,
      name,
      rg,
      cpf,
      phone,
      zipCode,
      city,
      occupation,
      certificateValidity,
      certificateNumber,
      certificate,
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
        <S.GridConfirmation>
          <span>N° de identificação</span>
          <span>Nome</span>
          <span>Estado</span>
          <span>Cidade</span>
          <span>Função</span>
          <span>Celular</span>
          <span>Validade do certificado</span>
        </S.GridConfirmation>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
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
                        message: 'Todos os campos são obrigatórios',
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
                </fieldset>
              </S.ContentForm>

              <S.ContentForm>
                <fieldset>
                  <label htmlFor='cpf'>Cadastro de Pessoa Física(CPF)</label>
                  <input
                    id='cpf' placeholder='Seu CPF' type='number'
                    {...register('cpf', {
                      required: {
                        value: true,
                        message: 'CPF é obrigatório',
                      },
                    })}
                  />
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
              </fieldset>

              <fieldset>
                <label htmlFor='certificateNumber'>Número do certificado</label>
                <input
                  id='certificateNumber' placeholder='Número do certificado'
                  type='number'
                  {...register('certificateNumber', {
                    required: {
                      value: true,
                      message: 'Número do seu certificado é obrigatório',
                    },
                  })}
                />
              </fieldset>

              <fieldset>
                <label htmlFor='certificate'>Certificado</label>
                <select id='certificate' {...register('certificate')}>
                  <option value=''>Select...</option>
                  <option value='Navegador'>Navegador</option>
                  <option value='Operador'>Operador</option>
                  <option value='Outro'>Outro</option>
                </select>
              </fieldset>

              <button type='submit'>Salvar</button>
            </S.Form>
          </S.Container>
          {/* eslint-disable-next-line */}
        </Modal>
      </S.ContainerConfirmation>
    </>
  )
}
