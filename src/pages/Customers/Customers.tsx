import * as S from './Customers.styled'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'

import { FiPlus } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { TextField } from '../../ui/Components/TextField'
import { toast } from 'react-toastify'
import { api } from '../../services/api'

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
}

export function Customers () {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [clientes, setClientes] = useState<any[]>([])
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  function onSubmit (data: FormData) {
    console.log(data)
    Cadastro(data)
    reset()
  }
  async function Cadastro (submit: any) {
    setLoading(true)
    // eslint-disable-next-line
    const responser = api.post('clientes', {
      data: submit,
    }).then((response) => {
      console.log(response);
      if (response.statusText === "OK") {
        toast.success('Cliente cadastrado com sucesso!');
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
      console.log(res);
      toast.error(res.response.data);
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
  useEffect(() => {
    setLoading(true)
    loadDados()
  }, [])

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
        {clientes.length > 0 ?
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
        ): 'Nenhum Cliente cadastrado!'}
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <S.Container>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <TextField
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
              />

              <button type='submit'>{loading ? <img width='40px' style={{ margin: 'auto' }} height='' src='https://contribua.org/mb-static/images/loading.gif' alt='Loading' /> : 'Salvar'}</button>
            </S.Form>
          </S.Container>
        </Modal>
      </S.ContainerConfirmation>
    </>
  )
}
