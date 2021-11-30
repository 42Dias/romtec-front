import { FiPlus } from 'react-icons/fi'
import * as S from './Labor.styled'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'
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

  function onSubmit ({ identification, name, rg, cpf, phone, zipCode, state, city, district, publicPlace, number, complement, occupation, experience, certificateValidity }: FormData) {
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
            <form onSubmit={handleSubmit(onSubmit)}>
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

              <fieldset>
                <label htmlFor='rg'>RG</label>
                <input
                  id='rg' placeholder='Seu rg'
                  {...register('rg', {
                    required: {
                      value: true,
                      message: 'RG é obrigatório',
                    },
                  })}
                />
                <span>{errors.rg?.message}</span>
              </fieldset>

              <fieldset>
                <label htmlFor='cpf'>CPF</label>
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

              <fieldset>
                <label htmlFor='zipCode'>CEP</label>
                <input
                  id='zipCode' placeholder='Seu CEP'
                  {...register('zipCode', {
                    required: {
                      value: true,
                      message: 'CEP é obrigatório',
                    },
                  })}
                />
                <span>{errors.zipCode?.message}</span>
              </fieldset>

              <fieldset>
                <label htmlFor='state'>Estado</label>
                <input
                  id='state' placeholder='Seu estado'
                  {...register('state', {
                    required: {
                      value: true,
                      message: 'Seu estado é obrigatório',
                    },
                  })}
                />
                <span>{errors.state?.message}</span>
              </fieldset>

              <fieldset>
                <label htmlFor='city'>Cidade</label>
                <input
                  id='city' placeholder='Sua cidade'
                  {...register('city', {
                    required: {
                      value: true,
                      message: 'Sua cidade é obrigatória',
                    },
                  })}
                />
                <span>{errors.city?.message}</span>
              </fieldset>

              <fieldset>
                <label htmlFor='district'>Bairro</label>
                <input
                  id='district' placeholder='Seu bairro'
                  {...register('district', {
                    required: {
                      value: true,
                      message: 'Seu bairro é obrigatório',
                    },
                  })}
                />
                <span>{errors.district?.message}</span>
              </fieldset>

              <fieldset>
                <label htmlFor='publicPlace'>Logradouro</label>
                <input
                  id='publicPlace' placeholder='Seu logradouro'
                  {...register('publicPlace')}
                />
                <span>{errors.publicPlace?.message}</span>
              </fieldset>

              <fieldset>
                <label htmlFor='number'>Número</label>
                <input
                  id='number' placeholder='Seu número'
                  {...register('number', {
                    required: {
                      value: true,
                      message: 'Seu número é obrigatório',
                    },
                  })}
                />
                <span>{errors.number?.message}</span>
              </fieldset>

              <fieldset>
                <label htmlFor='complement'>Complemento</label>
                <input
                  id='complement' placeholder='Seu complemento'
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
                      message: 'Sua função é obrigatória',
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
                      message: 'Sua experiência é obrigatória',
                    },
                  })}
                />
                <span>{errors.experience?.message}</span>
              </fieldset>

              <fieldset>
                <label htmlFor='certificateValidity'>Validade do certificado</label>
                <input
                  id='certificateValidity' placeholder='Validade do certificado'
                  {...register('certificateValidity', {
                    required: {
                      value: true,
                      message: 'A validade do seu certificado é obrigatória',
                    },
                  })}
                />
                <span>{errors.certificateValidity?.message}</span>
              </fieldset>

              <button type='submit'>Entrar</button>
            </form>
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
