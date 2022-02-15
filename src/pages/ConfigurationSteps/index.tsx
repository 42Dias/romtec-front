import DeleteButton from '../../ui/Components/DeleteButton/DeleteButton'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
// import Modal from 'react-modal'
import Modal from '../../ui/Components/Modal/Modal'
import * as S from './styled'
import { Checkbox, Switch } from 'antd'
import { TextField } from '../../ui/Components/TextField'
import { useForm } from 'react-hook-form'
import { FiPlus } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { api, ip } from '../../services/api'
import EditButton from '../../ui/Components/EditButton/EditButton'
import { FaEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'

type FormData = {
  numeroEtapa: string
  novaEtapa: string
  perfil: string
}

export default function ConfigurationSteps() {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenPhases, setIsOpenPhases] = useState(false)
  const [isOpenUpdate, setIsOpenUpdate] = useState(false)
  const [isOpenRegistro, setIsOpenRegistro] = useState(false)
  const [isOpenPreparacao, setIsOpenPreparacao] = useState(false)
  const [isOpenPerfuracao, setIsOpenPerfuracao] = useState(false)
  const [isOpenFerramental, setIsOpenFerramental] = useState(false)
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false)
  // eslint-disable-next-line
  const [etapas, setetapas] = useState<any[]>([])
  const [etapasColunas, setetapasColunas] = useState<any[]>([])
  const [idEtapa, setidEtapa] = useState('')
  const [numeroEtapa, setnumeroEtapa] = useState('')
  const [novaEtapa, setnovaEtapa] = useState('')
  const [perfil, setperfil] = useState('')
  const [configurationCrossings, setConfigurationCrossings] = useState<any[]>([])
  const link = '/etapas/'
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()
  let idConfigTravessia = window.location.hash.replace(ip + '/romtec/#/etapas-da-configuracao/', '')
  const [tipoEtapa, setTipoEtapa] = useState('')
  const [campoEntradaLatitude, setcampoEntradaLatitude] = useState(false)
  const [campoEntradaLongitude, setcampoEntradaLongitude] = useState(false)
  const [campoSaidaLatitude, setcampoSaidaLatitude] = useState(false)
  const [campoSaidaLongitude, setcampoSaidaLongitude] = useState(false)
  const [campoEntradaLatitude11, setcampoEntradaLatitude11] = useState(false)
  const [campoEntradaLongitude22, setcampoEntradaLongitude22] = useState(false)
  const [campoSaidaLatitude33, setcampoSaidaLatitude33] = useState(false)
  const [campoSaidaLongitude44, setcampoSaidaLongitude44] = useState(false)
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
  const [campoEntradaLatitude2, setcampoEntradaLatitude2] = useState(false)
  const [campoEntradaLongitude2, setcampoEntradaLongitude2] = useState(false)
  const [campoSaidaLatitude2, setcampoSaidaLatitude2] = useState(false)
  const [campoSaidaLongitude2, setcampoSaidaLongitude2] = useState(false)
  const [campoTipoSolo2, setcampoTipoSolo2] = useState(false)
  const [campoDiametroPerfuracao2, setcampoDiametroPerfuracao2] = useState(false)
  const [campoTipoRede2, setcampoTipoRede2] = useState(false)
  const [campoTipoTubulacao2, setcampoTipoTubulacao2] = useState(false)
  const [campoResponsel2, setcampoResponsel2] = useState(false)
  const [campoEquipamento2, setcampoEquipamento2] = useState(false)
  const [campoDocumento2, setcampoDocumento2] = useState(false)
  const [campoSondagemInterferencia2, setcampoSondagemInterferencia2] = useState(false)
  const [campoSondagem2, setcampoSondagem2] = useState(false)
  const [campoDiametroInterferencia2, setcampoDiametroInterferencia2] = useState(false)
  const [campoPlanoFuro2, setcampoPlanoFuro2] = useState(false)
  const [campoFerramentas2, setcampoFerramentas2] = useState(false)
  const [campoInfoEnvolvidas2, setcampoInfoEnvolvidas2] = useState(false)
  const [campoDiametro2, setcampoDiametro2] = useState(false)
  const [campoLocalizaDiretrizFuro2, setcampoLocalizaDiretrizFuro2] = useState(false)
  const [campoTipoInterferencia2, setcampoTipoInterferencia2] = useState(false)
  const [campoProfundidade2, setcampoProfundidade2] = useState(false)
  const [campoResponselTopografia2, setcampoResponselTopografia2] = useState(false)
  const [campoDataTopografia2, setcampoDataTopografia2] = useState(false)
  const [campoEmpresa2, setcampoEmpresa2] = useState(false)
  const [camponomePerfilAcesso2, setcamponomePerfilAcesso2] = useState(false)
  const [campodataExecucao2, setcampodataExecucao2] = useState(false)
  const [camporesponsavelExecucao2, setcamporesponsavelExecucao2] = useState(false)
  const [campohoraExecucao2, setcampohoraExecucao2] = useState(false)
  const [campocroquiMapeamento2, setcampocroquiMapeamento2] = useState(false)
  const [campoequipamentoUtilizado2, setcampoequipamentoUtilizado2] = useState(false)
  const [campomaterializacaoCampo2, setcampomaterializacaoCampo2] = useState(false)
  const [campoquantidadeInterferencias2, setcampoquantidadeInterferencias2] = useState(false)
  const [campoparaleloEsquerda2, setcampoparaleloEsquerda2] = useState(false)
  const [campoparaleloDireita2, setcampoparaleloDireita2] = useState(false)
  const [campoperpendicular2, setcampoperpendicular2] = useState(false)
  const [campolargura2, setcampolargura2] = useState(false)
  const [campocomprimento2, setcampocomprimento2] = useState(false)
  const [campoprofundidadeVala2, setcampoprofundidadeVala2] = useState(false)
  const [campoestacaReferencia2, setcampoestacaReferencia2] = useState(false)
  const [camponumeroHastes2, setcamponumeroHastes2] = useState(false)
  const [campoprofundidadePlanejada2, setcampoprofundidadePlanejada2] = useState(false)
  const [campoavancoPlanejado2, setcampoavancoPlanejado2] = useState(false)
  const [campoprofundidadeExecutada2, setcampoprofundidadeExecutada2] = useState(false)
  const [campoavancoExecutado2, setcampoavancoExecutado2] = useState(false)
  const [campoamarracao2, setcampoamarracao2] = useState(false)
  const [campomaquinaPerfuratriz2, setcampomaquinaPerfuratriz2] = useState(false)
  const [campodiametroAlargamento2, setcampodiametroAlargamento2] = useState(false)
  const [campotempoHaste2, setcampotempoHaste2] = useState(false)
  const [campovazaoBomba2, setcampovazaoBomba2] = useState(false)
  const [campotipoRedeTubula2, setcampotipoRedeTubula2] = useState(false)
  const [campodiametroRede2, setcampodiametroRede2] = useState(false)
  const [campoferramentasUtilizadas2, setcampoferramentasUtilizadas2] = useState(false)
  const [campomodeloAlargador2, setcampomodeloAlargador2] = useState(false)
  const [campocapacidadePortaFusilink2, setcampocapacidadePortaFusilink2] = useState(false)
  const [campoprofundidade, setcampoprofundidade] = useState(false)
  const [campocapacidadeSwivel2, setcampocapacidadeSwivel2] = useState(false)
  const [campodiametroInterferencia2, setcampodiametroInterferencia2] = useState(false)
  const [campotipoInterferencia2, setcampotipoInterferencia2] = useState(false)
  const [campoFluido2, setcampoFluido2] = useState(false)
  const [campoReceitaFluido2, setcampoReceitaFluido2] = useState(false)
  const [campos, setCampos] = useState(false)
  const [camposPreparacao, setCamposPreparacao] = useState(false)
  const [camposPerfuracao, setCamposPerfuracao] = useState(false)
  const [camposFerramental, setCamposFerramental] = useState(false)
  const [campoPortaSonda2, setcampoPortaSonda2] = useState(false)
  const [campoVolumePreparado2, setcampoVolumePreparado2] = useState(false)
  const [campoTesteVicosidade2, setcampoTesteVicosidade2] = useState(false)
  const [campoConfirmacaoProcedimento2, setcampoConfirmacaoProcedimento2] = useState(false)
  const [campoHastes2, setcampoHastes2] = useState(false)
  const [campoSonda2, setcampoSonda2] = useState(false)
  const [campopaPerfuracao2, setcampopaPerfuracao2] = useState(false)
  const [campoPullingHead2, setcampoPullingHead2] = useState(false)
  const [campoLocalizador2, setcampoLocalizador2] = useState(false)
  const [campoLuva2, setcampoLuva2] = useState(false)
  const [campoHasteInicial2, setcampoHasteInicial2] = useState(false)
  const [campoFlexobarra2, setcampoFlexobarra2] = useState(false)
  const [campoRadio2, setcampoRadio2] = useState(false)
  const [campoParafuso2, setcampoParafuso2] = useState(false)
  const [campoCondicaoFerramenta2, setcampoCondicaoFerramenta2] = useState(false)
  const [campoEmpresaProprietaria2, setcampoEmpresaProprietaria2] = useState(false)
  const [campoDiametroFerramenta2, setcampoDiametroFerramenta2] = useState(false)
  const [campoPEntrada, setcampoPEntrada] = useState(false)
  const [campoPSaida, setcampoPSaida] = useState(false)

  function handleCamposPEntrada() {
    if (campoPEntrada) {
      setcampoPEntrada(false)
    } else {
      setcampoPEntrada(true)
    }
  }

  function handleCamposcampoPSaida() {
    if (campoPSaida) {
      setcampoPSaida(false)
    } else {
      setcampoPSaida(true)
    }
  }

  function handleCampos() {
    if (campos) {
      setCampos(false)
    } else {
      setCampos(true)
    }
  }

  function handleCamposPreparacao() {
    if (camposPreparacao) {
      setCamposPreparacao(false)
    } else {
      setCamposPreparacao(true)
    }
  }

  function handleCamposPerfuracao() {
    if (camposPerfuracao) {
      setCamposPerfuracao(false)
    } else {
      setCamposPerfuracao(true)
    }
  }

  function handleCamposFerramental() {
    if (camposFerramental) {
      setCamposFerramental(false)
    } else {
      setCamposFerramental(true)
    }
  }

  function onSubmit(data: FormData) {
    console.log(data)
    Cadastro(data)
  }
  // eslint-disable-next-line
  async function Cadastro(submit: any) {
    setLoading(true)
    submit.idConfigTravessia = idConfigTravessia.replace('#/etapas-da-configuracao/', '')
    // eslint-disable-next-line
    const responser = api
      .post('etapas', {
        data: submit,
      })
      .then((response) => {
        console.log(response)
        if (response.statusText === 'OK') {
          toast.success('Cadastrada com sucesso!')
          setLoading(false)
          setIsOpen(false)
          reset()
          loadDados()
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

  async function loadDados() {
    setLoading(true)
    console.log('idConfigTravessia')
    console.log(idConfigTravessia.replace('#/etapas-da-configuracao/', ''))
    // eslint-disable-next-line
    await api.get(`etapas?filter%5BidConfigTravessia%5D=${idConfigTravessia.replace('#/etapas-da-configuracao/', '',)}`,)
      .then((response) => {
        console.log(response.data.rows)
        if (response.statusText === 'OK') {
          setetapas(response.data.rows)
          setLoading(false)
        }
      })
      .catch((res) => {
        console.log(res.response.data)
        toast.error(res.response.data)
        setLoading(false)
      })

    await api.get(`etapasColunas?filter%5BidConfigTravessia%5D=${idConfigTravessia.replace('#/etapas-da-configuracao/', '')}`,
    ).then((response) => {
      console.log(response.data.rows)
      if (response.statusText === 'OK') {
        setetapasColunas(response.data.rows)
        console.log(etapasColunas)
        console.log(response.data.count)
        if (response.data.count === 0) {
          const data = {
            numeroEtapa: numeroEtapa,
            novaEtapa: novaEtapa,
            perfil: perfil,
            tipoEtapa: tipoEtapa,
            idConfigTravessia: idConfigTravessia.replace('#/etapas-da-configuracao/', ''),
            campoEntradaLatitude: campoEntradaLatitude,
            campoEntradaLongitude: campoEntradaLongitude,
            campoSaidaLatitude: campoSaidaLatitude,
            campoSaidaLongitude: campoSaidaLongitude,
            campoTipoSolo: campoTipoSolo,
            campoDiametroPerfuracao: campoDiametroPerfuracao,
            campoTipoRede: campoTipoRede,
            campoTipoTubulacao: campoTipoTubulacao,
            campoResponsel: campoResponsel,
            campoEquipamento: campoEquipamento,
            campoDocumento: campoDocumento,
            campoEmpresa: campoEmpresa,
            campoSondagemInterferencia: campoSondagemInterferencia,
            campoSondagem: campoSondagem,
            campoDiametroInterferencia: campoDiametroInterferencia,
            campoPlanoFuro: campoPlanoFuro,
            campoFerramentas: campoFerramentas,
            campoInfoEnvolvidas: campoInfoEnvolvidas,
            campoDiametro: campoDiametro,
            campoLocalizaDiretrizFuro: campoLocalizaDiretrizFuro,
            campoTipoInterferencia: campoTipoInterferencia,
            campoProfundidade: campoProfundidade,
            campoResponselTopografia: campoResponselTopografia,
            campoDataTopografia: campoDataTopografia,
            nomePerfilAcesso: camponomePerfilAcesso,
            dataExecucao: campodataExecucao,
            responsavelExecucao: camporesponsavelExecucao,
            horaExecucao: campohoraExecucao,
            croquiMapeamento: campocroquiMapeamento,
            equipamentoUtilizado: campoequipamentoUtilizado,
            materializacaoCampo: campomaterializacaoCampo,
            quantidadeInterferencias: campoquantidadeInterferencias,
            paraleloEsquerda: campoparaleloEsquerda,
            paraleloDireita: campoparaleloDireita,
            perpendicular: campoperpendicular,
            profundidade: campoprofundidade,
            diametroInterferencia: campodiametroInterferencia,
            tipoInterferencia: campotipoInterferencia,
            largura: campolargura,
            comprimento: campocomprimento,
            profundidadeVala: campoprofundidadeVala,
            estacaReferencia: campoestacaReferencia,
            numeroHastes: camponumeroHastes,
            profundidadePlanejada: campoprofundidadePlanejada,
            avancoPlanejado: campoavancoPlanejado,
            profundidadeExecutada: campoprofundidadeExecutada,
            avancoExecutado: campoavancoExecutado,
            amarracao: campoamarracao,
            maquinaPerfuratriz: campomaquinaPerfuratriz,
            diametroAlargamento: campodiametroAlargamento,
            tempoHaste: campotempoHaste,
            vazaoBomba: campovazaoBomba,
            tipoRedeTubula: campotipoRedeTubula,
            diametroRede: campodiametroRede,
            ferramentasUtilizadas: campoferramentasUtilizadas,
            modeloAlargador: campomodeloAlargador,
            capacidadePortaFusilink: campocapacidadePortaFusilink,
            capacidadeSwivel: campocapacidadeSwivel,
            fluido: campoFluido,
            receitaFluido: campoReceitaFluido,
            portaSonda: campoPortaSonda,
            confirmacaoProcedimento: campoConfirmacaoProcedimento,
            volumePrepardo: campoVolumePreparado,
            testeVicosidade: campoTesteVicosidade,
            hastes: campoHastes,
            sonda: campoSonda,
            paPerfuracao: campopaPerfuracao,
            pullingHead: campoPullingHead,
            localizador: campoLocalizador,
            luva: campoLuva,
            hasteInicial: campoHasteInicial,
            flexoBarra: campoFlexobarra,
            radio: campoRadio,
            parafuso: campoParafuso,
            diametroFerramenta: campoDiametroFerramenta,
            condicaoFerramenta: campoCondicaoFerramenta,
            EmpresaProp: campoEmpresaProprietaria,
            empresaProprietaria: campoEmpresaProprietaria,
          }
          api
            .post('etapasColunas', {
              data: data,
            })
            .then((response) => {
              console.log(response)
              if (response.statusText === 'OK') {
                toast.success('Cadastrada com sucesso!')
                setLoading(false)
                setIsOpen(false)
                reset()
                loadDados()
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
        } else {
          // etapasColunas.map((etapasColuna)=>{
          console.log(response.data.rows[0].campoEntradaLatitude)
          setcampoEntradaLatitude(response.data.rows[0].campoEntradaLatitude)
          setcampoEntradaLongitude(response.data.rows[0].campoEntradaLongitude)
          setcampoSaidaLatitude(response.data.rows[0].campoSaidaLatitude)
          setcampoSaidaLongitude(response.data.rows[0].campoSaidaLongitude)
          setcampoEntradaLatitude11(response.data.rows[0].campoEntradaLatitude)
          setcampoEntradaLongitude22(response.data.rows[0].campoEntradaLongitude)
          setcampoSaidaLatitude33(response.data.rows[0].campoSaidaLatitude)
          setcampoSaidaLongitude44(response.data.rows[0].campoSaidaLongitude)
          setcampoTipoSolo(response.data.rows[0].campoTipoSolo)
          setcampoDiametroPerfuracao(response.data.rows[0].campoDiametroPerfuracao)
          setcampoTipoRede(response.data.rows[0].campoTipoRede)
          setcampoTipoTubulacao(response.data.rows[0].campoTipoTubulacao)
          setcampoResponsel(response.data.rows[0].campoResponsel)
          setcampoEquipamento(response.data.rows[0].campoEquipamento)
          setcampoSondagemInterferencia(response.data.rows[0].campoSondagemInterferencia)
          setcampoDocumento(response.data.rows[0].campoDocumento)
          setcampoEmpresa(response.data.rows[0].campoEmpresa)
          setcampoSondagem(response.data.rows[0].campoSondagem)
          setcampoDiametroInterferencia(response.data.rows[0].campoDiametroInterferencia)
          setcampoPlanoFuro(response.data.rows[0].campoPlanoFuro)
          setcampoFerramentas(response.data.rows[0].campoFerramentas)
          setcampoInfoEnvolvidas(response.data.rows[0].campoInfoEnvolvidas)
          setcampoDiametro(response.data.rows[0].campoDiametro)
          setcampoLocalizaDiretrizFuro(response.data.rows[0].campoLocalizaDiretrizFuro)
          setcampoTipoInterferencia(response.data.rows[0].campoTipoInterferencia)
          setcampotipoInterferencia(response.data.rows[0].tipoInterferencia)
          setcampoProfundidade(response.data.rows[0].campoProfundidade)
          setcampoResponselTopografia(response.data.rows[0].campoResponselTopografia)
          setcampoDataTopografia(response.data.rows[0].campoDataTopografia)
          setcamponomePerfilAcesso(response.data.rows[0].nomePerfilAcesso)
          setcampodataExecucao(response.data.rows[0].dataExecucao)
          setcamporesponsavelExecucao(response.data.rows[0].responsavelExecucao)
          setcampohoraExecucao(response.data.rows[0].horaExecucao)
          setcampocroquiMapeamento(response.data.rows[0].croquiMapeamento)
          setcampoequipamentoUtilizado(response.data.rows[0].equipamentoUtilizado)
          setcampomaterializacaoCampo(response.data.rows[0].materializacaoCampo)
          setcampoquantidadeInterferencias(response.data.rows[0].quantidadeInterferencias)
          setcampoparaleloEsquerda(response.data.rows[0].paraleloEsquerda)
          setcampoparaleloDireita(response.data.rows[0].paraleloDireita)
          setcampoperpendicular(response.data.rows[0].perpendicular)
          setcampolargura(response.data.rows[0].largura)
          setcampocomprimento(response.data.rows[0].comprimento)
          setcampoprofundidadeVala(response.data.rows[0].profundidadeVala)
          setcampoestacaReferencia(response.data.rows[0].estacaReferencia)
          setcamponumeroHastes(response.data.rows[0].numeroHastes)
          setcampoprofundidadePlanejada(response.data.rows[0].profundidadePlanejada)
          setcampoavancoPlanejado(response.data.rows[0].avancoPlanejado)
          setcampoprofundidadeExecutada(response.data.rows[0].profundidadeExecutada)
          setcampoavancoExecutado(response.data.rows[0].avancoExecutado)
          setcampoamarracao(response.data.rows[0].amarracao)
          setcampomaquinaPerfuratriz(response.data.rows[0].maquinaPerfuratriz)
          setcampodiametroAlargamento(response.data.rows[0].diametroAlargamento)
          setcampotempoHaste(response.data.rows[0].tempoHaste)
          setcampovazaoBomba(response.data.rows[0].vazaoBomba)
          setcampotipoRedeTubula(response.data.rows[0].tipoRedeTubula)
          setcampodiametroRede(response.data.rows[0].diametroRede)
          setcampoferramentasUtilizadas(response.data.rows[0].ferramentasUtilizadas)
          setcampomodeloAlargador(response.data.rows[0].modeloAlargador)
          setcampocapacidadePortaFusilink(response.data.rows[0].capacidadePortaFusilink)
          setcampocapacidadeSwivel(response.data.rows[0].capacidadeSwivel)
          setcampoFluido(response.data.rows[0].fluido)
          setcampoReceitaFluido(response.data.rows[0].receitaFluido)

          setcampoPortaSonda(response.data.rows[0].portaSonda)
          setcampoVolumePreparado(response.data.rows[0].volumePrepardo)
          setcampoTesteVicosidade(response.data.rows[0].testeVicosidade)
          setcampoConfirmacaoProcedimento(response.data.rows[0].confirmacaoProcedimento)
          setcampoHastes(response.data.rows[0].hastes)
          setcampoSonda(response.data.rows[0].sonda)
          setcampopaPerfuracao(response.data.rows[0].paPerfuracao)
          setcampoPullingHead(response.data.rows[0].pullingHead)
          setcampoLocalizador(response.data.rows[0].localizador)
          setcampoLuva(response.data.rows[0].luva)
          setcampoHasteInicial(response.data.rows[0].hasteInicial)
          setcampoFlexobarra(response.data.rows[0].flexoBarra)
          setcampoRadio(response.data.rows[0].radio)
          setcampoParafuso(response.data.rows[0].parafuso)
          setcampoCondicaoFerramenta(response.data.rows[0].condicaoFerramenta)
          setcampoEmpresaProprietaria(response.data.rows[0].empresaProp)
          setcampoEmpresaProprietaria(response.data.rows[0].empresaProprietaria)
          setcampoDiametroFerramenta(response.data.rows[0].diametroFerramenta)
          // })
        }
        // setTipoEtapa()
        setLoading(false)
      }
    })
      .catch((res) => {
        console.log(res.response.data)
        toast.error(res.response.data)
        setLoading(false)
      })
  }
  async function deleteDados(etapa: any) {
    setLoading(true)
    // eslint-disable-next-line
    if (etapa.campoEntradaLatitude) {
      etapa.campoEntradaLatitude = false
    } else {
      etapa.campoEntradaLatitude = etapasColunas[0].campoEntradaLatitude
    }

    if (etapa.campoEntradaLongitude) {
      etapa.campoEntradaLongitude = false
    } else {
      etapa.campoEntradaLongitude = etapasColunas[0].campoEntradaLongitude
    }

    if (etapa.campoSaidaLatitude) {
      etapa.campoSaidaLatitude = false
    } else {
      etapa.campoSaidaLatitude = etapasColunas[0].campoSaidaLatitude
    }

    if (etapa.campoSaidaLongitude) {
      etapa.campoSaidaLongitude = false
    } else {
      etapa.campoSaidaLongitude = etapasColunas[0].campoSaidaLongitude
    }

    if (etapa.campoTipoSolo) {
      etapa.campoTipoSolo = false
    } else {
      etapa.campoTipoSolo = etapasColunas[0].campoTipoSolo
    }

    if (etapa.campoDiametroPerfuracao) {
      etapa.campoDiametroPerfuracao = false
    } else {
      etapa.campoDiametroPerfuracao = etapasColunas[0].campoDiametroPerfuracao
    }

    if (etapa.campoTipoRede) {
      etapa.campoTipoRede = false
    } else {
      etapa.campoTipoRede = etapasColunas[0].campoTipoRede
    }

    if (etapa.campoTipoTubulacao) {
      etapa.campoTipoTubulacao = false
    } else {
      etapa.campoTipoTubulacao = etapasColunas[0].campoTipoTubulacao
    }

    if (etapa.campoResponsel) {
      etapa.campoResponsel = false
    } else {
      etapa.campoResponsel = etapasColunas[0].campoResponsel
    }

    if (etapa.campoEquipamento) {
      etapa.campoEquipamento = false
    } else {
      etapa.campoEquipamento = etapasColunas[0].campoEquipamento
    }

    if (etapa.campoDocumento) {
      etapa.campoDocumento = false
    } else {
      etapa.campoDocumento = etapasColunas[0].campoDocumento
    }

    if (etapa.campoEmpresa) {
      etapa.campoEmpresa = false
    } else {
      etapa.campoEmpresa = etapasColunas[0].campoEmpresa
    }

    if (etapa.campoSondagemInterferencia) {
      etapa.campoSondagemInterferencia = false
    } else {
      etapa.campoSondagemInterferencia = etapasColunas[0].campoSondagemInterferencia
    }

    if (etapa.campoSondagem) {
      etapa.campoSondagem = false
    } else {
      etapa.campoSondagem = etapasColunas[0].campoSondagem
    }

    if (etapa.campoDiametroInterferencia) {
      etapa.campoDiametroInterferencia = false
    } else {
      etapa.campoDiametroInterferencia = etapasColunas[0].campoDiametroInterferencia
    }

    if (etapa.campoPlanoFuro) {
      etapa.campoPlanoFuro = false
    } else {
      etapa.campoPlanoFuro = etapasColunas[0].campoPlanoFuro
    }

    if (etapa.campoFerramentas) {
      etapa.campoFerramentas = false
    } else {
      etapa.campoFerramentas = etapasColunas[0].campoFerramentas
    }

    if (etapa.campoInfoEnvolvidas) {
      etapa.campoInfoEnvolvidas = false
    } else {
      etapa.campoInfoEnvolvidas = etapasColunas[0].campoInfoEnvolvidas
    }

    if (etapa.campoDiametro) {
      etapa.campoDiametro = false
    } else {
      etapa.campoDiametro = etapasColunas[0].campoDiametro
    }

    if (etapa.campoLocalizaDiretrizFuro) {
      etapa.campoLocalizaDiretrizFuro = false
    } else {
      etapa.campoLocalizaDiretrizFuro = etapasColunas[0].campoLocalizaDiretrizFuro
    }

    if (etapa.campoTipoInterferencia) {
      etapa.campoTipoInterferencia = false
    } else {
      etapa.campoTipoInterferencia = etapasColunas[0].campoTipoInterferencia
    }

    if (etapa.campoProfundidade) {
      etapa.campoProfundidade = false
    } else {
      etapa.campoProfundidade = etapasColunas[0].campoProfundidade
    }

    if (etapa.campoResponselTopografia) {
      etapa.campoResponselTopografia = false
    } else {
      etapa.campoResponselTopografia = etapasColunas[0].campoResponselTopografia
    }

    if (etapa.campoDataTopografia) {
      etapa.campoDataTopografia = false
    } else {
      etapa.campoDataTopografia = etapasColunas[0].campoDataTopografia
    }

    if (etapa.nomePerfilAcesso) {
      etapa.nomePerfilAcesso = false
    } else {
      etapa.nomePerfilAcesso = etapasColunas[0].nomePerfilAcesso
    }

    if (etapa.dataExecucao) {
      etapa.dataExecucao = false
    } else {
      etapa.dataExecucao = etapasColunas[0].dataExecucao
    }

    if (etapa.responsavelExecucao) {
      etapa.responsavelExecucao = false
    } else {
      etapa.responsavelExecucao = etapasColunas[0].responsavelExecucao
    }

    if (etapa.horaExecucao) {
      etapa.horaExecucao = false
    } else {
      etapa.horaExecucao = etapasColunas[0].horaExecucao
    }

    if (etapa.croquiMapeamento) {
      etapa.croquiMapeamento = false
    } else {
      etapa.croquiMapeamento = etapasColunas[0].croquiMapeamento
    }

    if (etapa.equipamentoUtilizado) {
      etapa.equipamentoUtilizado = false
    } else {
      etapa.equipamentoUtilizado = etapasColunas[0].equipamentoUtilizado
    }

    if (etapa.materializacaoCampo) {
      etapa.materializacaoCampo = false
    } else {
      etapa.materializacaoCampo = etapasColunas[0].materializacaoCampo
    }

    if (etapa.quantidadeInterferencias) {
      etapa.quantidadeInterferencias = false
    } else {
      etapa.quantidadeInterferencias = etapasColunas[0].quantidadeInterferencias
    }

    if (etapa.paraleloEsquerda) {
      etapa.paraleloEsquerda = false
    } else {
      etapa.paraleloEsquerda = etapasColunas[0].paraleloEsquerda
    }

    if (etapa.paraleloDireita) {
      etapa.paraleloDireita = false
    } else {
      etapa.paraleloDireita = etapasColunas[0].paraleloDireita
    }

    if (etapa.perpendicular) {
      etapa.perpendicular = false
    } else {
      etapa.perpendicular = etapasColunas[0].perpendicular
    }

    if (etapa.profundidade) {
      etapa.profundidade = false
    } else {
      etapa.profundidade = etapasColunas[0].profundidade
    }

    if (etapa.diametroInterferencia) {
      etapa.diametroInterferencia = false
    } else {
      etapa.diametroInterferencia = etapasColunas[0].diametroInterferencia
    }

    if (etapa.tipoInterferencia) {
      etapa.tipoInterferencia = false
    } else {
      etapa.tipoInterferencia = etapasColunas[0].tipoInterferencia
    }

    if (etapa.largura) {
      etapa.largura = false
    } else {
      etapa.largura = etapasColunas[0].largura
    }

    if (etapa.comprimento) {
      etapa.comprimento = false
    } else {
      etapa.comprimento = etapasColunas[0].comprimento
    }

    if (etapa.profundidadeVala) {
      etapa.profundidadeVala = false
    } else {
      etapa.profundidadeVala = etapasColunas[0].profundidadeVala
    }

    if (etapa.estacaReferencia) {
      etapa.estacaReferencia = false
    } else {
      etapa.estacaReferencia = etapasColunas[0].estacaReferencia
    }

    if (etapa.numeroHastes) {
      etapa.numeroHastes = false
    } else {
      etapa.numeroHastes = etapasColunas[0].numeroHastes
    }

    if (etapa.profundidadePlanejada) {
      etapa.profundidadePlanejada = false
    } else {
      etapa.profundidadePlanejada = etapasColunas[0].profundidadePlanejada
    }

    if (etapa.avancoPlanejado) {
      etapa.avancoPlanejado = false
    } else {
      etapa.avancoPlanejado = etapasColunas[0].avancoPlanejado
    }

    if (etapa.profundidadeExecutada) {
      etapa.profundidadeExecutada = false
    } else {
      etapa.profundidadeExecutada = etapasColunas[0].profundidadeExecutada
    }

    if (etapa.avancoExecutado) {
      etapa.avancoExecutado = false
    } else {
      etapa.avancoExecutado = etapasColunas[0].avancoExecutado
    }

    if (etapa.amarracao) {
      etapa.amarracao = false
    } else {
      etapa.amarracao = etapasColunas[0].amarracao
    }

    if (etapa.maquinaPerfuratriz) {
      etapa.maquinaPerfuratriz = false
    } else {
      etapa.maquinaPerfuratriz = etapasColunas[0].maquinaPerfuratriz
    }

    if (etapa.diametroAlargamento) {
      etapa.diametroAlargamento = false
    } else {
      etapa.diametroAlargamento = etapasColunas[0].diametroAlargamento
    }

    if (etapa.tempoHaste) {
      etapa.tempoHaste = false
    } else {
      etapa.tempoHaste = etapasColunas[0].tempoHaste
    }

    if (etapa.vazaoBomba) {
      etapa.vazaoBomba = false
    } else {
      etapa.vazaoBomba = etapasColunas[0].vazaoBomba
    }

    if (etapa.tipoRedeTubula) {
      etapa.tipoRedeTubula = false
    } else {
      etapa.tipoRedeTubula = etapasColunas[0].tipoRedeTubula
    }

    if (etapa.diametroRede) {
      etapa.diametroRede = false
    } else {
      etapa.diametroRede = etapasColunas[0].diametroRede
    }

    if (etapa.ferramentasUtilizadas) {
      etapa.ferramentasUtilizadas = false
    } else {
      etapa.ferramentasUtilizadas = etapasColunas[0].ferramentasUtilizadas
    }

    if (etapa.modeloAlargador) {
      etapa.modeloAlargador = false
    } else {
      etapa.modeloAlargador = etapasColunas[0].modeloAlargador
    }

    if (etapa.capacidadePortaFusilink) {
      etapa.capacidadePortaFusilink = false
    } else {
      etapa.capacidadePortaFusilink = etapasColunas[0].capacidadePortaFusilink
    }

    if (etapa.capacidadeSwivel) {
      etapa.capacidadeSwivel = false
    } else {
      etapa.capacidadeSwivel = etapasColunas[0].capacidadeSwivel
    }

    if (etapa.fluido) {
      etapa.fluido = false
    } else {
      etapa.fluido = etapasColunas[0].fluido
    }

    if (etapa.receitaFluido) {
      etapa.receitaFluido = false
    } else {
      etapa.receitaFluido = etapasColunas[0].receitaFluido
    }

    if (etapa.portaSonda) {
      etapa.portaSonda = false
    } else {
      etapa.portaSonda = etapasColunas[0].portaSonda
    }

    if (etapa.confirmacaoProcedimento) {
      etapa.confirmacaoProcedimento = false
    } else {
      etapa.confirmacaoProcedimento = etapasColunas[0].confirmacaoProcedimento
    }

    if (etapa.volumePrepardo) {
      etapa.volumePrepardo = false
    } else {
      etapa.volumePrepardo = etapasColunas[0].volumePrepardo
    }

    if (etapa.testeVicosidade) {
      etapa.testeVicosidade = false
    } else {
      etapa.testeVicosidade = etapasColunas[0].testeVicosidade
    }

    if (etapa.hastes) {
      etapa.hastes = false
    } else {
      etapa.hastes = etapasColunas[0].hastes
    }

    if (etapa.sonda) {
      etapa.sonda = false
    } else {
      etapa.sonda = etapasColunas[0].sonda
    }

    if (etapa.paPerfuracao) {
      etapa.paPerfuracao = false
    } else {
      etapa.paPerfuracao = etapasColunas[0].paPerfuracao
    }

    if (etapa.pullingHead) {
      etapa.pullingHead = false
    } else {
      etapa.pullingHead = etapasColunas[0].pullingHead
    }

    if (etapa.localizador) {
      etapa.localizador = false
    } else {
      etapa.localizador = etapasColunas[0].localizador
    }

    if (etapa.luva) {
      etapa.luva = false
    } else {
      etapa.luva = etapasColunas[0].luva
    }

    if (etapa.hasteInicial) {
      etapa.hasteInicial = false
    } else {
      etapa.hasteInicial = etapasColunas[0].hasteInicial
    }

    if (etapa.flexoBarra) {
      etapa.flexoBarra = false
    } else {
      etapa.flexoBarra = etapasColunas[0].flexoBarra
    }

    if (etapa.radio) {
      etapa.radio = false
    } else {
      etapa.radio = etapasColunas[0].radio
    }

    if (etapa.parafuso) {
      etapa.parafuso = false
    } else {
      etapa.parafuso = etapasColunas[0].parafuso
    }

    if (etapa.diametroFerramenta) {
      etapa.diametroFerramenta = false
    } else {
      etapa.diametroFerramenta = etapasColunas[0].diametroFerramenta
    }

    if (etapa.condicaoFerramenta) {
      etapa.condicaoFerramenta = false
    } else {
      etapa.condicaoFerramenta = etapasColunas[0].condicaoFerramenta
    }

    if (etapa.EmpresaProp) {
      etapa.EmpresaProp = false
    } else {
      etapa.EmpresaProp = etapasColunas[0].EmpresaProp
    }

    if (etapa.empresaProprietaria) {
      etapa.empresaProprietaria = false
    } else {
      etapa.empresaProprietaria = etapasColunas[0].empresaProprietaria
    }
    api.delete('etapas/' + etapa.id)
      .then((response) => {
        if (response.statusText === 'OK') {
          api.put('etapasColunas/' + etapasColunas[0].id, {
            data: etapa,
          })
            .then((response) => {
              if (response.statusText === 'OK') {
                loadDados()
                setIsOpenUpdate(false)
                setLoading(false)
              }
            })
            .catch((error) => {
              setLoading(false)
              toast.error(error.response.data)
            })
          loadDados()
          setLoading(false)
        }
      })
      .catch((res) => {
        console.log(res.response)
        toast.error(res.response)
        setLoading(false)
      })
  }
  function update(dados: any, banco: string) {
    console.log('dados')
    console.log(dados)
    if (banco === 'etapas') {
      setidEtapa(dados.id)
      setnumeroEtapa(dados.numeroEtapa)
      setnovaEtapa(dados.novaEtapa)
      setperfil(dados.perfil)
      setcampoEntradaLatitude2(dados.campoEntradaLatitude)
      setcampoEntradaLongitude2(dados.campoEntradaLongitude)
      setcampoSaidaLatitude2(dados.campoSaidaLatitude)
      setcampoSaidaLongitude2(dados.campoSaidaLongitude)
      setcampoTipoSolo2(dados.campoTipoSolo)
      setcampoDiametroPerfuracao2(dados.campoDiametroPerfuracao)
      setcampoTipoRede2(dados.campoTipoRede)
      setcampoTipoTubulacao2(dados.campoTipoTubulacao)
      setcampoResponsel2(dados.campoResponsel)
      setcampoEquipamento2(dados.campoEquipamento)
      setcampoSondagemInterferencia2(dados.campoSondagemInterferencia)
      setcampoDocumento2(dados.campoDocumento)
      setcampoEmpresa2(dados.campoEmpresa)
      setcampoSondagem2(dados.campoSondagem)
      setcampoDiametroInterferencia2(dados.campoDiametroInterferencia)
      setcampoPlanoFuro2(dados.campoPlanoFuro)
      setcampoFerramentas2(dados.campoFerramentas)
      setcampoInfoEnvolvidas2(dados.campoInfoEnvolvidas)
      setcampoDiametro2(dados.campoDiametro)
      setcampoLocalizaDiretrizFuro2(dados.campoLocalizaDiretrizFuro)
      setcampoTipoInterferencia2(dados.campoTipoInterferencia)
      setcampoProfundidade2(dados.campoProfundidade)
      setcampoResponselTopografia2(dados.campoResponselTopografia)
      setcampoDataTopografia2(dados.campoDataTopografia)
      setcamponomePerfilAcesso2(dados.nomePerfilAcesso)
      setcampodataExecucao2(dados.dataExecucao)
      setcamporesponsavelExecucao2(dados.responsavelExecucao)
      setcampohoraExecucao2(dados.horaExecucao)
      setcampocroquiMapeamento2(dados.croquiMapeamento)
      setcampoequipamentoUtilizado2(dados.equipamentoUtilizado)
      setcampomaterializacaoCampo2(dados.materializacaoCampo)
      setcampoquantidadeInterferencias2(dados.quantidadeInterferencias)
      setcampoparaleloEsquerda2(dados.paraleloEsquerda)
      setcampoparaleloDireita2(dados.paraleloDireita)
      setcampoperpendicular2(dados.perpendicular)
      setcampolargura2(dados.largura)
      setcampocomprimento2(dados.comprimento)
      setcampoprofundidadeVala2(dados.profundidadeVala)
      setcampoestacaReferencia2(dados.estacaReferencia)
      setcamponumeroHastes2(dados.numeroHastes)
      setcampoprofundidadePlanejada2(dados.profundidadePlanejada)
      setcampoavancoPlanejado2(dados.avancoPlanejado)
      setcampoprofundidadeExecutada2(dados.profundidadeExecutada)
      setcampoavancoExecutado2(dados.avancoExecutado)
      setcampoamarracao2(dados.amarracao)
      setcampomaquinaPerfuratriz2(dados.maquinaPerfuratriz)
      setcampodiametroAlargamento2(dados.diametroAlargamento)
      setcampotempoHaste2(dados.tempoHaste)
      setcampovazaoBomba2(dados.vazaoBomba)
      setcampotipoRedeTubula2(dados.tipoRedeTubula)
      setcampodiametroRede2(dados.diametroRede)
      setcampoferramentasUtilizadas2(dados.ferramentasUtilizadas)
      setcampomodeloAlargador2(dados.modeloAlargador)
      setcampocapacidadePortaFusilink2(dados.capacidadePortaFusilink)
      setcampocapacidadeSwivel2(dados.capacidadeSwivel)
      setcampoFluido2(dados.fluido)
      setcampoReceitaFluido2(dados.receitaFluido)

      setcampoPortaSonda2(dados.portaSonda)
      setcampoVolumePreparado2(dados.volumePrepardo)
      setcampoTesteVicosidade2(dados.testeVicosidade)
      setcampoConfirmacaoProcedimento2(dados.confirmacaoProcedimento)
      setcampoHastes2(dados.hastes)
      setcampoSonda2(dados.sonda)
      setcampopaPerfuracao2(dados.paPerfuracao)
      setcampoPullingHead2(dados.pullingHead)
      setcampoLocalizador2(dados.localizador)
      setcampoLuva2(dados.luva)
      setcampoHasteInicial2(dados.hasteInicial)
      setcampoFlexobarra2(dados.flexoBarra)
      setcampoRadio2(dados.radio)
      setcampoParafuso2(dados.parafuso)
      setcampoCondicaoFerramenta2(dados.condicaoFerramenta)
      setcampoEmpresaProprietaria2(dados.empresaProprietaria)
      setcampoDiametroFerramenta2(dados.diametroFerramenta)
      setidEtapa(dados.id)
      setnumeroEtapa(dados.numeroEtapa)
      setnovaEtapa(dados.novaEtapa)
      setperfil(dados.perfil)
      setTipoEtapa(dados.tipoEtapa)
      setIsOpenUpdate(true)
    } else {
      updateDados()
    }
  }
  async function updateDados() {
    setLoading(true)
    console.log(etapas)
    const data = {
      numeroEtapa: numeroEtapa,
      novaEtapa: novaEtapa,
      perfil: perfil,
      tipoEtapa: tipoEtapa,
      campoEntradaLatitude: campoEntradaLatitude,
      campoEntradaLongitude: campoEntradaLongitude,
      campoSaidaLatitude: campoSaidaLatitude,
      campoSaidaLongitude: campoSaidaLongitude,
      campoTipoSolo: campoTipoSolo,
      campoDiametroPerfuracao: campoDiametroPerfuracao,
      campoTipoRede: campoTipoRede,
      campoTipoTubulacao: campoTipoTubulacao,
      campoResponsel: campoResponsel,
      campoEquipamento: campoEquipamento,
      campoDocumento: campoDocumento,
      campoEmpresa: campoEmpresa,
      campoSondagemInterferencia: campoSondagemInterferencia,
      campoSondagem: campoSondagem,
      campoDiametroInterferencia: campoDiametroInterferencia,
      campoPlanoFuro: campoPlanoFuro,
      campoFerramentas: campoFerramentas,
      campoInfoEnvolvidas: campoInfoEnvolvidas,
      campoDiametro: campoDiametro,
      campoLocalizaDiretrizFuro: campoLocalizaDiretrizFuro,
      campoTipoInterferencia: campoTipoInterferencia,
      campoProfundidade: campoProfundidade,
      campoResponselTopografia: campoResponselTopografia,
      campoDataTopografia: campoDataTopografia,
      nomePerfilAcesso: camponomePerfilAcesso,
      dataExecucao: campodataExecucao,
      responsavelExecucao: camporesponsavelExecucao,
      horaExecucao: campohoraExecucao,
      croquiMapeamento: campocroquiMapeamento,
      equipamentoUtilizado: campoequipamentoUtilizado,
      materializacaoCampo: campomaterializacaoCampo,
      quantidadeInterferencias: campoquantidadeInterferencias,
      paraleloEsquerda: campoparaleloEsquerda,
      paraleloDireita: campoparaleloDireita,
      perpendicular: campoperpendicular,
      profundidade: campoprofundidade,
      diametroInterferencia: campodiametroInterferencia,
      tipoInterferencia: campotipoInterferencia,
      largura: campolargura,
      comprimento: campocomprimento,
      profundidadeVala: campoprofundidadeVala,
      estacaReferencia: campoestacaReferencia,
      numeroHastes: camponumeroHastes,
      profundidadePlanejada: campoprofundidadePlanejada,
      avancoPlanejado: campoavancoPlanejado,
      profundidadeExecutada: campoprofundidadeExecutada,
      avancoExecutado: campoavancoExecutado,
      amarracao: campoamarracao,
      maquinaPerfuratriz: campomaquinaPerfuratriz,
      diametroAlargamento: campodiametroAlargamento,
      tempoHaste: campotempoHaste,
      vazaoBomba: campovazaoBomba,
      tipoRedeTubula: campotipoRedeTubula,
      diametroRede: campodiametroRede,
      ferramentasUtilizadas: campoferramentasUtilizadas,
      modeloAlargador: campomodeloAlargador,
      capacidadePortaFusilink: campocapacidadePortaFusilink,
      capacidadeSwivel: campocapacidadeSwivel,
      fluido: campoFluido,
      receitaFluido: campoReceitaFluido,
      portaSonda: campoPortaSonda,
      confirmacaoProcedimento: campoConfirmacaoProcedimento,
      volumePrepardo: campoVolumePreparado,
      testeVicosidade: campoTesteVicosidade,
      hastes: campoHastes,
      sonda: campoSonda,
      paPerfuracao: campopaPerfuracao,
      pullingHead: campoPullingHead,
      localizador: campoLocalizador,
      luva: campoLuva,
      hasteInicial: campoHasteInicial,
      flexoBarra: campoFlexobarra,
      radio: campoRadio,
      parafuso: campoParafuso,
      diametroFerramenta: campoDiametroFerramenta,
      condicaoFerramenta: campoCondicaoFerramenta,
      EmpresaProp: campoEmpresaProprietaria,
      empresaProprietaria: campoEmpresaProprietaria,
    }

    const data2 = {
      numeroEtapa: numeroEtapa,
      novaEtapa: novaEtapa,
      perfil: perfil,
      tipoEtapa: tipoEtapa,
      campoEntradaLatitude: campoEntradaLatitude2,
      campoEntradaLongitude: campoEntradaLongitude2,
      campoSaidaLatitude: campoSaidaLatitude2,
      campoSaidaLongitude: campoSaidaLongitude2,
      campoTipoSolo: campoTipoSolo2,
      campoDiametroPerfuracao: campoDiametroPerfuracao2,
      campoTipoRede: campoTipoRede2,
      campoTipoTubulacao: campoTipoTubulacao2,
      campoResponsel: campoResponsel2,
      campoEquipamento: campoEquipamento2,
      campoDocumento: campoDocumento2,
      campoEmpresa: campoEmpresa2,
      campoSondagemInterferencia: campoSondagemInterferencia2,
      campoSondagem: campoSondagem2,
      campoDiametroInterferencia: campoDiametroInterferencia2,
      campoPlanoFuro: campoPlanoFuro2,
      campoFerramentas: campoFerramentas2,
      campoInfoEnvolvidas: campoInfoEnvolvidas2,
      campoDiametro: campoDiametro2,
      campoLocalizaDiretrizFuro: campoLocalizaDiretrizFuro2,
      campoTipoInterferencia: campoTipoInterferencia2,
      campoProfundidade: campoProfundidade2,
      campoResponselTopografia: campoResponselTopografia2,
      campoDataTopografia: campoDataTopografia2,
      nomePerfilAcesso: camponomePerfilAcesso2,
      dataExecucao: campodataExecucao2,
      responsavelExecucao: camporesponsavelExecucao2,
      horaExecucao: campohoraExecucao2,
      croquiMapeamento: campocroquiMapeamento2,
      equipamentoUtilizado: campoequipamentoUtilizado2,
      materializacaoCampo: campomaterializacaoCampo2,
      quantidadeInterferencias: campoquantidadeInterferencias2,
      paraleloEsquerda: campoparaleloEsquerda2,
      paraleloDireita: campoparaleloDireita2,
      perpendicular: campoperpendicular2,
      diametroInterferencia: campodiametroInterferencia2,
      tipoInterferencia: campotipoInterferencia2,
      largura: campolargura2,
      comprimento: campocomprimento2,
      profundidadeVala: campoprofundidadeVala2,
      estacaReferencia: campoestacaReferencia2,
      numeroHastes: camponumeroHastes2,
      profundidadePlanejada: campoprofundidadePlanejada2,
      avancoPlanejado: campoavancoPlanejado2,
      profundidadeExecutada: campoprofundidadeExecutada2,
      avancoExecutado: campoavancoExecutado2,
      amarracao: campoamarracao2,
      maquinaPerfuratriz: campomaquinaPerfuratriz2,
      diametroAlargamento: campodiametroAlargamento2,
      tempoHaste: campotempoHaste2,
      vazaoBomba: campovazaoBomba2,
      tipoRedeTubula: campotipoRedeTubula2,
      diametroRede: campodiametroRede2,
      ferramentasUtilizadas: campoferramentasUtilizadas2,
      modeloAlargador: campomodeloAlargador2,
      capacidadePortaFusilink: campocapacidadePortaFusilink2,
      capacidadeSwivel: campocapacidadeSwivel2,
      fluido: campoFluido2,
      receitaFluido: campoReceitaFluido2,
      portaSonda: campoPortaSonda2,
      confirmacaoProcedimento: campoConfirmacaoProcedimento2,
      volumePrepardo: campoVolumePreparado2,
      testeVicosidade: campoTesteVicosidade2,
      hastes: campoHastes2,
      sonda: campoSonda2,
      paPerfuracao: campopaPerfuracao2,
      pullingHead: campoPullingHead2,
      localizador: campoLocalizador2,
      luva: campoLuva2,
      hasteInicial: campoHasteInicial2,
      flexoBarra: campoFlexobarra2,
      radio: campoRadio2,
      parafuso: campoParafuso2,
      diametroFerramenta: campoDiametroFerramenta2,
      condicaoFerramenta: campoCondicaoFerramenta2,
      EmpresaProp: campoEmpresaProprietaria2,
      empresaProprietaria: campoEmpresaProprietaria2,
    }
    console.log(data)
    api
      .put('etapas/' + idEtapa, {
        data: data2,
      })
      .then((response) => {
        if (response.statusText === 'OK') {
          loadDados()
          setIsOpenUpdate(false)
          setLoading(false)
        }
      })
      .catch((error) => {
        setLoading(false)
        toast.error(error.response.data)
      })
    api
      .put('etapasColunas/' + etapasColunas[0].id, {
        data: data,
      })
      .then((response) => {
        if (response.statusText === 'OK') {
          loadDados()
          setIsOpenUpdate(false)
          setLoading(false)
        }
      })
      .catch((error) => {
        setLoading(false)
        toast.error(error.response.data)
      })
    setIsOpenPhases(false)
    window.location.href
    setcampoEntradaLatitude2(false)
    setcampoEntradaLongitude2(false)
    setcampoSaidaLatitude2(false)
    setcampoSaidaLongitude2(false)
    setcampoTipoSolo2(false)
    setcampoDiametroPerfuracao2(false)
    setcampoTipoRede2(false)
    setcampoTipoTubulacao2(false)
    setcampoResponsel2(false)
    setcampoEquipamento2(false)
    setcampoSondagemInterferencia2(false)
    setcampoDocumento2(false)
    setcampoEmpresa2(false)
    setcampoSondagem2(false)
    setcampoDiametroInterferencia2(false)
    setcampoPlanoFuro2(false)
    setcampoFerramentas2(false)
    setcampoInfoEnvolvidas2(false)
    setcampoDiametro2(false)
    setcampoLocalizaDiretrizFuro2(false)
    setcampoTipoInterferencia2(false)
    setcampoProfundidade2(false)
    setcampoResponselTopografia2(false)
    setcampoDataTopografia2(false)
    setcamponomePerfilAcesso2(false)
    setcampodataExecucao2(false)
    setcamporesponsavelExecucao2(false)
    setcampohoraExecucao2(false)
    setcampocroquiMapeamento2(false)
    setcampoequipamentoUtilizado2(false)
    setcampomaterializacaoCampo2(false)
    setcampoquantidadeInterferencias2(false)
    setcampoparaleloEsquerda2(false)
    setcampoparaleloDireita2(false)
    setcampoperpendicular2(false)
    setcampolargura2(false)
    setcampocomprimento2(false)
    setcampoprofundidadeVala2(false)
    setcampoestacaReferencia2(false)
    setcamponumeroHastes2(false)
    setcampoprofundidadePlanejada2(false)
    setcampoavancoPlanejado2(false)
    setcampoprofundidadeExecutada2(false)
    setcampoavancoExecutado2(false)
    setcampoamarracao2(false)
    setcampomaquinaPerfuratriz2(false)
    setcampodiametroAlargamento2(false)
    setcampotempoHaste2(false)
    setcampovazaoBomba2(false)
    setcampotipoRedeTubula2(false)
    setcampodiametroRede2(false)
    setcampoferramentasUtilizadas2(false)
    setcampomodeloAlargador2(false)
    setcampocapacidadePortaFusilink2(false)
    setcampocapacidadeSwivel2(false)
    setcampoFluido2(false)
    setcampoReceitaFluido2(false)

    setcampoPortaSonda2(false)
    setcampoVolumePreparado2(false)
    setcampoTesteVicosidade2(false)
    setcampoConfirmacaoProcedimento2(false)
    setcampoHastes2(false)
    setcampoSonda2(false)
    setcampopaPerfuracao2(false)
    setcampoPullingHead2(false)
    setcampoLocalizador2(false)
    setcampoLuva2(false)
    setcampoHasteInicial2(false)
    setcampoFlexobarra2(false)
    setcampoRadio2(false)
    setcampoParafuso2(false)
    setcampoCondicaoFerramenta2(false)
    setcampoEmpresaProprietaria2(false)
    setcampoDiametroFerramenta2(false)
  }
  function selectCampos(etapa: any) {
    setcampoEntradaLatitude2(etapa.campoEntradaLatitude)
    setcampoEntradaLongitude2(etapa.campoEntradaLongitude)
    setcampoSaidaLatitude2(etapa.campoSaidaLatitude)
    setcampoSaidaLongitude2(etapa.campoSaidaLongitude)
    setcampoTipoSolo2(etapa.campoTipoSolo)
    setcampoDiametroPerfuracao2(etapa.campoDiametroPerfuracao)
    setcampoTipoRede2(etapa.campoTipoRede)
    setcampoTipoTubulacao2(etapa.campoTipoTubulacao)
    setcampoResponsel2(etapa.campoResponsel)
    setcampoEquipamento2(etapa.campoEquipamento)
    setcampoSondagemInterferencia2(etapa.campoSondagemInterferencia)
    setcampoDocumento2(etapa.campoDocumento)
    setcampoEmpresa2(etapa.campoEmpresa)
    setcampoSondagem2(etapa.campoSondagem)
    setcampoDiametroInterferencia2(etapa.campoDiametroInterferencia)
    setcampoPlanoFuro2(etapa.campoPlanoFuro)
    setcampoFerramentas2(etapa.campoFerramentas)
    setcampoInfoEnvolvidas2(etapa.campoInfoEnvolvidas)
    setcampoDiametro2(etapa.campoDiametro)
    setcampoLocalizaDiretrizFuro2(etapa.campoLocalizaDiretrizFuro)
    setcampoTipoInterferencia2(etapa.campoTipoInterferencia)
    setcampoProfundidade2(etapa.campoProfundidade)
    setcampoResponselTopografia2(etapa.campoResponselTopografia)
    setcampoDataTopografia2(etapa.campoDataTopografia)
    setcamponomePerfilAcesso2(etapa.nomePerfilAcesso)
    setcampodataExecucao2(etapa.dataExecucao)
    setcamporesponsavelExecucao2(etapa.responsavelExecucao)
    setcampohoraExecucao2(etapa.horaExecucao)
    setcampocroquiMapeamento2(etapa.croquiMapeamento)
    setcampoequipamentoUtilizado2(etapa.equipamentoUtilizado)
    setcampomaterializacaoCampo2(etapa.materializacaoCampo)
    setcampoquantidadeInterferencias2(etapa.quantidadeInterferencias)
    setcampoparaleloEsquerda2(etapa.paraleloEsquerda)
    setcampoparaleloDireita2(etapa.paraleloDireita)
    setcampoperpendicular2(etapa.perpendicular)
    setcampolargura2(etapa.largura)
    setcampocomprimento2(etapa.comprimento)
    setcampoprofundidadeVala2(etapa.profundidadeVala)
    setcampoestacaReferencia2(etapa.estacaReferencia)
    setcamponumeroHastes2(etapa.numeroHastes)
    setcampoprofundidadePlanejada2(etapa.profundidadePlanejada)
    setcampoavancoPlanejado2(etapa.avancoPlanejado)
    setcampoprofundidadeExecutada2(etapa.profundidadeExecutada)
    setcampoavancoExecutado2(etapa.avancoExecutado)
    setcampoamarracao2(etapa.amarracao)
    setcampomaquinaPerfuratriz2(etapa.maquinaPerfuratriz)
    setcampodiametroAlargamento2(etapa.diametroAlargamento)
    setcampotempoHaste2(etapa.tempoHaste)
    setcampovazaoBomba2(etapa.vazaoBomba)
    setcampotipoRedeTubula2(etapa.tipoRedeTubula)
    setcampodiametroRede2(etapa.diametroRede)
    setcampoferramentasUtilizadas2(etapa.ferramentasUtilizadas)
    setcampomodeloAlargador2(etapa.modeloAlargador)
    setcampocapacidadePortaFusilink2(etapa.capacidadePortaFusilink)
    setcampocapacidadeSwivel2(etapa.capacidadeSwivel)
    setcampoFluido2(etapa.fluido)
    setcampoReceitaFluido2(etapa.receitaFluido)

    setcampoPortaSonda2(etapa.portaSonda)
    setcampoVolumePreparado2(etapa.volumePrepardo)
    setcampoTesteVicosidade2(etapa.testeVicosidade)
    setcampoConfirmacaoProcedimento2(etapa.confirmacaoProcedimento)
    setcampoHastes2(etapa.hastes)
    setcampoSonda2(etapa.sonda)
    setcampopaPerfuracao2(etapa.paPerfuracao)
    setcampoPullingHead2(etapa.pullingHead)
    setcampoLocalizador2(etapa.localizador)
    setcampoLuva2(etapa.luva)
    setcampoHasteInicial2(etapa.hasteInicial)
    setcampoFlexobarra2(etapa.flexoBarra)
    setcampoRadio2(etapa.radio)
    setcampoParafuso2(etapa.parafuso)
    setcampoCondicaoFerramenta2(etapa.condicaoFerramenta)
    setcampoEmpresaProprietaria2(etapa.empresaProprietaria)
    setcampoDiametroFerramenta2(etapa.diametroFerramenta)
    setidEtapa(etapa.id)
    setnumeroEtapa(etapa.numeroEtapa)
    setnovaEtapa(etapa.novaEtapa)
    setperfil(etapa.perfil)
    setTipoEtapa(etapa.tipoEtapa)
    setIsOpenPhases(true)
  }
  useEffect(() => {
    setLoading(true)
    loadDados()
    idConfigTravessia = window.location.hash.replace(
      ip + '/romtec#/etapas-da-configuracao/',
      '',
    )
    // idConfigTravessia = idConfigTravessia.replace('#/etapas-da-configuracao/', '')
    // console.log(idConfigTravessia)
  }, [])

  function onChange(e: any) {
    console.log(`checked = ${e.target.checked}`)
  }
  function fnomePerfilAcesso() {
    if (camponomePerfilAcesso) {
      setcamponomePerfilAcesso2(false)
    } else {
      setcamponomePerfilAcesso(true)
      setcamponomePerfilAcesso2(true)
    }
  }
  function fDataExecucao() {
    if (campodataExecucao) {
      setcampodataExecucao2(false)
    } else {
      setcampodataExecucao(true)
      setcampodataExecucao2(true)
    }
  }
  function fresponsavelExecucao() {
    if (camporesponsavelExecucao) {
      setcamporesponsavelExecucao2(false)
    } else {
      setcamporesponsavelExecucao(true)
      setcamporesponsavelExecucao2(true)
    }
  }
  function fhoraExecucao() {
    if (campohoraExecucao) {
      setcampohoraExecucao2(false)
    } else {
      setcampohoraExecucao(true)
      setcampohoraExecucao2(true)
    }
  }
  function fcroquiMapeamento() {
    if (campocroquiMapeamento) {
      setcampocroquiMapeamento2(false)
    } else {
      setcampocroquiMapeamento(true)
      setcampocroquiMapeamento2(true)
    }
  }
  function fequipamentoUtilizado() {
    if (campoequipamentoUtilizado) {
      setcampoequipamentoUtilizado2(false)
    } else {
      setcampoequipamentoUtilizado(true)
      setcampoequipamentoUtilizado2(true)
    }
  }
  function fmaterialCampo() {
    if (campomaterializacaoCampo) {
      setcampomaterializacaoCampo2(false)
    } else {
      setcampomaterializacaoCampo(true)
      setcampomaterializacaoCampo2(true)
    }
  }
  function fquantidadeInterferencias() {
    if (campoquantidadeInterferencias) {
      setcampoquantidadeInterferencias2(false)
    } else {
      setcampoquantidadeInterferencias(true)
      setcampoquantidadeInterferencias2(true)
    }
  }
  function flocalizacaoDiretrizFuro() {
    if (campoLocalizaDiretrizFuro) {
      setcampoLocalizaDiretrizFuro2(false)
      setcampoparaleloEsquerda2(false)
      setcampoparaleloDireita2(false)
      setcampoperpendicular2(false)
      setcampoProfundidade2(false)
      setcampodiametroInterferencia2(false)
    } else {
      setcampoLocalizaDiretrizFuro(true)
      setcampoparaleloEsquerda(true)
      setcampoparaleloDireita(true)
      setcampoperpendicular(true)
      setcampoProfundidade(true)
      setcampodiametroInterferencia(true)
      setcampoLocalizaDiretrizFuro2(true)
      setcampoparaleloEsquerda2(true)
      setcampoparaleloDireita2(true)
      setcampoperpendicular2(true)
      setcampoProfundidade2(true)
      setcampodiametroInterferencia2(true)
    }
  }
  function ftipoInterferencia() {
    if (campotipoInterferencia) {
      setcampotipoInterferencia2(false)
    } else {
      setcampotipoInterferencia(true)
      setcampotipoInterferencia2(true)
    }
  }
  function fempresaProprietaria() {
    if (campoEmpresaProprietaria) {
      setcampoEmpresaProprietaria2(false)
    } else {
      setcampoEmpresaProprietaria(true)
      setcampoEmpresaProprietaria2(true)
    }
  }
  function fdimensaoVala() {
    if (campolargura) {
      setcampolargura2(false)
      setcampocomprimento2(false)
      setcampoprofundidadeVala2(false)
    } else {
      setcampolargura(true)
      setcampocomprimento(true)
      setcampoprofundidadeVala(true)
      setcampolargura2(true)
      setcampocomprimento2(true)
      setcampoprofundidadeVala2(true)
    }
  }
  function festacaReferencia() {
    if (campoestacaReferencia) {
      setcampoestacaReferencia2(false)
    } else {
      setcampoestacaReferencia(true)
      setcampoestacaReferencia2(true)
    }
  }
  function fsondagemInterferencia() {
    if (campoSondagemInterferencia) {
      setcampoSondagemInterferencia2(false)
    } else {
      setcampoSondagemInterferencia(true)
      setcampoSondagemInterferencia2(true)
    }
  }
  function ffluido() {
    if (campoFluido) {
      setcampoFluido2(false)
    } else {
      setcampoFluido(true)
      setcampoFluido2(true)
    }
  }
  function freceitafluido() {
    if (campoReceitaFluido) {
      setcampoReceitaFluido2(false)
    } else {
      setcampoReceitaFluido(true)
      setcampoReceitaFluido2(true)
    }
  }
  function fnumeroHastes() {
    if (camponumeroHastes) {
      setcamponumeroHastes2(false)
    } else {
      setcamponumeroHastes(true)
      setcamponumeroHastes2(true)
    }
  }
  function fProfundidadePlanejada() {
    if (campoprofundidadePlanejada) {
      setcampoprofundidadePlanejada2(false)
    } else {
      setcampoprofundidadePlanejada(true)
      setcampoprofundidadePlanejada2(true)
    }
  }
  function favancoPlanejado() {
    if (campoavancoPlanejado) {
      setcampoavancoPlanejado2(false)
    } else {
      setcampoavancoPlanejado(true)
      setcampoavancoPlanejado2(true)
    }
  }
  function fprofundidadeExecutada() {
    if (campoprofundidadeExecutada) {
      setcampoprofundidadeExecutada2(false)
    } else {
      setcampoprofundidadeExecutada(true)
      setcampoprofundidadePlanejada2(true)
    }
  }
  function fAvancoExecutado() {
    if (campoavancoExecutado) {
      setcampoavancoExecutado2(false)
    } else {
      setcampoavancoExecutado(true)
      setcampoavancoExecutado2(true)
    }
  }
  function famarracao() {
    if (campoamarracao) {
      setcampoamarracao2(false)
    } else {
      setcampoamarracao(true)
      setcampoamarracao2(true)
    }
  }
  function fmaquinaPerfuratriz() {
    if (campomaquinaPerfuratriz) {
      setcampomaquinaPerfuratriz2(false)
    } else {
      setcampomaquinaPerfuratriz(true)
      setcampomaquinaPerfuratriz2(true)
    }
  }
  function fdiametroAlargamento() {
    if (campodiametroAlargamento) {
      setcampodiametroAlargamento2(false)
    } else {
      setcampodiametroAlargamento(true)
      setcampodiametroAlargamento2(true)
    }
  }
  function ftempoHaste() {
    if (campotempoHaste) {
      setcampotempoHaste2(false)
    } else {
      setcampotempoHaste(true)
      setcampotempoHaste2(true)
    }
  }
  function fvazaoBomba() {
    if (campovazaoBomba) {
      setcampovazaoBomba2(false)
    } else {
      setcampovazaoBomba(true)
      setcampovazaoBomba2(true)
    }
  }
  function ftipoRedeTubulacao() {
    if (campotipoRedeTubula) {
      setcampotipoRedeTubula2(false)
    } else {
      setcampotipoRedeTubula(true)
      setcampotipoRedeTubula2(true)
    }
  }
  function fdiametroRede() {
    if (campodiametroRede) {
      setcampodiametroRede2(false)
    } else {
      setcampodiametroRede(true)
      setcampodiametroRede2(true)
    }
  }
  function fportaSonda() {
    if (campoPortaSonda) {
      setcampoPortaSonda2(false)
    } else {
      setcampoPortaSonda(true)
      setcampoPortaSonda2(true)
    }
  }
  function fconfirmacaoProcedimento() {
    if (campoConfirmacaoProcedimento) {
      setcampoConfirmacaoProcedimento2(false)
    } else {
      setcampoConfirmacaoProcedimento(true)
      setcampoConfirmacaoProcedimento2(true)
    }
  }
  function fvolumePreparado() {
    if (campoVolumePreparado) {
      setcampoVolumePreparado2(false)
    } else {
      setcampoVolumePreparado(true)
      setcampoVolumePreparado2(true)
    }
  }
  function ftesteViscosidade() {
    if (campoTesteVicosidade) {
      setcampoTesteVicosidade2(false)
    } else {
      setcampoTesteVicosidade(true)
      setcampoTesteVicosidade2(true)
    }
  }
  function fHastes() {
    if (campoHastes) {
      setcampoHastes2(false)
    } else {
      setcampoHastes(true)
      setcampoHastes2(true)
    }
  }
  function fSonda() {
    if (campoSonda) {
      setcampoSonda2(false)
    } else {
      setcampoSonda(true)
      setcampoSonda2(true)
    }
  }
  function fPaPerfuracao() {
    if (campopaPerfuracao) {
      setcampopaPerfuracao2(false)
    } else {
      setcampopaPerfuracao(true)
      setcampopaPerfuracao2(true)
    }
  }
  function fpullingHead() {
    if (campoPullingHead) {
      setcampoPullingHead2(false)
    } else {
      setcampoPullingHead(true)
      setcampoPullingHead2(true)
    }
  }
  function fLocalizador() {
    if (campoLocalizador) {
      setcampoLocalizador2(false)
    } else {
      setcampoLocalizador(true)
      setcampoLocalizador2(true)
    }
  }
  function fLuva() {
    if (campoLuva) {
      setcampoLuva2(false)
    } else {
      setcampoLuva(true)
      setcampoLuva2(true)
    }
  }
  function fHasteInicial() {
    if (campoHasteInicial) {
      setcampoHasteInicial2(false)
    } else {
      setcampoHasteInicial(true)
      setcampoHasteInicial2(true)
    }
  }
  function fFlexobarra() {
    if (campoFlexobarra) {
      setcampoFlexobarra2(false)
    } else {
      setcampoFlexobarra(true)
      setcampoFlexobarra2(true)
    }
  }
  function fRadio() {
    if (campoRadio) {
      setcampoRadio2(false)
    } else {
      setcampoRadio(true)
      setcampoRadio2(true)
    }
  }
  function fParafuso() {
    if (campoParafuso) {
      setcampoParafuso2(false)
    } else {
      setcampoParafuso(true)
      setcampoParafuso2(true)
    }
  }
  function fModeloAlargador() {
    if (campomodeloAlargador) {
      setcampomodeloAlargador2(false)
    } else {
      setcampomodeloAlargador(true)
      setcampomodeloAlargador2(true)
    }
  }
  function fCapacidadePortaFusilink() {
    if (campocapacidadePortaFusilink) {
      setcampocapacidadePortaFusilink2(false)
    } else {
      setcampocapacidadePortaFusilink(true)
      setcampocapacidadePortaFusilink2(true)
    }
  }
  function fCapacidadeSwivel() {
    if (campocapacidadeSwivel) {
      setcampocapacidadeSwivel2(false)
    } else {
      setcampocapacidadeSwivel(true)
      setcampocapacidadeSwivel2(true)
    }
  }
  function fDiametroFerramenta() {
    if (campoDiametroFerramenta) {
      setcampoDiametroFerramenta2(false)
    } else {
      setcampoDiametroFerramenta(true)
      setcampoDiametroFerramenta2(true)
    }
  }
  function fCondicaoFerramenta() {
    if (campoCondicaoFerramenta) {
      setcampoCondicaoFerramenta2(false)
    } else {
      setcampoCondicaoFerramenta(true)
      setcampoCondicaoFerramenta2(true)
    }
  }
  function fEntradaLatitude() {
    if (campoEntradaLatitude) {
      console.log('campo latitude')
      setcampoEntradaLatitude2(false)
    } else {
      setcampoEntradaLatitude(true)
      setcampoEntradaLatitude2(true)
    }
  }

  function fEntradaLongitude() {
    if (campoEntradaLongitude && campoEntradaLongitude22) {
      setcampoEntradaLongitude2(false)
    } else {
      if (campoEntradaLongitude) {
        setcampoEntradaLongitude22(true)
      } else {
        setcampoEntradaLongitude(true)
      }
      setcampoEntradaLongitude2(true)
    }
  }
  function fSaidaLatitude() {
    if (campoSaidaLatitude) {
      setcampoSaidaLatitude2(false)
    } else {
      setcampoSaidaLatitude(true)
      setcampoSaidaLatitude2(true)
    }
  }
  function fSaidaLongitude() {
    if (campoSaidaLongitude) {
      setcampoSaidaLongitude2(false)
    } else {
      setcampoSaidaLongitude(true)
      setcampoSaidaLongitude2(true)
    }
  }
  function fTipoTubulacao() {
    if (campoTipoTubulacao) {
      setcampoTipoTubulacao2(false)
    } else {
      setcampoTipoTubulacao(true)
      setcampoTipoTubulacao2(true)
    }
  }
  function fDiametroPerf() {
    if (campoDiametro) {
      setcampoDiametroPerfuracao2(false)
    } else {
      setcampoDiametroPerfuracao(true)
      setcampoDiametroPerfuracao2(true)
    }
  }
  function fTipoSolo() {
    if (campoTipoSolo) {
      setcampoTipoSolo2(false)
    } else {
      setcampoTipoSolo(true)
      setcampoTipoSolo2(true)
    }
  }
  function fEquipamento() {
    if (campoEquipamento) {
      setcampoEquipamento2(false)
    } else {
      setcampoEquipamento(true)
      setcampoEquipamento2(true)
    }
  }
  function fDocumento() {
    if (campoDocumento) {
      setcampoDocumento2(false)
    } else {
      setcampoDocumento(true)
      setcampoDocumento2(true)
    }
  }
  function fTipoRede() {
    if (campoTipoRede) {
      setcampoTipoRede2(false)
    } else {
      setcampoTipoRede(true)
      setcampoTipoRede2(true)
    }
  }
  function fSondagemInter() {
    if (campoSondagemInterferencia) {
      setcampoSondagemInterferencia2(false)
    } else {
      setcampoSondagemInterferencia(true)
      setcampoSondagemInterferencia2(true)
    }
  }
  function fSondagem() {
    if (campoSondagem) {
      setcampoSondagem2(false)
    } else {
      setcampoSondagem(true)
      setcampoSondagem2(true)
    }
  }
  function fDiametroInter() {
    if (campoDiametroInterferencia) {
      setcampoDiametroInterferencia2(false)
    } else {
      setcampoDiametroInterferencia(true)
      setcampoDiametroInterferencia2(true)
    }
  }
  function fPlanoFuro() {
    if (campoPlanoFuro) {
      setcampoPlanoFuro2(false)
    } else {
      setcampoPlanoFuro(true)
      setcampoPlanoFuro2(true)
    }
  }
  function fFerramentas() {
    if (campoFerramentas) {
      setcampoFerramentas2(false)
    } else {
      setcampoFerramentas(true)
      setcampoFerramentas2(true)
    }
  }
  function fInfoEnvolvidas() {
    if (campoInfoEnvolvidas) {
      setcampoInfoEnvolvidas2(false)
    } else {
      setcampoInfoEnvolvidas(true)
      setcampoInfoEnvolvidas2(true)
    }
  }
  function fDiametro() {
    if (campoDiametro) {
      setcampoDiametro2(false)
    } else {
      setcampoDiametro(true)
      setcampoDiametro2(true)
    }
  }
  function fLocalDiretriz() {
    if (campoLocalizaDiretrizFuro) {
      setcampoLocalizaDiretrizFuro2(false)
    } else {
      setcampoLocalizaDiretrizFuro(true)
      setcampoLocalizaDiretrizFuro2(true)
    }
  }
  function fTipoInter() {
    if (campoTipoInterferencia) {
      setcampoTipoInterferencia2(false)
    } else {
      setcampoTipoInterferencia(true)
      setcampoTipoInterferencia2(true)
    }
  }

  function fProfundidade() {
    if (campoProfundidade) {
      setcampoProfundidade2(false)
    } else {
      setcampoProfundidade(true)
      setcampoProfundidade2(true)
    }
  }
  function fRespTopografia() {
    if (campoResponselTopografia) {
      setcampoResponselTopografia2(false)
    } else {
      setcampoResponselTopografia(true)
      setcampoResponselTopografia2(true)
    }
  }
  function fDataTopografia() {
    if (campoDataTopografia) {
      setcampoDataTopografia2(false)
    } else {
      setcampoDataTopografia(true)
      setcampoDataTopografia2(true)
    }
  }
  function fEmpresa() {
    if (campoEmpresa) {
      setcampoEmpresa2(false)
    } else {
      setcampoDataTopografia(true)
      setcampoDataTopografia2(false)
    }
  }

  return (
    <>
      <Sidebar />
      <Navbar />
      <S.ContainerConfirmation>
        <h2>Etapas da configuração</h2>
        <button onClick={() => setIsOpen(true)}>
          <FiPlus />
        </button>

        <S.GridConfirmation>
          <span>Nova Etapa</span>
          <span>Numero da Etapa</span>
          <span>Perfil</span>
        </S.GridConfirmation>

        <ul>
          {etapas.length > 0 ? (
            etapas.map((etapas) => (
              <li key={etapas.id}>
                <S.GridConfirmation>
                  <span>{etapas.novaEtapa}</span>
                  <span>{etapas.numeroEtapa}</span>
                  <span>{etapas.perfil}</span>
                  <DeleteButton onDelete={() => deleteDados(etapas)} />
                  {/* <EditButton
                    onEdit={() => update(etapas.id)}
                  /> */}
                  <button
                    // onChange={onEdit}
                    onClick={() => update(etapas, 'etapas')}
                    style={{ background: 'none', color: 'yellow' }}
                    title='Editar?'
                  >
                    <FaEdit size={20} />
                  </button>
                  {/* <Link to={link + etapas.id}><span>Executar travessia</span></Link>
                  <button><span>Executar travessia</span></button> */}
                  <button onClick={() => selectCampos(etapas)}>
                    Atribuir campos
                  </button>
                </S.GridConfirmation>
              </li>
            ))
          ) : (
            <p>🤔 Nenhuma configuração cadastrada</p>
          )}

          {/* {<button><span>Executar travessia</span></button>} */}
        </ul>

        {/* <ul>
          {travessia.length > 0
            ? travessia.map((configurationCrossing) =>
              <li key={configurationCrossing.id}>
                <S.GridConfirmation>
                  <span>{configurationCrossing.novaEtapa}</span>
                  <span>{configurationCrossing.numeroEtapa}</span>
                  <DeleteButton
                    onDelete={() => deleteDados(configurationCrossing.id)}
                  />
                  {/* <EditButton
                    onEdit={() => handleUpdate(configurationCrossing.id)}
                  />
                  <button
                    // onChange={onEdit}
                    onClick={() => update(configurationCrossing)}
                    style={{ background: 'none', color: 'yellow' }}
                    title='Editar?'
                  >
                    <FaEdit size={20} />
                  </button>
                  <Link to={link + configurationCrossing.id}><span>Executar travessia</span></Link>
                  {/* {<button><span>Executar travessia</span></button>}
                </S.GridConfirmation>
              </li>,
            )
            : <p>🤔 Nenhuma configuração cadastrada</p>}
        </ul>
        */}

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <S.Container>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                label='Nova etapa'
                {...register('novaEtapa', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />
              <TextField
                label='Número da etapa'
                type='number'
                errorMessage={errors.numeroEtapa?.message}
                {...register('numeroEtapa', {
                  required: {
                    value: true,
                    message: 'Todos os campos são obrigatórios',
                  },
                })}
              />
              <div className='form-control-group'>
                <label htmlFor='perfil'>Perfil</label>
                <select
                  {...register('perfil', {
                    required: {
                      value: true,
                      message: 'Todos os campos são obrigatórios',
                    },
                  })}
                  name='perfil'
                  id='perfil'
                >
                  <option value='operador'>Operador</option>
                  <option value='equipeCivil'>Equipe civil</option>
                  <option value='navegador'>Navegação</option>
                  <option value='engenhariaADM'>Engenharia adm</option>
                  <option value='engenharia'>Engenharia user</option>
                  <option value='mapeamento'>Mapeamento</option>
                </select>
              </div>

              <button type='submit'>
                {loading
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
            </S.Form>
          </S.Container>
        </Modal>

        <Modal isOpen={isOpenPhases} onClose={() => setIsOpenPhases(false)}>
          <S.Container>
            <S.Div2 className='form-check'>
              <div className='form-control-group-check'>
                <h2>Tipo da Etapa</h2>
                {tipoEtapa === 'planejamento'
                  ? <Switch
                    checkedChildren='Pontos de verificação de planejamento'
                    unCheckedChildren='Pontos de verificação de planejamento'
                    defaultChecked
                  />
                  : <Switch
                    checkedChildren='Pontos de verificação de planejamento'
                    unCheckedChildren='Pontos de verificação de planejamento'
                    onClick={() => setTipoEtapa('planejamento')}
                  />}

                {tipoEtapa === 'execução'
                  ? <Switch
                    checkedChildren='Pontos de verificação da execução'
                    unCheckedChildren='Pontos de verificação da execução'
                    defaultChecked
                  />
                  : <Switch
                    checkedChildren='Pontos de verificação da execução'
                    unCheckedChildren='Pontos de verificação da execução'
                    onClick={() => setTipoEtapa('execução')}
                  />}

                {/* <Switch
                  checkedChildren='Pontos de verificação de planejamento'
                  unCheckedChildren='Pontos de verificação de planejamento'
                />

                <Switch
                  checkedChildren='Pontos de verificação da execução'
                  unCheckedChildren='Pontos de verificação da execução'
                /> */}
              </div>
              <div className='form-control-group-switch'>
                <h2>Adicione os campos</h2>
                {/*
                 false}

                 false}

                 false}

                false}

                {!campoTipoTubulacao
                  ? <Switch
                      checkedChildren='Tipo de tubulação'
                      unCheckedChildren='Tipo de tubulação'
                      onClick={() => fTipoTubulacao()}
                    />
                  : false}

                 false}

                false}

                {!campoResponsel
                  ? <Switch
                      checkedChildren='Responsável'
                      unCheckedChildren='Responsável'
                      onClick={() => fRespTopografia()}
                    />
                  : false}

                {!campoEquipamento
                  ? <Switch
                      checkedChildren='Equipamentos'
                      unCheckedChildren='Equipamentos'
                      onClick={() => fEquipamento()}
                    />
                  : false}

                {!campoDocumento
                  ? <Switch
                      checkedChildren='Documentos'
                      unCheckedChildren='Documentos'
                      onClick={() => fDocumento()}
                    />
                  : false}

                {!campoTipoRede
                  ? <Switch
                      checkedChildren='Tipo de rede'
                      unCheckedChildren='Tipo de rede'
                      onClick={() => fTipoRede()}
                    />
                  : false}

                {!campoEmpresa
                  ? <Switch
                      checkedChildren='Empresa proprietária'
                      unCheckedChildren='Empresa proprietária'
                      onClick={() => fEmpresa()}
                    />
                  : false}

                {!campoSondagemInterferencia
                  ? <Switch
                      checkedChildren='Confirmação da sondagem da interferência'
                      unCheckedChildren='Confirmação da sondagem da interferência'
                      onClick={() => fSondagemInter()}
                    />
                  : false}

                {!campoSondagem
                  ? <Switch
                      checkedChildren='Sondagem'
                      unCheckedChildren='Sondagem'
                      onClick={() => fSondagem()}
                    />
                  : false}

                <Switch
                  checkedChildren='Quando acontece'
                  unCheckedChildren='Quando acontece'
                />

                {!campoDiametroInterferencia
                  ? <Switch
                      checkedChildren='Diâmetro da interferência'
                      unCheckedChildren='Diâmetro da interferência'
                      onClick={() => fDiametroInter()}
                    />
                  : false}

                {!campoPlanoFuro
                  ? <Switch
                      checkedChildren='Criação do plano de furo'
                      unCheckedChildren='Criação do plano de furo'
                      onClick={() => fPlanoFuro()}
                    />
                  : false}

                <Switch
                  checkedChildren='Empresa proprietária'
                  unCheckedChildren='Empresa proprietária'
                />

                {/* <Switch
                  checkedChildren='Confirmação da sondagem da interferência'
                  unCheckedChildren='Confirmação da sondagem da interferência'
                />

                <Switch
                  checkedChildren='Quando acontece'
                  unCheckedChildren='Quando acontece'
                />

                {/* <Switch
                  checkedChildren='Responsável'
                  unCheckedChildren='Responsável'
                />

                <Switch
                  checkedChildren='Ferramentas'
                  unCheckedChildren='Ferramentas'
                  onClick={() => fFerramentas()}
                />

                <Switch
                  checkedChildren='Informações Envolvidas'
                  unCheckedChildren='Informações Envolvidas'
                  onClick={() => fInfoEnvolvidas()}
                />

                {/* <Switch
                  checkedChildren='Responsável'
                  unCheckedChildren='Responsável'
                />

                <Switch
                  checkedChildren='Quando acontece'
                  unCheckedChildren='Quando acontece'
                />

                <Switch
                  checkedChildren='Diamêtro'
                  unCheckedChildren='Diamêtro'
                  onClick={() => fDiametro()}
                />

                <Switch
                  checkedChildren='Localização em relação a diretriz do furo'
                  unCheckedChildren='Localização em relação a diretriz do furo'
                  onClick={() => fLocalDiretriz()}
                />

                <Switch
                  checkedChildren='Tipo de interferência'
                  unCheckedChildren='Tipo de interferência'
                  onClick={() => fTipoInter()}
                />

                <Switch
                  checkedChildren='Profundidade'
                  unCheckedChildren='Profundidade'
                  onClick={() => fProfundidade()}
                />

                <Switch
                  checkedChildren='Responsável pela topografia'
                  unCheckedChildren='Responsável pela topografia'
                  onClick={() => fRespTopografia()}
                />

                <Switch
                  checkedChildren='Data da execução da Topografia'
                  unCheckedChildren='Data da execução da Topografia'
                  onClick={() => fDataTopografia()}
                />
                */}
                <p onClick={() => handleCamposPEntrada()}>Ponto de verificação de Entrada</p>
                {campoPEntrada
                  ? !campoEntradaLatitude && !campoEntradaLatitude11
                    ? <Switch
                      checkedChildren='Ponto de verificação de entrada (lat)'
                      unCheckedChildren='Ponto de verificação de entrada (lat)'
                      onClick={() => fEntradaLatitude()}
                    />
                    : <Switch
                      checkedChildren='Ponto de verificação de entrada (lat)'
                      unCheckedChildren='Ponto de verificação de entrada (lat)'
                      defaultChecked
                    />
                  : false}

                {campoPEntrada
                  ? !campoEntradaLongitude && !campoEntradaLongitude22
                    ? <Switch
                      checkedChildren='Ponto de verificação de entrada (long)'
                      unCheckedChildren='Ponto de verificação de entrada (long)'
                      onClick={() => fEntradaLongitude()}
                    />
                    : <Switch
                      checkedChildren='Ponto de verificação de entrada (long)'
                      unCheckedChildren='Ponto de verificação de entrada (long)'
                      defaultChecked
                    />
                  : false}

                <p onClick={() => handleCamposcampoPSaida()}>Ponto de verificação de Saída</p>
                {campoPSaida
                  ? !campoSaidaLatitude
                    ? <Switch
                      checkedChildren='Ponto de verificação de saída (lat)'
                      unCheckedChildren='Ponto de verificação de saída (lat)'
                      onClick={() => fSaidaLatitude()}
                    />
                    : <Switch
                      checkedChildren='Ponto de verificação de saída(lat)'
                      unCheckedChildren='Ponto de verificação de saída(lat)'
                      defaultChecked
                    />
                  : false}

                {campoPSaida
                  ? !campoSaidaLongitude
                    ? <Switch
                      checkedChildren='Ponto de verificação de saída (long)'
                      unCheckedChildren='Ponto de verificação de saída (long)'
                      onClick={() => fSaidaLongitude()}
                    />
                    : <Switch
                      checkedChildren='Ponto de verificação de saída (long)'
                      unCheckedChildren='Ponto de verificação de saída (long)'
                      defaultChecked
                    />
                  : false}

                <p onClick={() => handleCampos()}>Registros</p>

                {campos
                  ? <h6 style={{ fontSize: '16px' }}>Campos de registro:</h6>
                  : false}

                {campos
                  ? !camponomePerfilAcesso
                    ? <Switch
                      checkedChildren='Nome do usuário do perfil de acesso'
                      unCheckedChildren='Nome do usuário do perfil de acesso'
                      onClick={() => fnomePerfilAcesso()}
                    />
                    : <Switch
                      checkedChildren='Nome do usuário do perfil de acesso'
                      unCheckedChildren='Nome do usuário do perfil de acesso'
                      defaultChecked
                    />
                  : false}

                {campos
                  ? !campodataExecucao
                    ? <Switch
                      checkedChildren='Data da execução'
                      unCheckedChildren='Data da execução'
                      onClick={() => fDataExecucao()}
                    />
                    : <Switch
                      checkedChildren='Data da execução '
                      unCheckedChildren='Data da execução '
                      defaultChecked
                    />
                  : false}

                {campos
                  ? !camporesponsavelExecucao
                    ? <Switch
                      checkedChildren='Responsável pela execução'
                      unCheckedChildren='Responsável pela execução'
                      onClick={() => fresponsavelExecucao()}
                    />
                    : <Switch
                      checkedChildren='Responsável pela execução'
                      unCheckedChildren='Responsável pela execução'
                      defaultChecked
                    />
                  : false}

                {campos
                  ? !campohoraExecucao
                    ? <Switch
                      checkedChildren='Hora da execução'
                      unCheckedChildren='Hora da execução'
                      onClick={() => fhoraExecucao()}
                    />
                    : <Switch
                      checkedChildren='Hora da execução'
                      unCheckedChildren='Hora da execução'
                      defaultChecked
                    />
                  : false}

                {campos
                  ? !campoDiametroPerfuracao
                    ? <Switch
                      checkedChildren='Diâmetro de perfuração'
                      unCheckedChildren='Diâmetro de perfuração'
                      onClick={() => fDiametroPerf()}
                    />
                    : <Switch
                      checkedChildren='Diâmetro de perfuração (mm)'
                      unCheckedChildren='Diâmetro de perfuração (mm)'
                      defaultChecked
                    />
                  : false}

                {campos
                  ? !campoTipoSolo
                    ? <Switch
                      checkedChildren='Tipos de solo'
                      unCheckedChildren='Tipos de solo'
                      onClick={() => fTipoSolo()}
                    />
                    : <Switch
                      checkedChildren='Tipo de Solo'
                      unCheckedChildren='Tipo de Solo'
                      defaultChecked
                    />
                  : false}

                {campos
                  ? !campoDocumento
                    ? <Switch
                      checkedChildren='Documento (upload)'
                      unCheckedChildren='Documento (upload)'
                      onClick={() => fDocumento()}
                    />
                    : <Switch
                      checkedChildren='Documento (upload)'
                      unCheckedChildren='Documento (upload)'
                      defaultChecked
                    />
                  : false}

                {campos
                  ? !campoConfirmacaoProcedimento
                    ? <Switch
                      checkedChildren='Confirmação do procedimento'
                      unCheckedChildren='Confirmação do procedimento'
                      onClick={() => fconfirmacaoProcedimento()}
                    />
                    : <Switch
                      checkedChildren='Confirmação do procedimento'
                      unCheckedChildren='Confirmação do procedimento'
                      defaultChecked
                    />
                  : false}

                {campos
                  ? !campoVolumePreparado
                    ? <Switch
                      checkedChildren='Volume preparado'
                      unCheckedChildren='Volume preparado'
                      onClick={() => fvolumePreparado()}
                    />
                    : <Switch
                      checkedChildren='Volume preparado'
                      unCheckedChildren='Volume preparado'
                      defaultChecked
                    />
                  : false}

                {campos
                  ? !campoTesteVicosidade
                    ? <Switch
                      checkedChildren='Teste de viscosidade'
                      unCheckedChildren='Teste de viscosidade'
                      onClick={() => ftesteViscosidade()}
                    />
                    : <Switch
                      checkedChildren='Teste de viscosidade'
                      unCheckedChildren='Teste de viscosidade'
                      defaultChecked
                    />
                  : false}

                <p onClick={() => handleCamposPreparacao()}>Preparação</p>

                {camposPreparacao
                  ? <h6 style={{ fontSize: '16px' }}>Campos de Preparação:</h6>
                  : false}

                {camposPreparacao
                  ? !campocroquiMapeamento
                    ? <Switch
                      checkedChildren='Enviar croqui de mapeamento (Upload)'
                      unCheckedChildren='Enviar croqui de mapeamento (Upload)'
                      onClick={() => fcroquiMapeamento()}
                    />
                    : <Switch
                      checkedChildren='Enviar croqui de mapeamento (Upload)'
                      unCheckedChildren='Enviar croqui de mapeamento (Upload)'
                      defaultChecked
                    />
                  : false}

                {camposPreparacao
                  ? !campoequipamentoUtilizado
                    ? <Switch
                      checkedChildren='Equipamento utilizado'
                      unCheckedChildren='Equipamento utilizado'
                      onClick={() => fequipamentoUtilizado()}
                    />
                    : <Switch
                      checkedChildren='Equipamento utilizado'
                      unCheckedChildren='Equipamento utilizado'
                      defaultChecked
                    />
                  : false}

                {camposPreparacao
                  ? !campomaterializacaoCampo
                    ? <Switch
                      checkedChildren='Materialização em campo'
                      unCheckedChildren='Materialização em campo'
                      onClick={() => fmaterialCampo()}
                    />
                    : <Switch
                      checkedChildren='Materialização em campo'
                      unCheckedChildren='Materialização em campo'
                      defaultChecked
                    />
                  : false}

                {camposPreparacao
                  ? !campoquantidadeInterferencias
                    ? <Switch
                      checkedChildren='Quantidade de interferências'
                      unCheckedChildren='Quantidade de interferências'
                      onClick={() => fquantidadeInterferencias()}
                    />
                    : <Switch
                      checkedChildren='Quantidade de interferências'
                      unCheckedChildren='Quantidade de interferências'
                      defaultChecked
                    />
                  : false}

                {camposPreparacao
                  ? !campoLocalizaDiretrizFuro
                    ? <Switch
                      checkedChildren='Localização em relação a diretriz do furo'
                      unCheckedChildren='Localização em relação a diretriz do furo'
                      onClick={() => flocalizacaoDiretrizFuro()}
                    />
                    : <Switch
                      checkedChildren='Localização em relação a diretriz do furo'
                      unCheckedChildren='Localização em relação a diretriz do furo'
                      defaultChecked
                    />
                  : false}

                {camposPreparacao
                  ? !campotipoInterferencia
                    ? <Switch
                      checkedChildren='Tipo de interferência'
                      unCheckedChildren='Tipo de interferência'
                      onClick={() => ftipoInterferencia()}
                    />
                    : <Switch
                      checkedChildren='Tipo de interferência'
                      unCheckedChildren='Tipo de interferência'
                      defaultChecked
                    />
                  : false}

                {camposPreparacao
                  ? !campoEmpresaProprietaria
                    ? <Switch
                      checkedChildren='Empresa proprietária'
                      unCheckedChildren='Empresa proprietária'
                      onClick={() => fempresaProprietaria()}
                    />
                    : <Switch
                      checkedChildren='Empresa proprietária'
                      unCheckedChildren='Empresa proprietária'
                      defaultChecked
                    />
                  : false}

                {camposPreparacao
                  ? !campolargura
                    ? <Switch
                      checkedChildren='Dimensões da vala de entrada e saída'
                      unCheckedChildren='Dimensões da vala de entrada e saída'
                      onClick={() => fdimensaoVala()}
                    />
                    : <Switch
                      checkedChildren='Dimensões da vala de entrada e saída'
                      unCheckedChildren='Dimensões da vala de entrada e saída'
                      defaultChecked
                    />
                  : false}

                {camposPreparacao
                  ? !campoestacaReferencia
                    ? <Switch
                      checkedChildren='Estaca de referência'
                      unCheckedChildren='Estaca de referência'
                      onClick={() => festacaReferencia()}
                    />
                    : <Switch
                      checkedChildren='Estaca de referência'
                      unCheckedChildren='Estaca de referência'
                      defaultChecked
                    />
                  : false}

                {camposPreparacao
                  ? !campoSondagemInterferencia
                    ? <Switch
                      checkedChildren='Confirmação de sondagem da interferência'
                      unCheckedChildren='Confirmação de sondagem da interferência'
                      onClick={() => fsondagemInterferencia()}
                    />
                    : <Switch
                      checkedChildren='Confirmação de sondagem da interferência'
                      unCheckedChildren='Confirmação de sondagem da interferência'
                      defaultChecked
                    />
                  : false}

                {camposPreparacao
                  ? !campoFluido
                    ? <Switch
                      checkedChildren='Fluido'
                      unCheckedChildren='Fluido'
                      onClick={() => ffluido()}
                    />
                    : <Switch
                      checkedChildren='Fluido'
                      unCheckedChildren='Fluido'
                      defaultChecked
                    />
                  : false}

                {camposPreparacao
                  ? !campoReceitaFluido
                    ? <Switch
                      checkedChildren='Receita do fluido'
                      unCheckedChildren='Receita do fluido'
                      onClick={() => freceitafluido()}
                    />
                    : <Switch
                      checkedChildren='Receita do fluido'
                      unCheckedChildren='Receita do fluido'
                      defaultChecked
                    />
                  : false}

                <p onClick={() => handleCamposPerfuracao()}>Perfuração</p>

                {camposPerfuracao
                  ? <h6 style={{ fontSize: '16px' }}>Campos de Perfuração:</h6>
                  : false}

                {camposPerfuracao
                  ? !camponumeroHastes
                    ? <Switch
                      checkedChildren='Número de hastes'
                      unCheckedChildren='Número de hastes'
                      onClick={() => fnumeroHastes()}
                    />
                    : <Switch
                      checkedChildren='Número de hastes'
                      unCheckedChildren='Número de hastes'
                      defaultChecked
                    />
                  : false}

                {camposPerfuracao
                  ? !campoprofundidadePlanejada
                    ? <Switch
                      checkedChildren='Profundidade planejada'
                      unCheckedChildren='Profundidade planejada'
                      onClick={() => fProfundidadePlanejada()}
                    />
                    : <Switch
                      checkedChildren='Profundidade planejada'
                      unCheckedChildren='Profundidade planejada'
                      defaultChecked
                    />
                  : false}

                {camposPerfuracao
                  ? !campoavancoPlanejado
                    ? <Switch
                      checkedChildren='Avanço planejado'
                      unCheckedChildren='Avanço planejado'
                      onClick={() => favancoPlanejado()}
                    />
                    : <Switch
                      checkedChildren='Avanço planejado'
                      unCheckedChildren='Avanço planejado'
                      defaultChecked
                    />
                  : false}

                {camposPerfuracao
                  ? !campoprofundidadeExecutada
                    ? <Switch
                      checkedChildren='Profundidade executada'
                      unCheckedChildren='Profundidade executada'
                      onClick={() => fprofundidadeExecutada()}
                    />
                    : <Switch
                      checkedChildren='Profundidade executada'
                      unCheckedChildren='Profundidade executada'
                      defaultChecked
                    />
                  : false}

                {camposPerfuracao
                  ? !campoavancoExecutado
                    ? <Switch
                      checkedChildren='Avanço executado'
                      unCheckedChildren='Avanço executado'
                      onClick={() => fAvancoExecutado()}
                    />
                    : <Switch
                      checkedChildren='Avanço executado'
                      unCheckedChildren='Avanço executado'
                      defaultChecked
                    />
                  : false}

                {camposPerfuracao
                  ? !campoamarracao
                    ? <Switch
                      checkedChildren='Amarração'
                      unCheckedChildren='Amarração'
                      onClick={() => famarracao()}
                    />
                    : <Switch
                      checkedChildren='Amarração'
                      unCheckedChildren='Amarração'
                      defaultChecked
                    />
                  : false}

                {camposPerfuracao
                  ? !campomaquinaPerfuratriz
                    ? <Switch
                      checkedChildren='Máquina perfuratriz'
                      unCheckedChildren='Máquina perfuratriz'
                      onClick={() => fmaquinaPerfuratriz()}
                    />
                    : <Switch
                      checkedChildren='Máquina perfuratriz'
                      unCheckedChildren='Máquina perfuratriz'
                      defaultChecked
                    />
                  : false}

                {camposPerfuracao
                  ? !campodiametroAlargamento
                    ? <Switch
                      checkedChildren='Diâmetro de alargamento'
                      unCheckedChildren='Diâmetro de alargamento'
                      onClick={() => fdiametroAlargamento()}
                    />
                    : <Switch
                      checkedChildren='Diâmetro de alargamento'
                      unCheckedChildren='Diâmetro de alargamento'
                      defaultChecked
                    />
                  : false}

                {camposPerfuracao
                  ? !campotempoHaste
                    ? <Switch
                      checkedChildren='Tempo por haste'
                      unCheckedChildren='Tempo por haste'
                      onClick={() => ftempoHaste()}
                    />
                    : <Switch
                      checkedChildren='Tempo por haste'
                      unCheckedChildren='Tempo por haste'
                      defaultChecked
                    />
                  : false}

                {camposPerfuracao
                  ? !campovazaoBomba
                    ? <Switch
                      checkedChildren='Vazão de bomba'
                      unCheckedChildren='Vazão de bomba'
                      onClick={() => fvazaoBomba()}
                    />
                    : <Switch
                      checkedChildren='Vazão de bomba'
                      unCheckedChildren='Vazão de bomba'
                      defaultChecked
                    />
                  : false}

                {camposPerfuracao
                  ? !campotipoRedeTubula
                    ? <Switch
                      checkedChildren='Tipo de rede/tubulação'
                      unCheckedChildren='Tipo de rede/tubulação'
                      onClick={() => ftipoRedeTubulacao()}
                    />
                    : <Switch
                      checkedChildren='Tipo de rede/tubulação'
                      unCheckedChildren='Tipo de rede/tubulação'
                      defaultChecked
                    />
                  : false}

                {camposPerfuracao
                  ? !campodiametroRede
                    ? <Switch
                      checkedChildren='Diâmetro da rede'
                      unCheckedChildren='Diâmetro da rede'
                      onClick={() => fdiametroRede()}
                    />
                    : <Switch
                      checkedChildren='Diâmetro da rede'
                      unCheckedChildren='Diâmetro da rede'
                      defaultChecked
                    />
                  : false}

                <p onClick={() => handleCamposFerramental()}>Ferramental</p>
                {camposFerramental
                  ? <h6 style={{ fontSize: '16px' }}>Campos de Ferramental:</h6>
                  : false}
                {camposFerramental
                  ? !campoPortaSonda
                    ? <Switch
                      checkedChildren='Porta sonda'
                      unCheckedChildren='Porta sonda'
                      onClick={() => fportaSonda()}
                    />
                    : <Switch
                      checkedChildren='Porta sonda'
                      unCheckedChildren='Porta sonda'
                      defaultChecked
                    />
                  : false}

                {camposFerramental
                  ? !campoHastes
                    ? <Switch
                      checkedChildren='Hastes'
                      unCheckedChildren='Hastes'
                      onClick={() => fHastes()}
                    />
                    : <Switch
                      checkedChildren='Hastes'
                      unCheckedChildren='Hastes'
                      defaultChecked
                    />
                  : false}

                {camposFerramental
                  ? !campoSonda
                    ? <Switch
                      checkedChildren='Sonda'
                      unCheckedChildren='Sonda'
                      onClick={() => fSonda()}
                    />
                    : <Switch
                      checkedChildren='Sonda'
                      unCheckedChildren='Sonda'
                      defaultChecked
                    />
                  : false}

                {camposFerramental
                  ? !campopaPerfuracao
                    ? <Switch
                      checkedChildren='Pá de perfuração'
                      unCheckedChildren='Pá de perfuração'
                      onClick={() => fPaPerfuracao()}
                    />
                    : <Switch
                      checkedChildren='Pá de perfuração'
                      unCheckedChildren='Pá de perfuração'
                      defaultChecked
                    />
                  : false}

                {camposFerramental
                  ? !campoPullingHead
                    ? <Switch
                      checkedChildren='Pulling head'
                      unCheckedChildren='Pulling head'
                      onClick={() => fpullingHead()}
                    />
                    : <Switch
                      checkedChildren='Pulling head'
                      unCheckedChildren='Pulling head'
                      defaultChecked
                    />
                  : false}

                {camposFerramental
                  ? !campoLocalizador
                    ? <Switch
                      checkedChildren='Localizador'
                      unCheckedChildren='Localizador'
                      onClick={() => fLocalizador()}
                    />
                    : <Switch
                      checkedChildren='Localizador'
                      unCheckedChildren='Localizador'
                      defaultChecked
                    />
                  : false}

                {camposFerramental
                  ? !campoLuva
                    ? <Switch
                      checkedChildren='Luva'
                      unCheckedChildren='Luva'
                      onClick={() => fLuva()}
                    />
                    : <Switch
                      checkedChildren='Luva'
                      unCheckedChildren='Luva'
                      defaultChecked
                    />
                  : false}

                {camposFerramental
                  ? !campoHasteInicial
                    ? <Switch
                      checkedChildren='Haste inicial'
                      unCheckedChildren='Haste inicial'
                      onClick={() => fHasteInicial()}
                    />
                    : <Switch
                      checkedChildren='Haste inicial'
                      unCheckedChildren='Haste inicial'
                      defaultChecked
                    />
                  : false}

                {camposFerramental
                  ? !campoFlexobarra
                    ? <Switch
                      checkedChildren='Flexobarra'
                      unCheckedChildren='Flexobarra'
                      onClick={() => fFlexobarra()}
                    />
                    : <Switch
                      checkedChildren='Flexobarra'
                      unCheckedChildren='Flexobarra'
                      defaultChecked
                    />
                  : false}

                {camposFerramental
                  ? !campoRadio
                    ? <Switch
                      checkedChildren='Rádio'
                      unCheckedChildren='Rádio'
                      onClick={() => fRadio()}
                    />
                    : <Switch
                      checkedChildren='Rádio'
                      unCheckedChildren='Rádio'
                      defaultChecked
                    />
                  : false}

                {camposFerramental
                  ? !campoParafuso
                    ? <Switch
                      checkedChildren='Parafuso'
                      unCheckedChildren='Parafuso'
                      onClick={() => fParafuso()}
                    />
                    : <Switch
                      checkedChildren='Parafuso'
                      unCheckedChildren='Parafuso'
                      defaultChecked
                    />
                  : false}

                {camposFerramental
                  ? !campomodeloAlargador
                    ? <Switch
                      checkedChildren='Modelo de alargador'
                      unCheckedChildren='Modelo de alargador'
                      onClick={() => fModeloAlargador()}
                    />
                    : <Switch
                      checkedChildren='Modelo de alargador'
                      unCheckedChildren='Modelo de alargador'
                      defaultChecked
                    />
                  : false}

                {camposFerramental
                  ? !campocapacidadePortaFusilink
                    ? <Switch
                      checkedChildren='Capacidade do porta fusilink'
                      unCheckedChildren='Capacidade do porta fusilink'
                      onClick={() => fCapacidadePortaFusilink()}
                    />
                    : <Switch
                      checkedChildren='Capacidade do porta fusilink'
                      unCheckedChildren='Capacidade do porta fusilink'
                      defaultChecked
                    />
                  : false}

                {camposFerramental
                  ? !campocapacidadeSwivel
                    ? <Switch
                      checkedChildren='Capacidade do swivel'
                      unCheckedChildren='Capacidade do swivel'
                      onClick={() => fCapacidadeSwivel()}
                    />
                    : <Switch
                      checkedChildren='Capacidade do swivel'
                      unCheckedChildren='Capacidade do swivel'
                      defaultChecked
                    />
                  : false}

                {camposFerramental
                  ? !campoDiametroFerramenta
                    ? <Switch
                      checkedChildren='Diâmetro de ferramenta'
                      unCheckedChildren='Diâmetro de ferramenta'
                      onClick={() => fDiametroFerramenta()}
                    />
                    : <Switch
                      checkedChildren='Diâmetro de ferramenta'
                      unCheckedChildren='Diâmetro de ferramenta'
                      defaultChecked
                    />
                  : false}

                {camposFerramental
                  ? !campoCondicaoFerramenta
                    ? <Switch
                      checkedChildren='Condição do ferramental'
                      unCheckedChildren='Condição do ferramental'
                      onClick={() => fCondicaoFerramenta()}
                    />
                    : <Switch
                      checkedChildren='Condição do ferramental'
                      unCheckedChildren='Condição do ferramental'
                      defaultChecked
                    />
                  : false}

              </div>
              <button onClick={() => update(etapasColunas, 'etpasColunas')}>
                Adicionar
              </button>
            </S.Div2>
          </S.Container>
        </Modal>

        <Modal isOpen={isOpenRegistro} onClose={() => setIsOpenRegistro(false)}>
          <S.Container>
            <S.Div2>
              <h2>Adicione os campos da etapa</h2>
              {!camponomePerfilAcesso
                ? <Switch
                  checkedChildren='Nome do usuário do perfil de acesso'
                  unCheckedChildren='Nome do usuário do perfil de acesso'
                  onClick={() => fnomePerfilAcesso()}
                />
                : <Switch
                  checkedChildren='Nome do usuário do perfil de acesso'
                  unCheckedChildren='Nome do usuário do perfil de acesso'
                  defaultChecked
                />}
              {!campodataExecucao
                ? <Switch
                  checkedChildren='Data da execução'
                  unCheckedChildren='Data da execução'
                  onClick={() => fDataExecucao()}
                />
                : <Switch
                  checkedChildren='Data da execução '
                  unCheckedChildren='Data da execução '
                  defaultChecked
                />}
              {!camporesponsavelExecucao
                ? <Switch
                  checkedChildren='Responsável pela execução'
                  unCheckedChildren='Responsável pela execução'
                  onClick={() => fresponsavelExecucao()}
                />
                : <Switch
                  checkedChildren='Responsável pela execução'
                  unCheckedChildren='Responsável pela execução'
                  defaultChecked
                />}
              {!campohoraExecucao
                ? <Switch
                  checkedChildren='Hora da execução'
                  unCheckedChildren='Hora da execução'
                  onClick={() => fhoraExecucao()}
                />
                : <Switch
                  checkedChildren='Hora da execução'
                  unCheckedChildren='Hora da execução'
                  defaultChecked
                />}
              {!campoEntradaLatitude
                ? <Switch
                  checkedChildren='Ponto de verificação de entrada (lat)'
                  unCheckedChildren='Ponto de verificação de entrada (lat)'
                  onClick={() => fEntradaLatitude()}
                />
                : <Switch
                  checkedChildren='Ponto de verificação de entrada (lat)'
                  unCheckedChildren='Ponto de verificação de entrada (lat)'
                  defaultChecked
                />}
              {!campoEntradaLongitude
                ? <Switch
                  checkedChildren='Ponto de verificação de entrada (long)'
                  unCheckedChildren='Ponto de verificação de entrada (long)'
                  onClick={() => fEntradaLongitude()}
                />
                : <Switch
                  checkedChildren='Ponto de verificação de entrada (long)'
                  unCheckedChildren='Ponto de verificação de entrada (long)'
                  defaultChecked
                />}
              {!campoSaidaLatitude
                ? <Switch
                  checkedChildren='Ponto de verificação de saída (lat)'
                  unCheckedChildren='Ponto de verificação de saída (lat)'
                  onClick={() => fSaidaLatitude()}
                />
                : <Switch
                  checkedChildren='Ponto de verificação de saída(lat)'
                  unCheckedChildren='Ponto de verificação de saída(lat)'
                  defaultChecked
                />}

              {!campoSaidaLongitude
                ? <Switch
                  checkedChildren='Ponto de verificação de saída (long)'
                  unCheckedChildren='Ponto de verificação de saída (long)'
                  onClick={() => fSaidaLongitude()}
                />
                : <Switch
                  checkedChildren='Ponto de verificação de saída (long)'
                  unCheckedChildren='Ponto de verificação de saída (long)'
                  defaultChecked
                />}
              {!campoDiametroPerfuracao
                ? <Switch
                  checkedChildren='Diâmetro de perfuração'
                  unCheckedChildren='Diâmetro de perfuração'
                  onClick={() => fDiametroPerf()}
                />
                : <Switch
                  checkedChildren='Diâmetro de perfuração (mm)'
                  unCheckedChildren='Diâmetro de perfuração (mm)'
                  defaultChecked
                />}
              {!campoTipoSolo
                ? <Switch
                  checkedChildren='Tipos de solo'
                  unCheckedChildren='Tipos de solo'
                  onClick={() => fTipoSolo()}
                />
                : <Switch
                  checkedChildren='Tipo de Solo'
                  unCheckedChildren='Tipo de Solo'
                  defaultChecked
                />}
              {!campoDocumento
                ? <Switch
                  checkedChildren='Documento (upload)'
                  unCheckedChildren='Documento (upload)'
                  onClick={() => fDocumento()}
                />
                : <Switch
                  checkedChildren='Documento (upload)'
                  unCheckedChildren='Documento (upload)'
                  defaultChecked
                />}

              <Switch
                checkedChildren='Confirmação do procedimento'
                unCheckedChildren='Confirmação do procedimento'
                defaultChecked
              />
              <Switch
                checkedChildren='Volume preparado'
                unCheckedChildren='Volume preparado'
                defaultChecked
              />
              <Switch
                checkedChildren='Teste de viscosidade'
                unCheckedChildren='Teste de viscosidade'
                defaultChecked
              />
              <button onClick={() => updateDados()}>
                {loading
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
            </S.Div2>
          </S.Container>
        </Modal>

        <Modal
          isOpen={isOpenPreparacao}
          onClose={() => setIsOpenPreparacao(false)}
        >
          <S.Container>
            <S.Div2>
              <h2>Adicione os campos da etapa</h2>
              {!campocroquiMapeamento
                ? <Switch
                  checkedChildren='Enviar croqui de mapeamento (Upload)'
                  unCheckedChildren='Enviar croqui de mapeamento (Upload)'
                  onClick={() => fcroquiMapeamento()}
                />
                : <Switch
                  checkedChildren='Enviar croqui de mapeamento (Upload)'
                  unCheckedChildren='Enviar croqui de mapeamento (Upload)'
                  defaultChecked
                />}

              {!campoequipamentoUtilizado
                ? <Switch
                  checkedChildren='Equipamento utilizado'
                  unCheckedChildren='Equipamento utilizado'
                  onClick={() => fequipamentoUtilizado()}
                />
                : <Switch
                  checkedChildren='Equipamento utilizado'
                  unCheckedChildren='Equipamento utilizado'
                  defaultChecked
                />}

              {!campomaterializacaoCampo
                ? <Switch
                  checkedChildren='Materialização em campo'
                  unCheckedChildren='Materialização em campo'
                  onClick={() => fmaterialCampo()}
                />
                : <Switch
                  checkedChildren='Materialização em campo'
                  unCheckedChildren='Materialização em campo'
                  defaultChecked
                />}
              {!campoquantidadeInterferencias
                ? <Switch
                  checkedChildren='Quantidade de interferências'
                  unCheckedChildren='Quantidade de interferências'
                  onClick={() => fquantidadeInterferencias()}
                />
                : <Switch
                  checkedChildren='Quantidade de interferências'
                  unCheckedChildren='Quantidade de interferências'
                  defaultChecked
                />}
              {!campoLocalizaDiretrizFuro
                ? <Switch
                  checkedChildren='Localização em relação a diretriz do furo'
                  unCheckedChildren='Localização em relação a diretriz do furo'
                  onClick={() => flocalizacaoDiretrizFuro()}
                />
                : <Switch
                  checkedChildren='Localização em relação a diretriz do furo'
                  unCheckedChildren='Localização em relação a diretriz do furo'
                  defaultChecked
                />}
              {!campotipoInterferencia
                ? <Switch
                  checkedChildren='Tipo de interferência'
                  unCheckedChildren='Tipo de interferência'
                  onClick={() => ftipoInterferencia()}
                />
                : <Switch
                  checkedChildren='Tipo de interferência'
                  unCheckedChildren='Tipo de interferência'
                  defaultChecked
                />}
              {!campoEmpresaProprietaria
                ? <Switch
                  checkedChildren='Empresa proprietária'
                  unCheckedChildren='Empresa proprietária'
                  onClick={() => fempresaProprietaria()}
                />
                : <Switch
                  checkedChildren='Empresa proprietária'
                  unCheckedChildren='Empresa proprietária'
                  defaultChecked
                />}
              {!campolargura
                ? <Switch
                  checkedChildren='Dimensões da vala de entrada e saída'
                  unCheckedChildren='Dimensões da vala de entrada e saída'
                  onClick={() => fdimensaoVala()}
                />
                : <Switch
                  checkedChildren='Dimensões da vala de entrada e saída'
                  unCheckedChildren='Dimensões da vala de entrada e saída'
                  defaultChecked
                />}
              {!campoestacaReferencia
                ? <Switch
                  checkedChildren='Estaca de referência'
                  unCheckedChildren='Estaca de referência'
                  onClick={() => festacaReferencia()}
                />
                : <Switch
                  checkedChildren='Estaca de referência'
                  unCheckedChildren='Estaca de referência'
                  defaultChecked
                />}
              {!campoSondagemInterferencia
                ? <Switch
                  checkedChildren='Confirmação de sondagem da interferência'
                  unCheckedChildren='Confirmação de sondagem da interferência'
                  onClick={() => fsondagemInterferencia()}
                />
                : <Switch
                  checkedChildren='Confirmação de sondagem da interferência'
                  unCheckedChildren='Confirmação de sondagem da interferência'
                  defaultChecked
                />}
              {!campoFluido
                ? <Switch
                  checkedChildren='Fluido'
                  unCheckedChildren='Fluido'
                  onClick={() => ffluido()}
                />
                : <Switch
                  checkedChildren='Fluido'
                  unCheckedChildren='Fluido'
                  defaultChecked
                />}
              {!campoReceitaFluido
                ? <Switch
                  checkedChildren='Receita do fluido'
                  unCheckedChildren='Receita do fluido'
                  onClick={() => freceitafluido()}
                />
                : <Switch
                  checkedChildren='Receita do fluido'
                  unCheckedChildren='Receita do fluido'
                  defaultChecked
                />}

              <button onClick={() => updateDados()}>
                {loading
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
            </S.Div2>
          </S.Container>
        </Modal>

        <Modal
          isOpen={isOpenPerfuracao}
          onClose={() => setIsOpenPerfuracao(false)}
        >
          <S.Container>
            <S.Div2>
              <h2>Adicione os campos da etapa</h2>
              {!camponumeroHastes
                ? <Switch
                  checkedChildren='Número de hastes'
                  unCheckedChildren='Número de hastes'
                  onClick={() => fnumeroHastes()}
                />
                : <Switch
                  checkedChildren='Número de hastes'
                  unCheckedChildren='Número de hastes'
                  defaultChecked
                />}
              {!campoprofundidadePlanejada
                ? <Switch
                  checkedChildren='Profundidade planejada'
                  unCheckedChildren='Profundidade planejada'
                  onClick={() => fnumeroHastes()}
                />
                : <Switch
                  checkedChildren='Profundidade planejada'
                  unCheckedChildren='Profundidade planejada'
                  defaultChecked
                />}
              {!campoavancoPlanejado
                ? <Switch
                  checkedChildren='Avanço planejado'
                  unCheckedChildren='Avanço planejado'
                  onClick={() => favancoPlanejado()}
                />
                : <Switch
                  checkedChildren='Avanço planejado'
                  unCheckedChildren='Avanço planejado'
                  defaultChecked
                />}
              {!campoprofundidadeExecutada
                ? <Switch
                  checkedChildren='Profundidade executada'
                  unCheckedChildren='Profundidade executada'
                  onClick={() => fprofundidadeExecutada()}
                />
                : <Switch
                  checkedChildren='Profundidade executada'
                  unCheckedChildren='Profundidade executada'
                  defaultChecked
                />}
              {!campoavancoExecutado
                ? <Switch
                  checkedChildren='Avanço executado'
                  unCheckedChildren='Avanço executado'
                  onClick={() => fprofundidadeExecutada()}
                />
                : <Switch
                  checkedChildren='Avanço executado'
                  unCheckedChildren='Avanço executado'
                  defaultChecked
                />}
              {!campotipoInterferencia
                ? <Switch
                  checkedChildren='Tipo de interferência'
                  unCheckedChildren='Tipo de interferência'
                  onClick={() => ftipoInterferencia()}
                />
                : <Switch
                  checkedChildren='Tipo de interferência'
                  unCheckedChildren='Tipo de interferência'
                  defaultChecked
                />}
              {!campoamarracao
                ? <Switch
                  checkedChildren='Amarração'
                  unCheckedChildren='Amarração'
                  onClick={() => famarracao()}
                />
                : <Switch
                  checkedChildren='Amarração'
                  unCheckedChildren='Amarração'
                  defaultChecked
                />}
              {!campomaquinaPerfuratriz
                ? <Switch
                  checkedChildren='Máquina perfuratriz'
                  unCheckedChildren='Máquina perfuratriz'
                  onClick={() => fmaquinaPerfuratriz()}
                />
                : <Switch
                  checkedChildren='Máquina perfuratriz'
                  unCheckedChildren='Máquina perfuratriz'
                  defaultChecked
                />}
              {!campodiametroAlargamento
                ? <Switch
                  checkedChildren='Diâmetro de alargamento'
                  unCheckedChildren='Diâmetro de alargamento'
                  onClick={() => fdiametroAlargamento()}
                />
                : <Switch
                  checkedChildren='Diâmetro de alargamento'
                  unCheckedChildren='Diâmetro de alargamento'
                  defaultChecked
                />}
              {!campotempoHaste
                ? <Switch
                  checkedChildren='Tempo por haste'
                  unCheckedChildren='Tempo por haste'
                  onClick={() => ftempoHaste()}
                />
                : <Switch
                  checkedChildren='Tempo por haste'
                  unCheckedChildren='Tempo por haste'
                  defaultChecked
                />}
              <Switch
                checkedChildren='Vazão de bomba'
                unCheckedChildren='Vazão de bomba'
                defaultChecked
              />
              <Switch
                checkedChildren='Tipo de rede/tubulação'
                unCheckedChildren='Tipo de rede/tubulação'
                defaultChecked
              />
              <Switch
                checkedChildren='Diâmetro da rede'
                unCheckedChildren='Diâmetro da rede'
                defaultChecked
              />

              <button onClick={() => updateDados()}>
                {loading
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
            </S.Div2>
          </S.Container>
        </Modal>

        <Modal isOpen={isOpenFerramental} onClose={() => setIsOpenFerramental(false)}>
          <S.Container>
            <S.Div2>
              <h2>Adicione os campos da etapa</h2>
              <Switch
                checkedChildren='Porta sonda'
                unCheckedChildren='Porta sonda'
                defaultChecked
              />
              <Switch
                checkedChildren='Hastes'
                unCheckedChildren='Hastes'
                defaultChecked
              />
              <Switch
                checkedChildren='Sonda'
                unCheckedChildren='Sonda'
                defaultChecked
              />
              <Switch
                checkedChildren='Pá de perfuração'
                unCheckedChildren='Pá de perfuração'
                defaultChecked
              />
              <Switch
                checkedChildren='Pulling head'
                unCheckedChildren='Pulling head'
                defaultChecked
              />
              <Switch
                checkedChildren='Localizador'
                unCheckedChildren='Localizador'
                defaultChecked
              />
              <Switch
                checkedChildren='Luva'
                unCheckedChildren='Luva'
                defaultChecked
              />
              <Switch
                checkedChildren='Haste inicial'
                unCheckedChildren='Haste inicial'
                defaultChecked
              />
              <Switch
                checkedChildren='Flexobarra'
                unCheckedChildren='Flexobarra'
                defaultChecked
              />
              <Switch
                checkedChildren='Rádio'
                unCheckedChildren='Rádio'
                defaultChecked
              />
              <Switch
                checkedChildren='Parafuso'
                unCheckedChildren='Parafuso'
                defaultChecked
              />
              <Switch
                checkedChildren='Parafuso'
                unCheckedChildren='Parafuso'
                defaultChecked
              />
              <Switch
                checkedChildren='Modelo de alargador'
                unCheckedChildren='Modelo de alargador'
                defaultChecked
              />
              <Switch
                checkedChildren='Capacidade do porta fusilink'
                unCheckedChildren='Capacidade do porta fusilink'
                defaultChecked
              />
              <Switch
                checkedChildren='Capacidade do swivel'
                unCheckedChildren='Capacidade do swivel'
                defaultChecked
              />
              <Switch
                checkedChildren='Diâmetro de ferramenta'
                unCheckedChildren='Diâmetro de ferramenta'
                defaultChecked
              />
              <Switch
                checkedChildren='Condição do ferramental'
                unCheckedChildren='Condição do ferramental'
                defaultChecked
              />
              <button onClick={() => updateDados()}>
                {loading
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
            </S.Div2>
          </S.Container>
        </Modal>

        <Modal isOpen={isOpenUpdate} onClose={() => setIsOpenUpdate(false)}>
          <S.Container>
            <S.Div>
              <TextField
                label='novaEtapa'
                value={novaEtapa}
                onChange={(text) => setnovaEtapa(text.target.value)}
              />
              <TextField
                label='Descrição'
                value={numeroEtapa}
                onChange={(text) => setnumeroEtapa(text.target.value)}
              />
              <TextField
                label='Perfil'
                value={perfil}
                onChange={(text) => setperfil(text.target.value)}
              />
              <button onClick={() => updateDados()}>
                {loading
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
            </S.Div>
          </S.Container>
        </Modal>
      </S.ContainerConfirmation>
    </>
  )
}
