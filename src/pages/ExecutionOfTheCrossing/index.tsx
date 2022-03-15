import DeleteButton from '../../ui/Components/DeleteButton/DeleteButton'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'
import * as S from './styled'
import { Checkbox } from 'antd'
import { TextField } from '../../ui/Components/TextField'
import { useForm } from 'react-hook-form'
import { FiPlus } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { api } from '../../services/api'
import EditButton from '../../ui/Components/EditButton/EditButton'
import { FaEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'

type FormData = {
  descricao: string;
  nomeTravessia: string;
  idConfigTravessia: string;
  nomeConfigTravessia: string;
  nomeCliente: string;
  idCliente: string;
}

export default function
ExecutionOfTheCrossing () {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenPhases, setIsOpenPhases] = useState(false)
  const [isOpenUpdate, setIsOpenUpdate] = useState(false)
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false)
  // eslint-disable-next-line
  const [travessia, setTravessia] = useState<any[]>([])
  const [execTtravessia, setexecTravessia] = useState<any[]>([])
  const [idconfigTravessia, setIdconfigTravessia] = useState('')
  const [descricao, setdescricao] = useState('')
  const [nome, setnome] = useState('')
  const [nomeCliente, setnomeCliente] = useState('')
  const [idCliente, setIdCliente] = useState('')
  const [idConfigTravessia, setidConfigTravessia] = useState('')
  const [nomeConfigTravessia, setnomeConfigTravessia] = useState('')
  const [configurationCrossings, setConfigurationCrossings] = useState<any[]>([])
  const [clientes, setClientes] = useState<any[]>([])
  const link = '/etapas/'
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  function onSubmit (data: FormData) {
    data.idCliente = data.nomeCliente.split('/')[0]
    data.nomeCliente = data.nomeCliente.split('/')[1]
    data.idConfigTravessia = data.nomeConfigTravessia.split('/')[0]
    data.nomeConfigTravessia = data.nomeConfigTravessia.split('/')[1]
    console.log(data)
    Cadastro(data)
  }
  // eslint-disable-next-line
  async function Cadastro(submit: any) {
    setLoading(true)
    // eslint-disable-next-line
    const responser = api.post('executarTravessia', {
      data: submit,
    }).then((response) => {
      console.log(response)
      if (response.statusText === 'OK') {
        toast.success('Cadastrada com sucesso!')
        console.log(response.data.id)
        submit.idConfigTravessia = response.data.id
        api.put('executarTravessia/' + response.data.id, {
          data: submit,
        }).then((response) => {
          setLoading(false)
          setIsOpen(false)
          reset()
          loadDados()
        })
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
    api.get('executarTravessia',
    ).then((response) => {
      console.log(response.data.rows)
      if (response.statusText === 'OK') {
        setexecTravessia(response.data.rows)
        setLoading(false)
      }
    }).catch(res => {
      console.log(res.response.data)
      toast.error(res.response.data)
      setLoading(false)
    })
    api.get('configTravessia',
    ).then((response) => {
      console.log(response.data.rows)
      if (response.statusText === 'OK') {
        setTravessia(response.data.rows)
        setLoading(false)
      }
    }).catch(res => {
      console.log(res.response.data)
      toast.error(res.response.data)
      setLoading(false)
    })
    api.get('clientes',
    ).then((response) => {
      console.log(response.data.rows)
      if (response.statusText === 'OK') {
        setClientes(response.data.rows)
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
    const responser = api.delete('executarTravessia/' + id
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
    setIdconfigTravessia(dados.id)
    setdescricao(dados.descricao)
    setidConfigTravessia(dados.idConfigTravessia)
    setnome(dados.nomeTravessia)
    setIdCliente(dados.idCliente)
    setnomeCliente(dados.idCliente + '/' + dados.nomeCliente)
    setnomeConfigTravessia(dados.idConfigTravessia + '/' + dados.nomeConfigTravessia)
    setIsOpenUpdate(true)
  }
  async function updateDados () {
    setLoading(true)
    const responser = api.put('executarTravessia/' + idconfigTravessia, {
      data: {
        descricao: descricao,
        nome: nome,
        nomeCliente: nomeCliente.split('/')[1],
        idCliente: nomeCliente.split('/')[0],
        idConfigTravessia: nomeConfigTravessia.split('/')[0],
        nomeConfigTravessia: nomeConfigTravessia.split('/')[1],
        nomeTravessia: nome,
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
  function close () {
    reset()
    setIsOpen(false)
  }
  function onChange (e: any) {
    console.log(`checked = ${e.target.checked}`)
  }

  return (
    <>
      <Sidebar />
      <Navbar />
      <S.ContainerConfirmation>
        <h2>Processos de travessias</h2>
        <button onClick={() => setIsOpen(true)}><FiPlus /></button>
        {/* <button onClick={() => setIsOpen(true)}>Nova<FiPlus /></button> */}

        <S.GridConfirmation>
          <span>Nome do Cliente</span>
          <span>Nome da Travessia</span>
          <span>Descrição</span>
          <span>Configuração da Travessia</span>

        </S.GridConfirmation>

        <ul>
          {execTtravessia.length > 0
            ? execTtravessia.map((configurationCrossing) =>
              <li key={configurationCrossing.id}>
                <S.GridConfirmation>
                  <span>{configurationCrossing.nomeCliente}</span>
                  <span>{configurationCrossing.nomeTravessia}</span>
                  <span>{configurationCrossing.descricao}</span>
                  <span>{configurationCrossing.nomeConfigTravessia}</span>
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
                  <Link to={link + configurationCrossing.idConfigTravessia + '/' + configurationCrossing.id}><span>Executar travessia</span></Link>
                  {/* {<button><span>Executar travessia</span></button>}
                   <Link to='/etapas'><span>Executar travessia</span></Link> */}
                </S.GridConfirmation>
              </li>,
            )
            : <p>🤔 Nenhuma configuração cadastrada</p>}
        </ul>

        {/* <ul>
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

        <Modal isOpen={isOpen} onClose={() => close()}>
          <S.Container>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label
                  htmlFor='nomeCliente'
                >Nome do Cliente
                </label>
                <select
                  {...register('nomeCliente', {
                    required: {
                      value: true,
                      message: 'Todos os campos são obrigatórios',
                    },
                  })}
                  name='nomeCliente' id='nomeCliente'
                >
                  <option value=''>Selecione...</option>
                  {clientes.length > 0
                    ? clientes.map((cliente) =>
                      <option value={cliente.id + '/' + cliente.nomeFantasia}>{cliente.nomeFantasia}</option>,
                    )
                    : <option value=''>Nenhum Cliente cadastrado!</option>}
                </select>
              </div>

              <TextField
                label='Nome da travessia'
                errorMessage={errors.descricao?.message}
                {...register('nomeTravessia', {
                  required: {
                    value: true,
                    message: 'Todos os campos são obrigatórios',
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

              <div>
                <label
                  htmlFor='nomeConfigTravessia'
                >Configuração da travessia
                </label>
                <select
                  {...register('nomeConfigTravessia', {
                    required: {
                      value: true,
                      message: 'Todos os campos são obrigatórios',
                    },
                  })}
                  name='nomeConfigTravessia' id='nomeConfigTravessia'
                >
                  <option value='1/Travessia personalizada'>Iniciar Travessia personalizada</option>
                  {travessia.length > 0
                    ? travessia.map((travessia) =>

                      <option value={travessia.id + '/' + travessia.nome}>{travessia.nome}</option>,

                    )
                    : <option value=''>Nenhuma Configuração de Travessia cadastrado!</option>}
                </select>
              </div>

              <button type='submit'>{loading ? <img width='40px' style={{ margin: 'auto' }} height='' src='https://contribua.org/mb-static/images/loading.gif' alt='Loading' /> : 'Salvar'}</button>
            </S.Form>
          </S.Container>
        </Modal>

        <Modal isOpen={isOpenPhases} onClose={() => setIsOpenPhases(false)}>
          <S.Container>
            <S.Form className='form-check' onSubmit={handleSubmit(onSubmit)}>
              <div className='form-control-group-check'>
                <h2>Adicione os campos</h2>
                <Checkbox className='first' onChange={onChange}>Checkbox</Checkbox>
                <Checkbox onChange={onChange}>Checkbox</Checkbox>
                <Checkbox onChange={onChange}>Checkbox</Checkbox>
                <Checkbox onChange={onChange}>Checkbox</Checkbox>
              </div>
              <button type='submit'>Adicionar</button>
            </S.Form>
          </S.Container>
        </Modal>

        <Modal isOpen={isOpenUpdate} onClose={() => setIsOpenUpdate(false)}>
          <S.Container>
            <S.Div>
              <div className='form-control-group'>
                <label>Nome do Cliente
                </label>
                <select
                  name='nomeCliente' id='nomeCliente'
                  value={nomeCliente}
                  onChange={(text) => setnomeCliente(text.target.value)}
                >
                  <option value={nomeCliente}>{nomeCliente.split('/')[1]}</option>
                  {clientes.length > 0
                    ? clientes.map((cliente) =>
                      nomeCliente.split('/')[1] === cliente.nomeFantasia
                        ? false
                        : <option value={cliente.id + '/' + cliente.nomeFantasia}>{cliente.nomeFantasia}</option>,
                    )
                    : <option value=''>Nenhum Cliente cadastrado!</option>}
                </select>
              </div>
              <div className='form-control-group'>
                <TextField
                  label='Nome da travessia'
                  value={nome}
                  onChange={(text) => setnome(text.target.value)}
                />
              </div>
              {/* <TextField
                label='Nome da travessia'
                errorMessage={errors.descricao?.message}
                {...register('descricao', {
                  required: {
                    value: true,
                    message: 'Todos os campos são obrigatórios',
                  },
                })}
              /> */}

              <div className='form-control-group'>
                <TextField
                  label='Descrição'
                  value={descricao}
                  onChange={(text) => setdescricao(text.target.value)}
                />
              </div>

              {/* <TextField
                label='Configuração da travessia'
                errorMessage={errors.descricao?.message}
                {...register('descricao', {
                  required: {
                    value: true,
                    message: 'Todos os campos são obrigatórios',
                  },
                })}
              /> */}
              <div className='form-control-group'>
                <label
                  htmlFor='nomeConfigTravessia'
                >Configuração da travessia
                </label>
                <select
                  value={nomeConfigTravessia}
                  onChange={(text) => setnomeConfigTravessia(text.target.value)}
                  name='nomeConfigTravessia' id='nomeConfigTravessia'
                >
                  <option value={nomeConfigTravessia}>{nomeConfigTravessia.split('/')[1]}</option>
                  {travessia.length > 0
                    ? travessia.map((travessia) =>
                      nomeConfigTravessia.split('/')[1] === travessia.nome
                        ? false
                        : <option value={travessia.id + '/' + travessia.nome}>{travessia.nome}</option>,

                    )
                    : <option value=''>Nenhuma Configuração de Travessia cadastrado!</option>}
                </select>
              </div>
              <button onClick={() => updateDados()}>{loading ? <img width='40px' style={{ margin: 'auto' }} height='' src='https://contribua.org/mb-static/images/loading.gif' alt='Loading' /> : 'Salvar'}</button>
            </S.Div>
          </S.Container>
        </Modal>
      </S.ContainerConfirmation>
    </>
  )
}
