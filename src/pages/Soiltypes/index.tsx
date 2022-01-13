import DeleteButton from '../../ui/Components/DeleteButton/DeleteButton'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'
import { FiPlus, FiEdit } from 'react-icons/fi'

import { TextField } from '../../ui/Components/TextField'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { api } from '../../services/api'
import { toast } from 'react-toastify'

import * as S from './styled'
import EditButton from '../../ui/Components/EditButton/EditButton'

import { deepStrictEqual } from 'assert'
import { FaEdit } from 'react-icons/fa'

type FormData = {
  id: string;
  especificacaoSolo: string;
  resistenciaSeca: string;
  descricao: string;
  reacaoDilatacao: string;
  durezaPlastica: string;
  indicePlasticidade: string;
}

export default function
SoilTypes () {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenUpdate, setIsOpenUpdate] = useState(false)
  const [loading, setLoading] = useState(false)
  const [soilTypes, setSoilTypes] = useState<any[]>([])
  const [soilTypesUp, setSoilTypesUp] = useState<any>()
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()
  const [idTipoSolo, setId] = useState('')
  const [especificacaoSolo, setEspecificacaoSolo] = useState('')
  const [resistenciaSeca, setResistenciaSeca] = useState('')
  const [reacaoDilatacao, setReacaoDilatacao] = useState('')
  const [descricao, setDescricao] = useState('')
  const [durezaPlastica, setDurezaPlastica] = useState('')
  const [indicePlasticidade, setIndicePlasticidade] = useState('')

  function onSubmit (data: FormData) {
    console.log(data)
    createNewFile(data)
    reset()
  }

  async function createNewFile (submit: any) {
    setLoading(true)
    // eslint-disable-next-line
    const responser = api.post('tipo-solo', {
      data: submit,
    }).then((response) => {
      if (response.statusText === 'OK') {
        toast.success('Tipo de solo cadastrado com sucesso!')
        setLoading(false)
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
      setLoading(false)
    })
  }

  async function loadDados () {
    setLoading(true)
    // eslint-disable-next-line
    const responser = api.get('tipo-solo',
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
  async function deleteDados (id: string) {
    setLoading(true)
    // eslint-disable-next-line
    const responser = api.delete('tipo-solo/' + id,
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
  useEffect(() => {
    console.log(soilTypesUp)
    setLoading(true)
    loadDados()
  }, [])

  function update (tipoSolo: any) {
    console.log('tipoSolo')
    console.log(tipoSolo)
    setSoilTypesUp(tipoSolo)
    setId(tipoSolo.id)
    setEspecificacaoSolo(tipoSolo.especificacaoSolo)
    setDescricao(tipoSolo.descricao)
    setDurezaPlastica(tipoSolo.durezaPlastica)
    setIndicePlasticidade(tipoSolo.indicePlasticidade)
    setResistenciaSeca(tipoSolo.resistenciaSeca)
    setReacaoDilatacao(tipoSolo.reacaoDilatacao)
    console.log(idTipoSolo)
    setIsOpenUpdate(true)
  }
  async function updateDados () {
    setLoading(true)
    console.log('idTipoSolo')
    console.log(idTipoSolo)
    console.log(soilTypesUp)
    const responser = api.put('tipo-solo/' + soilTypesUp.id, {
      data: {
        id: idTipoSolo,
        especificacaoSolo: especificacaoSolo,
        descricao: descricao,
        durezaPlastica: durezaPlastica,
        indicePlasticidade: indicePlasticidade,
        resistenciaSeca: resistenciaSeca,
        reacaoDilatacao: reacaoDilatacao,
      },
    },
    ).then((response) => {
      if (response.statusText === 'OK') {
        loadDados()
        setIsOpenUpdate(false)
        setLoading(false)
      }
    })
  }
  return (
    <>
      <Sidebar />
      <Navbar />
      <S.ContainerConfirmation>
        <h2>Tipos de solo</h2>
        <button onClick={() => setIsOpen(true)}><FiPlus /></button>

        <S.GridConfirmation>
          <span>Especificação do solo</span>
          <span>Resistencia Seca</span>
          <span>Descrição</span>
          <span>Reação a dilatação</span>
          <span>Dureza Plástica</span>
          <span>Indice de plasticidade</span>
        </S.GridConfirmation>

        <ul>
          {soilTypes.length > 0
            ? soilTypes.map((soilType) =>
              <li key={soilType.id}>
                <S.GridConfirmation>
                  <span>
                    {soilType.especificacaoSolo}
                  </span>
                  <span>
                    {soilType.resistenciaSeca}
                  </span>
                  <span>
                    {soilType.descricao}
                  </span>
                  <span>
                    {soilType.reacaoDilatacao}
                  </span>
                  <span>
                    {soilType.durezaPlastica}
                  </span>
                  <span>
                    {soilType.indicePlasticidade}
                  </span>
                  <DeleteButton
                    onDelete={() => deleteDados(soilType.id)}
                  />
                  {/* <EditButton onEdit={() => updateDados(soilType)} /> */}
                  <button
                    // onChange={onEdit}
                    onClick={() => update(soilType)}
                    style={{ background: 'none', color: 'yellow' }}
                    title='Editar?'
                  >
                    <FaEdit size={20} />
                  </button>
                </S.GridConfirmation>
              </li>,
            )
            : <p>🤔 Nenhum tipo de solo cadastrado</p>}
        </ul>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <S.Container>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                label='Especificação do solo'
                errorMessage={errors.especificacaoSolo?.message}
                {...register('especificacaoSolo', {
                  required: {
                    value: true,
                    message: 'Todos os campos são obrigatórios',
                  },
                })}
              />

              <TextField
                label='Resistência seca'
                {...register('resistenciaSeca', {
                  required: true,
                })}
              />

              <TextField
                label='Descrição'
                {...register('descricao', {
                  required: true,
                })}
              />

              <TextField
                label='Reação a dilatação'
                {...register('reacaoDilatacao', {
                  required: true,
                })}
              />

              <TextField
                label='Dureza plastica'
                {...register('durezaPlastica', {
                  required: true,
                })}
              />

              <TextField
                label='Índice de plasticidade'
                {...register('indicePlasticidade', {
                  required: true,
                })}
              />
              <button type='submit'>
                {loading
                  ? <img
                      width='40px'
                      style={{ margin: 'auto' }}
                      height='' src='https://contribua.org/mb-static/images/loading.gif'
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
                label='Especificação do solo'
                value={especificacaoSolo}
                onChange={(text) => setEspecificacaoSolo(text.target.value)}
              />

              <TextField
                label='Resistência seca'
                value={resistenciaSeca}
                onChange={(text) => setResistenciaSeca(text.target.value)}
              />

              <TextField
                label='Descrição'
                value={descricao}
                onChange={(text) => setDescricao(text.target.value)}
              />

              <TextField
                label='Reação a dilatação'
                value={reacaoDilatacao}
                onChange={(text) => setReacaoDilatacao(text.target.value)}

              />

              <TextField
                label='Dureza plastica'
                value={durezaPlastica}
                onChange={(text) => setDurezaPlastica(text.target.value)}

              />

              <TextField
                label='Índice de plasticidade'
                value={indicePlasticidade}
                onChange={(text) => setIndicePlasticidade(text.target.value)}

              />
              <button onClick={() => updateDados()}>
                {loading
                  ? <img width='40px' style={{ margin: 'auto' }} height='' src='https://contribua.org/mb-static/images/loading.gif' alt='Loading' />
                  : 'Salvar'}
              </button>
            </S.Div>
          </S.Container>
        </Modal>
      </S.ContainerConfirmation>
    </>
  )
}
