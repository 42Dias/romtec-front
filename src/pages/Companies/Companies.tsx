import DeleteButton from '../../ui/Components/DeleteButton/DeleteButton'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'

import { TextField } from '../../ui/Components/TextField'
import { useForm } from 'react-hook-form'
import { FiPlus } from 'react-icons/fi'
import { useEffect, useState } from 'react'

import * as S from './Companies.styled'
import { toast } from 'react-toastify'
import { api } from '../../services/api'
import EditButton from '../../ui/Components/EditButton/EditButton'
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

export function Companies () {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [companhias, setCompanhias] = useState<any[]>([])

  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<FormData>()

  function onSubmit (data: FormData) {
    console.log(data)
    Cadastro(data)
    reset()
  }
  async function Cadastro (submit: any) {
    setLoading(true)
    // eslint-disable-next-line
    const responser = api.post('companhia', {
      data: submit,
    }).then((response) => {
      console.log(response)
      if (response.statusText === 'OK') {
        toast.success('Companhia cadastrada com sucesso!')
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
  async function deleteDados (id: string) {
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
  useEffect(() => {
    setLoading(true)
    loadDados()
  }, [])

  function handleDelete (id: string) {
    setCompanhias(companhias =>
      companhias.filter(companhia => companhia.id !== id),
    )
  }

  const handleUpdate = (id: string) => {
    setCompanhias(companhias => companhias.map(companhia => {
      if (companhia.id === id) {
        return {
          ...companhia,
        }
      }

      return companhia
    }))
  }

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
                    onDelete={() => handleDelete(companhia.id)}
                  />
                  <EditButton
                    onEdit={() => handleUpdate(companhia.id)}
                  />
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
      </S.ContainerConfirmation>
    </>
  )
}
