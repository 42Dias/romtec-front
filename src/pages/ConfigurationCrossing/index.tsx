import DeleteButton from '../../ui/Components/DeleteButton/DeleteButton'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'
import * as S from './styled'
import { Select } from 'antd'
import 'antd/dist/antd.css'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { TextField } from '../../ui/Components/TextField'
import { useForm } from 'react-hook-form'
import { FiPlus } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { api } from '../../services/api'
import EditButton from '../../ui/Components/EditButton/EditButton'
import { FaEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Load from './../../assets/load.gif'
const { Option } = Select

type FormData = {
  descricao: string;
  nome: Date;
}

export default function
ConfigurationCrossing () {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenUpdate, setIsOpenUpdate] = useState(false)
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false)
  // eslint-disable-next-line
  const [travessia, setTravessia] = useState<any[]>([])
  const [idconfigTravessia, setIdconfigTravessia] = useState('')
  const [descricao, setdescricao] = useState('')
  const [nome, setnome] = useState('')
  const [configurationCrossings, setConfigurationCrossings] = useState<any[]>([])
  const link = '/etapas/'
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  function onSubmit (data: FormData) {
    console.log(data)
    Cadastro(data)
  }
  // eslint-disable-next-line
  async function Cadastro (submit: any) {
    setLoading(true)
    // eslint-disable-next-line
    const responser = api.post('configTravessia', {
      data: submit,
    }).then((response) => {
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
    }).catch(res => {
      console.log(res)
      // toast.error(res.response.data);
      setLoading(false)
    })
  }

  async function loadDados () {
    setLoading(true)
    // eslint-disable-next-line
    const responser = api.get('configTravessia',
    ).then((response) => {
      console.log(response.data.rows)
      if (response.statusText === 'OK') {
        setTravessia(response.data.rows)
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
    const responser = api.delete('configTravessia/' + id
    ).then((response) => {
      if (response.statusText === 'OK') {
        loadDados()
        setLoading(false)
        toast.success("Excluido com sucesso!")
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
    setIdconfigTravessia(dados.id)
    setdescricao(dados.descricao)
    setnome(dados.nome)
    setIsOpenUpdate(true)
  }
  async function updateDados () {
    setLoading(true)
    const responser = api.put('configTravessia/' + idconfigTravessia, {
      data: {
        descricao: descricao,
        nome: nome,
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
        <h2>Configurações da travessia</h2>
        <button onClick={() => setIsOpen(true)}><FiPlus /></button>

        <S.GridConfirmationGrid>
          <span>Nome da configuração</span>
          <span>Descrição</span>
        </S.GridConfirmationGrid>

        <ul>
          <li>
            {/* <S.GridConfirmation> */}
            {/* <span>Nome</span>
              <span>Descrição</span> */}
            {/* <DeleteButton
                onDelete={() => deleteDados(configurationCrossing.id)}
              /> */}
            {/* <EditButton
                    onEdit={() => handleUpdate(configurationCrossing.id)}
                  /> */}
            {/* <button
                    // onChange={onEdit}
                onClick={() => update(configurationCrossing)}
                style={{ background: 'none', color: 'yellow' }}
                title='Editar?'
              >
                <FaEdit size={20} />
              </button> */}
            {travessia.length > 0
              ? travessia.map((configurationCrossing) =>
                <li key={configurationCrossing.id}>
                  <S.GridConfirmation>
                    <span>{configurationCrossing.nome}</span>
                    <span>{configurationCrossing.descricao}</span>
                    <DeleteButton
                      onDelete={() => deleteDados(configurationCrossing.id)}
                    />
                    {/* <EditButton
                    onEdit={() => update(configurationCrossing.id)}
                  /> */}
                    <button
                    // onChange={onEdit}
                      onClick={() => update(configurationCrossing)}
                      style={{ background: 'none', color: 'yellow' }}
                      title='Editar?'
                    >
                      <FaEdit size={20} />
                    </button>
                    {/* <Link to={link + configurationCrossing.id}><span>Executar travessia</span></Link>
                  <button><span>Executar travessia</span></button> */}
                    <Link to={'/etapas-da-configuracao/' + configurationCrossing.id}><span>Atribuir etapas</span></Link>
                  </S.GridConfirmation>
                </li>,
              )
              : <p>🤔 Nenhuma configuração cadastrada</p>}

            {/* {<button><span>Executar travessia</span></button>} */}
            {/* </S.GridConfirmation> */}
          </li>
        </ul>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <S.Container>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                label='Nome da configuração'
                {...register('nome', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />
              <TextField
                label='Descrição'
                errorMessage={errors.descricao?.message}
                {...register('descricao', {
                  required: {
                    value: true,
                    message: 'Todos os campos são obrigatórios',
                  },
                })}
              />
              <button type='submit'>{loading ? <img width='40px' style={{ margin: 'auto' }} height='' src={Load} alt='Loading' /> : 'Salvar'}</button>
            </S.Form>
          </S.Container>
        </Modal>

        <Modal isOpen={isOpenUpdate} onClose={() => setIsOpenUpdate(false)}>
          <S.Container>
            <S.Div>
              <TextField
                label='Nome'
                value={nome}
                onChange={(text) => setnome(text.target.value)}
              />
              <TextField
                label='Descrição'
                value={descricao}
                onChange={(text) => setdescricao(text.target.value)}
              />
              <button onClick={() => updateDados()}>{loading ? <img width='40px' style={{ margin: 'auto' }} height='' src={Load} alt='Loading' /> : 'Salvar'}</button>
            </S.Div>
          </S.Container>
        </Modal>
      </S.ContainerConfirmation>
    </>
  )
}
