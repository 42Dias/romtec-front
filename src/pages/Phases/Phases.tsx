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

import { FiPlus, FiCheck, FiPlay, FiLock } from 'react-icons/fi'

import { useForm } from 'react-hook-form'
import { TextField } from '../../ui/Components/TextField'
// import { Link } from 'react-router-dom'

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

  // const [showText, setShowText] = useState(false)
  // const [showText2, setShowText2] = useState(false)
  // const onClick = () => setShowText(true)
  // const onClick2 = () => setShowText2(true)

  // const Text = () => <div>voce clicou</div>
  // const Text2 = () => <div>oi</div>

  return (
    <>
      <Sidebar />
      <Navbar />
      <S.ContainerConfirmation>
        <h2>Selecione uma etapa</h2>
        <button onClick={() => setIsOpen(true)}>
          <FiPlus />
        </button>

        {/* <div>
          <button onClick={onClick}>Clique aqui 1</button>
          {showText ? <Text /> : null}
        </div>

        <div>
          <button onClick={onClick2}>clique aqui dois</button>
          {showText2 ? <Text2 /> : null}
        </div> */}

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
            <button>
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
            <button>
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
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />

              <TextField
                label='Trabalhadores'
                {...register('workers', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />

              <TextField
                label='Companhia'
                {...register('company', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />

              <TextField
                label='Fluído de perfuração'
                {...register('drillingFluid', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />

              <TextField
                label='Pressa'
                {...register('hurry', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />

              <TextField
                label='Máquina Perfuratriz'
                {...register('drillingMachine', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />
              <button type='submit'>Salvar</button>
            </S.Form>
          </S.Container>
          {/* eslint-disable-next-line */}
        </Modal>
      </S.ContainerConfirmation>
    </>
  )
}
