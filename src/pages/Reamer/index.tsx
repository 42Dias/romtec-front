import * as S from './styled'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'

import { TextField } from '../../ui/Components/TextField'
import { useForm } from 'react-hook-form'
import { FiPlus } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import DeleteButton from '../../ui/Components/DeleteButton/DeleteButton'
import EditButton from '../../ui/Components/EditButton/EditButton'
import { FaEdit } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { api, id, nome } from '../../services/api'
import { rawListeners } from 'process'

type FormData = {
  codigo: string;
  CapacidadeSwivel: string;
  CondicoesUso: string;
  tipoAlargador: string;
  IndicacaoTipoIdealSoloTrabalho: string;
  numeroJatos: string;
  diametro: string;
  rosca: string;
}

export default function
  Reamer() {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenUpdate, setIsOpenUpdate] = useState(false)
  const [loading, setLoading] = useState(false)
  const [reamers, setReamers] = useState<any[]>([])
  const [idAlargador, setId] = useState('')
  const [codigo, setCodigo] = useState('')
  const [CapacidadeSwivel, setCapacidadeSwivel] = useState('')
  const [CondicoesUso, setCondicoesUso] = useState('')
  const [tipoAlargador, setTipoAlargador] = useState('')
  const [IndicacaoTipoIdealSoloTrabalho, setIndicacaoTipoIdealSoloTrabalho] = useState('')
  const [numeroJatos, setNumeroJatos] = useState('')
  const [diametro, setDiametro] = useState('')
  const [rosca, setRosca] = useState('')


  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  function onSubmit(data: FormData) {
    console.log(data)
    Cadastro(data)
    reset()
  }

  function handleDelete(id: string) {
    setReamers(reamers =>
      reamers.filter(reamer => reamer.id !== id),
    )
  }

  async function Cadastro(submit: any) {
    setLoading(true)
    // eslint-disable-next-line
    const responser = api.post('alargadores', {
      data: submit,
    }).then((response) => {
      console.log(response)
      if (response.statusText === 'OK') {
        toast.success('Alargador cadastrado com sucesso!')
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

  async function loadDados() {
    setLoading(true)
    // eslint-disable-next-line
    const responser = api.get('alargadores',
    ).then((response) => {
      console.log(response.data.rows)
      if (response.statusText === 'OK') {
        setReamers(response.data.rows)
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
    const responser = api.delete('alargadores/' + id,
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
    setId(dados.id)
    setCodigo(dados.codigo)
    setCapacidadeSwivel(dados.CapacidadeSwivel)
    setCondicoesUso(dados.CondicoesUso)
    setTipoAlargador(dados.tipoAlargador)
    setDiametro(dados.diametro)
    setIndicacaoTipoIdealSoloTrabalho(dados.IndicacaoTipoIdealSoloTrabalho)
    setNumeroJatos(dados.numeroJatos)
    setRosca(dados.rosca)
    console.log(idAlargador)
    setIsOpenUpdate(true)
  }
  async function updateDados() {
    setLoading(true)
    const responser = api.put('alargadores/' + idAlargador, {
      data: {
        codigo: codigo,
        CapacidadeSwivel: CapacidadeSwivel,
        CondicoesUso: CondicoesUso,
        tipoAlargador: tipoAlargador,
        IndicacaoTipoIdealSoloTrabalho: IndicacaoTipoIdealSoloTrabalho,
        numeroJatos: numeroJatos,
        diametro: diametro,
        rosca: rosca,
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
        <h2>Alargador</h2>
        <button onClick={() => setIsOpen(true)}><FiPlus /></button>

        <S.GridConfirmation>
          <span>Código</span>
          <span>Capacidade do Swivel</span>
          <span>Condições de uso</span>
          <span>Tipo de alargador</span>
          <span>Tipo ideal de solo</span>
          <span>Número de jatos</span>
          <span>Diâmetro(mm)</span>
          <span>Rosca</span>
        </S.GridConfirmation>

        <ul>
          {reamers.length > 0
            ? reamers.map((reamer) =>
              <li key={reamer.id}>
                <S.GridConfirmation>
                  <span>{reamer.codigo}</span>
                  <span>{reamer.CapacidadeSwivel}</span>
                  <span>{reamer.CondicoesUso}</span>
                  <span>{reamer.tipoAlargador}</span>
                  <span>{reamer.IndicacaoTipoIdealSoloTrabalho}</span>
                  <span>{reamer.numeroJatos}</span>
                  <span>{reamer.diametro}</span>
                  <span>{reamer.rosca}</span>
                  <DeleteButton
                    onDelete={() => deleteDados(reamer.id)}
                  />
                  {/* <EditButton
                    onEdit={() => handleUpdate(reamer.id)}
                  /> */}
                  <button
                    // onChange={onEdit}
                    onClick={() => update(reamer)}
                    style={{ background: 'none', color: 'yellow' }}
                    title='Editar?'
                  >
                    <FaEdit size={20} />
                  </button>
                </S.GridConfirmation>
              </li>,
            )
            : <p>🤔 Nenhum alargador encontrado</p>}
        </ul>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <S.Container>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                label='Código'
                errorMessage={errors.codigo?.message}
                id='codigo'
                {...register('codigo', {
                  required: {
                    value: true,
                    message: 'Todos os campos são obrigatórios',
                  },
                })}
              />

              <TextField
                label='Capacidade do Swivel'
                {...register('CapacidadeSwivel', {
                  required: true,
                })}
              />

              <TextField
                label='Condições de uso'
                {...register('CondicoesUso', {
                  required: true,
                })}
              />

              <TextField
                label='Tipo de alargador'
                {...register('tipoAlargador', {
                  required: true,
                })}
              />

              <TextField
                label='Indicação de tipo ideal de solo para trabalho'
                {...register('IndicacaoTipoIdealSoloTrabalho', {
                  required: true,
                })}
              />

              <TextField
                label='Número de jatos'
                {...register('numeroJatos', {
                  required: true,
                })}
              />

              <TextField
                label='Diâmetro(mm)'
                {...register('diametro', {
                  required: true,
                })}
              />

              <TextField
                label='Rosca'
                {...register('rosca', {
                  required: true,
                })}
              />
              <button type='submit'> {loading
                ? <img
                  width='40px'
                  style={{ margin: 'auto' }}
                  height=''
                  src='https://contribua.org/mb-static/images/loading.gif'
                  alt='Loading'
                />
                : 'Salvar'}</button>
            </S.Form>
          </S.Container>
        </Modal>

        <Modal isOpen={isOpenUpdate} onClose={() => setIsOpenUpdate(false)}>
          <S.Container>
            <S.Div onSubmit={handleSubmit(onSubmit)}>
              <TextField
                label='Código'
                value={codigo}
                onChange={(text) => setCodigo(text.target.value)}
              />

              <TextField
                label='Capacidade do Swivel'
                value={CapacidadeSwivel}
                onChange={(text) => setCapacidadeSwivel(text.target.value)}
              />

              <TextField
                label='Condições de uso'
                value={CondicoesUso}
                onChange={(text) => setCondicoesUso(text.target.value)}
              />

              <TextField
                label='Tipo de alargador'
                value={tipoAlargador}
                onChange={(text) => setTipoAlargador(text.target.value)}
              />

              <TextField
                label='Indicação de tipo ideal de solo para trabalho'
                value={IndicacaoTipoIdealSoloTrabalho}
                onChange={(text) => setIndicacaoTipoIdealSoloTrabalho(text.target.value)}
              />

              <TextField
                label='Número de jatos'
                value={numeroJatos}
                onChange={(text) => setNumeroJatos(text.target.value)}
              />

              <TextField
                label='Diâmetro(mm)'
                value={diametro}
                onChange={(text) => setDiametro(text.target.value)}
              />

              <TextField
                label='Rosca'
                value={rosca}
                onChange={(text) => setRosca(text.target.value)}
              />
              <button onClick={() => updateDados()}>
                {loading
                  ? <img
                    width='40px'
                    style={{ margin: 'auto' }}
                    height=''
                    src='https://contribua.org/mb-static/images/loading.gif'
                    alt='Loading'
                  />
                  : 'Salvar'}
              </button>
            </S.Div>
          </S.Container>
        </Modal>
      </S.ContainerConfirmation>
    </>
  )
}
