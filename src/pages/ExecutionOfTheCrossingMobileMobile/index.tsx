import { useState } from 'react'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import { FiEye, FiTrash, FiX } from 'react-icons/fi'
import * as S from './styled'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'

export default function ExecutionOfTheCrossingMobile () {
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
        <h2>Travessias</h2>
        <button onClick={openModal} className='btn'>Nova travessia</button>

        <S.CrossingsTable>
          <h5>Travessia número 1</h5>

          <S.TableIcons>
            <Link to='/etapas-mobile'>Executar</Link>
            <button>
              <FiTrash size={20} color='#EA1C24' />
            </button>
            <button onClick={openModalEdit}>
              <FiEye size={20} color='#FECE51' />
            </button>
          </S.TableIcons>
        </S.CrossingsTable>

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
            <input placeholder='Nome do cliente' type='text' />
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
            <input value='Evaldo harry styles' type='text' />
            <input value='Limpeza' type='text' />
            <input value='Etapa de limpeza do tubo' type='text' />
            <select>
              <option selected disabled>Config 1</option>
              <option>Config 2</option>
              <option>Config 3</option>
            </select>

            <button className='add'>Adicionar</button>
          </form>
        </Modal>

      </S.Container>
    </>
  )
}
