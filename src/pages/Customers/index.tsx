import * as S from './styled'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'
import { FiPlus } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { TextField } from '../../ui/Components/TextField'
import { toast } from 'react-toastify'
import { api } from '../../services/api'
import DeleteButton from '../../ui/Components/DeleteButton/DeleteButton'
import EditButton from '../../ui/Components/EditButton/EditButton'
import { FaEdit } from 'react-icons/fa'
import { backgroundImages } from 'polished'
import { Field, Formik } from 'formik'

type FormData = {
  cnpj: string;
  razaoSocial: string;
  nomeFantasia: string;
  cep: string;
  uf: string;
  cidade: string;
  bairro: string;
  logradouro: string;
  numero: string;
  complemento: string;
  values: string;
  actions: string;
  ev: any;
  setFieldValue: any;
}

export default function
Customers () {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenUpdate, setIsOpenUpdate] = useState(false)
  const [loading, setLoading] = useState(false)
  const [clientes, setClientes] = useState<any[]>([])
  const [idClientes, setIdClientes] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [razaoSocial, setRazaoSocial] = useState('')
  const [nomeFantasia, setNomeFantasia] = useState('')
  const [cep, setCep] = useState('')
  const [uf, setUf] = useState('')
  const [cidade, setCidade] = useState('')
  const [bairro, setBairro] = useState('')
  const [logradouro, setLogradouro] = useState('')
  const [numero, setNumero] = useState('')
  const [complemento, setComplemento] = useState('')
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<FormData>()

  function onSubmit (data: FormData) {
    console.log(data)
    Cadastro(data)
  }
  async function Cadastro (submit: any) {
    setLoading(true)
    // eslint-disable-next-line
    const responser = api.post('clientes', {
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
    const responser = api.get('clientes',
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
    const responser = api.delete('clientes/' + id,
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
  function update (dados: any) {
    console.log('dados')
    console.log(dados)
    setIdClientes(dados.id)
    setCnpj(dados.cnpj)
    setRazaoSocial(dados.razaoSocial)
    setNomeFantasia(dados.nomeFantasia)
    setCep(dados.cep)
    setUf(dados.uf)
    setCidade(dados.cidade)
    setBairro(dados.bairro)
    setLogradouro(dados.logradouro)
    setNumero(dados.numero)
    setComplemento(dados.complemento)
    setIsOpenUpdate(true)
  }
  async function updateDados () {
    setLoading(true)
    const responser = api.put('clientes/' + idClientes, {
      data: {
        cnpj: cnpj,
        razaoSocial: razaoSocial,
        nomeFantasia: nomeFantasia,
        cep: cep,
        uf: uf,
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
  function onSubmitInput (values: any, actions: any) {
    // console.log(data)
    // Cadastro(data)
    console.log('SUBMIT', values)
  }

  function onBlurCep (ev: any, setFieldValue: any) {
    const { value } = ev.target

    const cep = value?.replace(/[^0-9]/g, '')

    if (cep?.length !== 8) {
      return
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setFieldValue('logradouro', data.logradouro)
        setFieldValue('bairro', data.bairro)
        setFieldValue('cidade', data.localidade)
        setFieldValue('uf', data.uf)
      })
  }
  return (
    <>
      <Sidebar />
      <Navbar />
      <S.ContainerConfirmation>
        <h2>Clientes</h2>
        <button onClick={() => setIsOpen(true)}><FiPlus /></button>

        <S.GridConfirmation>
          <span>CNPJ</span>
          <span>Razão Social</span>
          <span>Nome Fantasia</span>
          <span>CEP</span>
          <span>UF</span>
          <span>Cidade</span>
          <span>Bairro</span>
          <span>Logradouro</span>
          <span>Número</span>
          <span>Complemento</span>
        </S.GridConfirmation>
        {/* clientes.length > 0 ?
        clientes.map((cliente) =>
          <S.GridConfirmation>
            <span>{cliente.cnpj}</span>
            <span>{cliente.razaoSocial}</span>
            <span>{cliente.nomeFantasia}</span>
            <span>{cliente.cep}</span>
            <span>{cliente.uf}</span>
            <span>{cliente.cidade}</span>
            <span>{cliente.bairro}</span>
            <span>{cliente.logradouro}</span>
            <span>{cliente.numero}</span>
            <span>{cliente.complemento}</span>
          </S.GridConfirmation>
        ): 'Nenhum Cliente cadastrado!' */}

        <ul>
          {clientes.length > 0
            ? clientes.map((cliente) =>
              <li key={cliente.id}>
                <S.GridConfirmation>
                  <span>{cliente.cnpj}</span>
                  <span>{cliente.razaoSocial}</span>
                  <span>{cliente.nomeFantasia}</span>
                  <span>{cliente.cep}</span>
                  <span>{cliente.uf}</span>
                  <span>{cliente.cidade}</span>
                  <span>{cliente.bairro}</span>
                  <span>{cliente.logradouro}</span>
                  <span>{cliente.numero}</span>
                  <span>{cliente.complemento}</span>
                  <DeleteButton
                    onDelete={() => deleteDados(cliente.id)}
                  />
                  <button
                    // onChange={onEdit}
                    onClick={() => update(cliente)}
                    style={{ background: 'none', color: 'yellow' }}
                    title='Editar?'
                  >
                    <FaEdit size={20} />
                  </button>
                </S.GridConfirmation>
              </li>,
            )
            : 'Nenhum Cliente cadastrado!'}
        </ul>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <S.Container>
            <S.Form onSubmit={handleSubmit(onSubmit)}>

              {/* <TextField
                label='CNPJ'
                type='number'
                errorMessage={errors.cnpj?.message}
                {...register('cnpj', {
                  required: {
                    value: true,
                    message: 'Todos os campos são obrigatórios',
                  },
                })}
              />

              <TextField
                label='Razão Social'
                {...register('razaoSocial', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />

              <TextField
                label='Nome Fantasia'
                {...register('nomeFantasia', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />

              <TextField
                label='CEP'
                type='number'
                {...register('cep', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />

              <TextField
                label='UF'
                {...register('uf', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />

              <TextField
                label='Cidade'
                {...register('cidade', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />

              <TextField
                label='Bairro'
                {...register('bairro', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />

              <TextField
                label='Logradouro'
                {...register('logradouro', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />

              <TextField
                label='Número'
                type='number'
                {...register('numero', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />

              <TextField
                label='Complemento'
                {...register('complemento', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              /> */}

              <Formik
                onSubmit={onSubmitInput}
                validateOnMount
                initialValues={{
                  cep: '',
                  logradouro: '',
                  numero: '',
                  complemento: '',
                  bairro: '',
                  cidade: '',
                  uf: '',
                }}
                render={({ isValid, setFieldValue }) => (
                  <S.Form>
                    <TextField
                      label='CNPJ'
                      errorMessage={errors.cnpj?.message}
                      {...register('cnpj', {
                        required: {
                          value: true,
                          message: 'Todos os campos são obrigatórios',
                        },
                      })}
                    />

                    <TextField
                      label='Razão Social'
                      {...register('razaoSocial', {
                        required: {
                          value: true,
                          message: '',
                        },
                      })}
                    />

                    <TextField
                      label='Nome Fantasia'
                      {...register('nomeFantasia', {
                        required: {
                          value: true,
                          message: '',
                        },
                      })}
                    />
                    <div className='form-control-group'>
                      <label>Cep</label>
                      <Field
                        name='cep' type='text'
                        onBlur={(ev: any) => onBlurCep(ev, setFieldValue)}
                      />
                    </div>

                    <div className='form-control-group'>
                      <label>Logradouro</label>
                      <Field name='logradouro' type='text' />
                    </div>

                    <div className='form-control-group'>
                      <label>Número</label>
                      <Field name='numero' type='text' />
                    </div>

                    <div className='form-control-group'>
                      <label>Complemento</label>
                      <Field name='complemento' type='text' />
                    </div>

                    <div className='form-control-group'>
                      <label>Bairro</label>
                      <Field name='bairro' type='text' />
                    </div>

                    <div className='form-control-group'>
                      <label>Cidade</label>
                      <Field name='cidade' type='text' />
                    </div>

                    <div className='form-control-group'>
                      <label>Estado</label>
                      <Field component='select' name='uf'>
                        <option value=''>Selecione o Estado</option>
                        <option value='AC'>Acre</option>
                        <option value='AL'>Alagoas</option>
                        <option value='AP'>Amapá</option>
                        <option value='AM'>Amazonas</option>
                        <option value='BA'>Bahia</option>
                        <option value='CE'>Ceará</option>
                        <option value='DF'>Distrito Federal</option>
                        <option value='ES'>Espírito Santo</option>
                        <option value='GO'>Goiás</option>
                        <option value='MA'>Maranhão</option>
                        <option value='MT'>Mato Grosso</option>
                        <option value='MS'>Mato Grosso do Sul</option>
                        <option value='MG'>Minas Gerais</option>
                        <option value='PA'>Pará</option>
                        <option value='PB'>Paraíba</option>
                        <option value='PR'>Paraná</option>
                        <option value='PE'>Pernambuco</option>
                        <option value='PI'>Piauí</option>
                        <option value='RJ'>Rio de Janeiro</option>
                        <option value='RN'>Rio Grande do Norte</option>
                        <option value='RS'>Rio Grande do Sul</option>
                        <option value='RO'>Rondônia</option>
                        <option value='RR'>Roraima</option>
                        <option value='SC'>Santa Catarina</option>
                        <option value='SP'>São Paulo</option>
                        <option value='SE'>Sergipe</option>
                        <option value='TO'>Tocantins</option>
                      </Field>
                    </div>
                  </S.Form>
                )}
              />

              <button type='submit'>{loading ? <img width='40px' style={{ margin: 'auto' }} height='' src='https://contribua.org/mb-static/images/loading.gif' alt='Loading' /> : 'Salvar'}</button>
            </S.Form>
          </S.Container>
        </Modal>

        <Modal isOpen={isOpenUpdate} onClose={() => setIsOpenUpdate(false)}>
          <S.Container>
            <S.Div>
              <TextField
                label='CNPJ'
                type='number'
                value={cnpj}
                onChange={(text) => setCnpj(text.target.value)}
              />

              <TextField
                label='Razão Social'
                value={razaoSocial}
                onChange={(text) => setRazaoSocial(text.target.value)}
              />

              <TextField
                label='Nome Fantasia'
                value={nomeFantasia}
                onChange={(text) => setNomeFantasia(text.target.value)}
              />

              <TextField
                label='CEP'
                type='number'
                value={cep}
                onChange={(text) => setCep(text.target.value)}
              />

              <TextField
                label='UF'
                value={uf}
                onChange={(text) => setUf(text.target.value)}
              />

              <TextField
                label='Cidade'
                value={cidade}
                onChange={(text) => setCidade(text.target.value)}
              />

              <TextField
                label='Bairro'
                value={bairro}
                onChange={(text) => setBairro(text.target.value)}
              />

              <TextField
                label='Logradouro'
                value={logradouro}
                onChange={(text) => setLogradouro(text.target.value)}
              />

              <TextField
                label='Número'
                type='number'
                value={numero}
                onChange={(text) => setNumero(text.target.value)}
              />

              <TextField
                label='Complemento'
                value={complemento}
                onChange={(text) => setComplemento(text.target.value)}
              />

              <button onClick={() => updateDados()}>{loading ? <img width='40px' style={{ margin: 'auto' }} height='' src='https://contribua.org/mb-static/images/loading.gif' alt='Loading' /> : 'Salvar'}</button>
            </S.Div>
          </S.Container>
        </Modal>
      </S.ContainerConfirmation>
    </>
  )
}
