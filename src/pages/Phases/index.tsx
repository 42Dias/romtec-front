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
import { platform, type } from 'os'
import axios from 'axios'

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
  const [modalIsOpenPhase, setIsOpenPhase] = useState(false)

  function openModalPhases() {
    setIsOpenPhase(true)
  }

  function afterOpenModalPhases() {

  }

  function closeModalPhases() {
    setIsOpenPhase(false)
  }

  const [isOpen, setIsOpen] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [isOpenInterferencia, setIsOpenInterferencia] = useState(false)
  const [modalIsOpenPlanejamento, setIsOpenPlanejamento] = useState(false)
  const [modalIsOpenAddInterferencia, setIsOpenAddInterferencia] = useState(false)
  let idConfigTravessia = window.location.hash.replace(ip + '/romtec/#/etapas/', '')
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()
  const [loading, setLoading] = useState(false)
  const [dados, setDados] = useState<any[]>([])
  const [variavelTitulo, setVariavelTitulo] = useState('')
  const [idDados, setId] = useState('')
  const [responsavel, setresponsavel] = useState('')
  const [infoEnvolvidas, setInfoEnvolvidas] = useState('')
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
  const [campoDocumento, setcampoDocumento] = useState(true)
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
  const [name, setName] = useState<any>("");
  // function onSubmit(data: FormData) {
  //   data.idConfigTravessia = idConfigTravessia.replace('#/etapas/', '')
  //   data.banco = 'todos-campos'
  //   console.log(data)
  //   createNewFile(data)
  // }
  function onSubmitLevantamento() {
    console.log(responsavel)
    const data = {
      banco: 'todos-campos',
      idConfigTravessia: idConfigTravessia.replace('#/etapas/', ''),
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

    console.log(data)
    if (isUpdate) {
      updateDados()
      setIsUpdate(false)
    } else {
      createNewFile(data)
    }
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
    console.log(idDados)
  }
  async function updateDados() {
    setLoading(true)
    console.log('idDados')
    console.log(idDados)
    // console.log(soilTypesUp)
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
        ferramentas: ferramentas,
      },
    },
    ).then((response) => {
      if (response.statusText === 'OK') {
        loadDados('planejamentoPerfuracao')
        setisOpenUpdatePlanejamentoPerfuração(false)
        setLoading(false)
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
    // setLoading(true)
    loadDados('etapas')
  }, [])

  function openModal(data: any) {
    console.log(data)
    api.get(`todos-campos?filter%5BetapaId%5D=${data.id}`,
    ).then((response) => {
      console.log(response.data.rows)
      if (response.statusText === 'OK') {
        if (response.data.count > 0) {
          setIdEtapa(data.etapaId)
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
        }
        setLoading(false)
      }
    }).catch(res => {
      console.log(res.response.data)
      toast.error(res.response.data)
      setLoading(false)
    })
    setVariavelTitulo(data.novaEtapa)
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
    //setcampoDocumento(data.campoDocumento)
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

    setcamponomePerfilAcesso(data.camponomePerfilAcesso)
    setcampodataExecucao(data.campodataExecucao)
    setcamporesponsavelExecucao(data.camporesponsavelExecucao)
    setcampohoraExecucao(data.campohoraExecucao)
    setcampocroquiMapeamento(data.campocroquiMapeamento)
    setcampoequipamentoUtilizado(data.campoequipamentoUtilizado)
    setcampomaterializacaoCampo(data.campomaterializacaoCampo)
    setcampoquantidadeInterferencias(data.campoquantidadeInterferencias)
    setcampoparaleloEsquerda(data.campoparaleloEsquerda)
    setcampoparaleloDireita(data.campoparaleloDireita)
    setcampoperpendicular(data.campoperpendicular)
    setcampolargura(data.campolargura)
    setcampocomprimento(data.campocomprimento)
    setcampoprofundidadeVala(data.campoprofundidadeVala)
    setcampoestacaReferencia(data.campoestacaReferencia)
    setcamponumeroHastes(data.camponumeroHastes)
    setcampoprofundidadePlanejada(data.campoprofundidadePlanejada)
    setcampoavancoPlanejado(data.campoavancoPlanejado)
    setcampoprofundidadeExecutada(data.campoprofundidadeExecutada)
    setcampoavancoExecutado(data.campoavancoExecutado)
    setcampoamarracao(data.campoamarracao)
    setcampomaquinaPerfuratriz(data.campomaquinaPerfuratriz)
    setcampodiametroAlargamento(data.campodiametroAlargamento)
    setcampotempoHaste(data.campotempoHaste)
    setcampovazaoBomba(data.campovazaoBomba)
    setcampotipoRedeTubula(data.campotipoRedeTubula)
    setcampodiametroRede(data.campodiametroRede)
    setcampoferramentasUtilizadas(data.campoferramentasUtilizadas)
    setcampomodeloAlargador(data.campomodeloAlargador)
    setcampocapacidadePortaFusilink(data.campocapacidadePortaFusilink)
    setcampocapacidadeSwivel(data.campocapacidadeSwivel)
    setisOpenUpdatePlanejamentoPerfuração(true)
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }
  function closeModal() {
    setIsOpenPlanejamento(false)
  }
  async function makeRequisition(e: any) {
    e.preventDefault()
    e.target.reset();

    toast.info("Carregando...")
    let body = {
      data: {
        imagemUrl: campoDocumento,
        status: 'ativo',
        nome: name
      }
    }
  }
  const uploadImage = async (imagemNova: string | Blob) => {
    
    const formData = new FormData();

    formData.append('image', imagemNova);
    
    //console.log(...formData)

    const headers = {
      'headers': {
        // 'Content-Type': 'application/json'
        'Content-Type': 'multipart/form-data'
        
      }
    }

    await axios.post(`${ip}:8080/upload-image`, formData, headers)
    .then((response) => {
      console.log(response)
      if(response.status == 200){
        const pathHelper = response.data.mensagem
        console.log(ip+pathHelper)
        toast.info("Imagem Válida!")
      }
      else{
        toast.info("Imagem inválida, ou problemas com o servidor :(")
      }

    }).catch((err) => {
      if(err.response){
        console.log(err)
        toast.error("Erro: Tente mais tarde :(")

      }
      else{
        // setStatus({
        //   type: 'error',
        //   mensagem: "Erro: Tente mais tarde :("
        // });
      }
      toast.error("Erro: Tente mais tarde :(")
    });
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
            isOpen={modalIsOpenAddInterferencia}
            onAfterOpen={() => afterOpenModal}
            onRequestClose={() => closeModal}
          >
            <button style={{ position: 'absolute', top: '10px', right: '10px', background: 'transparent', border: 0 }} onClick={closeModal}><FiX color='white' /></button>

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
                <button onClick={() => openModal(data)}>
                  <FiCheck />
                  <h2>{data.numeroEtapa}</h2>
                  <h1>{data.novaEtapa}</h1>
                </button>
              </SwiperSlide>,
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
                  <form className="file"
                    encType='multipart/form-data'

                    onSubmit={makeRequisition}
                  >
                    <h2>Faça upload</h2>


                    <input type="file"
                      name="image"
                      onChange={e => {
                        console.log(e)

                        //@ts-ignore
                        console.log(e.target.files[0].name)
                        //@ts-ignore
                        setName(e.target.files[0].name)
                        //@ts-ignore
                        setImage(e.target.files[0])

                        //@ts-ignore
                        if (e.target.files[0].type.includes('image')) {
                          //@ts-ignore
                          uploadImage(e.target.files[0])
                        }
                        else {
                          toast.error("Arquivo não suportado")
                        }



                      }
                      }
                    /><br /><br />



                    <input type="submit" value="Enviar"
                    />
                  </form>
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
                  <input
                    type='text'
                    value={ferramentas}
                    onChange={(text) => setferramentas(text.target.value)}
                  />
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

              {camponomePerfilAcesso
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
                : false}

              {camporesponsavelExecucao
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
                : false}

              {campocroquiMapeamento
                ? <div>
                  <label htmlFor=''>Enviar croqui de mapeamento</label>
                  <input
                    type='text'
                    value={croquiMapeamento}
                    onChange={(text) => setcroquiMapeamento(text.target.value)}
                  />
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

              {campoTipoInterferencia
                ? <div>
                  <label htmlFor=''>Tipo de Interferência</label>
                  <input
                    type='text'
                    value={tipoInterferencia}
                    onChange={(text) => setTipoInterferencia(text.target.value)}
                  />
                </div>
                : false}
              {campolargura
                ? <div>
                  <label htmlFor=''>Dimensões da vala de entrada e saida:</label>
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
                  <label htmlFor=''>Profundidade Executada</label>
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

              {campoferramentasUtilizadas
                ? <div>
                  <label htmlFor=''>Ferramentas:</label>
                  <label htmlFor=''>Ferramentas Utilizadas</label>
                  <input
                    type='text'
                    value={ferramentasUtilizadas}
                    onChange={(text) => setferramentasUtilizadas(text.target.value)}
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
                  <label htmlFor=''>Capacidade do Porta Fusilink</label>
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
              <button onClick={openModalPhases} className='addInterferencia'><FiPlus /> Adicionar interferencia</button>
            </S.GridForm>
            <button onClick={() => { onSubmitLevantamento() }}>{loading
              ? <img
                width='40px'
                style={{ margin: 'auto' }}
                height='' src='https://contribua.org/mb-static/images/loading.gif'
                alt='Loading'
              />
              : 'Salvar'}
            </button>
            <button className='finishPhase'>Finalizar Etapa</button>
          </S.Div>
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
    </>
  )
}
