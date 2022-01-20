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
import { api, ip } from '../../services/api'
import EditButton from '../../ui/Components/EditButton/EditButton'
import { FaEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'

type FormData = {
  numeroEtapa: string;
  novaEtapa: string;
  perfil: string;
}

export default function
ConfigurationSteps () {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenPhases, setIsOpenPhases] = useState(false)
  const [isOpenUpdate, setIsOpenUpdate] = useState(false)
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false)
  // eslint-disable-next-line
  const [etapas, setetapas] = useState<any[]>([])
  const [idEtapa, setidEtapa] = useState('')
  const [numeroEtapa, setnumeroEtapa] = useState('')
  const [novaEtapa, setnovaEtapa] = useState('')
  const [perfil, setperfil] = useState('')
  const [configurationCrossings, setConfigurationCrossings] = useState<any[]>([])
  const link = '/etapas/'
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()
  let idConfigTravessia = window.location.hash.replace(ip + '/romtec/#/etapas-da-configuracao/', '')

  function onSubmit (data: FormData) {
    console.log(data)
    Cadastro(data)
  }
  // eslint-disable-next-line
  async function Cadastro(submit: any) {
    setLoading(true)
    submit.idConfigTravessia = idConfigTravessia.replace('#/etapas-da-configuracao/', '')
    // eslint-disable-next-line
    const responser = api.post('etapas', {
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
    const responser = api.get('etapas',
    ).then((response) => {
      console.log(response.data.rows)
      if (response.statusText === 'OK') {
        setetapas(response.data.rows)
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
    const responser = api.delete('etapas/' + id
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
    setidEtapa(dados.id)
    setnumeroEtapa(dados.numeroEtapa)
    setnovaEtapa(dados.novaEtapa)
    setperfil(dados.perfil)
    setIsOpenUpdate(true)
  }
  async function updateDados () {
    setLoading(true)
    const responser = api.put('etapas/' + idEtapa, {
      data: {
        numeroEtapa: numeroEtapa,
        novaEtapa: novaEtapa,
        perfil: perfil,
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
    idConfigTravessia = window.location.hash.replace(ip + '/romtec#/etapas-da-configuracao/', '')
    idConfigTravessia = idConfigTravessia.replace('#/etapas-da-configuracao/', '')
    console.log(idConfigTravessia)
  }, [])

  function onChange (e: any) {
    console.log(`checked = ${e.target.checked}`)
  }

  return (
    <>
      <Sidebar />
      <Navbar />
      <S.ContainerConfirmation>
        <h2>Etapas da configuração</h2>
        <button onClick={() => setIsOpen(true)}><FiPlus /></button>

        <S.GridConfirmation>
          <span>Nova Etapa</span>
          <span>Numero da Etapa</span>
          <span>Perfil</span>
        </S.GridConfirmation>

        <ul>
          {etapas.length > 0
            ? etapas.map((etapas) =>
              <li key={etapas.id}>
                <S.GridConfirmation>
                  <span>{etapas.novaEtapa}</span>
                  <span>{etapas.numeroEtapa}</span>
                  <span>{etapas.perfil}</span>
                  <DeleteButton
                    onDelete={() => deleteDados(etapas.id)}
                  />
                  {/* <EditButton
                    onEdit={() => update(etapas.id)}
                  /> */}
                  <button
                    // onChange={onEdit}
                    onClick={() => update(etapas)}
                    style={{ background: 'none', color: 'yellow' }}
                    title='Editar?'
                  >
                    <FaEdit size={20} />
                  </button>
                  {/* <Link to={link + etapas.id}><span>Executar travessia</span></Link>
                  <button><span>Executar travessia</span></button> */}
                  <button onClick={() => setIsOpenPhases(true)}>Atribuir campos</button>
                </S.GridConfirmation>
              </li>,
            )
            : <p>🤔 Nenhuma configuração cadastrada</p>}

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
                <label
                  htmlFor='perfil'
                >Perfil
                </label>
                <select
                  {...register('perfil', {
                    required: {
                      value: true,
                      message: 'Todos os campos são obrigatórios',
                    },
                  })}
                  name='perfil' id='perfil'
                >
                  <option value='operador'>Operador</option>
                  <option value='equipeCivil'>Equipe civil</option>
                  <option value='navegador'>Navegação</option>
                  <option value='engenhariaADM'>Engenharia adm</option>
                  <option value='engenharia'>Engenharia user</option>
                  <option value='mapeamento'>Mapeamento</option>
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
              <button onClick={() => updateDados()}>{loading ? <img width='40px' style={{ margin: 'auto' }} height='' src='https://contribua.org/mb-static/images/loading.gif' alt='Loading' /> : 'Salvar'}</button>
            </S.Div>
          </S.Container>
        </Modal>
      </S.ContainerConfirmation>
    </>
  )
}
