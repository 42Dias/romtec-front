import { useState } from 'react'
import Modal from 'react-modal'
import * as S from './styled'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Navigation } from 'swiper'
import { Switch } from 'antd'
import 'antd/dist/antd.css'

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'

import { FiPlus, FiCheck, FiPlay, FiLock, FiX } from 'react-icons/fi'

SwiperCore.use([Pagination, Navigation])

export default function
Phases () {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [modalIsOpen2, setIsOpen2] = useState(false)
  const [modalIsOpen3, setIsOpen3] = useState(false)
  const [modalIsOpen4, setIsOpen4] = useState(false)
  const [modalIsOpen5, setIsOpen5] = useState(false)
  const [modalIsOpen6, setIsOpen6] = useState(false)
  const [modalIsOpen7, setIsOpen7] = useState(false)
  const [modalIsOpen8, setIsOpen8] = useState(false)

  function openModal () {
    setIsOpen(true)
    setIsOpen2(false)
    setIsOpen3(false)
    setIsOpen4(false)
    setIsOpen5(false)
    setIsOpen6(false)
    setIsOpen7(false)
    setIsOpen8(false)
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
    setIsOpen6(false)
    setIsOpen7(false)
    setIsOpen8(false)
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
    setIsOpen6(false)
    setIsOpen7(false)
    setIsOpen8(false)
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
    setIsOpen6(false)
    setIsOpen7(false)
    setIsOpen8(false)
  }

  function closeModal4 () {
    setIsOpen4(false)
  }

  function openModal5 () {
    setIsOpen5(true)
    setIsOpen(false)
    setIsOpen2(false)
    setIsOpen3(false)
    setIsOpen4(false)
    setIsOpen6(false)
    setIsOpen7(false)
    setIsOpen8(false)
  }

  function closeModal5 () {
    setIsOpen5(false)
  }

  function openModal6 () {
    setIsOpen6(true)
    setIsOpen5(false)
    setIsOpen(false)
    setIsOpen2(false)
    setIsOpen3(false)
    setIsOpen4(false)
    setIsOpen7(false)
    setIsOpen8(false)
  }

  function closeModal6 () {
    setIsOpen6(false)
  }

  function openModal7 () {
    setIsOpen7(true)
    setIsOpen6(false)
    setIsOpen5(false)
    setIsOpen(false)
    setIsOpen2(false)
    setIsOpen3(false)
    setIsOpen4(false)
    setIsOpen8(false)
  }

  function closeModal7 () {
    setIsOpen7(false)
  }

  function openModal8 () {
    setIsOpen8(true)
    setIsOpen7(false)
    setIsOpen6(false)
    setIsOpen5(false)
    setIsOpen(false)
    setIsOpen2(false)
    setIsOpen3(false)
    setIsOpen4(false)
  }

  function closeModal8 () {
    setIsOpen8(false)
  }

  return (
    <>
      <Sidebar />
      <Navbar />
      <S.ContainerConfirmation>
        <h2>Selecione uma etapa</h2>
        <div className='buttons'>
          <button onClick={openModal6} className='add'>
            <FiPlus />
          </button>
          <button onClick={openModal7} className='import'>
            Importar modelo
          </button>
        </div>

        <div className='modal-styles'>
          <Modal
            className='phaes-modal'
            style={{
              overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
              },
            }}
            isOpen={modalIsOpen6}
            onAfterOpen={() => afterOpenModal}
            onRequestClose={() => closeModal6}
          >
            <button style={{ position: 'absolute', top: '10px', right: '10px', background: 'transparent', border: 0 }} onClick={closeModal6}><FiX color='white' /></button>

            <S.PhasesModal>
              <h2>Nome da etapa</h2>
              <input type='text' placeholder='Nome da etapa' />

              <h3>Adicione os campos da etapa</h3>
              <input type='text' placeholder='Adicione os campos da etapa' />

              <div>
                <h4>Selecione alguns campos pré selecionados para a sua etapa</h4>
                <Switch
                  checkedChildren='Documentos'
                  unCheckedChildren='Documentos'
                />

                <Switch
                  checkedChildren='Responsavel'
                  unCheckedChildren='Responsavel'
                />

                <Switch
                  checkedChildren='Criação do plano de furo'
                  unCheckedChildren='Criação do plano de furo'
                />

                <Switch
                  checkedChildren='Confirmação da sondagem da interferência'
                  unCheckedChildren='Confirmação da sondagem da interferência'
                />

                <Switch
                  checkedChildren='Sondagem'
                  unCheckedChildren='Sondagem'
                />
              </div>

              <button className='save'>Salvar</button>
              <button onClick={openModal8} className='saveModel'>Salvar modelo</button>
            </S.PhasesModal>

          </Modal>
        </div>

        <Modal
          className='phaes-modal'
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
            },
          }}
          isOpen={modalIsOpen7}
          onAfterOpen={() => afterOpenModal}
          onRequestClose={() => closeModal7}
        >
          <button style={{ position: 'absolute', top: '10px', right: '10px', background: 'transparent', border: 0 }} onClick={closeModal7}><FiX color='white' /></button>

          <S.ModelsModal>
            <div>
              <button className='saveModel'>Modelo 1</button>
              <button className='saveModel'>Modelo 2</button>
              <button className='saveModel'>Modelo 3</button>
              <button className='saveModel'>Modelo 4</button>
            </div>

            <button className='save'>Salvar</button>
          </S.ModelsModal>

        </Modal>

        <Modal
          className='phaes-modal'
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
            },
          }}
          isOpen={modalIsOpen8}
          onAfterOpen={() => afterOpenModal}
          onRequestClose={() => closeModal8}
        >
          <button style={{ position: 'absolute', top: '10px', right: '10px', background: 'transparent', border: 0 }} onClick={closeModal8}><FiX color='white' /></button>

          <S.PhasesModal>
            <div className='modelsContent'>
              <h2>Nome do modelo</h2>
              <input type='text' placeholder='Nome do modelo' />
              <br />
              <button className='save'>Salvar</button>
            </div>
          </S.PhasesModal>
        </Modal>

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
            <button onClick={openModal}>
              <FiCheck />
              <h1>Planejamento de perfuração</h1>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button onClick={openModal2}>
              <FiCheck />
              <h1>Levantamento e Mapeamento de interferências</h1>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button onClick={openModal3}>
              <FiCheck />
              <h1>Verificação de Interferências Físicas e Magnéticas</h1>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button onClick={openModal4}>
              <FiCheck />
              <h1>Abertura da vala</h1>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button onClick={openModal5}>
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
          <h2>Direcionamento do furo furo piloto</h2>
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
      </S.ContainerConfirmation>
    </>
  )
}
