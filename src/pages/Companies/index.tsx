import DeleteButton from '../../ui/Components/DeleteButton/DeleteButton'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'

import { TextField } from '../../ui/Components/TextField'
import { useForm } from 'react-hook-form'
import { FiPlus } from 'react-icons/fi'
import { useEffect, useState } from 'react'

import * as S from './styles'
import { toast } from 'react-toastify'
import { api } from '../../services/api'
import EditButton from '../../ui/Components/EditButton/EditButton'
import { FaEdit } from 'react-icons/fa'
import { em } from 'polished'
import MaskedInput from '../../ui/Components/InputMask/InputMask'

type FormData = {
  cnpj: string;
  razaoSocial: string;
  nomeFantasia: string;
  cep: string;
  cidade: string;
  estado: string;
  bairro: string;
  logradouro: string;
  tel: string;
  email: string;
  numero: string;
  responsavelTecnico: string;
}

export default function
  Companies() {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenUpdate, setIsOpenUpdate] = useState(false)
  const [loading, setLoading] = useState(false)
  const [companhias, setCompanhias] = useState<any[]>([])
  const [idCompanhias, setIdCompanhias] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [razaoSocial, setRazaoSocial] = useState('')
  const [cidade, setCidade] = useState('')
  const [nomeFantasia, setNomeFantasia] = useState('')
  const [cep, setCep] = useState('')
  const [estado, setEstado] = useState('')
  const [bairro, setBairro] = useState('')
  const [logradouro, setLogradouro] = useState('')
  const [tel, setTel] = useState('')
  const [email, setEmail] = useState('')
  const [numero, setNumero] = useState('')
  const [responsavelTecnico, setResponsavelTecnico] = useState('')

  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<FormData>()

  function onSubmit(data: FormData) {
    console.log(data)
    Cadastro(data)
  }
  async function Cadastro(submit: any) {
    setLoading(true)
    // eslint-disable-next-line
    const responser = api.post('companhia', {
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
      toast.error(res.response.data)
      setLoading(false)
    })
  }

  async function loadDados() {
    setLoading(true)
    // eslint-disable-next-line
    const responser = api.get('companhia',
    ).then((response) => {
      console.log(response.data.rows)
      console.log(typeof (response.data.rows))
      if (response.statusText === 'OK') {
        setCompanhias(response.data.rows)
        setLoading(false)
      }
    }).catch(res => {
      console.log(res)
      toast.error(res)
      setLoading(false)
    })
  }

  // eslint-disable-next-line
  async function deleteDados(id: string) {
    setLoading(true)
    // eslint-disable-next-line
    const responser = api.delete('companhia/' + id,
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
    setIdCompanhias(dados.id)
    setCnpj(dados.cnpj)
    setRazaoSocial(dados.razaoSocial)
    setCidade(dados.cidade)
    setNomeFantasia(dados.nomeFantasia)
    setCep(dados.cep)
    setEstado(dados.estado)
    setBairro(dados.bairro)
    setLogradouro(dados.logradouro)
    setTel(dados.tel)
    setEmail(dados.email)
    setNumero(dados.numero)
    setResponsavelTecnico(dados.responsavelTecnico)
    setIsOpenUpdate(true)
  }
  async function updateDados() {
    setLoading(true)
    const responser = api.put('companhia/' + idCompanhias, {
      data: {
        cnpj: cnpj,
        razaoSocial: razaoSocial,
        cidade: cidade,
        nomeFantasia: nomeFantasia,
        cep: cep,
        estado: estado,
        bairro: bairro,
        logradouro: logradouro,
        tel: tel,
        email: email,
        numero: numero,
        responsavelTecnico: responsavelTecnico,
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
        <h2>Companhias</h2>
        <button onClick={() => setIsOpen(true)}><FiPlus /></button>

        <S.GridConfirmation>
          <span>Nome fantasia</span>
          <span>Estado</span>
          <span>Cidade</span>
          <span>E-mail</span>
          <span>Responsável Técnico</span>
        </S.GridConfirmation>

        <ul>
          {companhias.length > 0
            ? companhias.map((companhia) =>
              <li key={companhia.id}>
                <S.GridConfirmation>
                  <span>{companhia.nomeFantasia}</span>
                  <span>{companhia.estado}</span>
                  <span>{companhia.cidade}</span>
                  <span>{companhia.email}</span>
                  <span>{companhia.responsavelTecnico}</span>
                  <DeleteButton
                    onDelete={() => deleteDados(companhia.id)}
                  />
                  {/* <EditButton
                    onEdit={() => handleUpdate(companhia.id)}
                  /> */}
                  <button
                    // onChange={onEdit}
                    onClick={() => update(companhia)}
                    style={{ background: 'none', color: 'yellow' }}
                    title='Editar?'
                  >
                    <FaEdit size={20} />
                  </button>
                </S.GridConfirmation>
              </li>,
            )
            : <p>🤔 Nenhuma companhia cadastrada</p>}
        </ul>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <S.Container>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <fieldset>
                <label htmlFor='cnpj'>CNPJ</label>
                <MaskedInput
                  onChangeUnMask={(value) => setValue('cnpj', value)}
                  mask='99.999.999/9999-99'
                  id='cnpj'
                  {...register('cnpj', {
                    required: {
                      value: true,
                      message: 'Todos os campos são obrigatórios',
                    },
                  })}
                />
              </fieldset>

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

              <fieldset>
                <label htmlFor='cep'>CEP</label>
                <MaskedInput
                  onChangeUnMask={(value) => setValue('cep', value)}
                  mask='99999-999'
                  id='cep'
                  {...register('cep')}
                />
              </fieldset>

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
                label='Estado'
                {...register('estado', {
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
                {...register('numero', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />

              <TextField
                label='E-mail'
                {...register('email', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />

              <fieldset>
                <label htmlFor='telefone'>Celular</label>
                <MaskedInput
                  onChangeUnMask={(value) => setValue('tel', value)}
                  mask='(99) 99999-9999'
                  id='telefone'
                  {...register('tel')}
                />
              </fieldset>

              <TextField
                label='Responsável Técnico'
                {...register('responsavelTecnico', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />

              <button type='submit'>{loading ? <img width='40px' style={{ margin: 'auto' }} height='' src='https://contribua.org/mb-static/images/loading.gif' alt='Loading' /> : 'Salvar'}</button>
            </S.Form>
          </S.Container>
          {/* eslint-disable-next-line */}
        </Modal>

        <Modal isOpen={isOpenUpdate} onClose={() => setIsOpenUpdate(false)}>
          <S.Container>
            <S.Div>
              <TextField
                label='CNPJ'
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
                value={cep} 
                onChange={(text) => setCep(text.target.value)}
              />

              <TextField
                label='Cidade'
                value={cidade} 
                onChange={(text) => setCidade(text.target.value)}
              />

              <TextField
                label='Estado'
                value={estado} 
                onChange={(text) => setEstado(text.target.value)}
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
                value={numero} 
                onChange={(text) => setNumero(text.target.value)}
              />

              <TextField
                label='E-mail'
                value={email} 
                onChange={(text) => setEmail(text.target.value)}
              />

              <TextField
                label='Telefone'
                value={tel} 
                onChange={(text) => setTel(text.target.value)}
              />

              <TextField
                label='Responsável Técnico'
                value={responsavelTecnico} 
                onChange={(text) => setResponsavelTecnico(text.target.value)}
              />

              <button onClick={() => updateDados()}>{loading ? <img width='40px' style={{ margin: 'auto' }} height='' src='https://contribua.org/mb-static/images/loading.gif' alt='Loading' /> : 'Salvar'}</button>
            </S.Div>
          </S.Container>
          {/* eslint-disable-next-line */}
        </Modal>
      </S.ContainerConfirmation>
    </>
  )
}
