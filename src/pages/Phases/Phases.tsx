import { useState } from 'react'
import Modal from 'react-modal'
import * as S from './Phases.styled'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Navigation } from 'swiper'

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'

import { FiPlus, FiCheck, FiPlay, FiLock } from 'react-icons/fi'

import { useForm } from 'react-hook-form'
import { TextField } from '../../ui/Components/TextField'

type FormData = {
  name: string
  crossing: string
  workers: string
  company: string
  drillingFluid: string
  hurry: string
  drillingMachine: string
}

SwiperCore.use([Pagination, Navigation])

export function Phases () {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [modalIsOpen2, setIsOpen2] = useState(false)
  const [modalIsOpen3, setIsOpen3] = useState(false)
  const [modalIsOpen4, setIsOpen4] = useState(false)
  const [modalIsOpen5, setIsOpen5] = useState(false)

  function openModal () {
    setIsOpen(true)
    setIsOpen2(false)
    setIsOpen3(false)
    setIsOpen4(false)
    setIsOpen5(false)
  }
  function afterOpenModal () {
    // references are now sync'd and can be accessed.
  }
  function closeModal () {
    setIsOpen(false)
  }

  function openModal2 () {
    setIsOpen2(true)
    setIsOpen(false)
    setIsOpen3(false)
    setIsOpen4(false)
    setIsOpen5(false)
  }

  function closeModal2 () {
    setIsOpen2(false)
  }

  function openModal3 () {
    setIsOpen3(true)
    setIsOpen(false)
    setIsOpen2(false)
    setIsOpen4(false)
    setIsOpen5(false)
  }

  function closeModal3 () {
    setIsOpen3(false)
  }
  //
  function openModal4 () {
    setIsOpen4(true)
    setIsOpen(false)
    setIsOpen2(false)
    setIsOpen3(false)
    setIsOpen5(false)
  }

  function closeModal4 () {
    setIsOpen4(false)
  }
  //
  function openModal5 () {
    setIsOpen5(true)
    setIsOpen(false)
    setIsOpen2(false)
    setIsOpen3(false)
    setIsOpen4(false)
  }

  function closeModal5 () {
    setIsOpen5(false)
  }

  return (
    <>
      <Sidebar />
      <Navbar />
      <S.ContainerConfirmation>
        <h2>Selecione uma etapa</h2>
        <button>
          <FiPlus />
        </button>

        <Swiper
          spaceBetween={40}
          breakpoints={{
            620: {
              width: 620,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
          pagination={{
            clickable: true,
          }}
          navigation
        >
          <SwiperSlide>
            <button onClick={() => openModal}>
              <FiCheck />
              <h1>Planejamento de perfuração</h1>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button onClick={() => openModal2}>
              <FiCheck />
              <h1>Levantamento e Mapeamento de interferências</h1>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button onClick={() => openModal3}>
              <FiCheck />
              <h1>Verificação de Interferências Físicas e Magnéticas</h1>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button onClick={() => openModal4}>
              <FiCheck />
              <h1>Abertura da vala</h1>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button onClick={() => openModal5}>
              <FiPlay />
              <h1>Direcionamento do Furo Piloto</h1>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button
              style={{ cursor: 'not-allowed' }}
              disabled
            >
              <FiLock />
              <h1>Fechamento da vala</h1>
            </button>
          </SwiperSlide>
        </Swiper>

        <Modal
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              position: 'inherit',
            },
            content: {
              border: '0',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '0',
              outline: 'none',
              padding: '20px',
              position: 'inherit',
              backgroundColor: '#1B1925',
            },
          }}
          isOpen={modalIsOpen}
          onAfterOpen={() => afterOpenModal}
          onRequestClose={() => closeModal}
        >
          <h2>Planejamento de perfuração</h2>
          {/* <button onClick={closeModal}>close</button> */}

          <S.FormContent>
            <S.GridForm>
              <div>
                <label htmlFor=''>Ponto de verificação de entrada (lat)</label>
                <input type='text' placeholder='Latitude' />
              </div>

              <div>
                <label htmlFor=''>Ponto de verificação de entrada (long)</label>
                <input type='text' placeholder='Longitude' />
              </div>

              <div>
                <label htmlFor=''>Ponto de verificação de saída (lat)</label>
                <input type='text' placeholder='Latitude' />
              </div>

              <div>
                <label htmlFor=''>Ponto de verificação de saída (long)</label>
                <input type='text' placeholder='Longitude' />
              </div>

              <div>
                <label htmlFor=''>Tipo de tubulação</label>
                <input type='text' placeholder='Fibra óptica' />
              </div>

              <div>
                <label htmlFor=''>Diâmetro de perfuração</label>
                <input type='text' placeholder='20 metros' />
              </div>

              <div>
                <label htmlFor=''>Tipos de solo</label>
                <input type='text' placeholder='Barro' />
              </div>
            </S.GridForm>
            <button>Salvar</button>
          </S.FormContent>
        </Modal>

        <Modal
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              position: 'inherit',
            },
            content: {
              border: '0',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '0',
              outline: 'none',
              padding: '20px',
              position: 'inherit',
              backgroundColor: '#1B1925',
            },
          }}
          isOpen={modalIsOpen2}
          onAfterOpen={() => afterOpenModal}
          onRequestClose={() => closeModal2}
        >
          <h2>Levantamento e Mapeamento de interferências</h2>
          {/* <button onClick={closeModal}>close</button> */}

          <S.FormContent>
            <S.GridForm>
              <div>
                <label htmlFor=''>Responsável</label>
                <input type='text' />
              </div>

              <div>
                <label htmlFor=''>Equipamentos</label>
                <input type='text' />
              </div>

              <div>
                <label htmlFor=''>Ponto de verificação de saída (lat)</label>
                <input type='text' />
              </div>

              <div>
                <label htmlFor=''>Documentos</label>
                <input type='text' />
              </div>

              <div>
                <label htmlFor=''>Tipo de rede</label>
                <input type='text' />
              </div>

              <div>
                <label htmlFor=''>Empresa proprietária</label>
                <input type='text' />
              </div>

              <div>
                <label htmlFor=''>Confirmação da sondagem da interferência:</label>
                <input type='text' />
              </div>

              <div>
                <label htmlFor=''>Sondagem</label>
                <input type='text' />
              </div>

              <div>
                <label htmlFor=''>Criação do plano de furo</label>
                <input type='text' />
              </div>

              <div>
                <label htmlFor=''>Quando acontece</label>
                <input type='text' />
              </div>
            </S.GridForm>
            <button>Salvar</button>
          </S.FormContent>
        </Modal>

        <Modal
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              position: 'inherit',
            },
            content: {
              border: '0',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '0',
              outline: 'none',
              padding: '20px',
              position: 'inherit',
              backgroundColor: '#1B1925',
            },
          }}
          isOpen={modalIsOpen3}
          onAfterOpen={() => afterOpenModal}
          onRequestClose={() => closeModal3}
        >
          <h2>Verificação de Interferências Físicas e Magnéticas</h2>
          {/* <button onClick={closeModal}>close</button> */}

          <S.FormContent>
            <S.GridForm>
              <div>
                <label htmlFor=''>Responsável</label>
                <input type='text' />
              </div>

              <div>
                <label htmlFor=''>Equipamentos</label>
                <input type='text' />
              </div>

              <div>
                <label htmlFor=''>Ponto de verificação de saída (lat)</label>
                <input type='text' />
              </div>

              <div>
                <label htmlFor=''>Documentos</label>
                <input type='text' />
              </div>

              <div>
                <label htmlFor=''>Tipo de rede</label>
                <input type='text' />
              </div>

              <div>
                <label htmlFor=''>Empresa proprietária</label>
                <input type='text' />
              </div>

              <div>
                <label htmlFor=''>Confirmação da sondagem da interferência:</label>
                <input type='text' />
              </div>

              <div>
                <label htmlFor=''>Sondagem</label>
                <input type='text' />
              </div>

              <div>
                <label htmlFor=''>Criação do plano de furo</label>
                <input type='text' />
              </div>

              <div>
                <label htmlFor=''>Quando acontece</label>
                <input type='text' />
              </div>
            </S.GridForm>
            <button>Salvar</button>
          </S.FormContent>
        </Modal>

        <Modal
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              position: 'inherit',
            },
            content: {
              border: '0',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '0',
              outline: 'none',
              padding: '20px',
              position: 'inherit',
              backgroundColor: '#1B1925',
            },
          }}
          isOpen={modalIsOpen4}
          onAfterOpen={() => afterOpenModal}
          onRequestClose={() => closeModal4}
        >
          <h2>Abertura da vala</h2>
          {/* <button onClick={closeModal}>close</button> */}

          <S.FormContent>
            <S.GridForm>
              <div>
                <label htmlFor=''>Responsável</label>
                <input type='text' />
              </div>

              <div>
                <label htmlFor=''>Ferramentas</label>
                <input type='text' />
              </div>

              <div>
                <label htmlFor=''>Equipamentos</label>
                <input type='text' />
              </div>

              <div>
                <label htmlFor=''>Documentos</label>
                <input type='text' />
              </div>

              <div>
                <label htmlFor=''>Informações Envolvidas</label>
                <input type='text' />
              </div>
            </S.GridForm>
            <button>Salvar</button>
          </S.FormContent>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <S.Container>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                label='Nome'
                errorMessage={errors.name?.message}
                {...register('name', {
                  required: {
                    value: true,
                    message: 'Todos os campos são obrigatórios',
                  },
                })}
              />

              <TextField
                label='Travessia'
                {...register('crossing', {
                  required: true,
                })}
              />

              <TextField
                label='Trabalhadores'
                {...register('workers', {
                  required: true,
                })}
              />

              <TextField
                label='Companhia'
                {...register('company', {
                  required: true,
                })}
              />

              <TextField
                label='Fluído de perfuração'
                {...register('drillingFluid', {
                  required: true,
                })}
              />

              <TextField
                label='Pressa'
                {...register('hurry', {
                  required: true,
                })}
              />

              <TextField
                label='Máquina Perfuratriz'
                {...register('drillingMachine', {
                  required: true,
                })}
              />
              <button type='submit'>Salvar</button>
            </S.Form>
          </S.Container>
        </Modal>

        <Modal
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              position: 'inherit',
            },
            content: {
              border: '0',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '0',
              outline: 'none',
              padding: '20px',
              position: 'inherit',
              backgroundColor: '#1B1925',
            },
          }}
          isOpen={modalIsOpen5}
          onAfterOpen={() => afterOpenModal}
          onRequestClose={() => closeModal5}
        >

          <h2>Direcionamento do Furo Piloto</h2>
          {/* <button onClick={closeModal}>close</button> */}

          <S.FormContent>
            <S.GridForm>
              <div>
                <label htmlFor=''>Responsável</label>
                <input type='text' />
              </div>

              <div>
                <label htmlFor=''>Ferramentas</label>
                <input type='text' />
              </div>

              <div>
                <label htmlFor=''>Equipamentos</label>
                <input type='text' />
              </div>

              <div>
                <label htmlFor=''>Documentos</label>
                <input type='text' />
              </div>

              <div>
                <label htmlFor=''>Informações Envolvidas</label>
                <input type='text' />
              </div>

              <div>
                <label htmlFor=''>Quando acontece</label>
                <input type='text' />
              </div>
            </S.GridForm>
            <button>Salvar</button>
          </S.FormContent>
        </Modal>

          <S.Container>
            <h2>Verificação de Interferências Físicas e Magnéticas</h2>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                label='Responsável'
                errorMessage={errors.name?.message}
                {...register('name', {
                  required: {
                    value: true,
                    message: 'Todos os campos são obrigatórios',
                  },
                })}
              />

              <TextField
                label='Equipamentos:'
                {...register('crossing', {
                  required: true,
                })}
              />

              <TextField
                label='Documentos'
                {...register('workers', {
                  required: true,
                })}
              />

              <TextField
                label='Tipo de rede:'
                {...register('company', {
                  required: true,
                })}
              />

              <TextField
                label='Empresa proprietária'
                {...register('drillingFluid', {
                  required: true,
                })}
              />

              <TextField
                label='Confirmação da sondagem da interferência:'
                {...register('hurry', {
                  required: true,
                })}
              />

              <TextField
                label='Sondagem'
                {...register('drillingMachine', {
                  required: true,
                })}
              />

              <TextField
                label='Criação do plano de furo'
                {...register('drillingMachine', {
                  required: true,
                })}
              />

              <TextField
                label='Quando acontece:'
                {...register('drillingMachine', {
                  required: true,
                })}
              />
              <button type='submit'>Salvar</button>
            </S.Form>
          </S.Container>
        </PhasesContent>
      </S.ContainerConfirmation>
    </>
  )
}
