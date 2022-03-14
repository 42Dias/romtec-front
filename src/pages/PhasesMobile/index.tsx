import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import { FiCheck, FiEye, FiLock, FiPlay, FiPlus, FiTrash, FiX } from 'react-icons/fi'
import * as S from './styled'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Navigation } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import Modal from 'react-modal'
import { useState } from 'react'

SwiperCore.use([Pagination, Navigation])

export default function PhasesMobile () {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [modalIsOpenEdit, setIsOpenEdit] = useState(false)

  function openModal () {
    setIsOpen(true)
  }

  function closeModal () {
    setIsOpen(false)
  }

  function openModalEdit () {
    setIsOpenEdit(true)
  }

  function closeModalEdit () {
    setIsOpenEdit(false)
  }

  return (
    <>
      <Sidebar />
      <Navbar />
      <S.Container>
        <h2>Travessia número 1</h2>

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
            <button onClick={openModalEdit}>
              <FiCheck />
              <h2>1</h2>
              <h1>Limpeza</h1>
            </button>
          </SwiperSlide>
          <SwiperSlide className='containerForm'>
            <Link to='/preencher-fases'>
              <FiPlay />
              <h2>2</h2>
              <h1>Levantamento e Mapeamento de interferências</h1>
            </Link>
          </SwiperSlide>
          <SwiperSlide className='containerDisabled'>
            <button>
              <FiLock color='#5C5C5C' />
              <h2>3</h2>
              <h1>Cabeamento</h1>
            </button>
          </SwiperSlide>
          <SwiperSlide onClick={openModal} className='containerDisabled'>
            <button>
              <FiPlus color='#00E1AF' />
            </button>
          </SwiperSlide>
        </Swiper>
        <form>
          <input placeholder='Nome da travessia' type='text' />
          <input placeholder='Descrição' type='text' />
          <select>
            <option selected disabled>Selecione uma configuração</option>
            <option>Config 1</option>
            <option>Config 2</option>
            <option>Config 3</option>
          </select>

          <button className='add'>Adicionar</button>
        </form>
      </S.Container>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName='react-modal-overlay'
        className='react-modal-content'
      >
        <button
          className='react-modal-close'
          type='button'
          onClick={closeModal}
        >
          <FiX />
        </button>
        <form>
          <input placeholder='Nome da travessia' type='text' />
          <input placeholder='Descrição' type='text' />
          <select>
            <option selected disabled>Selecione uma configuração</option>
            <option>Config 1</option>
            <option>Config 2</option>
            <option>Config 3</option>
          </select>

          <button className='add'>Adicionar</button>
        </form>
      </Modal>

      <Modal
        isOpen={modalIsOpenEdit}
        onRequestClose={closeModalEdit}
        overlayClassName='react-modal-overlay'
        className='react-modal-content'
      >
        <button
          className='react-modal-close'
          type='button'
          onClick={closeModalEdit}
        >
          <FiX />
        </button>
        <form>
          <input placeholder='Nome da travessia' type='text' />
          <input placeholder='Descrição' type='text' />
          <select>
            <option selected disabled>Selecione uma configuração</option>
            <option>Config 1</option>
            <option>Config 2</option>
            <option>Config 3</option>
          </select>

          <button className='add'>Adicionar</button>
        </form>
      </Modal>
    </>
  )
}
