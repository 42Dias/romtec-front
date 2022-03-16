import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
// import { FiCheck, FiEye, FiLock, FiPlus } from 'react-icons/fi'
import * as S from './styled'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'
import { useState } from 'react'
import { FiCheck, FiChevronLeft, FiPlay, FiX } from 'react-icons/fi'
import 'antd/dist/antd.css'
import { Select } from 'antd'

const { Option } = Select
const children:any = []
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>)
}

function handleChange (value:any) {
  console.log(`selected ${value}`)
}

export default function CrossingStages () {
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
        <h1>Etapas da travessia</h1>
        <S.ContainerTitle>
          <span>Nome</span>
        </S.ContainerTitle>

        <S.ContainerDesc>
          <span>Levantamento e Mapeamento de Interferências</span>

          <button onClick={openModal}>Configurar campos</button>
        </S.ContainerDesc>
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
        <h2>Levantamento e Mapeamento de Interferências</h2>
        <Select mode='tags' style={{ width: '100%' }} placeholder='Perfil de acesso' onChange={handleChange}>
          {children}
        </Select>
        <h2>Croqui de Mapeamento</h2>
        <select>
          <option>Disponível (Não obrigatório)</option>
          <option>Obrigatório</option>
          <option>Indisponível</option>
        </select>
      </Modal>
    </>
  )
}
