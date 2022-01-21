import DeleteButton from '../../ui/Components/DeleteButton/DeleteButton'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'
import * as S from './styled'
import { Checkbox, Switch } from 'antd'
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
  nome: Date;
}

export default function
ConfigurationSteps () {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenPhases, setIsOpenPhases] = useState(false)
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
      console.log(res.response.data)
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
          <span>Nome</span>
          <span>Travessia</span>
          <span>Trabalhadores</span>
          <span>Companhia</span>
          <span>Fluído de perfuração</span>
          <span>Haste</span>
          <span>Maquina perfuratriz</span>
        </S.GridConfirmation>

        <ul>
          <li>
            <S.GridConfirmation>
              <span>XXXXXXX</span>
              <span>XXXXXXX</span>
              <span>XXXXXXX</span>
              <span>XXXXXXX</span>
              <span>XXXXXXX</span>
              <span>XXXXXXX</span>
              <span>XXXXXXX</span>
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
              <button onClick={() => setIsOpenPhases(true)}>Atribuir campos</button>
              {/* {<button><span>Executar travessia</span></button>} */}
            </S.GridConfirmation>
          </li>

          <li>
            <S.GridConfirmation>
              <span>XXXXXXX</span>
              <span>XXXXXXX</span>
              <span>XXXXXXX</span>
              <span>XXXXXXX</span>
              <span>XXXXXXX</span>
              <span>XXXXXXX</span>
              <span>XXXXXXX</span>
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
              <button onClick={() => setIsOpenPhases(true)}>Atribuir campos</button>
              {/* {<button><span>Executar travessia</span></button>} */}
            </S.GridConfirmation>
          </li>

          <li>
            <S.GridConfirmation>
              <span>XXXXXXX</span>
              <span>XXXXXXX</span>
              <span>XXXXXXX</span>
              <span>XXXXXXX</span>
              <span>XXXXXXX</span>
              <span>XXXXXXX</span>
              <span>XXXXXXX</span>
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
              <button onClick={() => setIsOpenPhases(true)}>Atribuir campos</button>
              {/* {<button><span>Executar travessia</span></button>} */}
            </S.GridConfirmation>
          </li>
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

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <S.Container>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                label='Nova etapa'
                {...register('nome', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />
              <TextField
                label='Número da etapa'
                errorMessage={errors.descricao?.message}
                {...register('descricao', {
                  required: {
                    value: true,
                    message: 'Todos os campos são obrigatórios',
                  },
                })}
              />
              <div className='form-control-group'>
                <label htmlFor=''>Perfil</label>
                <select name='' id=''>
                  <option value=''>Operador</option>
                  <option value=''>Equipe civil</option>
                  <option value=''>Navegação</option>
                  <option value=''>Engenharia adm</option>
                  <option value=''>Engenharia user</option>
                  <option value=''>Mapeamento</option>
                </select>
              </div>

              <button type='submit'>{loading ? <img width='40px' style={{ margin: 'auto' }} height='' src='https://contribua.org/mb-static/images/loading.gif' alt='Loading' /> : 'Salvar'}</button>
            </S.Form>
          </S.Container>
        </Modal>

        <Modal
          className='teste'
          isOpen={isOpenPhases} onClose={() => setIsOpenPhases(false)}
        >
          <S.Container>
            <S.Form className='form-check' onSubmit={handleSubmit(onSubmit)}>
              <div className='form-control-group-check'>
                <h2>Adicione os campos</h2>
                <Switch
                  checkedChildren='Ponto de verificação de entrada (lat)'
                  unCheckedChildren='Ponto de verificação de entrada (lat)'
                />

                <Switch
                  checkedChildren='Ponto de verificação de entrada (long)'
                  unCheckedChildren='Ponto de verificação de entrada (long)'
                />

                <Switch
                  checkedChildren='Ponto de verificação de saída (lat)'
                  unCheckedChildren='Ponto de verificação de saída (lat)'
                />

                <Switch
                  checkedChildren='Ponto de verificação de saída (long)'
                  unCheckedChildren='Ponto de verificação de saída (long)'
                />

                <Switch
                  checkedChildren='Tipo de tubulação'
                  unCheckedChildren='Tipo de tubulação'
                />

                <Switch
                  checkedChildren='Diâmetro de perfuração'
                  unCheckedChildren='Diâmetro de perfuração'
                />

                <Switch
                  checkedChildren='Tipos de solo'
                  unCheckedChildren='Tipos de solo'
                />

                <Switch
                  checkedChildren='Responsável'
                  unCheckedChildren='Responsável'
                />

                <Switch
                  checkedChildren='Equipamentos'
                  unCheckedChildren='Equipamentos'
                />

                <Switch
                  checkedChildren='Documentos'
                  unCheckedChildren='Documentos'
                />

                <Switch
                  checkedChildren='Tipo de rede'
                  unCheckedChildren='Tipo de rede'
                />

                <Switch
                  checkedChildren='Empresa proprietária'
                  unCheckedChildren='Empresa proprietária'
                />

                <Switch
                  checkedChildren='Confirmação da sondagem da interferência'
                  unCheckedChildren='Confirmação da sondagem da interferência'
                />
                <Switch
                  checkedChildren='Sondagem'
                  unCheckedChildren='Sondagem'
                />

                <Switch
                  checkedChildren='Quando acontece'
                  unCheckedChildren='Quando acontece'
                />

                <Switch
                  checkedChildren='Diâmetro da interferência'
                  unCheckedChildren='Diâmetro da interferência'
                />

                <Switch
                  checkedChildren='Criação do plano de furo'
                  unCheckedChildren='Criação do plano de furo'
                />

                <Switch
                  checkedChildren='Tipo de rede'
                  unCheckedChildren='Tipo de rede'
                />

                <Switch
                  checkedChildren='Empresa proprietária'
                  unCheckedChildren='Empresa proprietária'
                />

                <Switch
                  checkedChildren='Confirmação da sondagem da interferência'
                  unCheckedChildren='Confirmação da sondagem da interferência'
                />

                <Switch
                  checkedChildren='Quando acontece'
                  unCheckedChildren='Quando acontece'
                />

                <Switch
                  checkedChildren='Responsável'
                  unCheckedChildren='Responsável'
                />

                <Switch
                  checkedChildren='Ferramentas'
                  unCheckedChildren='Ferramentas'
                />

                <Switch
                  checkedChildren='Informações Envolvidas'
                  unCheckedChildren='Informações Envolvidas'
                />

                <Switch
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
                  checkedChildren='Profundidade'
                  unCheckedChildren='Profundidade'
                />

                <Switch
                  checkedChildren='Responsável pela topografia'
                  unCheckedChildren='Responsável pela topografia'
                />

                <Switch
                  checkedChildren='Data da execução da Topografia'
                  unCheckedChildren='Data da execução da Topografia'
                />

                <Switch
                  checkedChildren='Pontos de verificação de planejamento'
                  unCheckedChildren='Pontos de verificação de planejamento'
                />

                <Switch
                  checkedChildren='Pontos de verificação da execução'
                  unCheckedChildren='Pontos de verificação da execução'
                />
              </div>
              <button type='submit'>Adicionar</button>
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
              <button onClick={() => updateDados()}>{loading ? <img width='40px' style={{ margin: 'auto' }} height='' src='https://contribua.org/mb-static/images/loading.gif' alt='Loading' /> : 'Salvar'}</button>
            </S.Div>
          </S.Container>
        </Modal>
      </S.ContainerConfirmation>
    </>
  )
}
