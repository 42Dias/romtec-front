import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
// import { FiCheck, FiEye, FiLock, FiPlus } from 'react-icons/fi'
import * as S from './styled'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'
import { useState } from 'react'
import { FiCheck, FiChevronLeft, FiPlay, FiX } from 'react-icons/fi'

export default function FillInPhases () {
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal () {
    setIsOpen(true)
  }

  function closeModal () {
    setIsOpen(false)
  }
  return (
    <>
      <Sidebar />
      <Navbar />
      <S.Container>
        <h1>Etapa 1</h1>

        <form>
          <input placeholder='Responsável' type='text' />
          <input placeholder='Empresa proprietária' type='text' />
          <input placeholder='Tipo de rede' type='text' />
          <input placeholder='Sondagem' type='text' />
          <select>
            <option selected disabled>Maquina perfuratriz</option>
            <option>Config 1</option>
            <option>Config 2</option>
            <option>Config 3</option>
          </select>
          <button onClick={openModal} className='add'>Registro de interferência</button>

          <div className='flexBtns'>
            <button>Voltar</button>
            <button>Finalizar etapa</button>
          </div>
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
          <input placeholder='Latitude' type='text' />
          <input placeholder='Longitude' type='text' />
          <input placeholder='Profundidade' type='text' />
          <button className='init'>Iniciar <FiPlay /></button>
          <div className='flexBtns'>
            <button>Voltar <FiChevronLeft /></button>
            <button>Finalizar etapa <FiCheck /></button>
          </div>
        </form>
      </Modal>
    </>
  )
}
