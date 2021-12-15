import * as S from './Equipment.styled'
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

export function Equipment () {
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
        <h2>Equipamentos</h2>
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
                      <label htmlFor='name'>Perfuratriz*</label>
                      <input
                        id='name' placeholder='Perfuratriz'
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
                      <label htmlFor='expectedViscosity'>Sonda*</label>
                      <input
                        id='expectedViscosity' placeholder='Sonda'
                        {...register('expectedViscosity', {
                          required: {
                            value: true,
                            message: 'Sonda é obrigatória',
                          },
                        })}
                      />
                    </fieldset>
                  </S.ContentForm>

                  <S.ContentForm>
                    <fieldset>
                      <label htmlFor='quantityWater'>Receptor/Emissor*</label>
                      <input
                        id='quantityWater' placeholder='Receptor/Emissor'
                        {...register('quantityWater', {
                          required: {
                            value: true,
                            message: '>Receptor/Emissor é obrigatório',
                          },
                        })}
                      />
                    </fieldset>
                  </S.ContentForm>

                  <S.ContentForm>
                    <fieldset>
                      <label htmlFor='baseQuantityFormulation'>(Jogo?) Hastes de Perfuração*</label>
                      <input
                        id='baseQuantityFormulation' placeholder='(Jogo?) Hastes de Perfuração*'
                        {...register('baseQuantityFormulation', {
                          required: {
                            value: true,
                            message: 'Hastes de Perfuração é obrigatório',
                          },
                        })}
                      />
                    </fieldset>
                  </S.ContentForm>

                  <S.ContentForm>
                    <fieldset>
                      <label htmlFor='flowLimit'>Tanque Misturador c/ Venturi ou Hélice rotativa*</label>
                      <input
                        id='flowLimit' placeholder='Limite de escoamento do fluído'
                        {...register('flowLimit', {
                          required: {
                            value: true,
                            message: 'Tanque Misturador é obrigatório',
                          },
                        })}
                      />
                    </fieldset>
                  </S.ContentForm>

                  <S.ContentForm>
                    <fieldset>
                      <label htmlFor='sandContent'>Gerador S/N*</label>
                      <input
                        id='sandContent' placeholder='Gerador S/N*'
                        {...register('sandContent', {
                          required: {
                            value: true,
                            message: 'Gerador é obrigatório',
                          },
                        })}
                      />
                    </fieldset>
                  </S.ContentForm>

                  <S.ContentForm>
                    <fieldset>
                      <label htmlFor='sandContent'>Compressor S/N*</label>
                      <input
                        id='sandContent' placeholder='Compressor S/N*'
                        {...register('sandContent', {
                          required: {
                            value: true,
                            message: 'Compressor é obrigatório',
                          },
                        })}
                      />
                    </fieldset>
                  </S.ContentForm>

                  <S.ContentForm>
                    <fieldset>
                      <label htmlFor='sandContent'>Bombas Centrífugas S/N*</label>
                      <input
                        id='sandContent' placeholder='Bombas Centrífugas'
                        {...register('sandContent', {
                          required: {
                            value: true,
                            message: 'Bombas Centrífugas é obrigatório',
                          },
                        })}
                      />
                    </fieldset>
                  </S.ContentForm>

                  <S.ContentForm>
                    <fieldset>
                      <label htmlFor='sandContent'>Mangueiras*</label>
                      <input
                        id='sandContent' placeholder='Mangueiras'
                        {...register('sandContent', {
                          required: {
                            value: true,
                            message: 'Mangueiras é obrigatório',
                          },
                        })}
                      />
                    </fieldset>
                  </S.ContentForm>

                  <S.ContentForm>
                    <fieldset>
                      <label htmlFor='sandContent'>Motores de Fundo*</label>
                      <input
                        id='sandContent' placeholder='Motores de Fundo'
                        {...register('sandContent', {
                          required: {
                            value: true,
                            message: 'Motores de Fundo é obrigatório',
                          },
                        })}
                      />
                    </fieldset>
                  </S.ContentForm>

                  <S.ContentForm>
                    <fieldset>
                      <label htmlFor='sandContent'>Equipamentos*</label>
                      <input
                        id='sandContent' placeholder='Gerador S/N*'
                        {...register('sandContent', {
                          required: {
                            value: true,
                            message: 'Gerador é obrigatório',
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
