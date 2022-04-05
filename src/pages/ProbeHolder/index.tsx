import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'

import * as S from './styled'
import Load from './../../assets/load.gif'
import { TextField } from '../../ui/Components/TextField'
import { useForm } from 'react-hook-form'
import { FiPlus } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import DeleteButton from '../../ui/Components/DeleteButton/DeleteButton'
import EditButton from '../../ui/Components/EditButton/EditButton'
import { FaEdit } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { api } from '../../services/api'

type FormData = {
  codigo: string;
  sondaCompativelMarca: string;
  paCompativel: string;
  numeroJatos: string;
  conexaoRosca: string;
}

export default function
ProbeHolder () {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenUpdate, setIsOpenUpdate] = useState(false)
  const [loading, setLoading] = useState(false)
  const [probeHolders, setProbeHolders] = useState<any[]>([])
  const [idPortaSonda, setIdPortaSonda] = useState('')
  const [codigo, setCodigo] = useState('')
  const [sondaCompativelMarca, setSondaCompativelMarca] = useState('')
  const [paCompativel, setPaCompativel] = useState('')
  const [numeroJatos, setNumeroJatos] = useState('')
  const [conexaoRosca, setConexaoRosca] = useState('')
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  function onSubmit (data: FormData) {
    console.log(data)
    Cadastro(data)
  }

  function handleDelete (id: string) {
    setProbeHolders(probeHolders =>
      probeHolders.filter(probeHolder => probeHolder.id !== id),
    )
  }

  async function Cadastro (submit: any) {
    setLoading(true)
    // eslint-disable-next-line
    const responser = api.post('portaSonda', {
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

  async function loadDados () {
    setLoading(true)
    // eslint-disable-next-line
    const responser = api.get('portaSonda',
    ).then((response) => {
      console.log(response.data.rows)
      if (response.statusText === 'OK') {
        setProbeHolders(response.data.rows)
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
    const responser = api.delete('portaSonda/' + id,
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
  function update (dados: any) {
    console.log('dados')
    console.log(dados)
    setIdPortaSonda(dados.id)
    setCodigo(dados.codigo)
    setSondaCompativelMarca(dados.sondaCompativelMarca)
    setPaCompativel(dados.paCompativel)
    setNumeroJatos(dados.numeroJatos)
    setConexaoRosca(dados.conexaoRosca)
    setIsOpenUpdate(true)
  }
  async function updateDados () {
    setLoading(true)
    const responser = api.put('portaSonda/' + idPortaSonda, {
      data: {
        codigo: codigo,
        sondaCompativelMarca: sondaCompativelMarca,
        paCompativel: paCompativel,
        numeroJatos: numeroJatos,
        conexaoRosca: conexaoRosca,
      },
    },
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
        <h2>Porta sonda</h2>
        <button onClick={() => setIsOpen(true)}><FiPlus /></button>

        <S.GridConfirmation>
          <span>Sonda compatível/marca</span>
          <span>Pá compatível</span>
          <span>Número de Jatos</span>
          <span>Conexão/Rosca</span>
        </S.GridConfirmation>

        <ul>
          {probeHolders.length > 0
            ? probeHolders.map((probeHolder) =>
              <li key={probeHolder.id}>
                <S.GridConfirmation>
                  <span>{probeHolder.sondaCompativelMarca}</span>
                  <span>{probeHolder.paCompativel}</span>
                  <span>{probeHolder.numeroJatos}</span>
                  <span>{probeHolder.conexaoRosca}</span>
                  <DeleteButton
                    onDelete={() => deleteDados(probeHolder.id)}
                  />
                  <button
                    // onChange={onEdit}
                    onClick={() => update(probeHolder)}
                    style={{ background: 'none', color: 'yellow' }}
                    title='Editar?'
                  >
                    <FaEdit size={20} />
                  </button>
                </S.GridConfirmation>
              </li>,
            )
            : <p>🤔 Nenhum porta sonda encontrado</p>}
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
                label='Sonda compatível/marca'
                id='sondaCompativelMarca'
                {...register('sondaCompativelMarca', {
                  required: true,
                })}
              />

              <TextField
                label='Pá compatível'
                id='paCompativel'
                {...register('paCompativel', {
                  required: true,
                })}
              />

              <TextField
                label='Número de Jatos'
                id='numeroJatos'
                {...register('numeroJatos', {
                  required: true,
                })}
              />

              <TextField
                label='Conexão/Rosca'
                id='conexaoRosca'
                {...register('conexaoRosca', {
                  required: true,
                })}
              />
              <button type='submit'> {loading
                ? <img
                    width='40px'
                    style={{ margin: 'auto' }}
                    height=''
                    src={Load}
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
                label='Código'
                id='codigo'
                value={codigo}
                onChange={(text) => setCodigo(text.target.value)}
              />

              <TextField
                label='Sonda compatível/marca'
                value={sondaCompativelMarca}
                onChange={(text) => setSondaCompativelMarca(text.target.value)}
              />

              <TextField
                label='Pá compatível'
                id='paCompativel'
                value={paCompativel}
                onChange={(text) => setPaCompativel(text.target.value)}
              />

              <TextField
                label='Número de Jatos'
                id='numeroJatos'
                value={numeroJatos}
                onChange={(text) => setNumeroJatos(text.target.value)}
              />

              <TextField
                label='Conexão/Rosca'
                id='conexaoRosca'
                value={conexaoRosca}
                onChange={(text) => setConexaoRosca(text.target.value)}
              />
              <button onClick={() => updateDados()}>
                {loading
                  ? <img
                      width='40px'
                      style={{ margin: 'auto' }}
                      height=''
                      src={Load}
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
