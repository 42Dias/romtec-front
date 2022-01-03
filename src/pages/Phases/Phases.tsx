import { useState } from 'react'
import * as S from './Phases.styled'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Navigation } from 'swiper'

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'
import PhasesContent from '../../ui/Components/PhasesContent/PhasesContent'

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
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenContent, setIsOpenContent] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>()

  function onSubmit (data: FormData) {
    console.log(data)

    reset()
  }

  return (
    <>
      <Sidebar />
      <Navbar />
      <S.ContainerConfirmation>
        <h2>Selecione uma etapa</h2>
        <button onClick={() => setIsOpen(true)}>
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
            <button onClick={() => setIsOpenContent(true)}>
              <FiCheck />
              <h1>Planejamento de perfuração</h1>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button>
              <FiCheck />
              <h1>Levantamento e Mapeamento de interferências</h1>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button>
              <FiCheck />
              <h1>Verificação de Interferências Físicas e Magnéticas</h1>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button>
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
            </button>
          </SwiperSlide>
        </Swiper>

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

        <PhasesContent
          isOpenContent={isOpenContent}
          onClose={() => setIsOpenContent(false)}
        >
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
