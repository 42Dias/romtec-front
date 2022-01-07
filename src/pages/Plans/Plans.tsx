import DeleteButton from '../../ui/Components/DeleteButton/DeleteButton'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'

import { TextField } from '../../ui/Components/TextField'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { api } from '../../services/api'
import { FiPlus } from 'react-icons/fi'
import { toast } from 'react-toastify'

import * as S from './Plans.styled'

type FormData = {
  nome: string,
  valor: string,
  periodo: string,
}

export function Plans () {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [planos, setPlanos] = useState<any[]>([])
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  function onSubmit (data: FormData) {
    console.log(data)
    Cadastro(data)
    reset()
  }
  async function Cadastro (submit: any) {
    setLoading(true)
    // eslint-disable-next-line
    const responser = api.post('plano', {
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
    const responser = api.get('plano',
    ).then((response) => {
      console.log(response.data.rows)
      if (response.statusText === 'OK') {
        setPlanos(response.data.rows)
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
    setPlanos(planos =>
      planos.filter(plano => plano.id !== id),
    )
  }

  return (
    <>
      <Sidebar />
      <Navbar />
      <S.ContainerConfirmation>
        <h2>Planos</h2>
        <button onClick={() => setIsOpen(true)}><FiPlus /></button>

        <S.GridConfirmation>
          <span>Nome</span>
          <span>Valor</span>
          <span>Periodo</span>
        </S.GridConfirmation>

        <ul>
          {planos.length > 0
            ? planos.map((plano) =>
              <li key={plano.id}>
                <S.GridConfirmation>
                  <span>{plano.nome}</span>
                  <span>{plano.valor}</span>
                  <span>{plano.periodo}</span>
                  <DeleteButton
                    onDelete={() => handleDelete(plano.id)}
                  />
                </S.GridConfirmation>
              </li>,
            )
            : <p>🤔 Nenhum plano cadastrado</p>}
        </ul>

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
                label='Valor'
                {...register('valor', {
                  required: true,
                })}
              />

              <fieldset>
                <label htmlFor='periodo'>Periodo</label>
                <select id='periodo' {...register('periodo')}>
                  <option value=''>Select...</option>
                  <option value='Mensal'>Mensal</option>
                  <option value='Semestral'>Semestral</option>
                  <option value='Anual'>Anual</option>
                </select>
              </fieldset>

              <button type='submit'>
                {loading
                  ? <img
                      width='40px'
                      style={{ margin: 'auto' }}
                      height=''
                      src='https://contribua.org/mb-static/images/loading.gif'
                      alt='Loading'
                    />
                  : 'Salvar'}
              </button>
            </S.Form>
          </S.Container>
        </Modal>
      </S.ContainerConfirmation>
    </>
  )
}
