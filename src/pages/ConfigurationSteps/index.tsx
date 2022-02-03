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
  const [campoLocalizaDiretrizFuro, setcampoLocalizaDiretrizFuro] =  useState(false)
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
  const [campoDiametroInterferencia2, setcampoDiametroInterferencia2] =  useState(false)
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


  function onSubmit(data: FormData) {
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

  async function loadDados() {
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
            setcampoEntradaLongitude(
              response.data.rows[0].campoEntradaLongitude,
            )
            setcampoSaidaLatitude(response.data.rows[0].campoSaidaLatitude)
            setcampoSaidaLongitude(response.data.rows[0].campoSaidaLongitude)
            setcampoTipoSolo(response.data.rows[0].campoTipoSolo)
            setcampoDiametroPerfuracao(
              response.data.rows[0].campoDiametroPerfuracao,
            )
            setcampoTipoRede(response.data.rows[0].campoTipoRede)
            setcampoTipoTubulacao(response.data.rows[0].campoTipoTubulacao)
            setcampoResponsel(response.data.rows[0].campoResponsel)
            setcampoEquipamento(response.data.rows[0].campoEquipamento)
            setcampoSondagemInterferencia(
              response.data.rows[0].campoSondagemInterferencia,
            )
            setcampoDocumento(response.data.rows[0].campoDocumento)
            setcampoEmpresa(response.data.rows[0].campoEmpresa)
            setcampoSondagem(response.data.rows[0].campoSondagem)
            setcampoDiametroInterferencia(
              response.data.rows[0].campoDiametroInterferencia,
            )
            setcampoPlanoFuro(response.data.rows[0].campoPlanoFuro)
            setcampoFerramentas(response.data.rows[0].campoFerramentas)
            setcampoInfoEnvolvidas(response.data.rows[0].campoInfoEnvolvidas)
            setcampoDiametro(response.data.rows[0].campoDiametro)
            setcampoLocalizaDiretrizFuro(
              response.data.rows[0].campoLocalizaDiretrizFuro,
            )
            setcampoTipoInterferencia(
              response.data.rows[0].campoTipoInterferencia,
            )
            setcampoProfundidade(response.data.rows[0].campoProfundidade)
            setcampoResponselTopografia(
              response.data.rows[0].campoResponselTopografia,
            )
            setcampoDataTopografia(response.data.rows[0].campoDataTopografia)

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
  async function deleteDados(id: string) {
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
  function update(dados: any, banco: string) {
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
  async function updateDados() {
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
  }
  function selectCampos(etapa: any) {
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

  function onChange(e: any) {
    console.log(`checked = ${e.target.checked}`)
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
    if (campoEntradaLongitude) {
      console.log('campo longitude')
      setcampoEntradaLongitude2(false)
    } else {
      setcampoEntradaLongitude(true)
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
      setcampoDiametro2(false)
    } else {
      setcampoDiametro(true)
      setcampoDiametro2(true)
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
                {!campoEntradaLatitude
                  ? <Switch
                      checkedChildren='Ponto de verificação de entrada (lat)'
                      unCheckedChildren='Ponto de verificação de entrada (lat)'
                      onClick={() => fEntradaLatitude()}
                    />
                  : false}

                {!campoEntradaLongitude
                  ? <Switch
                      checkedChildren='Ponto de verificação de entrada (long)'
                      unCheckedChildren='Ponto de verificação de entrada (long)'
                      onClick={() => fEntradaLongitude()}
                    />
                  : false}

                {!campoSaidaLatitude
                  ? <Switch
                      checkedChildren='Ponto de verificação de saída (lat)'
                      unCheckedChildren='Ponto de verificação de saída (lat)'
                      onClick={() => fSaidaLatitude()}
                    />
                  : false}

                {!campoSaidaLongitude
                  ? <Switch
                      checkedChildren='Ponto de verificação de saída (long)'
                      unCheckedChildren='Ponto de verificação de saída (long)'
                      onClick={() => fSaidaLongitude()}
                    />
                  : false}

                {!campoTipoTubulacao
                  ? <Switch
                      checkedChildren='Tipo de tubulação'
                      unCheckedChildren='Tipo de tubulação'
                      onClick={() => fTipoTubulacao()}
                    />
                  : false}

                {!campoDiametroPerfuracao
                  ? <Switch
                      checkedChildren='Diâmetro de perfuração'
                      unCheckedChildren='Diâmetro de perfuração'
                      onClick={() => fDiametroPerf()}
                    />
                  : false}

                {!campoTipoSolo
                  ? <Switch
                      checkedChildren='Tipos de solo'
                      unCheckedChildren='Tipos de solo'
                      onClick={() => fTipoSolo()}
                    />
                  : false}

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

                <p onClick={() => setIsOpenRegistro(true)}>Registros</p>
                <p onClick={() => setIsOpenPreparacao(true)}>Preparação</p>
                <p onClick={() => setIsOpenPerfuracao(true)}>Perfuração</p>
                <p onClick={() => setIsOpenFerramental(true)}>Ferramental</p>
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
              <Switch 
                checkedChildren='Nome do usuário do perfil de acesso'
                unCheckedChildren='Nome do usuário do perfil de acesso'
              />
              
              <Switch
                checkedChildren='Data da execução '
                unCheckedChildren='Data da execução '
              />
              <Switch
                checkedChildren='Responsável pela execução'
                unCheckedChildren='Responsável pela execução'
              />
              <Switch
                checkedChildren='Hora da execução'
                unCheckedChildren='Hora da execução'
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
              <Switch
                checkedChildren='Enviar croqui de mapeamento (Upload)'
                unCheckedChildren='Enviar croqui de mapeamento (Upload)'
              />
              <Switch
                checkedChildren='Equipamento utilizado'
                unCheckedChildren='Equipamento utilizado'
              />
              <Switch
                checkedChildren='Materialização em campo'
                unCheckedChildren='Materialização em campo'
              />
              <Switch
                checkedChildren='Quantidade de interferências'
                unCheckedChildren='Quantidade de interferências'
              />
              <Switch
                checkedChildren='Localização em relação a diretriz do furo'
                unCheckedChildren='Localização em relação a diretriz do furo'
              />
              <Switch
                checkedChildren='Tipo de interferência'
                unCheckedChildren='Tipo de interferência'
              />
              <Switch
                checkedChildren='Dimensões da vala de entrada e saída'
                unCheckedChildren='Dimensões da vala de entrada e saída'
              />
              <Switch
                checkedChildren='Estaca de referência'
                unCheckedChildren='Estaca de referência'
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
          isOpen={isOpenPerfuracao}
          onClose={() => setIsOpenPerfuracao(false)}
        >
          <S.Container>
            <S.Div2>
              <h2>Adicione os campos da etapa</h2>
              <Switch
                checkedChildren='Número de hastes'
                unCheckedChildren='Número de hastes'
              />
              <Switch
                checkedChildren='Profundidade planejada'
                unCheckedChildren='Profundidade planejada'
              />
              <Switch
                checkedChildren='Avanço planejado'
                unCheckedChildren='Avanço planejado'
              />
              <Switch
                checkedChildren='Profundidade executada'
                unCheckedChildren='Profundidade executada'
              />
              <Switch
                checkedChildren='Avanço executado'
                unCheckedChildren='Avanço executado'
              />
              <Switch
                checkedChildren='Tipo de interferência'
                unCheckedChildren='Tipo de interferência'
              />
              <Switch
                checkedChildren='Amarração'
                unCheckedChildren='Amarração'
              />
              <Switch
                checkedChildren='Máquina perfuratriz'
                unCheckedChildren='Máquina perfuratriz'
              />
              <Switch
                checkedChildren='Diâmetro de alargamento'
                unCheckedChildren='Diâmetro de alargamento'
              />
              <Switch
                checkedChildren='Tempo por haste'
                unCheckedChildren='Tempo por haste'
              />
              <Switch
                checkedChildren='Vazão de bomba'
                unCheckedChildren='Vazão de bomba'
              />
              <Switch
                checkedChildren='Tipo de rede/tubulação'
                unCheckedChildren='Tipo de rede/tubulação'
              />
              <Switch
                checkedChildren='Diâmetro da rede'
                unCheckedChildren='Diâmetro da rede'
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
              />
              <Switch
                checkedChildren='Hastes'
                unCheckedChildren='Hastes'
              />
              <Switch
                checkedChildren='Sonda'
                unCheckedChildren='Sonda'
              />
              <Switch
                checkedChildren='Pá de perfuração'
                unCheckedChildren='Pá de perfuração'
              />
              <Switch
                checkedChildren='Localizador'
                unCheckedChildren='Localizador'
              />
              <Switch
                checkedChildren='Modelo de alargador'
                unCheckedChildren='Modelo de alargador'
              />
              <Switch
                checkedChildren='Capacidade do porta fusilink'
                unCheckedChildren='Capacidade do porta fusilink'
              />
              <Switch
                checkedChildren='Capacidade do swivel'
                unCheckedChildren='Capacidade do swivel'
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
