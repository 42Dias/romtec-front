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

export function Companies() {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false);
  const [companhias, setCompanhias] = useState<any[]>([]);
  const [companhies, setCompanhies] = useState<any[]>([])

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  function onSubmit(data: FormData) {
    console.log(data)
    Cadastro(data)
    reset()
  }
  async function Cadastro(submit: any) {
    setLoading(true)
    let responser = api.post(`companhia`, {
      data: submit,
    }).then((response) => {
      console.log(response);
      if (response.statusText === "OK") {
        toast.success('Recebemos o seu registro');
        setLoading(false)
        loadDados()
      } else if (response.statusText === "Forbidden") {
        toast.error("Ops, Não tem permisão!");
        setLoading(false)
      } else {
        toast.error("Ops, Dados Incorretos!");
        setLoading(false)
      }
    }).catch(res => {
      console.log(res);
      //toast.error(res.response.data);
      setLoading(false)
    })
  }

  async function loadDados() {
    setLoading(true)
    let responser = api.get('companhia',
    ).then((response) => {
      console.log(response.data.rows);
      if (response.statusText === "OK") {
        setCompanhias(response.data.rows)
        setLoading(false)
      }
    }).catch(res => {
      console.log(res.response.data);
      toast.error(res.response.data);
      setLoading(false)
    })
  }
  async function deleteDados (id:string) {
    setLoading(true)
    const responser = api.delete('companhia/'+id
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
  useEffect(() => {
    setLoading(true)
    loadDados()
  }, []);

  function handleDelete (id: string) {
    setCompanhies(companhies =>
      companhies.filter(companhie => companhie.id !== id),
    )
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
        {companhias.map((companhia) =>
          <S.GridConfirmation>
            <span>{companhia.nomeFantasia}</span>
            <span>{companhia.estado}</span>
            <span>{companhia.cidade}</span>
            <span>{companhia.email}</span>
            <span>{companhia.responsavelTecnico}</span>
          </S.GridConfirmation>)}

        <ul>
          {companhies.map((companhie) =>
            <li key={companhie.id}>
              <S.GridConfirmation>
                <span>
                  {companhie}
                </span>
                <DeleteButton
                  onDelete={() => handleDelete(companhie.id)}
                />
              </S.GridConfirmation>
            </li>,
          )}
        </ul>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <S.Container>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
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

              <TextField
                label='CEP'
                {...register('cep', {
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

              <TextField
                label='Telefone'
                {...register('tel', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />

              <TextField
                label='Responsável Técnico'
                {...register('responsavelTecnico', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />

              <button type='submit'>{loading ? <img width="40px" style={{ margin: 'auto' }} height="" src={'https://contribua.org/mb-static/images/loading.gif'} alt="Loading" /> : 'Salvar'}</button>
            </S.Form>
          </S.Container>
          {/* eslint-disable-next-line */}
        </Modal>
      </S.ContainerConfirmation>
    </>
  )
}
