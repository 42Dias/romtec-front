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

export default function ConfigurationSteps () {
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
  const [configurationCrossings, setConfigurationCrossings] = useState<any[]>(
    [],
  )
  const link = '/etapas/'
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>()
  let idConfigTravessia = window.location.hash.replace(
    ip + '/romtec/#/etapas-da-configuracao/',
    '',
  )
  const [tipoEtapa, setTipoEtapa] = useState('')
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

  function handleCampos () {
    if (campos) {
      setCampos(false)
    } else {
      setCampos(true)
    }
  }

  function handleCamposPreparacao () {
    if (camposPreparacao) {
      setCamposPreparacao(false)
    } else {
      setCamposPreparacao(true)
    }
  }

  function handleCamposPerfuracao () {
    if (camposPerfuracao) {
      setCamposPerfuracao(false)
    } else {
      setCamposPerfuracao(true)
    }
  }

  function handleCamposFerramental () {
    if (camposFerramental) {
      setCamposFerramental(false)
    } else {
      setCamposFerramental(true)
    }
  }

  function onSubmit (data: FormData) {
    console.log(data)
    Cadastro(data)
  }
  // eslint-disable-next-line
  async function Cadastro(submit: any) {
    setLoading(true)
    submit.idConfigTravessia = idConfigTravessia.replace(
      '#/etapas-da-configuracao/',
      '',
    )
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

  async function loadDados () {
    setLoading(true)
    console.log('idConfigTravessia')
    console.log(idConfigTravessia.replace('#/etapas-da-configuracao/', ''))
    // eslint-disable-next-line
    api
      .get(
        `etapas?filter%5BidConfigTravessia%5D=${idConfigTravessia.replace(
          '#/etapas-da-configuracao/',
          '',
        )}`,
      )
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

    api
      .get(
        `etapasColunas?filter%5BidConfigTravessia%5D=${idConfigTravessia.replace(
          '#/etapas-da-configuracao/',
          '',
        )}`,
      )
      .then((response) => {
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
              idConfigTravessia: idConfigTravessia.replace(
                '#/etapas-da-configuracao/',
                '',
              ),
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
            setcampoProfundidade(response.data.rows[0].campoProfundidade)
            setcampoResponselTopografia(response.data.rows[0].campoResponselTopografia)
            setcampoDataTopografia(response.data.rows[0].campoDataTopografia)
            setcamponomePerfilAcesso(response.data.rows[0].camponomePerfilAcesso)
            setcampodataExecucao(response.data.rows[0].campodataExecucao)
            setcamporesponsavelExecucao(response.data.rows[0].camporesponsavelExecucao)
            setcampohoraExecucao(response.data.rows[0].campohoraExecucao)
            setcampocroquiMapeamento(response.data.rows[0].campocroquiMapeamento)
            setcampoequipamentoUtilizado(response.data.rows[0].campoequipamentoUtilizado)
            setcampomaterializacaoCampo(response.data.rows[0].campomaterializacaoCampo)
            setcampoquantidadeInterferencias(response.data.rows[0].campoquantidadeInterferencias)
            setcampoparaleloEsquerda(response.data.rows[0].campoparaleloEsquerda)
            setcampoparaleloDireita(response.data.rows[0].campoparaleloDireita)
            setcampoperpendicular(response.data.rows[0].campoperpendicular)
            setcampolargura(response.data.rows[0].campolargura)
            setcampocomprimento(response.data.rows[0].campocomprimento)
            setcampoprofundidadeVala(response.data.rows[0].campoprofundidadeVala)
            setcampoestacaReferencia(response.data.rows[0].campoestacaReferencia)
            setcamponumeroHastes(response.data.rows[0].camponumeroHastes)
            setcampoprofundidadePlanejada(response.data.rows[0].campoprofundidadePlanejada)
            setcampoavancoPlanejado(response.data.rows[0].campoavancoPlanejado)
            setcampoprofundidadeExecutada(response.data.rows[0].campoprofundidadeExecutada)
            setcampoavancoExecutado(response.data.rows[0].campoavancoExecutado)
            setcampoamarracao(response.data.rows[0].campoamarracao)
            setcampomaquinaPerfuratriz(response.data.rows[0].campomaquinaPerfuratriz)
            setcampodiametroAlargamento(response.data.rows[0].campodiametroAlargamento)
            setcampotempoHaste(response.data.rows[0].campotempoHaste)
            setcampovazaoBomba(response.data.rows[0].campovazaoBomba)
            setcampotipoRedeTubula(response.data.rows[0].campotipoRedeTubula)
            setcampodiametroRede(response.data.rows[0].campodiametroRede)
            setcampoferramentasUtilizadas(response.data.rows[0].campoferramentasUtilizadas)
            setcampomodeloAlargador(response.data.rows[0].campomodeloAlargador)
            setcampocapacidadePortaFusilink(response.data.rows[0].campocapacidadePortaFusilink)
            setcampocapacidadeSwivel(response.data.rows[0].campocapacidadeSwivel)
            setcampoFluido(response.data.rows[0].fluido)
            setcampoReceitaFluido(response.data.rows[0].receitaFluido)
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
  async function deleteDados (id: string) {
    setLoading(true)
    // eslint-disable-next-line
    const responser = api
      .delete('etapas/' + id)
      .then((response) => {
        if (response.statusText === 'OK') {
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
  function update (dados: any, banco: string) {
    console.log('dados')
    console.log(dados)
    if (banco === 'etapas') {
      setidEtapa(dados.id)
      setnumeroEtapa(dados.numeroEtapa)
      setnovaEtapa(dados.novaEtapa)
      setperfil(dados.perfil)
      setIsOpenUpdate(true)
    } else {
      updateDados()
    }
  }
  async function updateDados () {
    setLoading(true)
    console.log(etapas)
    const data = {
      numeroEtapa: numeroEtapa,
      novaEtapa: novaEtapa,
      perfil: perfil,
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
    }

    const data2 = {
      numeroEtapa: numeroEtapa,
      novaEtapa: novaEtapa,
      perfil: perfil,
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
  }
  function selectCampos (etapa: any) {
    setidEtapa(etapa.id)
    setnumeroEtapa(etapa.numeroEtapa)
    setnovaEtapa(etapa.novaEtapa)
    setperfil(etapa.perfil)
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

  function onChange (e: any) {
    console.log(`checked = ${e.target.checked}`)
  }
  function fnomePerfilAcesso () {
    if (camponomePerfilAcesso) {
      setcamponomePerfilAcesso2(false)
    } else {
      setcamponomePerfilAcesso(true)
      setcamponomePerfilAcesso2(true)
    }
  }
  function fDataExecucao () {
    if (campodataExecucao) {
      setcampodataExecucao2(false)
    } else {
      setcampodataExecucao(true)
      setcampodataExecucao2(true)
    }
  }
  function fresponsavelExecucao () {
    if (camporesponsavelExecucao) {
      setcamporesponsavelExecucao2(false)
    } else {
      setcamporesponsavelExecucao(true)
      setcamporesponsavelExecucao2(true)
    }
  }
  function fhoraExecucao () {
    if (campohoraExecucao) {
      setcampohoraExecucao2(false)
    } else {
      setcampohoraExecucao(true)
      setcampohoraExecucao2(true)
    }
  }
  function fcroquiMapeamento () {
    if (campocroquiMapeamento) {
      setcampocroquiMapeamento2(false)
    } else {
      setcampocroquiMapeamento(true)
      setcampocroquiMapeamento2(true)
    }
  }
  function fequipamentoUtilizado () {
    if (campoequipamentoUtilizado) {
      setcampoequipamentoUtilizado2(false)
    } else {
      setcampoequipamentoUtilizado(true)
      setcampoequipamentoUtilizado2(true)
    }
  }
  function fmaterialCampo () {
    if (campomaterializacaoCampo) {
      setcampomaterializacaoCampo2(false)
    } else {
      setcampomaterializacaoCampo(true)
      setcampomaterializacaoCampo2(true)
    }
  }
  function fquantidadeInterferencias () {
    if (campoquantidadeInterferencias) {
      setcampoquantidadeInterferencias2(false)
    } else {
      setcampoquantidadeInterferencias(true)
      setcampoquantidadeInterferencias2(true)
    }
  }
  function flocalizacaoDiretrizFuro () {
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
  function ftipoInterferencia () {
    if (campotipoInterferencia) {
      setcampotipoInterferencia2(false)
    } else {
      setcampotipoInterferencia(true)
      setcampotipoInterferencia2(true)
    }
  }
  function fempresaProprietaria () {
    if (campoEmpresa) {
      setcampoEmpresa2(false)
    } else {
      setcampoEmpresa(true)
      setcampoEmpresa2(true)
    }
  }
  function fdimensaoVala () {
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
  function festacaReferencia () {
    if (campoestacaReferencia) {
      setcampoestacaReferencia2(false)
    } else {
      setcampoestacaReferencia(true)
      setcampoestacaReferencia2(true)
    }
  }
  function fsondagemInterferencia () {
    if (campoSondagemInterferencia) {
      setcampoSondagemInterferencia2(false)
    } else {
      setcampoSondagemInterferencia(true)
      setcampoSondagemInterferencia2(true)
    }
  }
  function ffluido () {
    if (campoFluido) {
      setcampoFluido2(false)
    } else {
      setcampoFluido(true)
      setcampoFluido2(true)
    }
  }
  function freceitafluido () {
    if (campoReceitaFluido) {
      setcampoReceitaFluido2(false)
    } else {
      setcampoReceitaFluido(true)
      setcampoReceitaFluido2(true)
    }
  }
  function fnumeroHastes () {
    if (camponumeroHastes) {
      setcamponumeroHastes2(false)
    } else {
      setcamponumeroHastes(true)
      setcamponumeroHastes2(true)
    }
  }
  function favancoPlanejado () {
    if (campoavancoPlanejado) {
      setcampoavancoPlanejado2(false)
    } else {
      setcampoavancoPlanejado(true)
      setcampoavancoPlanejado2(true)
    }
  }
  function fprofundidadeExecutada () {
    if (campoprofundidadeExecutada) {
      setcampoprofundidadeExecutada2(false)
    } else {
      setcampoprofundidadeExecutada(true)
      setcampoprofundidadePlanejada2(true)
    }
  }
  function famarracao () {
    if (campoamarracao) {
      setcampoamarracao2(false)
    } else {
      setcampoamarracao(true)
      setcampoamarracao2(true)
    }
  }
  function fmaquinaPerfuratriz () {
    if (campomaquinaPerfuratriz) {
      setcampomaquinaPerfuratriz2(false)
    } else {
      setcampomaquinaPerfuratriz(true)
      setcampomaquinaPerfuratriz2(true)
    }
  }
  function fdiametroAlargamento () {
    if (campodiametroAlargamento) {
      setcampodiametroAlargamento2(false)
    } else {
      setcampodiametroAlargamento(true)
      setcampodiametroAlargamento2(true)
    }
  }
  function ftempoHaste () {
    if (campodiametroAlargamento) {
      setcampodiametroAlargamento2(false)
    } else {
      setcampodiametroAlargamento(true)
      setcampodiametroAlargamento2(true)
    }
  }
  function fEntradaLatitude () {
    if (campoEntradaLatitude) {
      console.log('campo latitude')
      setcampoEntradaLatitude2(false)
    } else {
      setcampoEntradaLatitude(true)
      setcampoEntradaLatitude2(true)
    }
  }

  function fEntradaLongitude () {
    if (campoEntradaLongitude) {
      console.log('campo longitude')
      setcampoEntradaLongitude2(false)
    } else {
      setcampoEntradaLongitude(true)
      setcampoEntradaLongitude2(true)
    }
  }
  function fSaidaLatitude () {
    if (campoSaidaLatitude) {
      setcampoSaidaLatitude2(false)
    } else {
      setcampoSaidaLatitude(true)
      setcampoSaidaLatitude2(true)
    }
  }
  function fSaidaLongitude () {
    if (campoSaidaLongitude) {
      setcampoSaidaLongitude2(false)
    } else {
      setcampoSaidaLongitude(true)
      setcampoSaidaLongitude2(true)
    }
  }
  function fTipoTubulacao () {
    if (campoTipoTubulacao) {
      setcampoTipoTubulacao2(false)
    } else {
      setcampoTipoTubulacao(true)
      setcampoTipoTubulacao2(true)
    }
  }
  function fDiametroPerf () {
    if (campoDiametro) {
      setcampoDiametro2(false)
    } else {
      setcampoDiametro(true)
      setcampoDiametro2(true)
    }
  }
  function fTipoSolo () {
    if (campoTipoSolo) {
      setcampoTipoSolo2(false)
    } else {
      setcampoTipoSolo(true)
      setcampoTipoSolo2(true)
    }
  }
  function fEquipamento () {
    if (campoEquipamento) {
      setcampoEquipamento2(false)
    } else {
      setcampoEquipamento(true)
      setcampoEquipamento2(true)
    }
  }
  function fDocumento () {
    if (campoDocumento) {
      setcampoDocumento2(false)
    } else {
      setcampoDocumento(true)
      setcampoDocumento2(true)
    }
  }
  function fTipoRede () {
    if (campoTipoRede) {
      setcampoTipoRede2(false)
    } else {
      setcampoTipoRede(true)
      setcampoTipoRede2(true)
    }
  }
  function fSondagemInter () {
    if (campoSondagemInterferencia) {
      setcampoSondagemInterferencia2(false)
    } else {
      setcampoSondagemInterferencia(true)
      setcampoSondagemInterferencia2(true)
    }
  }
  function fSondagem () {
    if (campoSondagem) {
      setcampoSondagem2(false)
    } else {
      setcampoSondagem(true)
      setcampoSondagem2(true)
    }
  }
  function fDiametroInter () {
    if (campoDiametroInterferencia) {
      setcampoDiametroInterferencia2(false)
    } else {
      setcampoDiametroInterferencia(true)
      setcampoDiametroInterferencia2(true)
    }
  }
  function fPlanoFuro () {
    if (campoPlanoFuro) {
      setcampoPlanoFuro2(false)
    } else {
      setcampoPlanoFuro(true)
      setcampoPlanoFuro2(true)
    }
  }
  function fFerramentas () {
    if (campoFerramentas) {
      setcampoFerramentas2(false)
    } else {
      setcampoFerramentas(true)
      setcampoFerramentas2(true)
    }
  }
  function fInfoEnvolvidas () {
    if (campoInfoEnvolvidas) {
      setcampoInfoEnvolvidas2(false)
    } else {
      setcampoInfoEnvolvidas(true)
      setcampoInfoEnvolvidas2(true)
    }
  }
  function fDiametro () {
    if (campoDiametro) {
      setcampoDiametro2(false)
    } else {
      setcampoDiametro(true)
      setcampoDiametro2(true)
    }
  }
  function fLocalDiretriz () {
    if (campoLocalizaDiretrizFuro) {
      setcampoLocalizaDiretrizFuro2(false)
    } else {
      setcampoLocalizaDiretrizFuro(true)
      setcampoLocalizaDiretrizFuro2(true)
    }
  }
  function fTipoInter () {
    if (campoTipoInterferencia) {
      setcampoTipoInterferencia2(false)
    } else {
      setcampoTipoInterferencia(true)
      setcampoTipoInterferencia2(true)
    }
  }

  function fProfundidade () {
    if (campoProfundidade) {
      setcampoProfundidade2(false)
    } else {
      setcampoProfundidade(true)
      setcampoProfundidade2(true)
    }
  }
  function fRespTopografia () {
    if (campoResponselTopografia) {
      setcampoResponselTopografia2(false)
    } else {
      setcampoResponselTopografia(true)
      setcampoResponselTopografia2(true)
    }
  }
  function fDataTopografia () {
    if (campoDataTopografia) {
      setcampoDataTopografia2(false)
    } else {
      setcampoDataTopografia(true)
      setcampoDataTopografia2(true)
    }
  }
  function fEmpresa () {
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
                  <DeleteButton onDelete={() => deleteDados(etapas.id)} />
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
                <Switch
                  checkedChildren='Pontos de verificação de planejamento'
                  unCheckedChildren='Pontos de verificação de planejamento'
                  onClick={() => setTipoEtapa('planejamento')}
                />

                <Switch
                  checkedChildren='Pontos de verificação da execução'
                  unCheckedChildren='Pontos de verificação da execução'
                  onClick={() => setTipoEtapa('execução')}
                />
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

                <p onClick={() => handleCampos()}>Registros</p>

                {campos
                  ? <h6 style={{ fontSize: '16px' }}>Campos de registro:</h6>
                  : false}

                {campos
                  ? <Switch
                      checkedChildren='Nome do usuário do perfil de acesso'
                      unCheckedChildren='Nome do usuário do perfil de acesso'
                      onClick={() => fnomePerfilAcesso()}
                    />
                  : false}

                {campos
                  ? <Switch
                      checkedChildren='Data da execução'
                      unCheckedChildren='Data da execução'
                      onClick={() => fnomePerfilAcesso()}
                    />
                  : false}

                {campos
                  ? <Switch
                      checkedChildren='Responsável pela execução'
                      unCheckedChildren='Responsável pela execução'
                      onClick={() => fnomePerfilAcesso()}
                    />
                  : false}

                {campos
                  ? <Switch
                      checkedChildren='Hora da execução'
                      unCheckedChildren='Hora da execução'
                      onClick={() => fnomePerfilAcesso()}
                    />
                  : false}

                {campos
                  ? <Switch
                      checkedChildren='Ponto de verificação de entrada (lat)'
                      unCheckedChildren='Ponto de verificação de entrada (lat)'
                      onClick={() => fnomePerfilAcesso()}
                    />
                  : false}

                {campos
                  ? <Switch
                      checkedChildren='Ponto de verificação de saída(lat)'
                      unCheckedChildren='Ponto de verificação de saída(lat)'
                      onClick={() => fnomePerfilAcesso()}
                    />
                  : false}

                {campos
                  ? <Switch
                      checkedChildren='Ponto de verificação de saída (long)'
                      unCheckedChildren='Ponto de verificação de saída (long)'
                      onClick={() => fnomePerfilAcesso()}
                    />
                  : false}

                {campos
                  ? <Switch
                      checkedChildren='Diâmetro de perfuração (mm)'
                      unCheckedChildren='Diâmetro de perfuração (mm)'
                      onClick={() => fnomePerfilAcesso()}
                    />
                  : false}

                {campos
                  ? <Switch
                      checkedChildren='Tipo de Solo'
                      unCheckedChildren='Tipo de Solo'
                      onClick={() => fnomePerfilAcesso()}
                    />
                  : false}

                {campos
                  ? <Switch
                      checkedChildren='Documento (upload)'
                      unCheckedChildren='Documento (upload)'
                      onClick={() => fnomePerfilAcesso()}
                    />
                  : false}

                {campos
                  ? <Switch
                      checkedChildren='Confirmação do procedimento'
                      unCheckedChildren='Confirmação do procedimento'
                      onClick={() => fnomePerfilAcesso()}
                    />
                  : false}

                {campos
                  ? <Switch
                      checkedChildren='Volume preparado'
                      unCheckedChildren='Volume preparado'
                      onClick={() => fnomePerfilAcesso()}
                    />
                  : false}

                {campos
                  ? <Switch
                      checkedChildren='Teste de viscosidade'
                      unCheckedChildren='Teste de viscosidade'
                      onClick={() => fnomePerfilAcesso()}
                    />
                  : false}

                <p onClick={() => handleCamposPreparacao()}>Preparação</p>

                {camposPreparacao
                  ? <h6 style={{ fontSize: '16px' }}>Campos de Preparação:</h6>
                  : false}

                {camposPreparacao
                  ? <Switch
                      checkedChildren='Enviar croqui de mapeamento (Upload)'
                      unCheckedChildren='Enviar croqui de mapeamento (Upload)'
                      onClick={() => fnomePerfilAcesso()}
                    />
                  : false}

                {camposPreparacao
                  ? <Switch
                      checkedChildren='Equipamento utilizado'
                      unCheckedChildren='Equipamento utilizado'
                      onClick={() => fnomePerfilAcesso()}
                    />
                  : false}

                {camposPreparacao
                  ? <Switch
                      checkedChildren='Materialização em campo'
                      unCheckedChildren='Materialização em campo'
                      onClick={() => fnomePerfilAcesso()}
                    />
                  : false}

                {camposPreparacao
                  ? <Switch
                      checkedChildren='Quantidade de interferências'
                      unCheckedChildren='Quantidade de interferências'
                      onClick={() => fnomePerfilAcesso()}
                    />
                  : false}

                {camposPreparacao
                  ? <Switch
                      checkedChildren='Localização em relação a diretriz do furo'
                      unCheckedChildren='Localização em relação a diretriz do furo'
                      onClick={() => fnomePerfilAcesso()}
                    />
                  : false}

                {camposPreparacao
                  ? <Switch
                      checkedChildren='Tipo de interferência'
                      unCheckedChildren='Tipo de interferência'
                      onClick={() => fnomePerfilAcesso()}
                    />
                  : false}

                {camposPreparacao
                  ? <Switch
                      checkedChildren='Empresa proprietária'
                      unCheckedChildren='Empresa proprietária'
                      onClick={() => fnomePerfilAcesso()}
                    />
                  : false}

                {camposPreparacao
                  ? <Switch
                      checkedChildren='Dimensões da vala de entrada e saída'
                      unCheckedChildren='Dimensões da vala de entrada e saída'
                      onClick={() => fnomePerfilAcesso()}
                    />
                  : false}

                {camposPreparacao
                  ? <Switch
                      checkedChildren='Estaca de referência'
                      unCheckedChildren='Estaca de referência'
                      onClick={() => fnomePerfilAcesso()}
                    />
                  : false}

                {camposPreparacao
                  ? <Switch
                      checkedChildren='Confirmação de sondagem da interferência'
                      unCheckedChildren='Confirmação de sondagem da interferência'
                      onClick={() => fnomePerfilAcesso()}
                    />
                  : false}

                {camposPreparacao
                  ? <Switch
                      checkedChildren='Fluido'
                      unCheckedChildren='Fluido'
                      onClick={() => fnomePerfilAcesso()}
                    />
                  : false}

                {camposPreparacao
                  ? <Switch
                      checkedChildren='Receita do fluido'
                      unCheckedChildren='Receita do fluido'
                      onClick={() => fnomePerfilAcesso()}
                    />
                  : false}

                <p onClick={() => handleCamposPerfuracao()}>Perfuração</p>

                {camposPerfuracao
                  ? <h6 style={{ fontSize: '16px' }}>Campos de Perfuração:</h6>
                  : false}

                {camposPerfuracao
                  ? <Switch
                      checkedChildren='Número de hastes'
                      unCheckedChildren='Número de hastes'
                      onClick={() => fnomePerfilAcesso()}
                    />
                  : false}

                {camposPerfuracao
                  ? <Switch
                      checkedChildren='Profundidade planejada'
                      unCheckedChildren='Profundidade planejada'
                      onClick={() => fnomePerfilAcesso()}
                    />
                  : false}

                {camposPerfuracao
                  ? <Switch
                      checkedChildren='Avanço planejado'
                      unCheckedChildren='Avanço planejado'
                      onClick={() => fnomePerfilAcesso()}
                    />
                  : false}

                {camposPerfuracao
                  ? <Switch
                      checkedChildren='Profundidade executada'
                      unCheckedChildren='Profundidade executada'
                      onClick={() => fnomePerfilAcesso()}
                    />
                  : false}

                {camposPerfuracao
                  ? <Switch
                      checkedChildren='Avanço executado'
                      unCheckedChildren='Avanço executado'
                      onClick={() => fnomePerfilAcesso()}
                    />
                  : false}

                {camposPerfuracao
                  ? <Switch
                      checkedChildren='Amarração'
                      unCheckedChildren='Amarração'
                      onClick={() => fnomePerfilAcesso()}
                    />
                  : false}
                {camposPerfuracao
                  ? <Switch
                      checkedChildren='Máquina perfuratriz'
                      unCheckedChildren='Máquina perfuratriz'
                      onClick={() => fnomePerfilAcesso()}
                    />
                  : false}

                {camposPerfuracao
                  ? <Switch
                      checkedChildren='Diâmetro de alargamento'
                      unCheckedChildren='Diâmetro de alargamento'
                      onClick={() => fnomePerfilAcesso()}
                    />
                  : false}

                {camposPerfuracao
                  ? <Switch
                      checkedChildren='Tempo por haste'
                      unCheckedChildren='Tempo por haste'
                      onClick={() => fnomePerfilAcesso()}
                    />
                  : false}

                {camposPerfuracao
                  ? <Switch
                      checkedChildren='Vazão de bomba'
                      unCheckedChildren='Vazão de bomba'
                      onClick={() => fnomePerfilAcesso()}
                    />
                  : false}

                {camposPerfuracao
                  ? <Switch
                      checkedChildren='Tipo de rede/tubulação'
                      unCheckedChildren='Tipo de rede/tubulação'
                      onClick={() => fnomePerfilAcesso()}
                    />
                  : false}

                {camposPerfuracao
                  ? <Switch
                      checkedChildren='Diâmetro da rede'
                      unCheckedChildren='Diâmetro da rede'
                      onClick={() => fnomePerfilAcesso()}
                    />
                  : false}

                <p onClick={() => handleCamposFerramental()}>Ferramental</p>
                {camposFerramental
                  ? <h6 style={{ fontSize: '16px' }}>Campos de Ferramental:</h6>
                  : false}
                {camposFerramental
                  ? <Switch
                      checkedChildren='Porta sonda'
                      unCheckedChildren='Porta sonda'
                      onClick={() => fnomePerfilAcesso()}
                    />
                  : false}

                {camposFerramental
                  ? <Switch
                      checkedChildren='Hastes'
                      unCheckedChildren='Hastes'
                      onClick={() => fnomePerfilAcesso()}
                    />
                  : false}

                {camposFerramental
                  ? <Switch
                      checkedChildren='Sonda'
                      unCheckedChildren='Sonda'
                      onClick={() => fnomePerfilAcesso()}
                    />
                  : false}

                {camposFerramental
                  ? <Switch
                      checkedChildren='Pá de perfuração'
                      unCheckedChildren='Pá de perfuração'
                      onClick={() => fnomePerfilAcesso()}
                    />
                  : false}

                {camposFerramental
                  ? <Switch
                      checkedChildren='Pulling head'
                      unCheckedChildren='Pulling head'
                      onClick={() => fnomePerfilAcesso()}
                    />
                  : false}

                {camposFerramental
                  ? <Switch
                      checkedChildren='Localizador'
                      unCheckedChildren='Localizador'
                      onClick={() => fnomePerfilAcesso()}
                    />
                  : false}

                {camposFerramental
                  ? <Switch
                      checkedChildren='Luva'
                      unCheckedChildren='Luva'
                      onClick={() => fnomePerfilAcesso()}
                    />
                  : false}

                {camposFerramental
                  ? <Switch
                      checkedChildren='Haste inicial'
                      unCheckedChildren='Haste inicial'
                      onClick={() => fnomePerfilAcesso()}
                    />
                  : false}

                {camposFerramental
                  ? <Switch
                      checkedChildren='Flexobarra'
                      unCheckedChildren='Flexobarra'
                      onClick={() => fnomePerfilAcesso()}
                    />
                  : false}

                {camposFerramental
                  ? <Switch
                      checkedChildren='Rádio'
                      unCheckedChildren='Rádio'
                      onClick={() => fnomePerfilAcesso()}
                    />
                  : false}

                {camposFerramental
                  ? <Switch
                      checkedChildren='Parafuso'
                      unCheckedChildren='Parafuso'
                      onClick={() => fnomePerfilAcesso()}
                    />
                  : false}

                {camposFerramental
                  ? <Switch
                      checkedChildren='Modelo de alargador'
                      unCheckedChildren='Modelo de alargador'
                      onClick={() => fnomePerfilAcesso()}
                    />
                  : false}

                {camposFerramental
                  ? <Switch
                      checkedChildren='Capacidade do porta fusilink'
                      unCheckedChildren='Capacidade do porta fusilink'
                      onClick={() => fnomePerfilAcesso()}
                    />
                  : false}

                {camposFerramental
                  ? <Switch
                      checkedChildren='Capacidade do swivel'
                      unCheckedChildren='Capacidade do swivel'
                      onClick={() => fnomePerfilAcesso()}
                    />
                  : false}

                {camposFerramental
                  ? <Switch
                      checkedChildren='Diâmetro de ferramenta'
                      unCheckedChildren='Diâmetro de ferramenta'
                      onClick={() => fnomePerfilAcesso()}
                    />
                  : false}

                {camposFerramental
                  ? <Switch
                      checkedChildren='Condição do ferramental'
                      unCheckedChildren='Condição do ferramental'
                      onClick={() => fnomePerfilAcesso()}
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
              {!campoEmpresa
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
              {!camponumeroHastes
                ? <Switch
                    checkedChildren='Número de hastes'
                    unCheckedChildren='Número de hastes'
                    onClick={() => fnumeroHastes()}
                  />
                : <Switch
                    checkedChildren='Profundidade planejada'
                    unCheckedChildren='Profundidade planejada'
                    defaultChecked
                  />}
              {!camponumeroHastes
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
