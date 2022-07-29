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
import Load from './../../assets/load.gif'
import * as S from './styled'
import EditButton from '../../ui/Components/EditButton/EditButton'

import { deepStrictEqual } from 'assert'
import { FaEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'

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
Safepipe () {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenUpdate, setIsOpenUpdate] = useState(false)
  const [loading, setLoading] = useState(false)
  const [safepipes, setsafepipes] = useState<any[]>([])
  const [safepipesUp, setsafepipesUp] = useState<any>()
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()
  const [idTipoSolo, setId] = useState('')
  const [especificacaoSolo, setEspecificacaoSolo] = useState('')
  const [resistenciaSeca, setResistenciaSeca] = useState('')
  const [reacaoDilatacao, setReacaoDilatacao] = useState('')
  const [descricao, setDescricao] = useState('')
  const [durezaPlastica, setDurezaPlastica] = useState('')
  const [indicePlasticidade, setIndicePlasticidade] = useState('')
  const link = '/etapas/'

  function onSubmit (data: FormData) {
    console.log(data)
    createNewFile(data)
    reset()
  }

  async function createNewFile (submit: any) {
    setLoading(true)
    // eslint-disable-next-line
    const responser = api.post('safepipe', {
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
    const responser = api.get('safepipe',
    ).then((response) => {
      if (response.statusText === 'OK') {
        setsafepipes(response.data.rows)
        setLoading(false)
      }
    }).catch(res => {
      //console.log(res.response.data)
      toast.error(res.response.data)
      setLoading(false)
    })
  }
  async function deleteDados (id: string) {
    setLoading(true)
    // eslint-disable-next-line
    const responser = api.delete('safepipe/' + id,
    ).then((response) => {
      if (response.statusText === 'OK') {
        loadDados()
        setLoading(false)
        toast.success("Excluido com sucesso!")
      }
    }).catch(res => {
      //console.log(res.response.data)
      toast.error(res.response.data)
      setLoading(false)
    })
  }
  function update (tipoSolo: any) {
    console.log('tipoSolo')
    console.log(tipoSolo)
    setsafepipesUp(tipoSolo)
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
    console.log(safepipesUp)
    const responser = api.put('safepipe/' + safepipesUp.id, {
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
  useEffect(() => {
    console.log(safepipesUp)
    setLoading(true)
    loadDados()
  }, [])

  
  return (
    <>
      <Sidebar />
      <Navbar />
      <S.ContainerConfirmation>
        <h2>Safepipe</h2>
        {/* <button onClick={() => setIsOpen(true)}><FiPlus /></button> */}

        <S.GridConfirmation>
          <span>Nome</span>
          <span>Token</span>
          <span>Travessia</span>
          <span>Descricão</span>
        </S.GridConfirmation>

        <ul>
          {safepipes.length > 0
            ? safepipes.map((safepipe) =>
              <li key={safepipe.id}>
                <S.GridConfirmation>
                  <span>
                    {safepipe.nome}
                  </span>
                  <span>
                    {safepipe.id}
                  </span>
                  <span>
                    {safepipe.executarTravessia.nomeTravessia}
                  </span>  
                  <span>
                    {safepipe.executarTravessia.descricao}
                  </span>        
                  <Link to={link + safepipe.idConfigTravessia + '/' + safepipe.idConfigTravessia}><span>Executar travessia</span></Link>          
                  <DeleteButton
                    onDelete={() => deleteDados(safepipe.id)}
                  />
                  {/* <EditButton onEdit={() => updateDados(safepipe)} /> */}
                  {/* <button
                    // onChange={onEdit}
                    onClick={() => update(safepipe)}
                    style={{ background: 'none', color: 'yellow' }}
                    title='Editar?'
                  >
                    <FaEdit size={20} />
                  </button> */}
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
                  ? <img width='40px' style={{ margin: 'auto' }} height='' src={Load} alt='Loading' />
                  : 'Salvar'}
              </button>
            </S.Div>
          </S.Container>
        </Modal>
      </S.ContainerConfirmation>
    </>
  )
}
