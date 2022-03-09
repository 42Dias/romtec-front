import * as S from './styled'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'

import { TextField } from '../../ui/Components/TextField'
import { useForm } from 'react-hook-form'
import { FiPlus } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { api } from '../../services/api'
import DeleteButton from '../../ui/Components/DeleteButton/DeleteButton'
import EditButton from '../../ui/Components/EditButton/EditButton'
import { FaEdit } from 'react-icons/fa'

type FormData = {
  codigo: string;
  raioCurvatura: string;
  diametroTubo: string;
  condicao: string;
  diametroToolJoint: string;
  torque: string;
  comprimentoTotal: string;
  modeloRosca: string;
  quantidade: string;
}

export default function
Rods () {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenUpdate, setIsOpenUpdate] = useState(false)
  const [loading, setLoading] = useState(false)
  const [hastes, setHastes] = useState<any[]>([])
  const [idHastes, setIdHastes] = useState('')
  const [codigo, setCodigo] = useState('')
  const [raioCurvatura, setRaioCurvatura] = useState('')
  const [diametroTubo, setDiametroTubo] = useState('')
  const [condicao, setCondicao] = useState('')
  const [diametroToolJoint, setDiametroToolJoint] = useState('')
  const [torque, setTorque] = useState('')
  const [comprimentoTotal, setComprimentoTotal] = useState('')
  const [modeloRosca, setModeloRosca] = useState('')
  const [quantidade, setQuantidade] = useState('')
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  function onSubmit (data: FormData) {
    console.log(data)
    Cadastro(data)
    reset()
  }
  async function Cadastro (submit: any) {
    setLoading(true)
    // eslint-disable-next-line
    const responser = api.post('hastes', {
      data: submit,
    }).then((response) => {
      console.log(response)
      if (response.statusText === 'OK') {
        toast.success('Recebemos o seu registro')
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
      toast.error(res.response.data)
      setLoading(false)
    })
  }

  async function loadDados () {
    setLoading(true)
    // eslint-disable-next-line
    const responser = api.get('hastes',
    ).then((response) => {
      console.log(response.data.rows)
      if (response.statusText === 'OK') {
        setHastes(response.data.rows)
        console.log(hastes.length)
        setLoading(false)
      }
    }).catch(res => {
      console.log(res.response.data)
      toast.error(res.response.data)
      setLoading(false)
    })
  }
  async function deleteDados(id: string) {
    setLoading(true)
    // eslint-disable-next-line
    const responser = api.delete('hastes/' + id
    ).then((response) => {
      if (response.statusText === 'OK') {
        loadDados()
        setLoading(false)
      }
    }).catch(res => {
      console.log(res.response)
      toast.error(res.response)
      setLoading(false)
    })
  }
  function update(dados: any) {
    console.log('dados')
    console.log(dados)
    setIdHastes(dados.id)
    setCodigo(dados.codigo)
    setRaioCurvatura(dados.raioCurvatura)
    setDiametroTubo(dados.diametroTubo)
    setCondicao(dados.condicao)
    setDiametroToolJoint(dados.diametroToolJoint)
    setTorque(dados.torque)
    setComprimentoTotal(dados.comprimentoTotal)
    setModeloRosca(dados.modeloRosca)
    setQuantidade(dados.quantidade)
    setIsOpenUpdate(true)
  }
  async function updateDados() {
    setLoading(true)
    const responser = api.put('hastes/' + idHastes, {
      data: {
        codigo: codigo,
        raioCurvatura: raioCurvatura,
        diametroTubo: diametroTubo,
        condicao: condicao,
        diametroToolJoint: diametroToolJoint,
        torque: torque,
        comprimentoTotal: comprimentoTotal,
        modeloRosca: modeloRosca,
        quantidade: quantidade,
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
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Sidebar />
      <Navbar />
      <S.ContainerConfirmation>
        <h2>Hastes</h2>
        <button onClick={() => setIsOpen(true)}><FiPlus /></button>

        <S.GridConfirmation>
          <span>Código </span>
          <span>Diametro do tubo(mm)</span>
          <span>Diametro do Tool Joint(mm)</span>
          <span>Comprimento total(m)</span>
          <span>Modelo da rosca</span>
        </S.GridConfirmation>

        <ul>
          {hastes.length > 0
            ? hastes.map((haste) =>
              <li key={haste.id}>
                <S.GridConfirmation>
                  <span>{haste.codigo}</span>
                  <span>{haste.diametroTubo}</span>
                  <span>{haste.diametroToolJoint}</span>
                  <span>{haste.comprimentoTotal}</span>
                  <span>{haste.modeloRosca}</span>
                  <DeleteButton
                    onDelete={() => deleteDados(haste.id)}
                  />
                  <button
                    // onChange={onEdit}
                    onClick={() => update(haste)}
                    style={{ background: 'none', color: 'yellow' }}
                    title='Editar?'
                  >
                    <FaEdit size={20} />
                  </button>
                </S.GridConfirmation>
              </li>,
            )
            : <p>🤔 Nenhuma haste cadastrada</p>}
        </ul>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <S.Container>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                label='Código do jogo de Hastes'
                errorMessage={errors.codigo?.message}
                {...register('codigo', {
                  required: {
                    value: true,
                    message: 'Todos os campos são obrigatórios',
                  },
                })}
              />

              <TextField
                label='Raio de curvatura'
                {...register('raioCurvatura', {
                  required: true,
                })}
              />

              <TextField
                label='Diâmetro do tubo(mm)*'
                {...register('diametroTubo', {
                  required: true,
                })}
              />

              <TextField
                label='Estado geral/condição'
                {...register('condicao', {
                  required: true,
                })}
              />

              <TextField
                label='Diâmetro do Tool Joint(mm)'
                {...register('diametroToolJoint', {
                  required: true,
                })}
              />

              <TextField
                label='Torque máximo'
                {...register('torque', {
                  required: true,
                })}
              />

              <TextField
                label='Comprimento total(m)'
                {...register('comprimentoTotal', {
                  required: true,
                })}
              />

              <TextField
                label='Modelo da Rosca'
                {...register('modeloRosca', {
                  required: true,
                })}
              />

              <TextField
                label='Quantidade de hastes'
                type='number'
                {...register('quantidade', {
                  required: true,
                })}
              />
              <button type='submit'>{loading ? <img width='40px' style={{ margin: 'auto' }} height='' src='https://contribua.org/mb-static/images/loading.gif' alt='Loading' /> : 'Salvar'}</button>
            </S.Form>
          </S.Container>
        </Modal>

        <Modal isOpen={isOpenUpdate} onClose={() => setIsOpenUpdate(false)}>
          <S.Container>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                label='Código do jogo de Hastes'
                value={codigo}
                onChange={(text) => setCodigo(text.target.value)}
              />

              <TextField
                label='Raio de curvatura'
                value={raioCurvatura}
                onChange={(text) => setRaioCurvatura(text.target.value)}
              />

              <TextField
                label='Diâmetro do tubo(mm)*'
                value={diametroTubo}
                onChange={(text) => setDiametroTubo(text.target.value)}
              />

              <TextField
                label='Estado geral/condição'
                value={condicao}
                onChange={(text) => setCondicao(text.target.value)}
              />

              <TextField
                label='Diâmetro do Tool Joint(mm)'
                value={diametroToolJoint}
                onChange={(text) => setDiametroToolJoint(text.target.value)}
              />

              <TextField
                label='Torque máximo'
                value={torque}
                onChange={(text) => setTorque(text.target.value)}
              />

              <TextField
                label='Comprimento total(m)'
                value={comprimentoTotal}
                onChange={(text) => setComprimentoTotal(text.target.value)}
              />

              <TextField
                label='Modelo da Rosca'
                value={modeloRosca}
                onChange={(text) => setModeloRosca(text.target.value)}
              />

              <TextField
                label='Quantidade de hastes'
                type='number'
                value={quantidade}
                onChange={(text) => setQuantidade(text.target.value)}
              />
              <button onClick={() => updateDados()}>{loading ? <img width='40px' style={{ margin: 'auto' }} height='' src='https://contribua.org/mb-static/images/loading.gif' alt='Loading' /> : 'Salvar'}</button>
            </S.Form>
          </S.Container>
        </Modal>
      </S.ContainerConfirmation>
    </>
  )
}
