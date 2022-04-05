import DeleteButton from '../../ui/Components/DeleteButton/DeleteButton'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'

import { TextField } from '../../ui/Components/TextField'
import { useForm } from 'react-hook-form'
import { FiPlus } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import Load from './../../assets/load.gif'
import * as S from './styled'
import { toast } from 'react-toastify'
import { api } from '../../services/api'
import EditButton from '../../ui/Components/EditButton/EditButton'
import { FaEdit } from 'react-icons/fa'

type FormData = { 
  nome: string;
  viscosidadeEsperada: string;
  qtdePHPA: string;
  qtdeBase: string;
  limiteEscoamento: string;
  teorAreia: string;
  agua: string
}

export default function
  DrillingFluid() {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenUpdate, setIsOpenUpdate] = useState(false)
  const [loading, setLoading] = useState(false)
  const [fluidos, setFluidos] = useState<any[]>([])
  const [soilTypes, setSoilTypes] = useState<any[]>([])
  const [tipoSolo, setTipoSolo] = useState('')
  const [nome, setNome] = useState('')
  const [idFluidos, setIdFluidos] = useState('')
  const [viscosidadeEsperada, setViscosidadeEsperada] = useState('')
  const [qtdePHPA, setQtdePHPA] = useState('')
  const [qtdeBase, setQtdeBase] = useState('')
  const [limiteEscoamento, setLimiteEscoamento] = useState('')
  const [teorAreia, setTeorAreia] = useState('')
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  function onSubmit(data: FormData) {
    console.log(data)
    Cadastro(data)

  }
  async function Cadastro(submit: any) {
    setLoading(true)
    submit.agua = '0'
    submit.tipoSoloId = tipoSolo.split('/')[0],
    submit.especificacaoSolo = tipoSolo.split('/')[1]
    // eslint-disable-next-line
    const responser = api.post('fluido-perfuracao', {
      data: submit,
    }).then((response) => {
      console.log(response)
      if (response.statusText === 'OK') {
        toast.success('Cadastrado com sucesso!')
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
    }).catch(res => {
      console.log(res)
      toast.error(res.response.data)
      setLoading(false)
    })
  }

  async function loadDados() {
    setLoading(true)
    // eslint-disable-next-line
    const responser = api.get('fluido-perfuracao',
    ).then((response) => {
      console.log(response.data.rows)
      console.log(typeof (response.data.rows))
      if (response.statusText === 'OK') {
        setFluidos(response.data.rows)
        setLoading(false)
      }
    }).catch(res => {
      console.log(res.response.data)
      toast.error(res.response.data)
      setLoading(false)
    })
    api.get('tipo-solo',
    ).then((response) => {
      if (response.statusText === 'OK') {
        setSoilTypes(response.data.rows)
        setLoading(false)
      }
    }).catch(res => {
      console.log(res.response.data)
      toast.error(res.response.data)
      setLoading(false)
    })
  }
  // eslint-disable-next-line
  async function deleteDados(id: string) {
    setLoading(true)
    // eslint-disable-next-line
    const responser = api.delete('fluido-perfuracao/' + id,
    ).then((response) => {
      if (response.statusText === 'OK') {
        loadDados()
        setLoading(false)
      }
    }).catch(res => {
      console.log(res.response.data)
      toast.error(res.response.data)
      setLoading(false)
    })
  }
  function update(dados: any) {
    console.log('dados')
    console.log(dados)
    setIdFluidos(dados.id)
    setNome(dados.nome)
    setViscosidadeEsperada(dados.viscosidadeEsperada)
    setQtdePHPA(dados.qtdePHPA)
    setQtdeBase(dados.qtdeBase)
    setLimiteEscoamento(dados.limiteEscoamento)
    setTeorAreia(dados.teorAreia)
    setIsOpenUpdate(true)
  }
  async function updateDados() {
    setLoading(true)
    const responser = api.put('fluido-perfuracao/' + idFluidos, {
      data: {
        nome: nome,
        viscosidadeEsperada: viscosidadeEsperada,
        qtdePHPA: qtdePHPA,
        qtdeBase: qtdeBase,
        limiteEscoamento: limiteEscoamento,
        teorAreia: teorAreia
      }
    }
    ).then((response) => {
      if (response.statusText === 'OK') {
        loadDados()
        setIsOpenUpdate(false)
        setLoading(false)
      }
    }).catch((error) => {
      setLoading(false)
      toast.error(error.response.data)
    })
  }
  useEffect(() => {
    setLoading(true)
    loadDados()
  }, [])

  return (
    <>
      <Sidebar />
      <Navbar />
      <S.ContainerConfirmation>
        <h2>Fluídos de perfuração</h2>
        <button onClick={() => setIsOpen(true)}><FiPlus /></button>

        <S.GridConfirmation>
          <span>Identificação</span>
          <span>Viscosidade</span>
          <span>pH</span>
          <span>Base para formulação</span>
          <span>Escoamento</span>
          <span>Teor de areia</span>
        </S.GridConfirmation>

        <ul>
          {fluidos.length > 0
            ? fluidos.map((fluido) =>
              <li key={fluido.id}>
                <S.GridConfirmation>
                  <span>{fluido.nome}</span>
                  <span>{fluido.viscosidadeEsperada}</span>
                  <span>{fluido.qtdePHPA}</span>
                  <span>{fluido.qtdeBase}</span>
                  <span>{fluido.limiteEscoamento}</span>
                  <span>{fluido.teorAreia}</span>
                  <DeleteButton
                    onDelete={() => deleteDados(fluido.id)}
                  />
                  {/* <EditButton
                    onEdit={() => handleUpdate(fluido.id)}
                  /> */}
                  <button
                    // onChange={onEdit}
                    onClick={() => update(fluido)}
                    style={{ background: 'none', color: 'yellow' }}
                    title='Editar?'
                  >
                    <FaEdit size={20} />
                  </button>
                </S.GridConfirmation>
              </li>,
            )
            : <p>🤔 Nenhum fluído cadastrado</p>}
        </ul>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <S.Container>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                label='Identificação'
                errorMessage={errors.nome?.message}
                {...register('nome', {
                  required: {
                    value: true,
                    message: 'Todos os campos são obrigatórios',
                  },
                })}
              />

              <TextField
                label='Viscosidade esperada (cP)'
                {...register('viscosidadeEsperada', {
                  required: false,
                })}
              />

              <TextField
                label='pH da Água'
                {...register('qtdePHPA', {
                  required: false,
                })}
              />

              <TextField
                label='Quantidade base para formulação (m²)'
                {...register('qtdeBase', {
                  required: false,
                })}
              />

              <TextField
                label='Limite de escoamento (N)'
                {...register('limiteEscoamento', {
                  required: false,
                })}
              />

              <TextField
                label='Teor de areia (%)'
                {...register('teorAreia', {
                  required: false,
                })}
              />
              <div>
                <label htmlFor=''>Tipos de solo</label>
                <div className='selectPlus'>
                  <select value={tipoSolo}
                    onChange={(text) => { setTipoSolo(text.target.value)}}>
                    <option value=''>Selecione...</option>
                    {soilTypes.length > 0 ?
                      soilTypes.map((tipoSolo) =>
                        <option value={tipoSolo.id + '/' + tipoSolo.especificacaoSolo}>{tipoSolo.especificacaoSolo}</option>) : <option>Nenhuma maquina cadastrada!</option>}
                  </select>
                  {/* <button onClick={() => setIsOpenTipoSolo(true)} className='buttonAddInter'><FiPlus size={20} /></button> */}
                </div>
              </div>
              <button
                type='submit'
              >
                {loading
                  ? <img
                    width='40px'
                    style={{ margin: 'auto' }}
                    height='' src={Load}
                    alt='Loading'
                  />
                  : 'Salvar'}
              </button>
            </S.Form>
          </S.Container>
        </Modal>

        <Modal isOpen={isOpenUpdate} onClose={() => setIsOpenUpdate(false)}>
          <S.Container>
            <S.Div>
              <TextField
                label='Identificação'
                value={nome}
                onChange={(text) => setNome(text.target.value)}
              />

              <TextField
                label='Viscosidade esperada (Segundos Marsh - cP)'
                value={viscosidadeEsperada}
                onChange={(text) => setViscosidadeEsperada(text.target.value)}
              />

              <TextField
                label='pH da Água'
                value={qtdePHPA}
                onChange={(text) => setQtdePHPA(text.target.value)}
              />

              <TextField
                label='Quantidade base para formulação (Metros cúbicos - m²)'
                value={qtdeBase}
                onChange={(text) => setQtdeBase(text.target.value)}
              />

              <TextField
                label='Limite de escoamento (Número - N)'
                value={limiteEscoamento}
                onChange={(text) => setLimiteEscoamento(text.target.value)}
              />

              <TextField
                label='Teor de areia (Porcentagem - %)'
                value={teorAreia}
                onChange={(text) => setTeorAreia(text.target.value)}
              />
              <div>
                <label htmlFor=''>Tipos de solo</label>
                <div className='selectPlus'>
                  <select value={tipoSolo}
                    onChange={(text) => { setTipoSolo(text.target.value)}}>
                    <option value=''>Selecione...</option>
                    {soilTypes.length > 0 ?
                      soilTypes.map((tipoSolo) =>
                        <option value={tipoSolo.id + '/' + tipoSolo.especificacaoSolo}>{tipoSolo.especificacaoSolo}</option>) : <option>Nenhuma maquina cadastrada!</option>}
                  </select>
                  {/* <button onClick={() => setIsOpenTipoSolo(true)} className='buttonAddInter'><FiPlus size={20} /></button> */}
                </div>
              </div>
              <button onClick={() => updateDados()}>{loading ? <img width='40px' style={{ margin: 'auto' }} height='' src={Load} alt='Loading' /> : 'Salvar'}</button>
            </S.Div>
          </S.Container>
        </Modal>
      </S.ContainerConfirmation>
    </>
  )
}
