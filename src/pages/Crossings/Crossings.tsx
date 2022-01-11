import * as S from './Crossings.styled'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'

import { FiTrash, FiPlus, FiEye } from 'react-icons/fi'

import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { TextField } from '../../ui/Components/TextField'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { api } from '../../services/api'
import DeleteButton from '../../ui/Components/DeleteButton/DeleteButton'
import EditButton from '../../ui/Components/EditButton/EditButton'

type FormData = {
  nome: string;
  crossing: string;
  workers: string;
  company: string;
  drillingFluid: string;
  hurry: string;
  maquinaPerfuratizId: string;
}

export function Crossings () {
  const [isOpen, setIsOpen] = useState(false)
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false)
  // eslint-disable-next-line
  const [perfuracoes, setPerfuracoes] = useState<any[]>([])
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  function onSubmit (data: FormData) {
    console.log(data)

    reset()
  }
  // eslint-disable-next-line
  async function Cadastro (submit: any) {
    setLoading(true)
    // eslint-disable-next-line
    const responser = api.post('perfuracao', {
      data: submit,
    }).then((response) => {
      console.log(response)
      if (response.statusText === 'OK') {
        toast.success('Recebemos o seu registro')
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
      // toast.error(res.response.data);
      setLoading(false)
    })
  }

  async function loadDados () {
    setLoading(true)
    // eslint-disable-next-line
    const responser = api.get('perfuracao',
    ).then((response) => {
      console.log(response.data.rows)
      if (response.statusText === 'OK') {
        setPerfuracoes(response.data.rows)
        setLoading(false)
      }
    }).catch(res => {
      console.log(res.response.data)
      toast.error(res.response.data)
      setLoading(false)
    })
  }
  // eslint-disable-next-line
  async function deleteDados (id:string) {
    setLoading(true)
    // eslint-disable-next-line
    const responser = api.delete('perfuracao/' + id,
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
  }, [])

  function handleDelete (id: string) {
    setPerfuracoes(perfuracoes =>
      perfuracoes.filter(perfuracao => perfuracao.id !== id),
    )
  }

  const handleUpdate = (id: string) => {
    setPerfuracoes(perfuracoes => perfuracoes.map(perfuracao => {
      if (perfuracao.id === id) {
        return {
          ...perfuracao,
        }
      }

      return perfuracao
    }))
  }

  return (
    <>
      <Sidebar />
      <Navbar />
      <S.ContainerConfirmation>
        <h2>Perfurações</h2>
        <button onClick={() => setIsOpen(true)}><FiPlus /></button>

        <S.GridConfirmation>
          <span>Nome</span>
          <span>Travessia</span>
          <span>Trabalhadores</span>
          <span>Companhia</span>
          <span>Fluido de perfuração</span>
          <span>Pressa</span>
          <span>Maquina perfuratriz</span>
        </S.GridConfirmation>

        <ul>
          {perfuracoes.length > 0
            ? perfuracoes.map((perfuracao) =>
              <li key={perfuracao.id}>
                <S.GridConfirmation>
                  <span>{perfuracao}</span>
                  <Link to='/etapas' className='exec'><span>Executar travessia</span></Link>
                  <DeleteButton
                    onDelete={() => handleDelete(perfuracao.id)}
                  />
                  <EditButton
                    onEdit={() => handleUpdate(perfuracao.id)}
                  />
                </S.GridConfirmation>
              </li>,
            )
            : <p>🤔 Nenhuma perfuração cadastrada</p>}
        </ul>

        <S.GridConfirmation>
          <span>XXXXXXXXXX</span>
          <span>XXXXXX</span>
          <span>XXXXX</span>
          <span>XXXXX</span>
          <span>XXXXXXXX</span>
          <span>XXXXXXXX</span>
          <span>XXXXXXXX</span>
          <Link to='/etapas' className='exec'><span>Executar travessia</span></Link>
          <div>
            <button className='del'><FiTrash size={22} /></button>
            <button className='edit'><FiEye size={22} /></button>
          </div>
        </S.GridConfirmation>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <S.Container>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                label='Nome'
                errorMessage={errors.nome?.message}
                {...register('nome', {
                  required: {
                    value: true,
                    message: 'Todos os campos são obrigatórios',
                  },
                })}
              />

              <TextField
                label='Travessia'
                {...register('crossing', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />

              <TextField
                label='Trabalhadores'
                {...register('workers', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />

              <TextField
                label='Companhia'
                {...register('company', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />

              <TextField
                label='Fluído de perfuração'
                {...register('drillingFluid', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />

              <TextField
                label='Pressa'
                {...register('hurry', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />

              <TextField
                label='Máquina Perfuratriz'
                {...register('maquinaPerfuratizId', {
                  required: {
                    value: true,
                    message: '',
                  },
                })}
              />
              <button type='submit'>Salvar</button>
            </S.Form>
          </S.Container>
          {/* eslint-disable-next-line */}
        </Modal>
      </S.ContainerConfirmation>
    </>
  )
}
