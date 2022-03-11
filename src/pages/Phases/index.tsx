import { useEffect, useState } from 'react'
import Modal from 'react-modal'
import * as S from './styled'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Navigation } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'

import { FiPlus, FiCheck, FiPlay, FiLock, FiX, FiTrash, FiEye } from 'react-icons/fi'
import { api, ip, token } from '../../services/api'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { platform, type } from 'os'
import axios from 'axios'
import { tuple } from 'antd/lib/_util/type'
import { string } from 'yup'

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
Phases () {
  const [modalIsOpenPhase, setIsOpenPhase] = useState(false)
  const [modalIsOpenInterferencia, setIsOpenInterferencia] = useState(false)
  const [modalIsOpenVerificacao, setIsOpenVerificacao] = useState(false)
  const [modalIsOpenFerramenta, setIsOpenFerramenta] = useState(false)
  const [modalIsOpenVerificacaoEdit, setIsOpenVerificacaoEdit] = useState(false)
  const [modalIsOpenInterferenciaEdit, setIsOpenInterferenciaEdit] = useState(false)
  const [modalIsOpenPhaseSelect, setIsOpenPhaseSelect] = useState(false)

  function openModalInterferencia () {
    setIsOpenInterferencia(true)
  }
  function openModalPontosVerificacao () {
    setIsOpenVerificacao(true)
  }
  function openModalFerramenta () {
    setIsOpenFerramenta(true)
  }
  function afterOpenModalInterferencia () {

  }

  function closeModalInterferencia () {
    setIsOpenInterferencia(false)
  }
  function closeModalVerificacao () {
    setIsOpenVerificacao(false)
  }
  function closeModalFerramenta () {
    setIsOpenFerramenta(false)
  }
  function closeModalVerificacaoEdit () {
    setIsOpenVerificacaoEdit(false)
  }
  function openModalInterferenciaEdit (interferencia: any) {
    setInterferenciaId(interferencia.id)
    setTipoInterferencia(interferencia.tipoInterferencia)
    setLatitude(interferencia.latitude)
    setLongitude(interferencia.longitude)
    setprofundidade(interferencia.profundidade)
    setDiametro(interferencia.diametro)

    setIsOpenInterferenciaEdit(true)
  }
  function openModalPontosVerificacaoEdit (pontosVerificacao: any) {
    setInterferenciaId(pontosVerificacao.id)
    setStatus(pontosVerificacao.status)
    setLatitude(pontosVerificacao.latitude)
    setLongitude(pontosVerificacao.longitude)
    setprofundidade(pontosVerificacao.profundidade)

    setIsOpenVerificacaoEdit(true)
  }
  function afterOpenModalInterferenciaEdit () {

  }

  function closeModalInterferenciaEdit () {
    setIsOpenInterferenciaEdit(false)
  }

  function openModalPhases () {
    setIsOpenPhase(true)
  }

  function afterOpenModalPhases () {

  }

  function closeModalPhases () {
    setIsOpenPhase(false)
  }

  function openModalPhasesSelect () {
    setIsOpenPhaseSelect(true)
  }

  function afterOpenModalPhasesSelect () {

  }

  function closeModalPhasesSelect () {
    setIsOpenPhaseSelect(false)
  }

  const [isOpen, setIsOpen] = useState(false)
  const [campoPontosVerificacao, setcampoPontosVerificacao] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [modalIsOpenPlanejamento, setIsOpenPlanejamento] = useState(false)
  const [modalIsOpenAddInterferencia, setIsOpenAddInterferencia] = useState(false)
  let idConfigTravessia = window.location.hash.replace(ip + '/romtec/#/etapas/', '')
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()
  const [loading, setLoading] = useState(false)
  const [dados, setDados] = useState<any[]>([])
  const [interferencias, setinterferencias] = useState<any[]>([])
  const [pontosVerificacao, setPontosVerificacao] = useState<any[]>([])
  const [ferramentasList, setferramentasList] = useState<any[]>([])
  const [variavelTitulo, setVariavelTitulo] = useState('')
  const [idDados, setId] = useState('')
  const [status, setStatus] = useState('')
  const [nomeFerramenta, setnomeFerramenta] = useState('')
  const [descricaoFerramenta, setdescricaoFerramenta] = useState('')
  const [diametroLarguraFerramenta, setdiametroLarguraFerramenta] = useState('')
  const [responsavel, setresponsavel] = useState('')
  const [infoEnvolvidas, setInfoEnvolvidas] = useState('')
  const [interferenciaId, setInterferenciaId] = useState('')
  const [tipoInterferencia, setTipoInterferencia] = useState('')
  const [localDiretrizFuro, setLocalDiretrizFuro] = useState('')
  const [equipamentos, setequipamentos] = useState('')
  const [dataTopografia, setDataTopografia] = useState('')
  const [respTopografia, setRespTopografia] = useState('')
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
  const [idEtapa, setIdEtapa] = useState('')
  const [azimute, setazimute] = useState('')
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [diametro, setDiametro] = useState('')
  // const [profundidade2, setProfundidade] = useState('')
  // const [tipoRede, setTipoRede] = useState('')
  const [localizacao, setLocalizacao] = useState('')
  const [angulacao, setAngulacao] = useState('')
  const [profundidadeEntrada, setprofundidadeEntrada] = useState('')
  const [profundidadeSaida, setprofundidadeSaida] = useState('')
  const [campoprofundidadeEntrada, setcampoprofundidadeEntrada] = useState(false)
  const [campoprofundidadeSaida, setcampoprofundidadeSaida] = useState(false)
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
  const [camponomePerfilAcesso, setcamponomePerfilAcesso] = useState(false)
  const [campodataExecucao, setcampodataExecucao] = useState(false)
  const [camporesponsavelExecucao, setcamporesponsavelExecucao] = useState(false)
  const [campohoraExecucao, setcampohoraExecucao] = useState(false)
  const [campocroquiMapeamento, setcampocroquiMapeamento] = useState(false)
  const [campoequipamentoUtilizado, setcampoequipamentoUtilizado] = useState(false)
  const [campomaterializacaoCampo, setcampomaterializacaoCampo] = useState(false)
  const [campoquantidadeInterferencias, setcampoquantidadeInterferencias] = useState(false)
  const [campoparaleloEsquerda, setcampoparaleloEsquerda] = useState(false)
  const [campoparaleloDireita, setcampoparaleloDireita] = useState(false)
  const [campoperpendicular, setcampoperpendicular] = useState(false)
  const [campolargura, setcampolargura] = useState(false)
  const [campocomprimento, setcampocomprimento] = useState(false)
  const [campoprofundidadeVala, setcampoprofundidadeVala] = useState(false)
  const [campoestacaReferencia, setcampoestacaReferencia] = useState(false)
  const [camponumeroHastes, setcamponumeroHastes] = useState(false)
  const [campoprofundidadePlanejada, setcampoprofundidadePlanejada] = useState(false)
  const [campoavancoPlanejado, setcampoavancoPlanejado] = useState(false)
  const [campoprofundidadeExecutada, setcampoprofundidadeExecutada] = useState(false)
  const [campoavancoExecutado, setcampoavancoExecutado] = useState(false)
  const [campoamarracao, setcampoamarracao] = useState(false)
  const [campomaquinaPerfuratriz, setcampomaquinaPerfuratriz] = useState(false)
  const [campodiametroAlargamento, setcampodiametroAlargamento] = useState(false)
  const [campotempoHaste, setcampotempoHaste] = useState(false)
  const [campovazaoBomba, setcampovazaoBomba] = useState(false)
  const [campotipoRedeTubula, setcampotipoRedeTubula] = useState(false)
  const [campodiametroRede, setcampodiametroRede] = useState(false)
  const [campoferramentasUtilizadas, setcampoferramentasUtilizadas] = useState(false)
  const [campomodeloAlargador, setcampomodeloAlargador] = useState(false)
  const [campocapacidadePortaFusilink, setcampocapacidadePortaFusilink] = useState(false)
  const [campocapacidadeSwivel, setcampocapacidadeSwivel] = useState(false)
  const [campodiametroInterferencia, setcampodiametroInterferencia] = useState(false)
  const [campotipoInterferencia, setcampotipoInterferencia] = useState(false)
  const [campoFluido, setcampoFluido] = useState(false)
  const [campoReceitaFluido, setcampoReceitaFluido] = useState(false)
  const [campoPortaSonda, setcampoPortaSonda] = useState(false)
  const [campoVolumePreparado, setcampoVolumePreparado] = useState(false)
  const [campoTesteVicosidade, setcampoTesteVicosidade] = useState(false)
  const [campoConfirmacaoProcedimento, setcampoConfirmacaoProcedimento] = useState(false)
  const [campoHastes, setcampoHastes] = useState(false)
  const [campoSonda, setcampoSonda] = useState(false)
  const [campopaPerfuracao, setcampopaPerfuracao] = useState(false)
  const [campoPullingHead, setcampoPullingHead] = useState(false)
  const [campoLocalizador, setcampoLocalizador] = useState(false)
  const [campoLuva, setcampoLuva] = useState(false)
  const [campoHasteInicial, setcampoHasteInicial] = useState(false)
  const [campoFlexobarra, setcampoFlexobarra] = useState(false)
  const [campoRadio, setcampoRadio] = useState(false)
  const [campoParafuso, setcampoParafuso] = useState(false)
  const [campoDiametroFerramenta, setcampoDiametroFerramenta] = useState(false)
  const [campoCondicaoFerramenta, setcampoCondicaoFerramenta] = useState(false)
  const [campoEmpresaProprietaria, setcampoEmpresaProprietaria] = useState(false)
  const [campovalaEntradaLatitude, setcampovalaEntradaLatitude] = useState(false)
  const [campovalaEntradaLongitude, setcampovalaEntradaLongitude] = useState(false)
  const [campovalaEntradaAltura, setcampovalaEntradaAltura] = useState(false)
  const [campovalaEntradaComprimento, setcampovalaEntradaComprimento] = useState(false)
  const [campovalaEntradaProfundidade, setcampovalaEntradaProfundidade] = useState(false)
  const [campovalaSaidaLatitude, setcampovalaSaidaLatitude] = useState(false)
  const [campovalaSaidaLongitude, setcampovalaSaidaLongitude] = useState(false)
  const [campovalaSaidaAltura, setcampovalaSaidaAltura] = useState(false)
  const [campovalaSaidaComprimento, setcampovalaSaidaComprimento] = useState(false)
  const [campovalaSaidaProfundidade, setcampovalaSaidaProfundidade] = useState(false)
  const [campoprofundidadeMax, setcampoprofundidadeMax] = useState(false)
  const [campoprofundidadeMin, setcampoprofundidadeMin] = useState(false)
  const [campoMaterialRedeTubula, setcampoMaterialRedeTubula] = useState(false)

  const [MaterialRedeTubula, setMaterialRedeTubula] = useState('')
  const [profundidadeMin, setprofundidadeMin] = useState('')
  const [profundidadeMax, setprofundidadeMax] = useState('')
  const [valaSaidaProfundidade, setvalaSaidaProfundidade] = useState('')
  const [valaSaidaComprimento, setvalaSaidaComprimento] = useState('')
  const [valaSaidaAltura, setvalaSaidaAltura] = useState('')
  const [valaSaidaLongitude, setvalaSaidaLongitude] = useState('')
  const [valaSaidaLatitude, setvalaSaidaLatitude] = useState('')
  const [valaEntradaProfundidade, setvalaEntradaProfundidade] = useState('')
  const [valaEntradaComprimento, setvalaEntradaComprimento] = useState('')
  const [valaEntradaAltura, setvalaEntradaAltura] = useState('')
  const [valaEntradaLongitude, setvalaEntradaLongitude] = useState('')
  const [valaEntradaLatitude, setvalaEntradaLatitude] = useState('')
  const [nomePerfilAcesso, setnomePerfilAcesso] = useState('')
  const [dataExecucao, setdataExecucao] = useState('')
  const [responsavelExecucao, setresponsavelExecucao] = useState('')
  const [horaExecucao, sethoraExecucao] = useState('')
  const [croquiMapeamento, setcroquiMapeamento] = useState('')
  const [equipamentoUtilizado, setequipamentoUtilizado] = useState('')
  const [materializacaoCampo, setmaterializacaoCampo] = useState('')
  const [quantidadeInterferencias, setquantidadeInterferencias] = useState('')
  const [paraleloEsquerda, setparaleloEsquerda] = useState('')
  const [paraleloDireita, setparaleloDireita] = useState('')
  const [perpendicular, setperpendicular] = useState('')
  const [largura, setlargura] = useState('')
  const [comprimento, setcomprimento] = useState('')
  const [profundidadeVala, setprofundidadeVala] = useState('')
  const [estacaReferencia, setestacaReferencia] = useState('')
  const [numeroHastes, setnumeroHastes] = useState('')
  const [profundidadePlanejada, setprofundidadePlanejada] = useState('')
  const [avancoPlanejado, setavancoPlanejado] = useState('')
  const [profundidadeExecutada, setprofundidadeExecutada] = useState('')
  const [avancoExecutado, setavancoExecutado] = useState('')
  const [amarracao, setamarracao] = useState('')
  const [maquinaPerfuratriz, setmaquinaPerfuratriz] = useState('')
  const [diametroAlargamento, setdiametroAlargamento] = useState('')
  const [tempoHaste, settempoHaste] = useState('')
  const [vazaoBomba, setvazaoBomba] = useState('')
  const [tipoRedeTubula, settipoRedeTubula] = useState('')
  const [diametroRede, setdiametroRede] = useState('')
  const [ferramentasUtilizadas, setferramentasUtilizadas] = useState('')
  const [modeloAlargador, setmodeloAlargador] = useState('')
  const [capacidadePortaFusilink, setcapacidadePortaFusilink] = useState('')
  const [capacidadeSwivel, setcapacidadeSwivel] = useState('')
  const [Fluido, setFluido] = useState('')
  const [ReceitaFluido, setReceitaFluido] = useState('')
  const [PortaSonda, setPortaSonda] = useState('')
  const [VolumePreparado, setVolumePreparado] = useState('')
  const [TesteVicosidade, setTesteVicosidade] = useState('')
  const [ConfirmacaoProcedimento, setConfirmacaoProcedimento] = useState('')
  const [Hastes, setHastes] = useState('')
  const [Sonda, setSonda] = useState('')
  const [paPerfuracao, setpaPerfuracao] = useState('')
  const [PullingHead, setPullingHead] = useState('')
  const [Localizador, setLocalizador] = useState('')
  const [Luva, setLuva] = useState('')
  const [HasteInicial, setHasteInicial] = useState('')
  const [Flexobarra, setFlexobarra] = useState('')
  const [Radio, setRadio] = useState('')
  const [Parafuso, setParafuso] = useState('')
  const [DiametroFerramenta, setDiametroFerramenta] = useState('')
  const [CondicaoFerramenta, setCondicaoFerramenta] = useState('')
  const [EmpresaProprietaria, setEmpresaProprietaria] = useState('')
  const [idTodosCampos, setidTodosCampos] = useState('')
  const [etapa, setEtapa] = useState('2')
  const [descricao, setDescricao] = useState('')
  const [finalizarEtapa, setFinalizarEtapa] = useState(false)
  const [name, setName] = useState<any>('')
  const [image, setImage] = useState<any>('')
  let credencial = ''
  let nameImage = ''
  let Image: any
  const formData = new FormData()
  // function onSubmit(data: FormData) {
  //   data.idConfigTravessia = idConfigTravessia.replace('#/etapas/', '')
  //   data.banco = 'todos-campos'
  //   console.log(data)
  //   createNewFile(data)
  // }
  const [camposInterferencia, setCamposInterferencia] = useState(false)

  function handleCampos () {
    if (camposInterferencia) {
      setCamposInterferencia(false)
    } else {
      setCamposInterferencia(true)
    }
  }

  function onSubmitLevantamento () {
    // console.log(idEtapa)
    const data = {
      banco: 'todos-campos',
      idConfigTravessia: idConfigTravessia.replace('#/etapas/', '').split('/')[0],
      etapaId: idEtapa,
      PontoVerEntradaLat: latitudeEntrada,
      PontoVerEntradaLong: longitudeEntrada,
      PontoVerSaidaLat: latitudeSaida,
      PontoVerSaidaLong: longitudeSaida,
      TipoSolo: tipoSolo,
      DiametroPerf: diametroPerfuracao,
      TipoRede: tipoRede,
      TipoTub: tipoTubulacao,
      Responsavel: responsavel,
      Equipamentos: equipamentos,
      Documentos: documentos,
      EmpresaProp: empresa,
      ConfSondagemInterferencia: sondagemInterferencia,
      Sondagem: sondagem,
      DiametroInterferencia: diametroPerfuracao,
      CriacaoPlanoFuro: criacaoplanoFuro,
      Ferramentas: ferramentas,
      InformacoesEnvolvidas: infoEnvolvidas,
      Diametro: diametroPerfuracao,
      LocalRelDiretrizFuro: localDiretrizFuro,
      TipoInterferencia: tipoInterferencia,
      Profundidade: profundidade,
      ResponsavelTopografia: respTopografia,
      DataExecTopografia: '2022-01-01',
      nomePerfilAcesso: nomePerfilAcesso,
      dataExecucao: dataExecucao,
      responsavelExecucao: responsavelExecucao,
      horaExecucao: horaExecucao,
      croquiMapeamento: croquiMapeamento,
      equipamentoUtilizado: equipamentoUtilizado,
      materializacaoCampo: materializacaoCampo,
      quantidadeInterferencias: quantidadeInterferencias,
      paraleloEsquerda: paraleloEsquerda,
      paraleloDireita: paraleloDireita,
      perpendicular: perpendicular,
      profundidade: profundidade,
      diametroInterferencia: diametroInterferencia,
      tipoInterferencia: tipoInterferencia,
      largura: largura,
      comprimento: comprimento,
      profundidadeVala: profundidade,
      estacaReferencia: estacaReferencia,
      numeroHastes: numeroHastes,
      profundidadePlanejada: profundidadePlanejada,
      avancoPlanejado: avancoPlanejado,
      profundidadeExecutada: profundidadeExecutada,
      avancoExecutado: avancoExecutado,
      amarracao: amarracao,
      maquinaPerfuratriz: maquinaPerfuratriz,
      diametroAlargamento: diametroAlargamento,
      tempoHaste: tempoHaste,
      vazaoBomba: vazaoBomba,
      tipoRedeTubula: tipoRedeTubula,
      diametroRede: diametroRede,
      ferramentasUtilizadas: ferramentasUtilizadas,
      modeloAlargador: modeloAlargador,
      capacidadePortaFusilink: capacidadePortaFusilink,
      capacidadeSwivel: capacidadeSwivel,
      fluido: Fluido,
      receitaFluido: ReceitaFluido,
      portaSonda: PortaSonda,
      confirmacaoProcedimento: ConfirmacaoProcedimento,
      volumePrepardo: VolumePreparado,
      testeVicosidade: TesteVicosidade,
      hastes: Hastes,
      sonda: Sonda,
      paPerfuracao: paPerfuracao,
      pullingHead: PullingHead,
      localizador: Localizador,
      luva: Luva,
      hasteInicial: HasteInicial,
      flexoBarra: Flexobarra,
      radio: Radio,
      parafuso: Parafuso,
      diametroFerramenta: DiametroFerramenta,
      condicaoFerramenta: CondicaoFerramenta,
      // EmpresaProp: EmpresaProprietaria,
      empresaProprietaria: EmpresaProprietaria,
      finalizarEtapa: false,
      travessiaId: idConfigTravessia.replace('#/etapas/', '').split('/')[1],
      profundidadeEntrada: profundidadeEntrada,
      profundidadeSaida: profundidadeSaida,
      valaEntradaLatitude: valaEntradaLatitude,
      valaEntradaLongitude: valaEntradaLongitude,
      valaEntradaAltura: valaEntradaAltura,
      valaEntradaComprimento: valaEntradaComprimento,
      valaEntradaProfundidade: valaEntradaProfundidade,
      valaSaidaLatitude: valaSaidaLatitude,
      valaSaidaLongitude: valaSaidaLongitude,
      valaSaidaAltura: valaSaidaAltura,
      valaSaidaComprimento: valaSaidaComprimento,
      valaSaidaProfundidade: valaSaidaProfundidade,
      profundidadeMax: profundidadeMax,
      profundidadeMin: profundidadeMin,
      MaterialRedeTubula: MaterialRedeTubula,
    }

    // console.log(data)
    // if (isUpdate) {
    //   updateDados()
    //   setIsUpdate(false)
    // } else {
    createNewFile(data)
    // }
  }

  function onSubmitInterferenciasFisicasMagneticas () {
    // console.log(responsavel)
    const data = {
      idConfigTravessia: idConfigTravessia.replace('#/etapas/', ''),
      banco: 'interferenciasFisicasMagneticas',
      responsavel: responsavel,
      equipamentos: equipamentos,
      documentos: documentos,
      tipoRede: tipoRede,
      empresa: empresa,
      sondagemInterferencia: sondagemInterferencia,
      diametroInterferencia: diametroInterferencia,
    }

    // console.log(data)
    // if (isUpdate) {
    //   updateDados()
    //   setIsUpdate(false)
    // } else {
    //   createNewFile(data)
    // }
  }
  // function onSubmitAberturaVala() {
  //   console.log(responsavel)
  //   const data = {
  //     idConfigTravessia: idConfigTravessia.replace('#/etapas/', ''),
  //     banco: 'aberturaVala',
  //     responsavel: responsavel,
  //     ferramentas: ferramentas,
  //     latitudeEntrada: latitudeEntrada,
  //     longitudeSaida: longitudeSaida,
  //     longitudeEntrada: longitudeEntrada,
  //     latitudeSaida: latitudeSaida,
  //     equipamentos: equipamentos,
  //     documentos: documentos,
  //     empresa: empresa,
  //     sondagemInterferencia: sondagemInterferencia,
  //     sondagem: sondagem,
  //   }

  //   console.log(data)
  //   if (isUpdate) {
  //     updateDados()
  //     setIsUpdate(false)
  //   } else {
  //     createNewFile(data)
  //   }
  // }

  async function createNewFile (submit: any) {
    setLoading(true)
    // console.log('submit')
    // console.log(submit)
    // eslint-disable-next-line
    console.log(credencial)
    await api.post(submit.banco, {
      data: submit,
    }).then(async (response) => {
      // console.log(response)
      if (response.statusText === 'OK') {
        setidTodosCampos(response.data.id)
        toast.success('Cadastrada com sucesso!')
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
      // console.log(res)
      toast.error(res.response.data)
      setLoading(false)
    })
  }
  async function loadDados (url: string) {
    setLoading(true)
    // eslint-disable-next-line
    const responser = await api.get(url + `?filter%5BidConfigTravessia%5D=${idConfigTravessia.replace("#/etapas/", '').split('/')[0]}`,
    ).then((response) => {
      if (response.statusText === 'OK') {
        setDados(response.data.rows)
        setUrl(url)
        // console.log(dados)
        setLoading(false)
      }
    }).catch(res => {
      // console.log(res.response.data)
      toast.error(res.response.data)
      setLoading(false)
    })
    api.get(`interferencia?filter%5BetapaId%5D=${idEtapa}&filter%5BidTravessia%5D=${idConfigTravessia.replace('#/etapas/', '').split('/')[1]}`,
    ).then((response) => {
      if (response.statusText === 'OK') {
        console.log(response.data.rows)
        setinterferencias(response.data.rows)
      }
    }).catch((res) => {
      console.log(res)
      // toast.error(res.response.data);
      setLoading(false)
    })
    api.get(`pontos-verificacao?filter%5BetapaId%5D=${idEtapa}&filter%5BidTravessia%5D=${idConfigTravessia.replace('#/etapas/', '').split('/')[1]}`,
    ).then((response) => {
      if (response.statusText === 'OK') {
        console.log(response.data.rows)
        setPontosVerificacao(response.data.rows)
      }
    }).catch((res) => {
      console.log(res)
      // toast.error(res.response.data);
      setLoading(false)
    })
    api.get('ferramentaList',
    ).then((response) => {
      if (response.statusText === 'OK') {
        console.log(response.data.rows)
        setferramentasList(response.data.rows)
      }
    }).catch((res) => {
      console.log(res)
      // toast.error(res.response.data);
      setLoading(false)
    })
    setLoading(false)
  }
  async function deleteDados (id: string, tabela: string) {
    setLoading(true)
    // eslint-disable-next-line
    const responser = api.delete(tabela + id,
    ).then((response) => {
      if (response.statusText === 'OK') {
        loadDados('etapas')
        setLoading(false)
      }
    }).catch(res => {
      // console.log(res.response.data)
      toast.error(res.response.data)
      setLoading(false)
    })
  }
  function update (data: any) {
    // console.log('data')
    // console.log(data)
    // setDados(data)
    setId(data[0].id)
    // console.log(url)
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
    } else if (url === 'levantametoMapInteferencia') {
      setresponsavel(data[0].responsavel)
      setequipamentos(data[0].equipamentos)
      setdocumentos(data[0].documentos)
      setlatitudeSaida(data[0].latitudeSaida)
      settipoRede(data[0].tipoRede)
      setempresa(data[0].empresa)
      setsondagemInterferencia(data[0].sondagemInterferencia)
      setsondagem(data[0].sondagem)
      setcriacaoplanoFuro(data[0].criacaoplanoFuro)
    } else if (url === 'interferenciasFisicasMagneticas') {
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
    }
    // console.log(idDados)
  }
  async function updateDados () {
    setLoading(true)
    // console.log('idTodosCampos')
    // console.log(idTodosCampos)
    // console.log(soilTypesUp)
    const responser = api.put('todos-campos/' + idTodosCampos, {
      data: {
        idConfigTravessia: idConfigTravessia.replace('#/etapas/', '').split('/')[0],
        etapaId: idEtapa,
        PontoVerEntradaLat: latitudeEntrada,
        PontoVerEntradaLong: longitudeEntrada,
        PontoVerSaidaLat: latitudeSaida,
        PontoVerSaidaLong: longitudeSaida,
        TipoSolo: tipoSolo,
        DiametroPerf: diametroPerfuracao,
        TipoRede: tipoRede,
        TipoTub: tipoTubulacao,
        Responsavel: responsavel,
        Equipamentos: equipamentos,
        Documentos: documentos,
        EmpresaProp: empresa,
        ConfSondagemInterferencia: sondagemInterferencia,
        Sondagem: sondagem,
        DiametroInterferencia: diametroPerfuracao,
        CriacaoPlanoFuro: criacaoplanoFuro,
        Ferramentas: ferramentas,
        InformacoesEnvolvidas: infoEnvolvidas,
        Diametro: diametroPerfuracao,
        LocalRelDiretrizFuro: localDiretrizFuro,
        TipoInterferencia: tipoInterferencia,
        Profundidade: profundidade,
        ResponsavelTopografia: respTopografia,
        DataExecTopografia: '2022-01-01',
        nomePerfilAcesso: nomePerfilAcesso,
        dataExecucao: dataExecucao,
        responsavelExecucao: responsavelExecucao,
        horaExecucao: horaExecucao,
        croquiMapeamento: croquiMapeamento,
        equipamentoUtilizado: equipamentoUtilizado,
        materializacaoCampo: materializacaoCampo,
        quantidadeInterferencias: quantidadeInterferencias,
        paraleloEsquerda: paraleloEsquerda,
        paraleloDireita: paraleloDireita,
        perpendicular: perpendicular,
        profundidade: profundidade,
        diametroInterferencia: diametroInterferencia,
        tipoInterferencia: tipoInterferencia,
        largura: largura,
        comprimento: comprimento,
        profundidadeVala: profundidade,
        estacaReferencia: estacaReferencia,
        numeroHastes: numeroHastes,
        profundidadePlanejada: profundidadePlanejada,
        avancoPlanejado: avancoPlanejado,
        profundidadeExecutada: profundidadeExecutada,
        avancoExecutado: avancoExecutado,
        amarracao: amarracao,
        maquinaPerfuratriz: maquinaPerfuratriz,
        diametroAlargamento: diametroAlargamento,
        tempoHaste: tempoHaste,
        vazaoBomba: vazaoBomba,
        tipoRedeTubula: tipoRedeTubula,
        diametroRede: diametroRede,
        ferramentasUtilizadas: ferramentasUtilizadas,
        modeloAlargador: modeloAlargador,
        capacidadePortaFusilink: capacidadePortaFusilink,
        capacidadeSwivel: capacidadeSwivel,
        fluido: Fluido,
        receitaFluido: ReceitaFluido,
        portaSonda: PortaSonda,
        confirmacaoProcedimento: ConfirmacaoProcedimento,
        volumePrepardo: VolumePreparado,
        testeVicosidade: TesteVicosidade,
        hastes: Hastes,
        sonda: Sonda,
        paPerfuracao: paPerfuracao,
        pullingHead: PullingHead,
        localizador: Localizador,
        luva: Luva,
        hasteInicial: HasteInicial,
        flexoBarra: Flexobarra,
        radio: Radio,
        parafuso: Parafuso,
        diametroFerramenta: DiametroFerramenta,
        condicaoFerramenta: CondicaoFerramenta,
        // EmpresaProp: EmpresaProprietaria,
        empresaProprietaria: EmpresaProprietaria,
        travessiaId: idConfigTravessia.replace('#/etapas/', '').split('/')[1],
        finalizarEtapa: true,
        profundidadeEntrada: profundidadeEntrada,
        profundidadeSaida: profundidadeSaida,
        valaEntradaLatitude: valaEntradaLatitude,
        valaEntradaLongitude: valaEntradaLongitude,
        valaEntradaAltura: valaEntradaAltura,
        valaEntradaComprimento: valaEntradaComprimento,
        valaEntradaProfundidade: valaEntradaProfundidade,
        valaSaidaLatitude: valaSaidaLatitude,
        valaSaidaLongitude: valaSaidaLongitude,
        valaSaidaAltura: valaSaidaAltura,
        valaSaidaComprimento: valaSaidaComprimento,
        valaSaidaProfundidade: valaSaidaProfundidade,
        profundidadeMax: profundidadeMax,
        profundidadeMin: profundidadeMin,
        MaterialRedeTubula: MaterialRedeTubula,
      },
    },
    ).then((response) => {
      if (response.statusText === 'OK') {
        // loadDados('planejamentoPerfuracao')
        // setisOpenUpdatePlanejamentoPerfuração(false)
        setFinalizarEtapa(true)
        setLoading(false)
        toast.success('Etapa finalizada!')
      }
    }).catch(res => {
      // console.log(res.response.data)
      toast.error(res.response.data)
      setLoading(false)
    })
    setLoading(false)
  }
  useEffect(() => {
    // console.log(soilTypesUp)
    idConfigTravessia = window.location.hash.replace(ip + '/romtec/#/etapas/', '')
    // console.log('useEffect')
    // console.log(idConfigTravessia)
    // setLoading(true)
    loadDados('etapas')
  }, [])

  function openModal (data: any) {
    // console.log(data)
    setIdEtapa(data.etapaId)
    api.get(`todos-campos?filter%5BetapaId%5D=${data.id}&filter%5BidTravessia%5D=${idConfigTravessia.replace('#/etapas/', '').split('/')[1]}`,
    ).then((response) => {
      // console.log(response.data.rows)
      if (response.statusText === 'OK') {
        if (response.data.count > 0) {
          // console.log(response.data.rows[0].id)
          setIdEtapa(data.etapaId)
          setidTodosCampos(response.data.rows[0].id)
          setlatitudeEntrada(response.data.rows[0].PontoVerEntradaLat)
          setlongitudeEntrada(response.data.rows[0].PontoVerEntradaLong)
          setlatitudeSaida(response.data.rows[0].PontoVerSaidaLat)
          setlongitudeSaida(response.data.rows[0].PontoVerSaidaLong)
          setTipoSolo(response.data.rows[0].TipoSolo)
          setdiametroPerfuracao(response.data.rows[0].DiametroPerf)
          settipoRede(response.data.rows[0].TipoRede)
          settipoTubulacao(response.data.rows[0].TipoTub)
          setresponsavel(response.data.rows[0].Responsavel)
          setequipamentos(response.data.rows[0].Equipamentos)
          setsondagemInterferencia(response.data.rows[0].ConfSondagemInterferencia)
          setdocumentos(response.data.rows[0].Documentos)
          setempresa(response.data.rows[0].EmpresaProp)
          setsondagem(response.data.rows[0].Sondagem)
          setDiametroInterferencia(response.data.rows[0].DiametroInterferencia)
          setcriacaoplanoFuro(response.data.rows[0].CriacaoPlanoFuro)
          setferramentas(response.data.rows[0].Ferramentas)
          setInfoEnvolvidas(response.data.rows[0].InformacoesEnvolvidas)
          setLocalDiretrizFuro(response.data.rows[0].LocalRelDiretrizFuro)
          setTipoInterferencia(response.data.rows[0].TipoInterferencia)
          setprofundidade(response.data.rows[0].Profundidade)
          setRespTopografia(response.data.rows[0].ResponsavelTopografia)
          setDataTopografia(response.data.rows[0].DataExecTopografia)

          setnomePerfilAcesso(response.data.rows[0].nomePerfilAcesso)
          setdataExecucao(response.data.rows[0].dataExecucao)
          setresponsavelExecucao(response.data.rows[0].responsavelExecucao)
          sethoraExecucao(response.data.rows[0].horaExecucao)
          setcroquiMapeamento(response.data.rows[0].croquiMapeamento)
          setequipamentoUtilizado(response.data.rows[0].equipamentoUtilizado)
          setmaterializacaoCampo(response.data.rows[0].materializacaoCampo)
          setquantidadeInterferencias(response.data.rows[0].quantidadeInterferencias)
          setparaleloEsquerda(response.data.rows[0].paraleloEsquerda)
          setparaleloDireita(response.data.rows[0].paraleloDireita)
          setperpendicular(response.data.rows[0].perpendicular)
          setlargura(response.data.rows[0].largura)
          setcomprimento(response.data.rows[0].comprimento)
          setprofundidadeVala(response.data.rows[0].profundidadeVala)
          setestacaReferencia(response.data.rows[0].estacaReferencia)
          setnumeroHastes(response.data.rows[0].numeroHastes)
          setprofundidadePlanejada(response.data.rows[0].profundidadePlanejada)
          setavancoPlanejado(response.data.rows[0].avancoPlanejado)
          setprofundidadeExecutada(response.data.rows[0].profundidadeExecutada)
          setavancoExecutado(response.data.rows[0].avancoExecutado)
          setamarracao(response.data.rows[0].amarracao)
          setmaquinaPerfuratriz(response.data.rows[0].maquinaPerfuratriz)
          setdiametroAlargamento(response.data.rows[0].diametroAlargamento)
          settempoHaste(response.data.rows[0].tempoHaste)
          setvazaoBomba(response.data.rows[0].vazaoBomba)
          settipoRedeTubula(response.data.rows[0].tipoRedeTubula)
          setdiametroRede(response.data.rows[0].diametroRede)
          setferramentasUtilizadas(response.data.rows[0].ferramentasUtilizadas)
          setmodeloAlargador(response.data.rows[0].modeloAlargador)
          setcapacidadePortaFusilink(response.data.rows[0].capacidadePortaFusilink)
          setcapacidadeSwivel(response.data.rows[0].capacidadeSwivel)
          setFluido(response.data.rows[0].fluido)
          setcampoReceitaFluido(response.data.rows[0].receitaFluido)

          setPortaSonda(response.data.rows[0].portaSonda)
          setVolumePreparado(response.data.rows[0].volumePrepardo)
          setTesteVicosidade(response.data.rows[0].testeVicosidade)
          setConfirmacaoProcedimento(response.data.rows[0].confirmacaoProcedimento)
          setHastes(response.data.rows[0].hastes)
          setSonda(response.data.rows[0].sonda)
          setpaPerfuracao(response.data.rows[0].paPerfuracao)
          setPullingHead(response.data.rows[0].pullingHead)
          setLocalizador(response.data.rows[0].localizador)
          setLuva(response.data.rows[0].luva)
          setHasteInicial(response.data.rows[0].hasteInicial)
          setFlexobarra(response.data.rows[0].flexoBarra)
          setRadio(response.data.rows[0].radio)
          setParafuso(response.data.rows[0].parafuso)
          setCondicaoFerramenta(response.data.rows[0].condicaoFerramenta)
          setEmpresaProprietaria(response.data.rows[0].empresaProp)
          setEmpresaProprietaria(response.data.rows[0].empresaProprietaria)
          setDiametroFerramenta(response.data.rows[0].diametroFerramenta)
          setFinalizarEtapa(response.data.rows[0].finalizarEtapa)
          setprofundidadeEntrada(response.data.rows[0].profundidadeEntrada)
          setprofundidadeSaida(response.data.rows[0].profundidadeSaida)
          setvalaEntradaLatitude(response.data.rows[0].valaEntradaLatitude)
          setvalaEntradaLongitude(response.data.rows[0].valaEntradaLongitude)
          setvalaEntradaAltura(response.data.rows[0].valaEntradaAltura)
          setvalaEntradaComprimento(response.data.rows[0].valaEntradaComprimento)
          setvalaEntradaProfundidade(response.data.rows[0].valaEntradaProfundidade)
          setvalaSaidaLatitude(response.data.rows[0].valaSaidaLatitude)
          setvalaSaidaLongitude(response.data.rows[0].valaSaidaLongitude)
          setvalaSaidaAltura(response.data.rows[0].valaSaidaAltura)
          setvalaSaidaComprimento(response.data.rows[0].valaSaidaComprimento)
          setvalaSaidaProfundidade(response.data.rows[0].valaSaidaProfundidade)
          setprofundidadeMax(response.data.rows[0].profundidadeMax)
          setprofundidadeMin(response.data.rows[0].profundidadeMin)
          setMaterialRedeTubula(response.data.rows[0].MaterialRedeTubula)
        } else {
          setFinalizarEtapa(false)
          setidTodosCampos('')
        }
        setLoading(false)
      }
      api.get(`interferencia?filter%5BidTravessia%5D=${idConfigTravessia.replace('#/etapas/', '').split('/')[1]}`,
      ).then((response) => {
        if (response.statusText === 'OK') {
          setinterferencias(response.data.rows)
        }
      }).catch((res) => {
        console.log(res)
        // toast.error(res.response.data);
        setLoading(false)
      })
    }).catch(res => {
      /// /console.log(res.response.data)
      toast.error(res.response.data)
      setLoading(false)
    })
    setVariavelTitulo(data.tipoEtapa)
    setIdEtapa(data.id)
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
    setcampotipoInterferencia(data.tipoInterferencia)
    setcampoProfundidade(data.campoProfundidade)
    setcampoResponselTopografia(data.campoResponselTopografia)
    setcampoDataTopografia(data.campoDataTopografia)

    setcamponomePerfilAcesso(data.nomePerfilAcesso)
    setcampodataExecucao(data.dataExecucao)
    setcamporesponsavelExecucao(data.responsavelExecucao)
    setcampohoraExecucao(data.horaExecucao)
    setcampocroquiMapeamento(data.croquiMapeamento)
    setcampoequipamentoUtilizado(data.equipamentoUtilizado)
    setcampomaterializacaoCampo(data.materializacaoCampo)
    setcampoquantidadeInterferencias(data.quantidadeInterferencias)
    setcampoparaleloEsquerda(data.paraleloEsquerda)
    setcampoparaleloDireita(data.paraleloDireita)
    setcampoperpendicular(data.perpendicular)
    setcampolargura(data.largura)
    setcampocomprimento(data.comprimento)
    setcampoprofundidadeVala(data.profundidadeVala)
    setcampoestacaReferencia(data.estacaReferencia)
    setcamponumeroHastes(data.numeroHastes)
    setcampoprofundidadePlanejada(data.profundidadePlanejada)
    setcampoavancoPlanejado(data.avancoPlanejado)
    setcampoprofundidadeExecutada(data.profundidadeExecutada)
    setcampoavancoExecutado(data.avancoExecutado)
    setcampoamarracao(data.amarracao)
    setcampomaquinaPerfuratriz(data.maquinaPerfuratriz)
    setcampodiametroAlargamento(data.diametroAlargamento)
    setcampotempoHaste(data.tempoHaste)
    setcampovazaoBomba(data.vazaoBomba)
    setcampotipoRedeTubula(data.tipoRedeTubula)
    setcampodiametroRede(data.diametroRede)
    setcampoferramentasUtilizadas(data.ferramentasUtilizadas)
    setcampomodeloAlargador(data.modeloAlargador)
    setcampocapacidadePortaFusilink(data.capacidadePortaFusilink)
    setcampocapacidadeSwivel(data.capacidadeSwivel)
    setcampoFluido(data.fluido)
    setcampoReceitaFluido(data.receitaFluido)
    setcampoPortaSonda(data.portaSonda)
    setcampoVolumePreparado(data.volumePrepardo)
    setcampoTesteVicosidade(data.testeVicosidade)
    setcampoConfirmacaoProcedimento(data.confirmacaoProcedimento)
    setcampoHastes(data.hastes)
    setcampoSonda(data.sonda)
    setcampopaPerfuracao(data.paPerfuracao)
    setcampoPullingHead(data.pullingHead)
    setcampoLocalizador(data.localizador)
    setcampoLuva(data.luva)
    setcampoHasteInicial(data.hasteInicial)
    setcampoFlexobarra(data.flexoBarra)
    setcampoRadio(data.radio)
    setcampoParafuso(data.parafuso)
    setcampoCondicaoFerramenta(data.condicaoFerramenta)
    setcampoEmpresaProprietaria(data.empresaProp)
    setcampoEmpresaProprietaria(data.empresaProprietaria)
    setcampoDiametroFerramenta(data.diametroFerramenta)
    setcampoprofundidadeEntrada(data.profundidadeEntrada)
    setcampoprofundidadeSaida(data.profundidadeSaida)
    setcampovalaEntradaLatitude(data.valaEntradaLatitude)
    setcampovalaEntradaLongitude(data.valaEntradaLongitude)
    setcampovalaEntradaAltura(data.valaEntradaAltura)
    setcampovalaEntradaComprimento(data.valaEntradaComprimento)
    setcampovalaEntradaProfundidade(data.valaEntradaProfundidade)
    setcampovalaSaidaLatitude(data.valaSaidaLatitude)
    setcampovalaSaidaLongitude(data.valaSaidaLongitude)
    setcampovalaSaidaAltura(data.valaSaidaAltura)
    setcampovalaSaidaComprimento(data.valaSaidaComprimento)
    setcampovalaSaidaProfundidade(data.valaSaidaProfundidade)
    setcampoprofundidadeMax(data.profundidadeMax)
    setcampoprofundidadeMin(data.profundidadeMin)
    setcampoMaterialRedeTubula(data.MaterialRedeTubula)
    setcampoPontosVerificacao(data.campoPontosVerificacao)
    setisOpenUpdatePlanejamentoPerfuração(true)
  }
  function afterOpenModal () {
    // references are now sync'd and can be accessed.
  }
  function closeModal () {
    setIsOpenPlanejamento(false)
  }
  async function makeRequisition (e: any) {
    e.preventDefault()
    e.target.reset()

    toast.info('Carregando...')
    const body = {
      data: {
        imagemUrl: campoDocumento,
        status: 'ativo',
        nome: name,
      },
    }
  }
  const uploadImage = async (imagemNova: string | Blob) => {
    // console.log("upload")
    formData.append('file', imagemNova)

    // console.log(...formData)

    const headers = {
      headers: {
        // 'Content-Type': 'application/json'
        'Content-Type': 'multipart/form-data',

      },
    }
    console.log(nameImage)
    await api.get('file/credentials', {
      params: {
        filename: nameImage,
        storageId: 'execucaoTravessia',
      },
    })
      .then((response) => {
        console.log(response)
        if (response.status == 200) {
          const pathHelper = response.data.mensagem
          credencial = response.data.uploadCredentials.url
          setdocumentos(response.data.downloadUrl)
          console.log(credencial)
          console.log(imagemNova)
          axios.post(credencial, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }).then((response) => {
            console.log(response)
            if (response.statusText === 'OK') {
              // toast.success('Cadastrado realizado com sucesso!')
            }
          }).catch(res => {
            // console.log(res)
            toast.error(res.response)
            setLoading(false)
          })
          toast.success('Arquivo Válido!')
        } else {
          toast.info('Arquivo inválid0, ou problemas com o servidor :(')
        }
      }).catch((err) => {
        if (err.response) {
          // console.log(err)
          toast.error('Erro: Tente mais tarde :(')
        } else {
          // setStatus({
          //   type: 'error',
          //   mensagem: "Erro: Tente mais tarde :("
          // });
        }
        toast.error('Erro: Tente mais tarde :(')
      })
  }
  function salvarEtapa () {
    const campoTipoSolo = false
    const campoDiametroPerfuracao = false
    let campoTipoRede = false
    const campoTipoTubulacao = false
    // Levantamento e Mapeamento de Interferências
    let nomePerfilAcesso = false
    let croquiMapeamento = false
    let equipamentoUtilizado = false
    let tipoInterferencia = false
    // lanejamento da Travessia
    let campoEntradaLatitude = false
    let campoEntradaLongitude = false
    let profundidadeEntrada = false
    let campoSaidaLatitude = false
    let campoSaidaLongitude = false
    let profundidadeSaida = false
    // Abertura de Valas de Entrada e Saída
    let responsavelExecucao = false
    let dataExecucao = false
    let valaEntradaLatitude = false
    let valaEntradaLongitude = false
    let valaEntradaAltura = false
    let valaEntradaComprimento = false
    let valaEntradaProfundidade = false
    let valaSaidaLatitude = false
    let valaSaidaLongitude = false
    let valaSaidaAltura = false
    let valaSaidaComprimento = false
    let valaSaidaProfundidade = false
    let fluido = false
    let campoResponsel = false
    let horaExecucao = false
    const profundidadeMax = false
    const profundidadeMin = false
    let campoEquipamento = false
    let vazaoBomba = false
    let capacidadeSwivel = false
    let diametroFerramenta = false
    const tipoRedeTubula = false
    let campoDiametro = false
    let MaterialRedeTubula = false
    let tempoHaste = false
    const capacidadePortaFusilink = false
    const tipoRede = false
    let maquinaPerfuratriz = false
    let campoFerramentas = false
    let campoPontosVerificacao = false
    idConfigTravessia = window.location.hash.replace(ip + '/romtec/#/etapas/', '')
    let novaEtapa = ''
    // if (etapa == '1') {
    //   novaEtapa = 'Levantamento e Mapeamento de Interferências'
    //   nomePerfilAcesso = true
    //   croquiMapeamento = true
    //   equipamentoUtilizado = true
    //   tipoInterferencia = true
    // } else
    if (etapa == '2') {
      novaEtapa = 'Planejamento da Travessia'
      nomePerfilAcesso = true
      croquiMapeamento = true
      equipamentoUtilizado = true
      tipoInterferencia = true
      campoTipoRede = true
      MaterialRedeTubula = true
      maquinaPerfuratriz = true
      campoEntradaLatitude = true
      campoEntradaLongitude = true
      profundidadeEntrada = true
      campoSaidaLatitude = true
      campoSaidaLongitude = true
      profundidadeSaida = true
      campoDiametro = true
    } else if (etapa == '3') {
      novaEtapa = 'Sondagem das Interferências'
      nomePerfilAcesso = true
      tipoInterferencia = true
    } else if (etapa == '4') {
      novaEtapa = 'Abertura de Valas de Entrada e Saída'
      nomePerfilAcesso = true
      responsavelExecucao = true
      dataExecucao = true
      valaEntradaLatitude = true
      valaEntradaLongitude = true
      valaEntradaAltura = true
      valaEntradaComprimento = true
      valaEntradaProfundidade = true
      valaSaidaLatitude = true
      valaSaidaLongitude = true
      valaSaidaAltura = true
      valaSaidaComprimento = true
      valaSaidaProfundidade = true
    } else if (etapa == '5') {
      novaEtapa = 'Preparação de Fluído'
      nomePerfilAcesso = true
      fluido = true
      campoResponsel = true
      dataExecucao = true
      horaExecucao = true
    } else if (etapa == '6') {
      novaEtapa = 'Execução da Travessia - Furo Piloto'
      nomePerfilAcesso = true
      // profundidadeMax = true
      // profundidadeMin = true
      campoFerramentas = true
      vazaoBomba = true
      tempoHaste = true
      campoPontosVerificacao = true
    } else if (etapa == '7') {
      novaEtapa = 'Alargamento'
      nomePerfilAcesso = true
      campoEquipamento = true
      vazaoBomba = true
      tempoHaste = true
      capacidadeSwivel = true
      diametroFerramenta = true
      campoFerramentas = true
      campoPontosVerificacao = true
    } else if (etapa == '8') {
      novaEtapa = 'Limpeza'
      nomePerfilAcesso = true
      campoFerramentas = true
      vazaoBomba = true
      capacidadeSwivel = true
      diametroFerramenta = true
      tempoHaste = true
    } else if (etapa == '9') {
      novaEtapa = 'Puxamento de Rede'
      nomePerfilAcesso = true
      // tipoRedeTubula = true
      // campoDiametro = true
      // MaterialRedeTubula = true
      campoEquipamento = true
      tempoHaste = true
      capacidadeSwivel = true
      // capacidadePortaFusilink = true
    }

    const data = {
      novaEtapa: descricao,
      tipoEtapa: novaEtapa,
      idConfigTravessia: idConfigTravessia.replace('#/etapas/', '').split('/')[1],
      numeroEtapa: dados.length + 1,
      nomePerfilAcesso: nomePerfilAcesso,
      croquiMapeamento: croquiMapeamento,
      equipamentoUtilizado: equipamentoUtilizado,
      tipoInterferencia: tipoInterferencia,
      campoEntradaLatitude: campoEntradaLatitude,
      campoEntradaLongitude: campoEntradaLongitude,
      profundidadeEntrada: profundidadeEntrada,
      campoSaidaLatitude: campoSaidaLatitude,
      campoSaidaLongitude: campoSaidaLongitude,
      profundidadeSaida: profundidadeSaida,
      responsavelExecucao: responsavelExecucao,
      dataExecucao: dataExecucao,
      valaEntradaLatitude: valaEntradaLatitude,
      valaEntradaLongitude: valaEntradaLongitude,
      valaEntradaAltura: valaEntradaAltura,
      valaEntradaComprimento: valaEntradaComprimento,
      valaEntradaProfundidade: valaEntradaProfundidade,
      valaSaidaLatitude: valaSaidaLatitude,
      valaSaidaLongitude: valaSaidaLongitude,
      valaSaidaAltura: valaSaidaAltura,
      valaSaidaComprimento: valaSaidaComprimento,
      valaSaidaProfundidade: valaSaidaProfundidade,
      fluido: fluido,
      campoResponsel: campoResponsel,
      horaExecucao: horaExecucao,
      profundidadeMax: profundidadeMax,
      profundidadeMin: profundidadeMin,
      campoEquipamento: campoEquipamento,
      vazaoBomba: vazaoBomba,
      capacidadeSwivel: capacidadeSwivel,
      diametroFerramenta: diametroFerramenta,
      tipoRedeTubula: tipoRedeTubula,
      campoDiametro: campoDiametro,
      MaterialRedeTubula: MaterialRedeTubula,
      tempoHaste: tempoHaste,
      capacidadePortaFusilink: capacidadePortaFusilink,
      tipoRede: tipoRede,
      maquinaPerfuratriz: maquinaPerfuratriz,
      campoFerramentas: campoFerramentas,
      campoTipoRede: campoTipoRede,
      campoPontosVerificacao: campoPontosVerificacao,
    }

    api.post('etapas', {
      data: data,
    })
      .then((response) => {
        console.log(response)
        if (response.statusText === 'OK') {
          toast.success('Cadastrada com sucesso!')
          setLoading(false)
          setIsOpenPhaseSelect(false)
          reset()
          loadDados('etapas')
        } else if (response.statusText === 'Forbidden') {
          toast.error('Ops, Não tem permisão!')
          setLoading(false)
        } else {
          toast.error('Ops, Dados Incorretos!')
          setLoading(false)
        }
      })
      .catch((res) => {
        console.log(res)
        // toast.error(res.response.data);
        setLoading(false)
      })
    console.log(data)
    console.log(etapa)
  }
  function salvarInterferencia (tabela:string) {
    const data = {
      tipo: variavelTitulo,
      latitude: latitude,
      longitude: longitude,
      diametro: diametro,
      profundidade: profundidade,
      tipoRede: tipoRede,
      tipoInterferencia: tipoInterferencia,
      localizacao: localizacao,
      angulacao: angulacao,
      idTravessia: idConfigTravessia.replace('#/etapas/', '').split('/')[1],
      idTodosCampos: idTodosCampos,
      idEtapa: idEtapa,
      ordem: localizacao,
      status: 'Execução',
      nome: nomeFerramenta,
      descricao: descricaoFerramenta,
      diametroLargura: diametroLarguraFerramenta,
    }
    api.post(tabela, {
      data: data,
    })
      .then((response) => {
        console.log(response)
        if (response.statusText === 'OK') {
          toast.success('Cadastrada com sucesso!')
          setLoading(false)
          setIsOpenInterferencia(false)
          setIsOpenFerramenta(false)
          reset()
          loadDados('etapas')
        } else if (response.statusText === 'Forbidden') {
          toast.error('Ops, Não tem permisão!')
          setLoading(false)
        } else {
          toast.error('Ops, Dados Incorretos!')
          setLoading(false)
        }
      })
      .catch((res) => {
        console.log(res)
        // toast.error(res.response.data);
        setLoading(false)
      })
  }
  function salvarPontosVerificacao () {
    const data = {
      latitude: latitude,
      longitude: longitude,
      diametro: diametro,
      profundidade: profundidade,
      ordem: localizacao,
      angulacao: angulacao,
      status: 'Execução',
      idTravessia: idConfigTravessia.replace('#/etapas/', '').split('/')[1],
      idTodosCampos: idTodosCampos,
      idEtapa: idEtapa,
    }
    api.post('pontos-verificacao', {
      data: data,
    })
      .then((response) => {
        console.log(response)
        if (response.statusText === 'OK') {
          toast.success('Cadastrada com sucesso!')
          setLoading(false)
          setIsOpenInterferencia(false)
          reset()
          loadDados('etapas')
        } else if (response.statusText === 'Forbidden') {
          toast.error('Ops, Não tem permisão!')
          setLoading(false)
        } else {
          toast.error('Ops, Dados Incorretos!')
          setLoading(false)
        }
      })
      .catch((res) => {
        console.log(res)
        // toast.error(res.response.data);
        setLoading(false)
      })
  }
  function editarInterferencia (tabela:string) {
    const data = {
      tipo: variavelTitulo,
      latitude: latitude,
      longitude: longitude,
      diametro: diametro,
      profundidade: profundidade,
      tipoRede: tipoRede,
      tipoInterferencia: tipoInterferencia,
      localizacao: localizacao,
      angulacao: angulacao,
      idTravessia: idConfigTravessia.replace('#/etapas/', '').split('/')[1],
      idTodosCampos: idTodosCampos,
      idEtapa: idEtapa,
      status: status,
    }
    api.put(tabela + interferenciaId, {
      data: data,
    })
      .then((response) => {
        console.log(response)
        if (response.statusText === 'OK') {
          toast.success('Editado com sucesso!')
          setLoading(false)
          setIsOpenInterferenciaEdit(false)
          setIsOpenVerificacaoEdit(false)
          reset()
          loadDados('etapas')
        } else if (response.statusText === 'Forbidden') {
          toast.error('Ops, Não tem permisão!')
          setLoading(false)
        } else {
          toast.error('Ops, Dados Incorretos!')
          setLoading(false)
        }
      })
      .catch((res) => {
        console.log(res)
        // toast.error(res.response.data);
        setLoading(false)
      })
  }
  return (
    <>
      <Sidebar />
      <Navbar />
      <S.ContainerConfirmation>
        <h2>Selecione uma etapa</h2>
        <Modal
          className='phaes-modal'
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
            },
          }}
          isOpen={modalIsOpenPlanejamento}
          onAfterOpen={() => afterOpenModal}
          onRequestClose={() => closeModal}
        >
          <button style={{ position: 'absolute', top: '10px', right: '10px', background: 'transparent', border: 0 }} onClick={closeModal}><FiX color='white' /></button>

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
          isOpen={modalIsOpenPlanejamento}
          onAfterOpen={() => afterOpenModal}
          onRequestClose={() => closeModal}
        >
          <button style={{ position: 'absolute', top: '10px', right: '10px', background: 'transparent', border: 0 }} onClick={closeModal}><FiX color='white' /></button>

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
          {dados.length > 0
            ? dados.map(data =>
              <SwiperSlide>
                <div onClick={() => openModal(data)}>
                  <FiCheck />
                  <h2>{data.numeroEtapa}</h2>
                  {/* <h2>{data.tipoEtapa}</h2> */}
                  <h1>{data.novaEtapa}</h1>
                </div>
              </SwiperSlide>
              ,
            )
            : <p>🤔 Nenhuma Etapa cadastrada!</p>}
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
          <SwiperSlide>
            <button onClick={() => openModalPhasesSelect()}>
              <FiPlus size={26} />
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
          isOpen={isOpenUpdatePlanejamentoPerfuração}
          onAfterOpen={() => afterOpenModal}
          onRequestClose={() => closeModal}
        >
          {/* <h2>Planejamento de perfuração</h2> */}
          <h2>{variavelTitulo}</h2>
          {/* <button onClick={closeModal}>close</button> */}

          <S.Div>
            <S.GridForm>
              {camponomePerfilAcesso
                ? <div>
                  <label htmlFor=''>Nome do usuario do perfil de acesso</label>
                  <input
                    type='text' placeholder='nome'
                    value={nomePerfilAcesso}
                    onChange={(text) => setnomePerfilAcesso(text.target.value)}
                  />
                </div>
                : false}
              {campodataExecucao
                ? <div>
                  <label htmlFor=''>Data execução</label>
                  <input
                    type='text' placeholder='00/00/0000'
                    value={dataExecucao}
                    onChange={(text) => setdataExecucao(text.target.value)}
                  />
                </div>
                : false}
              {camporesponsavelExecucao
                ? <div>
                  <label htmlFor=''>Responsavel pela execução</label>
                  <input
                    type='text' placeholder='nome'
                    value={responsavelExecucao}
                    onChange={(text) => setresponsavelExecucao(text.target.value)}
                  />
                </div>
                : false}
              {campohoraExecucao
                ? <div>
                  <label htmlFor=''>Hora de execução</label>
                  <input
                    type='text' placeholder='00:00'
                    value={horaExecucao}
                    onChange={(text) => sethoraExecucao(text.target.value)}
                  />
                </div>
                : false}
              {campoEntradaLatitude
                ? <div>
                  <label htmlFor=''>Ponto de verificação de entrada (lat)</label>
                  <input
                    type='text' placeholder='Latitude'
                    value={latitudeEntrada}
                    onChange={(text) => setlatitudeEntrada(text.target.value)}
                  />
                </div>
                : false}

              {campoEntradaLongitude
                ? <div>
                  <label htmlFor=''>Ponto de verificação de entrada (long)</label>
                  <input
                    type='text' placeholder='Longitude'
                    value={longitudeEntrada}
                    onChange={(text) => setlongitudeEntrada(text.target.value)}
                  />
                </div>
                : false}
              {campoprofundidadeEntrada
                ? <div>
                  <label htmlFor=''>Profundidade da travessia</label>
                  <input
                    type='text' placeholder='Profundidade'
                    value={profundidadeEntrada}
                    onChange={(text) => setprofundidadeEntrada(text.target.value)}
                  />
                </div>
                : false}
              {campoSaidaLatitude
                ? <div>
                  <label htmlFor=''>Ponto de verificação de saída (lat)</label>
                  <input
                    type='text' placeholder='Latitude'
                    value={latitudeSaida}
                    onChange={(text) => setlatitudeSaida(text.target.value)}
                  />
                </div>
                : false}

              {campoSaidaLongitude
                ? <div>
                  <label htmlFor=''>Ponto de verificação de saída (long)</label>
                  <input
                    type='text' placeholder='Longitude'
                    value={longitudeSaida}
                    onChange={(text) => setlongitudeSaida(text.target.value)}
                  />
                </div>
                : false}
              {campoprofundidadeSaida
                ? <div>
                  <label htmlFor=''>Tolerância da profundidade</label>
                  <input
                    type='text' placeholder='Profundidade'
                    value={profundidadeSaida}
                    onChange={(text) => setprofundidadeSaida(text.target.value)}
                  />
                </div>
                : false}
              {campoTipoSolo
                ? <div>
                  <label htmlFor=''>Tipos de solo</label>
                  <input
                    type='text' placeholder='Barro'
                    value={tipoSolo}
                    onChange={(text) => setTipoSolo(text.target.value)}
                  />
                </div>
                : false}

              {campoDiametroPerfuracao
                ? <div>
                  <label htmlFor=''>Diâmetro de perfuração</label>
                  <input
                    type='text' placeholder='20 metros'
                    value={diametroPerfuracao}
                    onChange={(text) => setdiametroPerfuracao(text.target.value)}
                  />
                </div>
                : false}

              {campoTipoRede
                ? <div>
                  <label htmlFor=''>Tipo de Rede</label>
                  <input
                    type='text' placeholder='Fibra óptica'
                    value={tipoRede}
                    onChange={(text) => settipoRede(text.target.value)}
                  />
                </div>
                : false}

              {campoTipoTubulacao
                ? <div>
                  <label htmlFor=''>Tipo de tubulação</label>
                  <input
                    type='text' placeholder='Fibra óptica'
                    value={tipoTubulacao}
                    onChange={(text) => settipoTubulacao(text.target.value)}
                  />
                </div>
                : false}

              {campoResponsel
                ? <div>
                  <label htmlFor=''>Responsável</label>
                  <input
                    type='text'
                    value={responsavel}
                    onChange={(text) => setresponsavel(text.target.value)}
                  />
                </div>
                : false}

              {campoEquipamento
                ? <div>
                  <label htmlFor=''>Equipamentos</label>
                  <input
                    type='text'
                    value={equipamentos}
                    onChange={(text) => setequipamentos(text.target.value)}
                  />
                </div>
                : false}

              {campoDocumento
                ? <div>
                  <label htmlFor=''>Documentos</label>
                  <form
                    className='file'
                    encType='multipart/form-data'

                    onSubmit={makeRequisition}
                  >
                    <h2>Faça upload</h2>

                    <input
                      type='file'
                      name='image'
                      onChange={e => {
                        // console.log(e)
                        // @ts-ignore
                        nameImage = e.target.files[0].name
                        // @ts-ignore
                        Image = e.target.files[0]
                        // @ts-ignore
                        console.log(e.target.files[0].name)
                        // @ts-ignore
                        setName(name)
                        // @ts-ignore
                        console.log(e.target.files[0])
                        // @ts-ignore
                        setImage(e.target.files[0])

                        // @ts-ignore
                        // if (e.target.files[0].type.includes('image') || e.target.files[0].type.includes('file')) {
                        // @ts-ignore
                        uploadImage(e.target.files[0])
                        // } else {
                        // toast.error('Arquivo não suportado')
                        // }
                      }}
                    /><br /><br />

                  </form>
                </div>
                : false}
              {campoConfirmacaoProcedimento
                ? <div>
                  <label htmlFor=''>Confirmação do procedimento</label>
                  <input
                    type='text'
                    value={ConfirmacaoProcedimento}
                    onChange={(text) => setConfirmacaoProcedimento(text.target.value)}
                  />
                </div>
                : false}
              {campoVolumePreparado
                ? <div>
                  <label htmlFor=''>Volume preparado</label>
                  <input
                    type='text'
                    value={VolumePreparado}
                    onChange={(text) => setVolumePreparado(text.target.value)}
                  />
                </div>
                : false}
              {campoTesteVicosidade
                ? <div>
                  <label htmlFor=''>Teste  de viscosidade</label>
                  <input
                    type='text'
                    value={TesteVicosidade}
                    onChange={(text) => setTesteVicosidade(text.target.value)}
                  />
                </div>
                : false}
              {campoSondagemInterferencia
                ? <div>
                  <label htmlFor=''>Sondagem Interferência</label>
                  <input
                    type='text'
                    value={sondagemInterferencia}
                    onChange={(text) => setsondagemInterferencia(text.target.value)}
                  />
                </div>
                : false}
              {campoSondagem
                ? <div>
                  <label htmlFor=''>Sondagem</label>
                  <input
                    type='text'
                    value={sondagem}
                    onChange={(text) => setsondagem(text.target.value)}
                  />
                </div>
                : false}

              {campoPlanoFuro
                ? <div>
                  <label htmlFor=''>Plano de Furo</label>
                  <input
                    type='text'
                    value={criacaoplanoFuro}
                    onChange={(text) => setcriacaoplanoFuro(text.target.value)}
                  />
                </div>
                : false}
              {campoFerramentas
                ? <div>
                  <label htmlFor=''>Ferramentas</label>
                  <div className='selectPlus'>
                  <select name='' id='' value={ferramentas}
                    onChange={(text) => setferramentas(text.target.value)}>
                      <option value=''>Selecione...</option>
                    {ferramentasList.length > 0 ?
                      ferramentasList.map((ferramenta) => 
                      <option value={ferramenta.id+'/'+ferramenta.nome}>{ferramenta.nome}</option>): <option>Nenhuma ferramenta cadastrada!</option>  }
                  </select>
                  <button onClick={openModalFerramenta} className='buttonAddInter'><FiPlus size={20} /></button>
                  </div>

                </div>
                : false}
                
              {campoInfoEnvolvidas
                ? <div>
                  <label htmlFor=''>Informações Envolvidas</label>
                  <input
                    type='text'
                    value={infoEnvolvidas}
                    onChange={(text) => setInfoEnvolvidas(text.target.value)}
                  />
                </div>
                : false}

              {campoDiametro
                ? <div>
                  <label htmlFor=''>Diâmetro da Perfuração</label>
                  <input
                    type='text'
                    value={diametroPerfuracao}
                    onChange={(text) => setdiametroPerfuracao(text.target.value)}
                  />
                </div>
                : false}

              {campoLocalizaDiretrizFuro
                ? <div>
                  <label htmlFor=''>Localização da Diretriz do Furo</label>
                  <input
                    type='text'
                    value={localDiretrizFuro}
                    onChange={(text) => setLocalDiretrizFuro(text.target.value)}
                  />
                </div>
                : false}

              {campoResponselTopografia
                ? <div>
                  <label htmlFor=''>Responsável Topografia</label>
                  <input
                    type='text'
                    value={respTopografia}
                    onChange={(text) => setRespTopografia(text.target.value)}
                  />
                </div>
                : false}

              {campoDataTopografia
                ? <div>
                  <label htmlFor=''>Data Topografia</label>
                  <input
                    type='text'
                    value={dataTopografia}
                    onChange={(text) => setDataTopografia(text.target.value)}
                  />
                </div>
                : false}

              {campoEmpresa
                ? <div>
                  <label htmlFor=''>Empresa</label>
                  <input
                    type='text'
                    value={empresa}
                    onChange={(text) => setempresa(text.target.value)}
                  />
                </div>
                : false}

              {/* {camponomePerfilAcesso
                ? <div>
                  <label htmlFor=''>Nome do usuario do perfil de acesso</label>
                  <input
                    type='text'
                    value={nomePerfilAcesso}
                    onChange={(text) => setnomePerfilAcesso(text.target.value)}
                  />
                </div>
                : false}

              {campodataExecucao
                ? <div>
                  <label htmlFor=''>Data Execução</label>
                  <input
                    type='text'
                    value={dataExecucao}
                    onChange={(text) => setdataExecucao(text.target.value)}
                  />
                </div>
                : false} */}

              {/* {camporesponsavelExecucao
                ? <div>
                  <label htmlFor=''>Responsavel pela execução</label>
                  <input
                    type='text'
                    value={responsavelExecucao}
                    onChange={(text) => setresponsavelExecucao(text.target.value)}
                  />
                </div>
                : false}

              {campohoraExecucao
                ? <div>
                  <label htmlFor=''>Hora da execução</label>
                  <input
                    type='text'
                    value={horaExecucao}
                    onChange={(text) => sethoraExecucao(text.target.value)}
                  />
                </div>
                : false} */}

              {campocroquiMapeamento
                ? <div>
                  <label htmlFor=''>Croqui de Mapeamento</label>
                  <form
                    className='file'
                    encType='multipart/form-data'

                    onSubmit={makeRequisition}
                  >
                    <h2>Faça upload</h2>

                    <input
                      type='file'
                      name='image'
                      onChange={e => {
                        // console.log(e)
                        // @ts-ignore
                        nameImage = e.target.files[0].name
                        // @ts-ignore
                        Image = e.target.files[0]
                        // @ts-ignore
                        console.log(e.target.files[0].name)
                        // @ts-ignore
                        setName(name)
                        // @ts-ignore
                        console.log(e.target.files[0])
                        // @ts-ignore
                        setImage(e.target.files[0])

                        // @ts-ignore
                        // if (e.target.files[0].type.includes('image') || e.target.files[0].type.includes('file')) {
                        // @ts-ignore
                        uploadImage(e.target.files[0])
                        // } else {
                        // toast.error('Arquivo não suportado')
                        // }
                      }}
                    /><br /><br />

                  </form>
                </div>
                : false}

              {campoequipamentoUtilizado
                ? <div>
                  <label htmlFor=''>Equipamento Utilizado</label>
                  <input
                    type='text'
                    value={equipamentoUtilizado}
                    onChange={(text) => setequipamentoUtilizado(text.target.value)}
                  />
                </div>
                : false}

              {campomaterializacaoCampo
                ? <div>
                  <label htmlFor=''>Materialização em campo</label>
                  <input
                    type='text'
                    value={materializacaoCampo}
                    onChange={(text) => setmaterializacaoCampo(text.target.value)}
                  />
                </div>
                : false}

              {campoquantidadeInterferencias
                ? <div>
                  <label htmlFor=''>Quantidade de interferencias</label>
                  <input
                    type='text'
                    value={quantidadeInterferencias}
                    onChange={(text) => setquantidadeInterferencias(text.target.value)}
                  />
                </div>
                : false}

              {campoparaleloEsquerda
                ? <div>
                  <label htmlFor=''>Localização em relação a diretriz do furo:</label>
                  <label htmlFor=''>Paralelo esquerda(m)</label>
                  <input
                    type='text'
                    value={paraleloEsquerda}
                    onChange={(text) => setparaleloEsquerda(text.target.value)}
                  />
                </div>
                : false}
              {campoparaleloDireita
                ? <div>
                  <label htmlFor=''>Paralelo Direita(m)</label>
                  <input
                    type='text'
                    value={paraleloDireita}
                    onChange={(text) => setparaleloDireita(text.target.value)}
                  />
                </div>
                : false}
              {campoperpendicular
                ? <div>
                  <label htmlFor=''>Paralelo Perpendicular(m)</label>
                  <input
                    type='text'
                    value={perpendicular}
                    onChange={(text) => setperpendicular(text.target.value)}
                  />
                </div>
                : false}
              {campoProfundidade
                ? <div>
                  <label htmlFor=''>Profundidade</label>
                  <input
                    type='text'
                    value={profundidade}
                    onChange={(text) => setprofundidade(text.target.value)}
                  />
                </div>
                : false}
              {campoDiametroInterferencia
                ? <div>
                  <label htmlFor=''>Diametro de Interferência</label>
                  <input
                    type='text'
                    value={diametroInterferencia}
                    onChange={(text) => setDiametroInterferencia(text.target.value)}
                  />
                </div>
                : false}

              {/* {campoTipoInterferencia
                ? <div>
                  <label htmlFor=''>Tipo de Interferência</label>
                  <input
                    type='text'
                    value={tipoInterferencia}
                    onChange={(text) => setTipoInterferencia(text.target.value)}
                  />
                </div>
                : false} */}
              {campoEmpresaProprietaria
                ? <div>
                  <label htmlFor=''>Empresa proprietaria</label>
                  <input
                    type='text'
                    value={EmpresaProprietaria}
                    onChange={(text) => setEmpresaProprietaria(text.target.value)}
                  />
                </div>
                : false}
              {campolargura
                ? <div>
                  <h3>Dimensões da vala de entrada e saida:</h3>
                  <label htmlFor=''>Largura(m)</label>
                  <input
                    type='text'
                    value={largura}
                    onChange={(text) => setlargura(text.target.value)}
                  />
                </div>
                : false}
              {campocomprimento
                ? <div>
                  <label htmlFor=''>Comprimento(m)</label>
                  <input
                    type='text'
                    value={comprimento}
                    onChange={(text) => setcomprimento(text.target.value)}
                  />
                </div>
                : false}
              {campoprofundidadeVala
                ? <div>
                  <label htmlFor=''>Profundidade(m)</label>
                  <input
                    type='text'
                    value={profundidadeVala}
                    onChange={(text) => setprofundidadeVala(text.target.value)}
                  />
                </div>
                : false}

              {campoestacaReferencia
                ? <div>
                  <label htmlFor=''>Estaca de referencia</label>
                  <input
                    type='text'
                    value={estacaReferencia}
                    onChange={(text) => setestacaReferencia(text.target.value)}
                  />
                </div>
                : false}
              {campoSondagemInterferencia
                ? <div>
                  <label htmlFor=''>Confirmação de sondagem da interferencia</label>
                  <input
                    type='text'
                    value={sondagemInterferencia}
                    onChange={(text) => setestacaReferencia(text.target.value)}
                  />
                </div>
                : false}
              {campoFluido
                ? <div>
                  <label htmlFor=''>Fluido</label>
                  <input
                    type='text'
                    value={Fluido}
                    onChange={(text) => setFluido(text.target.value)}
                  />
                </div>
                : false}
              {campoReceitaFluido
                ? <div>
                  <label htmlFor=''>Receita do Fluido</label>
                  <input
                    type='text'
                    value={ReceitaFluido}
                    onChange={(text) => setReceitaFluido(text.target.value)}
                  />
                </div>
                : false}
              {camponumeroHastes
                ? <div>
                  <label htmlFor=''>Perfuração:</label>
                  <label htmlFor=''>Numero de Hates</label>
                  <input
                    type='text'
                    value={numeroHastes}
                    onChange={(text) => setnumeroHastes(text.target.value)}
                  />
                </div>
                : false}
              {campoprofundidadePlanejada
                ? <div>
                  <label htmlFor=''>Profundidade Planejada</label>
                  <input
                    type='text'
                    value={profundidadePlanejada}
                    onChange={(text) => setprofundidadePlanejada(text.target.value)}
                  />
                </div>
                : false}
              {campoavancoPlanejado
                ? <div>
                  <label htmlFor=''>Avanço Planejada</label>
                  <input
                    type='text'
                    value={avancoPlanejado}
                    onChange={(text) => setavancoPlanejado(text.target.value)}
                  />
                </div>
                : false}
              {campoprofundidadeExecutada
                ? <div>
                  <label htmlFor=''>Profundidade Executada</label>
                  <input
                    type='text'
                    value={profundidadeExecutada}
                    onChange={(text) => setprofundidadeExecutada(text.target.value)}
                  />
                </div>
                : false}
              {campoavancoExecutado
                ? <div>
                  <label htmlFor=''>Avanço Executada</label>
                  <input
                    type='text'
                    value={avancoExecutado}
                    onChange={(text) => setavancoExecutado(text.target.value)}
                  />
                </div>
                : false}

              {campoamarracao
                ? <div>
                  <label htmlFor=''>Amarração</label>
                  <input
                    type='text'
                    value={amarracao}
                    onChange={(text) => setamarracao(text.target.value)}
                  />
                </div>
                : false}
              {campomaquinaPerfuratriz
                ? <div>
                  <label htmlFor=''>Maquina Perfuratriz</label>
                  <input
                    type='text'
                    value={maquinaPerfuratriz}
                    onChange={(text) => setmaquinaPerfuratriz(text.target.value)}
                  />
                </div>
                : false}
              {campodiametroAlargamento
                ? <div>
                  <label htmlFor=''>Diametro de Alargamento</label>
                  <input
                    type='text'
                    value={diametroAlargamento}
                    onChange={(text) => setdiametroAlargamento(text.target.value)}
                  />
                </div>
                : false}
              {campotempoHaste
                ? <div>
                  <label htmlFor=''>Tempo Haste</label>
                  <input
                    type='text'
                    value={tempoHaste}
                    onChange={(text) => settempoHaste(text.target.value)}
                  />
                </div>
                : false}
              {campovazaoBomba
                ? <div>
                  <label htmlFor=''>Vazão Bomba</label>
                  <input
                    type='text'
                    value={vazaoBomba}
                    onChange={(text) => setvazaoBomba(text.target.value)}
                  />
                </div>
                : false}
              {campotipoRedeTubula
                ? <div>
                  <label htmlFor=''>Tipo de Rede/Tubulação</label>
                  <input
                    type='text'
                    value={tipoRedeTubula}
                    onChange={(text) => settipoRedeTubula(text.target.value)}
                  />
                </div>
                : false}
              {campodiametroRede
                ? <div>
                  <label htmlFor=''>Diametro da Rede</label>
                  <input
                    type='text'
                    value={diametroRede}
                    onChange={(text) => setdiametroRede(text.target.value)}
                  />
                </div>
                : false}

              {campoPortaSonda
                ? <div>
                  <h3>Ferramentas Utilizadas:</h3>
                  <label htmlFor=''>Porta Sonda</label>
                  <input
                    type='text'
                    value={PortaSonda}
                    onChange={(text) => setPortaSonda(text.target.value)}
                  />
                </div>
                : false}
              {campoHastes
                ? <div>
                  <label htmlFor=''>Hastes</label>
                  <input
                    type='text'
                    value={Hastes}
                    onChange={(text) => setHastes(text.target.value)}
                  />
                </div>
                : false}
              {campoSonda
                ? <div>
                  <label htmlFor=''>Sonda</label>
                  <input
                    type='text'
                    value={Sonda}
                    onChange={(text) => setSonda(text.target.value)}
                  />
                </div>
                : false}
              {campopaPerfuracao
                ? <div>
                  <label htmlFor=''>Pá de perfuração</label>
                  <input
                    type='text'
                    value={paPerfuracao}
                    onChange={(text) => setpaPerfuracao(text.target.value)}
                  />
                </div>
                : false}
              {campoPullingHead
                ? <div>
                  <label htmlFor=''>Pulling Head</label>
                  <input
                    type='text'
                    value={PullingHead}
                    onChange={(text) => setPullingHead(text.target.value)}
                  />
                </div>
                : false}
              {campoLocalizador
                ? <div>
                  <label htmlFor=''>Localizador</label>
                  <input
                    type='text'
                    value={Localizador}
                    onChange={(text) => setLocalizador(text.target.value)}
                  />
                </div>
                : false}
              {campoLuva
                ? <div>
                  <label htmlFor=''>Luva</label>
                  <input
                    type='text'
                    value={Luva}
                    onChange={(text) => setLuva(text.target.value)}
                  />
                </div>
                : false}
              {campoHasteInicial
                ? <div>
                  <label htmlFor=''>Haste inicial</label>
                  <input
                    type='text'
                    value={HasteInicial}
                    onChange={(text) => setHasteInicial(text.target.value)}
                  />
                </div>
                : false}
              {campoFlexobarra
                ? <div>
                  <label htmlFor=''>Flexobarra</label>
                  <input
                    type='text'
                    value={Flexobarra}
                    onChange={(text) => setFlexobarra(text.target.value)}
                  />
                </div>
                : false}
              {campoRadio
                ? <div>
                  <label htmlFor=''>Rádio</label>
                  <input
                    type='text'
                    value={Radio}
                    onChange={(text) => setRadio(text.target.value)}
                  />
                </div>
                : false}
              {campoParafuso
                ? <div>
                  <label htmlFor=''>Parafuso</label>
                  <input
                    type='text'
                    value={Parafuso}
                    onChange={(text) => setParafuso(text.target.value)}
                  />
                </div>
                : false}
              {campomodeloAlargador
                ? <div>
                  <label htmlFor=''>Modelo de Alargador</label>
                  <input
                    type='text'
                    value={modeloAlargador}
                    onChange={(text) => setmodeloAlargador(text.target.value)}
                  />
                </div>
                : false}
              {campocapacidadePortaFusilink
                ? <div>
                  <label htmlFor=''>Capacidade do Porta Fusilink, Pulling Head ou Cabeça de Puxamento</label>
                  <input
                    type='text'
                    value={capacidadePortaFusilink}
                    onChange={(text) => setcapacidadePortaFusilink(text.target.value)}
                  />
                </div>
                : false}
              {campocapacidadeSwivel
                ? <div>
                  <label htmlFor=''>Capacidade do Swivel</label>
                  <input
                    type='text'
                    value={capacidadeSwivel}
                    onChange={(text) => setcapacidadeSwivel(text.target.value)}
                  />
                </div>
                : false}
              {campoDiametroFerramenta
                ? <div>
                  <label htmlFor=''>Diametro da ferramenta</label>
                  <input
                    type='text'
                    value={DiametroFerramenta}
                    onChange={(text) => setDiametroFerramenta(text.target.value)}
                  />
                </div>
                : false}
              {campoCondicaoFerramenta
                ? <div>
                  <label htmlFor=''>Condição do ferramental</label>
                  <input
                    type='text'
                    value={CondicaoFerramenta}
                    onChange={(text) => setCondicaoFerramenta(text.target.value)}
                  />
                </div>
                : false}
              {/*
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
              </div> */}

              {/* <button onClick={() => handleCampos()} className='addInterferencia'><FiPlus /> Adicionar interferencia</button> */}

              {camposInterferencia
                ? <div>
                  <label htmlFor=''>Localização em relação a diretriz do furo</label>
                  <select name='' id='' onChange={(text) => setperpendicular(text.target.value)}>
                    <option value='Perpendicular'>Perpendicular</option>
                    <option value='Esquerda'>Esquerda</option>
                    <option value='Direita'>Direita</option>
                    <option value='Paralelo'>Paralelo</option>
                  </select>
                </div>
                : false}

              {camposInterferencia
                ? <div>
                  <label htmlFor=''>Diâmetro</label>
                  <input
                    type='text'
                    value={diametroInterferencia}
                    onChange={(text) => setDiametroInterferencia(text.target.value)}
                  />
                </div>
                : false}

              {camposInterferencia
                ? <div>
                  <label htmlFor=''>Tipo de interferência</label>
                  <input
                    type='text'
                    value={tipoInterferencia}
                    onChange={(text) => setTipoInterferencia(text.target.value)}
                  />
                </div>
                : false}

              {camposInterferencia
                ? <div>
                  <label htmlFor=''>Profundidade</label>
                  <input
                    type='text'
                    value={profundidade}
                    onChange={(text) => setprofundidade(text.target.value)}
                  />
                </div>
                : false}
              {campovalaEntradaLatitude
                ? <div>
                  <label htmlFor=''>Vala de entrada latitude</label>
                  <input
                    type='text'
                    value={valaEntradaLatitude}
                    onChange={(text) => setvalaEntradaLatitude(text.target.value)}
                  />
                </div>
                : false}
              {campovalaEntradaLongitude
                ? <div>
                  <label htmlFor=''>Vala de entrada longitude</label>
                  <input
                    type='text'
                    value={valaEntradaLongitude}
                    onChange={(text) => setvalaEntradaLongitude(text.target.value)}
                  />
                </div>
                : false}
              {campovalaEntradaAltura
                ? <div>
                  <label htmlFor=''>Vala de entrada altura</label>
                  <input
                    type='text'
                    value={valaEntradaAltura}
                    onChange={(text) => setvalaEntradaAltura(text.target.value)}
                  />
                </div>
                : false}
              {campovalaEntradaComprimento
                ? <div>
                  <label htmlFor=''>Vala de entrada comprimento</label>
                  <input
                    type='text'
                    value={valaEntradaComprimento}
                    onChange={(text) => setvalaEntradaComprimento(text.target.value)}
                  />
                </div>
                : false}
              {campovalaEntradaProfundidade
                ? <div>
                  <label htmlFor=''>Vala de entrada profundidade</label>
                  <input
                    type='text'
                    value={valaEntradaProfundidade}
                    onChange={(text) => setvalaEntradaProfundidade(text.target.value)}
                  />
                </div>
                : false}
              {campovalaSaidaLatitude
                ? <div>
                  <label htmlFor=''>Vala de saida latitude</label>
                  <input
                    type='text'
                    value={valaSaidaLatitude}
                    onChange={(text) => setvalaSaidaLatitude(text.target.value)}
                  />
                </div>
                : false}
              {campovalaSaidaLongitude
                ? <div>
                  <label htmlFor=''>Vala de saida longitude</label>
                  <input
                    type='text'
                    value={valaSaidaLongitude}
                    onChange={(text) => setvalaSaidaLongitude(text.target.value)}
                  />
                </div>
                : false}
              {campovalaSaidaAltura
                ? <div>
                  <label htmlFor=''>Vala de saida altura</label>
                  <input
                    type='text'
                    value={valaSaidaAltura}
                    onChange={(text) => setvalaSaidaAltura(text.target.value)}
                  />
                </div>
                : false}
              {campovalaSaidaComprimento
                ? <div>
                  <label htmlFor=''>Vala de saida comprimento</label>
                  <input
                    type='text'
                    value={valaSaidaComprimento}
                    onChange={(text) => setvalaSaidaComprimento(text.target.value)}
                  />
                </div>
                : false}
              {campovalaSaidaProfundidade
                ? <div>
                  <label htmlFor=''>Vala de saida profundidade</label>
                  <input
                    type='text'
                    value={valaSaidaProfundidade}
                    onChange={(text) => setvalaSaidaProfundidade(text.target.value)}
                  />
                </div>
                : false}
              {campoprofundidadeMax
                ? <div>
                  <label htmlFor=''>Profundidade maxima</label>
                  <input
                    type='text'
                    value={profundidadeMax}
                    onChange={(text) => setprofundidadeMax(text.target.value)}
                  />
                </div>
                : false}
              {campoprofundidadeMin
                ? <div>
                  <label htmlFor=''>Profundidade minima</label>
                  <input
                    type='text'
                    value={profundidadeMin}
                    onChange={(text) => setprofundidadeMin(text.target.value)}
                  />
                </div>
                : false}
              {campoMaterialRedeTubula
                ? <div>
                  <label htmlFor=''>Material de rede/tubulação</label>
                  <input
                    type='text'
                    value={MaterialRedeTubula}
                    onChange={(text) => setMaterialRedeTubula(text.target.value)}
                  />
                </div>
                : false}
            </S.GridForm>

            {campotipoInterferencia ?
              <><h4>Registro de interferencias</h4><button onClick={openModalInterferencia} className='buttonAddInter'>Adicionar <FiPlus size={20} /></button>
              <table>
                {interferencias.length > 0 ?
                  <tr>
                    <th>Nome</th>
                    <th>Latitude</th>
                    <th>Longitude</th>
                    <th>Profundidade</th>
                    <th>Diâmetro</th>
                  </tr> : false}

                {interferencias.length > 0 ?
                  interferencias.map((inter) =>
                    <tr>
                      <td>{inter.tipoInterferencia}</td>
                      <td>{inter.latitude}</td>
                      <td>{inter.longitude}</td>
                      <td>{inter.profundidade}</td>
                      <td>{inter.diametro}</td>
                      <td>
                        <button onClick={() => deleteDados(inter.id, 'interferencia/')}>
                          <FiTrash color='#EA1C24' size={18} />
                        </button>
                      </td>
                      <td>
                        <button onClick={() => openModalInterferenciaEdit(inter)}>
                          <FiEye color='#FECE51' size={18} />
                        </button>
                      </td>
                    </tr>) : 'Nenhuma interferencia cadastrada!'}

              </table></> : false}
            {campoPontosVerificacao ?
              <><h4>Pontos de verificação</h4><button onClick={openModalPontosVerificacao} className='buttonAddInter'>Adicionar <FiPlus size={20} /></button><table>
                {pontosVerificacao.length > 0 ?
                  <tr>
                    <th>Latitude</th>
                    <th>Longitude</th>
                    <th>Profundidade</th>
                    {variavelTitulo == 'Execução da Travessia - Furo Piloto' ?<th>Angulação</th>:false} 
                    {variavelTitulo == 'Execução da Travessia - Furo Piloto' ?<th>Posição em Horas</th>:false} 
                  </tr> : false}

                {pontosVerificacao.length > 0 ?
                  pontosVerificacao.map((pontos) =>
                    <tr>
                      <td>{pontos.latitude}</td>
                      <td>{pontos.longitude}</td>
                      <td>{pontos.profundidade}</td>
                      {variavelTitulo == 'Execução da Travessia - Furo Piloto' ?<td>{pontos.angulacao}</td>:false}
                      {variavelTitulo == 'Execução da Travessia - Furo Piloto' ?<td>{pontos.posicaoHoras}</td>:false}
                      <td>
                        <button onClick={() => deleteDados(pontos.id, 'pontos-verificacao/')}>
                          <FiTrash color='#EA1C24' size={18} />
                        </button>
                      </td>
                      <td>
                        <button onClick={() => openModalPontosVerificacaoEdit(pontos)}>
                          <FiEye color='#FECE51' size={18} />
                        </button>
                      </td>
                    </tr>) : 'Nenhuma interferencia cadastrada!'}

              </table></> : false}
            {!finalizarEtapa
              ? <button onClick={() => { onSubmitLevantamento() }}>{loading
                ? <img
                    width='40px'
                    style={{ margin: 'auto' }}
                    height='' src='https://contribua.org/mb-static/images/loading.gif'
                    alt='Loading'
                  />
                : 'Salvar'}
              </button>
              : false}
            {!finalizarEtapa
              ? idTodosCampos === ''
                ? <button onClick={() => { toast.info('É preciso salvar a etapa!') }} className='finishPhase'>Finalizar Etapa</button>
                : <button onClick={() => { updateDados() }} className='finishPhase'>{loading
                  ? <img
                      width='40px'
                      style={{ margin: 'auto' }}
                      height='' src='https://contribua.org/mb-static/images/loading.gif'
                      alt='Loading'
                    />
                  : 'Finalizar Etapa'}
                </button>
              : 'Etapa Finalizada!'}

          </S.Div>

        </Modal>

        <Modal
          className='phaes-modal'
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
            },
          }}
          isOpen={modalIsOpenInterferencia}
          onAfterOpen={() => afterOpenModalInterferencia}
          onRequestClose={() => closeModalInterferencia}
        >
          <button style={{ position: 'absolute', top: '10px', right: '10px', background: 'transparent', border: 0 }} onClick={closeModalInterferencia}><FiX color='white' /></button>

          <S.ModelsModal>
            <h2>Adicione uma interferência</h2>
            <div>
              <input
                type='text' placeholder='Nome'
                value={tipoInterferencia}
                onChange={(text) => setTipoInterferencia(text.target.value)}
              />
              <input
                type='text' placeholder='Latitude'
                value={latitude}
                onChange={(text) => setLatitude(text.target.value)}
              />
              <input
                type='text' placeholder='Longitude'
                value={longitude}
                onChange={(text) => setLongitude(text.target.value)}
              />
              <input
                type='text' placeholder='Profundidade'
                value={profundidade}
                onChange={(text) => setprofundidade(text.target.value)}
              />
              <input
                type='text' placeholder='Diâmetro'
                value={diametro}
                onChange={(text) => setDiametro(text.target.value)}
              />
            </div>
            <button className='save' onClick={() => salvarInterferencia('interferencia')}>{loading
              ? (
                <img
                  width='40px'
                  style={{ margin: 'auto' }}
                  height=''
                  src='https://contribua.org/mb-static/images/loading.gif'
                  alt='Loading'
                />
                )
              : (
                  'Salvar'
                )}
            </button>
          </S.ModelsModal>

        </Modal>

        <Modal
          className='phaes-modal'
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
            },
          }}
          isOpen={modalIsOpenVerificacao}
          onAfterOpen={() => afterOpenModalInterferencia}
          onRequestClose={() => closeModalVerificacao}
        >
          <button style={{ position: 'absolute', top: '10px', right: '10px', background: 'transparent', border: 0 }} onClick={closeModalVerificacao}><FiX color='white' /></button>

          <S.ModelsModal>
            <h2>Adicione um ponto de verificação</h2>
            <div>
              {/* <label htmlFor=''>Status</label>
              <select name='' id='' onChange={(text) => setStatus(text.target.value)}>
                <option value='Planejamento'>Planejamento</option>
                <option value='Execução'>Execução</option>
              </select> */}

              <input
                type='text' placeholder='Latitude'
                value={latitude}
                onChange={(text) => setLatitude(text.target.value)}
              />
              <input
                type='text' placeholder='Longitude'
                value={longitude}
                onChange={(text) => setLongitude(text.target.value)}
              />
              <input
                type='text' placeholder='Profundidade'
                value={profundidade}
                onChange={(text) => setprofundidade(text.target.value)}
              />
            </div>
            <button className='save' onClick={() => salvarPontosVerificacao()}>{loading
              ? (
                <img
                  width='40px'
                  style={{ margin: 'auto' }}
                  height=''
                  src='https://contribua.org/mb-static/images/loading.gif'
                  alt='Loading'
                />
                )
              : (
                  'Salvar'
                )}
            </button>
          </S.ModelsModal>
        </Modal>

        <Modal
          className='phaes-modal'
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
            },
          }}
          isOpen={modalIsOpenFerramenta}
          onAfterOpen={() => afterOpenModalInterferencia}
          onRequestClose={() => closeModalFerramenta}
        >
          <button style={{ position: 'absolute', top: '10px', right: '10px', background: 'transparent', border: 0 }} onClick={closeModalFerramenta}><FiX color='white' /></button>

          <S.ModelsModal>
            <h2>Adicionar Ferramenta</h2>
            <div>
              <input
                type='text' placeholder='Nome'
                value={nomeFerramenta}
                onChange={(text) => setnomeFerramenta(text.target.value)}
              />
              <input
                type='text' placeholder='Descrição'
                value={descricaoFerramenta}
                onChange={(text) => setdescricaoFerramenta(text.target.value)}
              />
              <input
                type='text' placeholder='Diametro ou Largura'
                value={diametroLarguraFerramenta}
                onChange={(text) => setdiametroLarguraFerramenta(text.target.value)}
              />
            </div>
            <button className='save' onClick={() => salvarInterferencia('ferramentaList')}>{loading
              ? (
                <img
                  width='40px'
                  style={{ margin: 'auto' }}
                  height=''
                  src='https://contribua.org/mb-static/images/loading.gif'
                  alt='Loading'
                />
                )
              : (
                  'Salvar'
                )}
            </button>
          </S.ModelsModal>
        </Modal>

        <Modal
          className='phaes-modal'
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
            },
          }}
          isOpen={modalIsOpenVerificacaoEdit}
          onAfterOpen={() => afterOpenModalInterferencia}
          onRequestClose={() => closeModalVerificacaoEdit}
        >
          <button style={{ position: 'absolute', top: '10px', right: '10px', background: 'transparent', border: 0 }} onClick={closeModalVerificacaoEdit}><FiX color='white' /></button>

          <S.ModelsModal>
            <h2>Editar ponto de verificação</h2>
            <div>
              {/* <label htmlFor=''>Status</label>
              <select name='' id='' value={status} onChange={(text) => setStatus(text.target.value)}>
                <option value='Planejamento'>Planejamento</option>
                <option value='Execução'>Execução</option>
              </select> */}

              <input
                type='text' placeholder='Latitude'
                value={latitude}
                onChange={(text) => setLatitude(text.target.value)}
              />
              <input
                type='text' placeholder='Longitude'
                value={longitude}
                onChange={(text) => setLongitude(text.target.value)}
              />
              <input
                type='text' placeholder='Profundidade'
                value={profundidade}
                onChange={(text) => setprofundidade(text.target.value)}
              />
            </div>
            <button className='save' onClick={() => editarInterferencia('pontos-verificacao/')}>{loading
              ? (
                <img
                  width='40px'
                  style={{ margin: 'auto' }}
                  height=''
                  src='https://contribua.org/mb-static/images/loading.gif'
                  alt='Loading'
                />
                )
              : (
                  'Salvar'
                )}
            </button>
          </S.ModelsModal>
        </Modal>

        <Modal
          className='phaes-modal'
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
            },
          }}
          isOpen={modalIsOpenInterferenciaEdit}
          onAfterOpen={() => afterOpenModalInterferenciaEdit}
          onRequestClose={() => closeModalVerificacaoEdit}
        >
          <button style={{ position: 'absolute', top: '10px', right: '10px', background: 'transparent', border: 0 }} onClick={closeModalInterferenciaEdit}><FiX color='white' /></button>

          <S.ModelsModal>
            <h2>Edite uma interferência</h2>
            <div>
              <input
                type='text' placeholder='Nome'
                value={tipoInterferencia}
                onChange={(text) => setTipoInterferencia(text.target.value)}
              />
              <input
                type='text' placeholder='Latitude'
                value={latitude}
                onChange={(text) => setLatitude(text.target.value)}
              />
              <input
                type='text' placeholder='Longitude'
                value={longitude}
                onChange={(text) => setLongitude(text.target.value)}
              />
              <input
                type='text' placeholder='Profundidade'
                value={profundidade}
                onChange={(text) => setprofundidade(text.target.value)}
              />
              <input
                type='text' placeholder='Diâmetro'
                value={diametro}
                onChange={(text) => setDiametro(text.target.value)}
              />
            </div>
            <button className='save' onClick={() => editarInterferencia('interferencia/')}>{loading
              ? (
                <img
                  width='40px'
                  style={{ margin: 'auto' }}
                  height=''
                  src='https://contribua.org/mb-static/images/loading.gif'
                  alt='Loading'
                />
                )
              : (
                  'Salvar'
                )}
            </button>
          </S.ModelsModal>

        </Modal>

        <Modal
          style={{
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.59)',
            },
            content: {
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
              background: '#1B1925',
              border: '0',
            },
          }}
          isOpen={modalIsOpenPhase}
          onAfterOpen={afterOpenModalPhases}
          onRequestClose={closeModalPhases}
        >
          <button style={{ position: 'absolute', right: '10px', top: '25px', background: 'transparent', border: '0' }} onClick={closeModalPhases}><FiX /></button>
          <h2>Localização da interferência</h2>
          <S.InterferenciasForm>
            <div>
              <label htmlFor=''>Localização em relação a diretriz do furo</label>
              <select name='' id=''>
                <option value=''>Perpendicular</option>
                <option value=''>Esquerda</option>
                <option value=''>Direita</option>
                <option value=''>Paralelo</option>
              </select>
            </div>

            <div>
              <label htmlFor=''>Diâmetro</label>
              <input type='text' />
            </div>

            <div>
              <label htmlFor=''>Tipo de interferência</label>
              <input type='text' />
            </div>

            <div>
              <label htmlFor=''>Profundidade</label>
              <input type='text' />
            </div>

            <button>Salvar</button>
          </S.InterferenciasForm>
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
        />

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
        />

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
        />

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
        />

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
          <h2>Direcionamento do furo furo piloto</h2>
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
                <label htmlFor=''>Documentos</label>
                <input
                  type='text'
                  value={documentos}
                  onChange={(text) => setdocumentos(text.target.value)}
                />
              </div>

              <div>
                <label htmlFor=''>Ferramentas</label>
                <input
                  type='text'
                  value={ferramentas}
                  onChange={(text) => setferramentas(text.target.value)}
                />
              </div>

              <div>
                <label htmlFor=''>Profundidade</label>
                <input
                  type='text'
                  value={profundidade}
                  onChange={(text) => setprofundidade(text.target.value)}
                />
              </div>

              <div>
                <label htmlFor=''>Ângulo de ataque (pitch)</label>
                <input
                  type='text'
                  value={anguloAtaque}
                  onChange={(text) => setanguloAtaque(text.target.value)}
                />
              </div>

              <div>
                <label htmlFor=''>Posição em relação ao relógio</label>
                <input
                  type='text'
                  value={posicaoRelogio}
                  onChange={(text) => setposicaoRelogio(text.target.value)}
                />
              </div>

            </S.GridForm>
            <button onClick={() => onSubmitInterferenciasFisicasMagneticas()}>{loading
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

        {/*
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
              <h2>1</h2>
              <h1>oi</h1>
            </button>
          </SwiperSlide>

          <SwiperSlide className='containerForm'>
            <button>
              <FiPlay />
              <h2>2</h2>
              <h1>oi</h1>
            </button>
          </SwiperSlide>

          <SwiperSlide className='containerDisabled'>
            <button>
              <FiLock color='#5C5C5C' />
              <h2>3</h2>
              <h1>oi</h1>
            </button>
          </SwiperSlide>

          <SwiperSlide className='containerDisabled'>
            <button>
              <FiLock color='#5C5C5C' />
              <h2>3</h2>
              <h1>oi</h1>
            </button>
          </SwiperSlide>

          <SwiperSlide className='containerDisabled'>
            <button>
              <FiLock color='#5C5C5C' />
              <h2>3</h2>
              <h1>oi</h1>
            </button>
          </SwiperSlide>
        </Swiper>
      */}
      </S.ContainerConfirmation>

      <Modal
        className='phaes-modal'
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
          },
        }}

        isOpen={modalIsOpenPhaseSelect}
        onAfterOpen={() => afterOpenModalPhasesSelect}
        onRequestClose={() => closeModalPhasesSelect}
      >
        <button style={{ position: 'absolute', top: '10px', right: '10px', background: 'transparent', border: 0 }} onClick={closeModalPhasesSelect}><FiX color='white' /></button>

        <S.PhasesModal>
          <h3>Descrição</h3>
          <input
            type='text' placeholder='Descrição'
            value={descricao}
            onChange={(text) => setDescricao(text.target.value)}
          />

          <form>
            <h3>Escolha o tipo de etapa</h3>
            <select
              value={etapa}
              onChange={(text) => setEtapa(text.target.value)}
            >
              <option selected disabled>Selecione</option>
              {/* <option value='1'>Levantamento e Mapeamento de Interferências</option> */}
              <option value='2'>Planejamento da Travessia</option>
              <option value='3'>Sondagem das Interferências</option>
              <option value='4'>Abertura de Valas de Entrada e Saída</option>
              <option value='5'>Preparação de Fluído</option>
              <option value='6'>Execução da Travessia - Furo Piloto</option>
              <option value='7'>Alargamento</option>
              <option value='8'>Limpeza</option>
              <option value='9'>Puxamento de Rede</option>
            </select>
          </form>

          <button className='save' onClick={() => salvarEtapa()}>{loading
            ? (
              <img
                width='40px'
                style={{ margin: 'auto' }}
                height=''
                src='https://contribua.org/mb-static/images/loading.gif'
                alt='Loading'
              />
              )
            : (
                'Salvar'
              )}
          </button>
        </S.PhasesModal>

      </Modal>
    </>
  )
}
