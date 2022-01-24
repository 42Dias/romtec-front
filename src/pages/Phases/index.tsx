import { useEffect, useState } from 'react'
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
import { api, ip } from '../../services/api'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { type } from 'os'

SwiperCore.use([Pagination, Navigation])

type FormData = {
  id: string;
  latitudeEntrada: string;
  longitudeEntrada: string;
  latitudeSaida: string;
  longitudeSaida: string;
  tipoTubulacao: string;
  diametroPerfuracao: string;
  tipoSolo: string;
  idConfigTravessia: string;
  banco: string;
}
type levantamento = {
  id: string;
  responsavel: string;
  latitudeSaida: string;
  equipamentos: string;
  documentos: string;
  tipoRede: string;
  empresa: string;
  sondagemInterferencia: string;
  sondagem: string;
  criacaoplanoFuro: string;
  idConfigTravessia: string;
  banco: string;
}
export default function
  Phases() {
  const [modalIsOpenPlanejamento, setIsOpenPlanejamento] = useState(false)
  const [modalIsOpen2, setIsOpen2] = useState(false)
  const [modalIsOpen3, setIsOpen3] = useState(false)
  const [modalIsOpen4, setIsOpen4] = useState(false)
  const [modalIsOpen5, setIsOpen5] = useState(false)
  const [modalIsOpen6, setIsOpen6] = useState(false)
  const [modalIsOpen7, setIsOpen7] = useState(false)
  const [modalIsOpen8, setIsOpen8] = useState(false)
  let idConfigTravessia = window.location.hash.replace(ip + '/romtec/#/etapas/', '')
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()
  const [loading, setLoading] = useState(false)
  const [dados, setDados] = useState<any[]>([])

  const [idDados, setId] = useState('')
  const [responsavel, setresponsavel] = useState('')
  const [equipamentos, setequipamentos] = useState('')
  const [documentos, setdocumentos] = useState('')
  const [longitudeSaida, setlongitudeSaida] = useState('')
  const [tipoTubulacao, settipoTubulacao] = useState('')
  const [diametroPerfuracao, setdiametroPerfuracao] = useState('')
  const [tipoSolo, setTipoSolo] = useState('')
  const [isOpenUpdatePlanejamentoPerfuração, setisOpenUpdatePlanejamentoPerfuração] = useState(false)
  const [latitudeEntrada, setlatitudeEntrada] = useState('')
  const [longitudeEntrada, setlongitudeEntrada] = useState('')
  const [latitudeSaida, setlatitudeSaida] = useState('')
  const [tipoRede, settipoRede] = useState('')
  const [empresa, setempresa] = useState('')
  const [sondagemInterferencia, setsondagemInterferencia] = useState('')
  const [sondagem, setsondagem] = useState('')
  const [criacaoplanoFuro, setcriacaoplanoFuro] = useState('')
  const [url, setUrl] = useState('')
  const [ferramentas, setferramentas] = useState('')
  const [diametroInterferencia, setDiametroInterferencia] = useState('')
  const [profundidade, setprofundidade] = useState('')
  const [anguloAtaque, setanguloAtaque] = useState('')
  const [posicaoRelogio, setposicaoRelogio] = useState('')
  const [azimute, setazimute] = useState('')
  const [isUpdate, setIsUpdate] = useState(false)
  const [campoEntradaLatitude, setcampoEntradaLatitude] = useState(false)
  const [campoEntradaLongitude, setcampoEntradaLongitude] = useState(false)
  const [campoSaidaLatitude, setcampoSaidaLatitude] = useState(false)
  const [campoSaidaLongitude, setcampoSaidaLongitude] = useState(false)
  const [campoTipoSolo, setcampoTipoSolo] = useState(false)
  const [campoDiametroPerfuracao, setcampoDiametroPerfuracao] = useState(false)
  const [campoTipoRede, setcampoTipoRede] = useState(false)
  const [campoTipoTubulacao, setcampoTipoTubulacao] = useState(false)
  const [campoResponsel, setcampoResponsel] = useState(false)
  const [campoEquipamento, setcampoEquipamento] = useState(false)
  const [campoDocumento, setcampoDocumento] = useState(false)
  const [campoSondagemInterferencia, setcampoSondagemInterferencia] = useState(false)
  const [campoSondagem, setcampoSondagem] = useState(false)
  const [campoDiametroInterferencia, setcampoDiametroInterferencia] = useState(false)
  const [campoPlanoFuro, setcampoPlanoFuro] = useState(false)
  const [campoFerramentas, setcampoFerramentas] = useState(false)
  const [campoInfoEnvolvidas, setcampoInfoEnvolvidas] = useState(false)
  const [campoDiametro, setcampoDiametro] = useState(false)
  const [campoLocalizaDiretrizFuro, setcampoLocalizaDiretrizFuro] = useState(false)
  const [campoTipoInterferencia, setcampoTipoInterferencia] = useState(false)
  const [campoProfundidade, setcampoProfundidade] = useState(false)
  const [campoResponselTopografia, setcampoResponselTopografia] = useState(false)
  const [campoDataTopografia, setcampoDataTopografia] = useState(false)
  const [campoEmpresa, setcampoEmpresa] = useState(false)

  function onSubmit(data: FormData) {
    data.idConfigTravessia = idConfigTravessia.replace('#/etapas/', '')
    data.banco = 'planejamentoPerfuracao'
    console.log(data)
    createNewFile(data)
  }
  function onSubmitLevantamento() {
    console.log(responsavel)
    const data = {
      idConfigTravessia: idConfigTravessia.replace('#/etapas/', ''),
      banco: 'levantametoMapInteferencia',
      responsavel: responsavel,
      latitudeSaida: latitudeSaida,
      equipamentos: equipamentos,
      documentos: documentos,
      tipoRede: tipoRede,
      empresa: empresa,
      sondagemInterferencia: sondagemInterferencia,
      sondagem: sondagem,
      criacaoplanoFuro: criacaoplanoFuro,
    }

    console.log(data)
    if (isUpdate) {
      updateDados()
      setIsUpdate(false)
    } else {
      createNewFile(data)
    }

  }
  function onSubmitInterferenciasFisicasMagneticas() {
    console.log(responsavel)
    const data = {
      idConfigTravessia: idConfigTravessia.replace("#/etapas/", ''),
      banco: 'interferenciasFisicasMagneticas',
      responsavel: responsavel,
      equipamentos: equipamentos,
      documentos: documentos,
      tipoRede: tipoRede,
      empresa: empresa,
      sondagemInterferencia: sondagemInterferencia,
      diametroInterferencia: diametroInterferencia
    }

    console.log(data)
    if (isUpdate) {
      updateDados()
      setIsUpdate(false)
    } else {
      createNewFile(data)
    }
  }
  function onSubmitAberturaVala() {
    console.log(responsavel)
    const data = {
      idConfigTravessia: idConfigTravessia.replace("#/etapas/", ''),
      banco: 'aberturaVala',
      responsavel: responsavel,
      ferramentas: ferramentas,
      latitudeEntrada: latitudeEntrada,
      longitudeSaida: longitudeSaida,
      longitudeEntrada: longitudeEntrada,
      latitudeSaida: latitudeSaida,
      equipamentos: equipamentos,
      documentos: documentos,
      empresa: empresa,
      sondagemInterferencia: sondagemInterferencia,
      sondagem: sondagem,
    }

    console.log(data)
    if (isUpdate) {
      updateDados()
      setIsUpdate(false)
    } else {
      createNewFile(data)
    }

  }

  async function createNewFile(submit: any) {
    setLoading(true)
    console.log('submit')
    console.log(submit)
    // eslint-disable-next-line
    const responser = await api.post(submit.banco, {
      data: submit,
    }).then((response) => {
      if (response.statusText === 'OK') {
        toast.success('Cadastrado realizado com sucesso!')
        setLoading(false)
        reset()
        setIsOpenPlanejamento(false)
        // loadDados()
      } else if (response.statusText === 'Forbidden') {
        toast.error('Ops, Não tem permisão!')
        setLoading(false)
      } else {
        toast.error('Ops, Dados Incorretos!')
        setLoading(false)
      }
    }).catch(res => {
      console.log(res)
      toast.error(res.response.data)
      setLoading(false)
    })
  }
  async function loadDados(url: string) {
    setLoading(true)
    // eslint-disable-next-line
    const responser = await api.get(url + `?filter%5BidConfigTravessia%5D=${idConfigTravessia.replace("#/etapas/", '')}`,
    ).then((response) => {
      if (response.statusText === 'OK') {
        setDados(response.data.rows)
        setUrl(url)
        console.log(dados)
        setLoading(false)
      }
    }).catch(res => {
      console.log(res.response.data)
      toast.error(res.response.data)
      setLoading(false)
    })

    setLoading(false)
  }
  async function deleteDados(id: string) {
    setLoading(true)
    // eslint-disable-next-line
    const responser = api.delete('tipo-solo/' + id,
    ).then((response) => {
      if (response.statusText === 'OK') {
        // loadDados()
        setLoading(false)
      }
    }).catch(res => {
      console.log(res.response.data)
      toast.error(res.response.data)
      setLoading(false)
    })
  }
  function update(data: any) {
    console.log('data')
    console.log(data)
    // setDados(data)
    setId(data[0].id)
    console.log(url)
    if (url === 'planejamentoPerfuracao') {
      setlatitudeEntrada(data[0].latitudeEntrada)
      setlongitudeSaida(data[0].longitudeSaida)
      settipoTubulacao(data[0].tipoTubulacao)
      setlongitudeEntrada(data[0].longitudeEntrada)
      setlatitudeSaida(data[0].latitudeSaida)
      setdiametroPerfuracao(data[0].diametroPerfuracao)
      setTipoSolo(data[0].tipoSolo)
      settipoTubulacao(data[0].tipoTubulacao)
      setisOpenUpdatePlanejamentoPerfuração(true)
    }
    else if (url === 'levantametoMapInteferencia') {
      setresponsavel(data[0].responsavel)
      setequipamentos(data[0].equipamentos)
      setdocumentos(data[0].documentos)
      setlatitudeSaida(data[0].latitudeSaida)
      settipoRede(data[0].tipoRede)
      setempresa(data[0].empresa)
      setsondagemInterferencia(data[0].sondagemInterferencia)
      setsondagem(data[0].sondagem)
      setcriacaoplanoFuro(data[0].criacaoplanoFuro)
      setIsOpen2(true)
    }
    else if (url === 'interferenciasFisicasMagneticas') {
      setresponsavel(data[0].responsavel)
      setequipamentos(data[0].equipamentos)
      setdocumentos(data[0].documentos)
      setlatitudeSaida(data[0].latitudeSaida)
      settipoRede(data[0].tipoRede)
      setempresa(data[0].empresa)
      setDiametroInterferencia(data[0].diametroInterferencia)
      setsondagemInterferencia(data[0].sondagemInterferencia)
      setsondagem(data[0].sondagem)
      setcriacaoplanoFuro(data[0].criacaoplanoFuro)
      setIsOpen3(true)
    }
    if (url === 'aberturaVala') {
      setresponsavel(data[0].responsavel)
      setequipamentos(data[0].equipamentos)
      setdocumentos(data[0].documentos)
      setlatitudeEntrada(data[0].latitudeEntrada)
      setlongitudeSaida(data[0].longitudeSaida)
      settipoTubulacao(data[0].tipoTubulacao)
      setlongitudeEntrada(data[0].longitudeEntrada)
      setlatitudeSaida(data[0].latitudeSaida)
      setdiametroPerfuracao(data[0].diametroPerfuracao)
      setTipoSolo(data[0].tipoSolo)
      settipoTubulacao(data[0].tipoTubulacao)
      setIsOpen4(true)
    }
    console.log(idDados)
  }
  async function updateDados() {
    setLoading(true)
    console.log('idDados')
    console.log(idDados)
    //console.log(soilTypesUp)
    const responser = api.put(url + '/' + idDados, {
      data: {
        id: idDados,
        latitudeEntrada: latitudeEntrada,
        longitudeSaida: longitudeSaida,
        tipoTubulacao: tipoTubulacao,
        idConfigTravessia: idConfigTravessia.replace('#/etapas/', ''),
        longitudeEntrada: longitudeEntrada,
        latitudeSaida: latitudeSaida,
        responsavel: responsavel,
        equipamentos: equipamentos,
        documentos: documentos,
        tipoRede: tipoRede,
        empresa: empresa,
        sondagemInterferencia: sondagemInterferencia,
        sondagem: sondagem,
        criacaoplanoFuro: criacaoplanoFuro,
        diametroPerfuracao: diametroPerfuracao,
        ferramentas: ferramentas
      },
    },
    ).then((response) => {
      if (response.statusText === 'OK') {
        loadDados('planejamentoPerfuracao')
        setisOpenUpdatePlanejamentoPerfuração(false)
        setLoading(false)
        setIsOpen2(false)
        setIsOpen3(false)
        setIsOpen4(false)
        setIsOpen5(false)
        setIsOpen6(false)
        setIsOpen7(false)
        setIsOpen8(false)
      }
    }).catch(res => {
      console.log(res.response.data)
      toast.error(res.response.data)
      setLoading(false)
    })
    setLoading(false)
  }
  useEffect(() => {
    // console.log(soilTypesUp)
    idConfigTravessia = window.location.hash.replace(ip + '/romtec/#/etapas/', '')
    console.log('useEffect')
    console.log(idConfigTravessia)
    //setLoading(true)
    loadDados('etapas')

  }, [])

  function openModal(data: any) {
    console.log(data)
    setcampoEntradaLatitude(data.campoEntradaLatitude)
    setcampoEntradaLongitude(data.campoEntradaLongitude)
    setcampoSaidaLatitude(data.campoSaidaLatitude)
    setcampoSaidaLongitude(data.campoSaidaLongitude)
    setcampoTipoSolo(data.campoTipoSolo)
    setcampoDiametroPerfuracao(data.campoDiametroPerfuracao)
    setcampoTipoRede(data.campoTipoRede)
    setcampoTipoTubulacao(data.campoTipoTubulacao)
    setcampoResponsel(data.campoResponsel)
    setcampoEquipamento(data.campoEquipamento)
    setcampoSondagemInterferencia(data.campoSondagemInterferencia)
    setcampoDocumento(data.campoDocumento)
    setcampoEmpresa(data.campoEmpresa)
    setcampoSondagem(data.campoSondagem)
    setcampoDiametroInterferencia(data.campoDiametroInterferencia)
    setcampoPlanoFuro(data.campoPlanoFuro)
    setcampoFerramentas(data.campoFerramentas)
    setcampoInfoEnvolvidas(data.campoInfoEnvolvidas)
    setcampoDiametro(data.campoDiametro)
    setcampoLocalizaDiretrizFuro(data.campoLocalizaDiretrizFuro)
    setcampoTipoInterferencia(data.campoTipoInterferencia)
    setcampoProfundidade(data.campoProfundidade)
    setcampoResponselTopografia(data.campoResponselTopografia)
    setcampoDataTopografia(data.campoDataTopografia)
    setisOpenUpdatePlanejamentoPerfuração(true)
    setIsOpen2(false)
    setIsOpen3(false)
    setIsOpen4(false)
    setIsOpen5(false)
    setIsOpen6(false)
    setIsOpen7(false)
    setIsOpen8(false)
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }
  function closeModal() {
    setIsOpenPlanejamento(false)
  }

  function openModal2() {
    setresponsavel(' ')
    setequipamentos(' ')
    setdocumentos(' ')
    setlatitudeSaida(' ')
    settipoRede(' ')
    setempresa(' ')
    setsondagemInterferencia(' ')
    setsondagem(' ')
    setcriacaoplanoFuro(' ')
    loadDados('levantametoMapInteferencia')
    console.log(dados)
    if (dados) {
      if (dados.length == 0) {
        setIsOpen2(true)
      } else {
        setIsUpdate(true)
        update(dados)
      }
    } else {
      toast.info('Clique mais uma vez!')
    }

    setIsOpenPlanejamento(false)
    setisOpenUpdatePlanejamentoPerfuração(false)
    setIsOpen3(false)
    setIsOpen4(false)
    setIsOpen5(false)
    setIsOpen6(false)
    setIsOpen7(false)
    setIsOpen8(false)
  }

  function closeModal2() {
    setIsOpen2(false)
  }

  function openModal3() {
    setresponsavel(' ')
    setequipamentos(' ')
    setdocumentos(' ')
    setlatitudeSaida(' ')
    settipoRede(' ')
    setempresa(' ')
    setsondagemInterferencia(' ')
    setsondagem(' ')
    setcriacaoplanoFuro(' ')
    loadDados('interferenciasFisicasMagneticas')
    if (dados) {
      if (dados.length == 0) {
        setIsOpen3(true)
      } else {
        setIsUpdate(true)
        update(dados)
      }
    } else {
      toast.info("Clique mais uma vez!")
    }

    setIsOpenPlanejamento(false)
    setisOpenUpdatePlanejamentoPerfuração(false)
    setIsOpen2(false)
    setIsOpen4(false)
    setIsOpen5(false)
    setIsOpen6(false)
    setIsOpen7(false)
    setIsOpen8(false)
  }

  function closeModal3() {
    setIsOpen3(false)
  }
  //
  function openModal4() {
    setresponsavel(' ')
    setequipamentos(' ')
    setdocumentos(' ')
    setlatitudeEntrada(' ')
    setlongitudeSaida(' ')
    settipoTubulacao(' ')
    setlongitudeEntrada(' ')
    setlatitudeSaida(' ')
    settipoRede(' ')
    setempresa(' ')
    setsondagemInterferencia(' ')
    setsondagem(' ')
    setcriacaoplanoFuro(' ')
    loadDados('aberturaVala')
    if (dados) {
      if (dados.length == 0) {
        setIsOpen4(true)
      } else {
        setIsUpdate(true)
        update(dados)
      }
    } else {
      toast.info("Clique mais uma vez!")
    }

    setIsOpenPlanejamento(false)
    setisOpenUpdatePlanejamentoPerfuração(false)
    setIsOpen2(false)
    setIsOpen3(false)
    setIsOpen5(false)
    setIsOpen6(false)
    setIsOpen7(false)
    setIsOpen8(false)
  }

  function closeModal4() {
    setIsOpen4(false)
  }

  function openModal5() {
    setIsOpen5(true)
    setIsOpenPlanejamento(false)
    setisOpenUpdatePlanejamentoPerfuração(false)
    setIsOpen2(false)
    setIsOpen3(false)
    setIsOpen4(false)
    setIsOpen6(false)
    setIsOpen7(false)
    setIsOpen8(false)
  }

  function closeModal5() {
    setIsOpen5(false)
  }

  function openModal6() {
    setIsOpen6(true)
    setIsOpen5(false)
    setIsOpenPlanejamento(false)
    setisOpenUpdatePlanejamentoPerfuração(false)
    setIsOpen2(false)
    setIsOpen3(false)
    setIsOpen4(false)
    setIsOpen7(false)
    setIsOpen8(false)
  }

  function closeModal6() {
    setIsOpen6(false)
  }

  function openModal7() {
    setIsOpen7(true)
    setIsOpen6(false)
    setIsOpen5(false)
    setIsOpenPlanejamento(false)
    setisOpenUpdatePlanejamentoPerfuração(false)
    setIsOpen2(false)
    setIsOpen3(false)
    setIsOpen4(false)
    setIsOpen8(false)
  }

  function closeModal7() {
    setIsOpen7(false)
  }

  function openModal8() {
    setIsOpen8(true)
    setIsOpen7(false)
    setIsOpen6(false)
    setIsOpen5(false)
    setIsOpenPlanejamento(false)
    setisOpenUpdatePlanejamentoPerfuração(false)
    setIsOpen2(false)
    setIsOpen3(false)
    setIsOpen4(false)
  }

  function closeModal8() {
    setIsOpen8(false)
  }

  return (
    <>
      <Sidebar />
      <Navbar />
      <S.ContainerConfirmation>
        <h2>Selecione uma etapa</h2>

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
          {dados.length > 0 ? dados.map(data =>
            <SwiperSlide>
              <button onClick={() => openModal(data)}>
                <FiCheck />
                <h2>{data.numeroEtapa}</h2>
                <h1>{data.novaEtapa}</h1>
              </button>
            </SwiperSlide>
          ) : <SwiperSlide>
            <button onClick={openModal2}>
              <FiCheck />
              <h2>2</h2>
              <h1>Levantamento e Mapeamento de interferências</h1>
            </button>
          </SwiperSlide>}
          {/* <SwiperSlide>
            <button onClick={openModal2}>
              <FiCheck />
              <h2>2</h2>
              <h1>Levantamento e Mapeamento de interferências</h1>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button onClick={openModal3}>
              <FiCheck />
              <h2>3</h2>
              <h1>Verificação de Interferências Físicas e Magnéticas</h1>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button onClick={openModal4}>
              <FiCheck />
              <h2>4</h2>
              <h1>Abertura da vala</h1>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button onClick={openModal5}>
              <FiPlay />
              <h2>5</h2>
              <h1>Direcionamento do Furo Piloto</h1>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button
              style={{ cursor: 'not-allowed' }}
              disabled
            >
              <FiLock />
              <h2>6</h2>
              <h1>Fechamento da vala</h1>
            </button>
          </SwiperSlide> */}
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
          isOpen={modalIsOpenPlanejamento}
          onAfterOpen={() => afterOpenModal}
          onRequestClose={() => closeModal}
        >
          <h2>Planejamento de perfuração</h2>
          {/* <button onClick={closeModal}>close</button> */}

          <S.FormContent onSubmit={handleSubmit(onSubmit)}>
            <S.GridForm>
              <div>
                <label htmlFor=''>Ponto de verificação de entrada (lat)</label>
                <input
                  type='text' placeholder='Latitude'
                  {...register('latitudeEntrada', {
                    required: {
                      value: true,
                      message: 'Todos os campos são obrigatórios',
                    },
                  })}
                />
              </div>

              <div>
                <label htmlFor=''>Ponto de verificação de entrada (long)</label>
                <input
                  type='text' placeholder='Longitude'
                  {...register('longitudeEntrada', {
                    required: true,
                  })}
                />
              </div>

              <div>
                <label htmlFor=''>Ponto de verificação de saída (lat)</label>
                <input
                  type='text' placeholder='Latitude'
                  {...register('latitudeSaida', {
                    required: true,
                  })}
                />
              </div>

              <div>
                <label htmlFor=''>Ponto de verificação de saída (long)</label>
                <input
                  type='text' placeholder='Longitude'
                  {...register('longitudeSaida', {
                    required: true,
                  })}
                />
              </div>

              <div>
                <label htmlFor=''>Tipo de tubulação</label>
                <input
                  type='text' placeholder='Fibra óptica'
                  {...register('tipoTubulacao', {
                    required: true,
                  })}
                />
              </div>

              <div>
                <label htmlFor=''>Diâmetro de perfuração</label>
                <input
                  type='text' placeholder='20 metros'
                  {...register('diametroPerfuracao', {
                    required: true,
                  })}
                />
              </div>

              <div>
                <label htmlFor=''>Tipos de solo</label>
                <input
                  type='text' placeholder='Barro'
                  {...register('tipoSolo', {
                    required: true,
                  })}
                />
              </div>
            </S.GridForm>
            <button>{loading
              ? <img
                width='40px'
                style={{ margin: 'auto' }}
                height='' src='https://contribua.org/mb-static/images/loading.gif'
                alt='Loading'
              />
              : 'Salvar'}
            </button>
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
          isOpen={isOpenUpdatePlanejamentoPerfuração}
          onAfterOpen={() => afterOpenModal}
          onRequestClose={() => closeModal}
        >
          <h2>Planejamento de perfuração</h2>
          {/* <button onClick={closeModal}>close</button> */}

          <S.Div>
            <S.GridForm>
              {campoEntradaLatitude ? <div>
                <label htmlFor=''>Ponto de verificação de entrada (lat)</label>
                <input
                  type='text' placeholder='Latitude'
                  value={latitudeEntrada}
                  onChange={(text) => setlatitudeEntrada(text.target.value)}
                />
              </div>: false}

              <div>
                <label htmlFor=''>Ponto de verificação de entrada (long)</label>
                <input
                  type='text' placeholder='Longitude'
                  value={longitudeEntrada}
                  onChange={(text) => setlongitudeEntrada(text.target.value)}
                />
              </div>

              <div>
                <label htmlFor=''>Ponto de verificação de saída (lat)</label>
                <input
                  type='text' placeholder='Latitude'
                  value={latitudeSaida}
                  onChange={(text) => setlatitudeSaida(text.target.value)}
                />
              </div>

              <div>
                <label htmlFor=''>Ponto de verificação de saída (long)</label>
                <input
                  type='text' placeholder='Longitude'
                  value={longitudeSaida}
                  onChange={(text) => setlongitudeSaida(text.target.value)}
                />
              </div>

              <div>
                <label htmlFor=''>Tipo de tubulação</label>
                <input
                  type='text' placeholder='Fibra óptica'
                  value={tipoTubulacao}
                  onChange={(text) => settipoTubulacao(text.target.value)}
                />
              </div>

              <div>
                <label htmlFor=''>Diâmetro de perfuração</label>
                <input
                  type='text' placeholder='20 metros'
                  value={diametroPerfuracao}
                  onChange={(text) => setdiametroPerfuracao(text.target.value)}
                />
              </div>

             {campoTipoSolo ? <div>
                <label htmlFor=''>Tipos de solo</label>
                <input
                  type='text' placeholder='Barro'
                  value={tipoSolo}
                  onChange={(text) => setTipoSolo(text.target.value)}
                />
              </div>: false}
            </S.GridForm>
            <button onClick={() => updateDados()}>{loading
              ? <img
                width='40px'
                style={{ margin: 'auto' }}
                height='' src='https://contribua.org/mb-static/images/loading.gif'
                alt='Loading'
              />
              : 'Salvar'}
            </button>
          </S.Div>
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

          <S.Div>
            <S.GridForm>
              <div>
                <label htmlFor=''>Responsável</label>
                <input
                  type='text'
                  value={responsavel}
                  onChange={(text) => setresponsavel(text.target.value)}
                />
              </div>

              <div>
                <label htmlFor=''>Equipamentos</label>
                <input
                  type='text'
                  value={equipamentos}
                  onChange={(text) => setequipamentos(text.target.value)}
                />
              </div>

              <div>
                <label htmlFor=''>Ponto de verificação de saída (lat)</label>
                <input
                  type='text'
                  value={latitudeSaida}
                  onChange={(text) => setlatitudeSaida(text.target.value)}
                />
              </div>

              <div>
                <label htmlFor=''>Documentos</label>
                <input
                  type='text'
                  value={documentos}
                  onChange={(text) => setdocumentos(text.target.value)}
                />
              </div>

              <div>
                <label htmlFor=''>Tipo de rede</label>
                <input
                  type='text'
                  value={tipoRede}
                  onChange={(text) => settipoRede(text.target.value)}
                />
              </div>

              <div>
                <label htmlFor=''>Empresa proprietária</label>
                <input
                  type='text'
                  value={empresa}
                  onChange={(text) => setempresa(text.target.value)}
                />
              </div>

              <div>
                <label htmlFor=''>Confirmação da sondagem da interferência:</label>
                <input
                  type='text'
                  value={sondagemInterferencia}
                  onChange={(text) => setsondagemInterferencia(text.target.value)}
                />
              </div>

              <div>
                <label htmlFor=''>Sondagem</label>
                <input
                  type='text'
                  value={sondagem}
                  onChange={(text) => setsondagem(text.target.value)}
                />
              </div>

              <div>
                <label htmlFor=''>Criação do plano de furo</label>
                <input
                  type='text'
                  value={criacaoplanoFuro}
                  onChange={(text) => setcriacaoplanoFuro(text.target.value)}
                />
              </div>

              {/* <div>
                <label htmlFor=''>Quando acontece</label>
                <input type='text' />
              </div> */}
            </S.GridForm>
            <button onClick={() => onSubmitLevantamento()}>{loading
              ? <img
                width='40px'
                style={{ margin: 'auto' }}
                height='' src='https://contribua.org/mb-static/images/loading.gif'
                alt='Loading'
              />
              : 'Salvar'}
            </button>
          </S.Div>
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

          <S.Div>
            <S.GridForm>
              <div>
                <label htmlFor=''>Responsável</label>
                <input type='text'
                  value={responsavel}
                  onChange={(text) => setresponsavel(text.target.value)} />
              </div>

              <div>
                <label htmlFor=''>Equipamentos</label>
                <input type='text'
                  value={equipamentos}
                  onChange={(text) => setequipamentos(text.target.value)} />
              </div>

              <div>
                <label htmlFor=''>Documentos</label>
                <input type='text'
                  value={documentos}
                  onChange={(text) => setdocumentos(text.target.value)} />
              </div>

              <div>
                <label htmlFor=''>Tipo de rede</label>
                <input type='text'
                  value={tipoRede}
                  onChange={(text) => settipoRede(text.target.value)} />
              </div>

              <div>
                <label htmlFor=''>Diâmetro da interferência</label>
                <input type='text'
                  value={diametroInterferencia}
                  onChange={(text) => setDiametroInterferencia(text.target.value)} />
              </div>

              <div>
                <label htmlFor=''>Empresa proprietária</label>
                <input type='text'
                  value={empresa}
                  onChange={(text) => setempresa(text.target.value)} />
              </div>

              <div>
                <label htmlFor=''>Azimute</label>
                <input type='text'
                  value={azimute}
                  onChange={(text) => setazimute(text.target.value)} />
              </div>

            </S.GridForm>
            <button onClick={() => onSubmitInterferenciasFisicasMagneticas()}>{loading
              ? <img
                width='40px'
                style={{ margin: 'auto' }}
                height='' src='https://contribua.org/mb-static/images/loading.gif'
                alt='Loading'
              />
              : 'Salvar'}</button>
          </S.Div>
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

          <S.Div>
            <S.GridForm>
              <div>
                <label htmlFor=''>Responsável</label>
                <input type='text'
                  value={responsavel}
                  onChange={(text) => setresponsavel(text.target.value)} />
              </div>

              <div>
                <label htmlFor=''>Ferramentas</label>
                <input type='text'
                  value={ferramentas}
                  onChange={(text) => setferramentas(text.target.value)} />
              </div>

              <div>
                <label htmlFor=''>Equipamentos</label>
                <input type='text'
                  value={equipamentos}
                  onChange={(text) => setequipamentos(text.target.value)} />
              </div>

              <div>
                <label htmlFor=''>Documentos</label>
                <input type='text'
                  value={documentos}
                  onChange={(text) => setdocumentos(text.target.value)} />
              </div>

              <div>
                <label htmlFor=''>Ponto de verificação de entrada (lat)</label>
                <input type='text' placeholder='Latitude'
                  value={latitudeEntrada}
                  onChange={(text) => setlatitudeEntrada(text.target.value)} />
              </div>

              <div>
                <label htmlFor=''>Ponto de verificação de entrada (long)</label>
                <input type='text' placeholder='Longitude'
                  value={longitudeEntrada}
                  onChange={(text) => setlongitudeEntrada(text.target.value)} />
              </div>

              <div>
                <label htmlFor=''>Ponto de verificação de saída (lat)</label>
                <input type='text' placeholder='Latitude'
                  value={latitudeSaida}
                  onChange={(text) => setlatitudeSaida(text.target.value)} />
              </div>

              <div>
                <label htmlFor=''>Ponto de verificação de saída (long)</label>
                <input type='text' placeholder='Longitude'
                  value={longitudeSaida}
                  onChange={(text) => setlongitudeSaida(text.target.value)} />
              </div>
            </S.GridForm>
            <button onClick={() => onSubmitAberturaVala()}>{loading
              ? <img
                width='40px'
                style={{ margin: 'auto' }}
                height='' src='https://contribua.org/mb-static/images/loading.gif'
                alt='Loading'
              />
              : 'Salvar'}</button>
          </S.Div>
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

          <S.Div>
            <S.GridForm>
              <div>
                <label htmlFor=''>Responsável</label>
                <input type='text'
                  value={responsavel}
                  onChange={(text) => setresponsavel(text.target.value)} />
              </div>

              <div>
                <label htmlFor=''>Equipamentos</label>
                <input type='text'
                  value={equipamentos}
                  onChange={(text) => setequipamentos(text.target.value)} />
              </div>

              <div>
                <label htmlFor=''>Documentos</label>
                <input type='text'
                  value={documentos}
                  onChange={(text) => setdocumentos(text.target.value)} />
              </div>

              <div>
                <label htmlFor=''>Ferramentas</label>
                <input type='text'
                  value={ferramentas}
                  onChange={(text) => setferramentas(text.target.value)} />
              </div>

              <div>
                <label htmlFor=''>Profundidade</label>
                <input type='text'
                  value={profundidade}
                  onChange={(text) => setprofundidade(text.target.value)} />
              </div>

              <div>
                <label htmlFor=''>Ângulo de ataque (pitch)</label>
                <input type='text'
                  value={anguloAtaque}
                  onChange={(text) => setanguloAtaque(text.target.value)} />
              </div>

              <div>
                <label htmlFor=''>Posição em relação ao relógio</label>
                <input type='text'
                  value={posicaoRelogio}
                  onChange={(text) => setposicaoRelogio(text.target.value)} />
              </div>

            </S.GridForm>
            <button onClick={() => onSubmitInterferenciasFisicasMagneticas()}>{loading
              ? <img
                width='40px'
                style={{ margin: 'auto' }}
                height='' src='https://contribua.org/mb-static/images/loading.gif'
                alt='Loading'
              />
              : 'Salvar'}</button>
          </S.Div>
        </Modal>
      </S.ContainerConfirmation>
    </>
  )
}
