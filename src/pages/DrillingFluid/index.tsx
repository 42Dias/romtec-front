import DeleteButton from '../../ui/Components/DeleteButton/DeleteButton'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'

import { TextField } from '../../ui/Components/TextField'
import { useForm } from 'react-hook-form'
import { FiPlus } from 'react-icons/fi'
import { useEffect, useState } from 'react'

import * as S from './styled'
import { toast } from 'react-toastify'
import { api } from '../../services/api'

type FormData = {
  nome: string;
  viscosidadeEsperada: string;
  qtdePHPA: string;
  qtdeBase: string;
  limiteEscoamento: string;
  teorAreia: string;
  agua: string
}

export default function
 DrillingFluid () {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [fluidos, setFluidos] = useState<any[]>([])

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  function onSubmit (data: FormData) {
    console.log(data)
    Cadastro(data)
    reset()
  }
  async function Cadastro (submit: any) {
    setLoading(true)
    submit.agua = '0'
    // eslint-disable-next-line
    const responser = api.post('fluido-perfuracao', {
      data: submit,
    }).then((response) => {
      console.log(response)
      if (response.statusText === 'OK') {
        toast.success('Fluido cadastrado com sucesso!')
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
    const responser = api.get('fluido-perfuracao',
    ).then((response) => {
      console.log(response.data.rows)
      console.log(typeof (response.data.rows))
      if (response.statusText === 'OK') {
        setFluidos(response.data.rows)
        setLoading(false)
      }
    }).catch(res => {
      console.log(res.response.data)
      toast.error(res.response.data)
      setLoading(false)
    })
  }
  // eslint-disable-next-line
  async function deleteDados (id: string) {
    setLoading(true)
    // eslint-disable-next-line
    const responser = api.delete('fluido-perfuracao/' + id,
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
    setFluidos(fluidos =>
      fluidos.filter(fluido => fluido.id !== id),
    )
  }

  return (
    <>
      <Sidebar />
      <Navbar />
      <S.ContainerConfirmation>
        <h2>Fluídos de perfuração</h2>
        <button onClick={() => setIsOpen(true)}><FiPlus /></button>

        <S.GridConfirmation>
          <span>Identificação</span>
          <span>Viscosidade</span>
          <span>pH</span>
          <span>Base para formulação</span>
          <span>Escoamento</span>
          <span>Teor de areia</span>
        </S.GridConfirmation>

        <ul>
          {fluidos.length > 0
            ? fluidos.map((fluido) =>
              <li key={fluido.id}>
                <S.GridConfirmation>
                  <span>{fluido.nome}</span>
                  <span>{fluido.nome}</span>
                  <span>{fluido.nome}</span>
                  <span>{fluido.nome}</span>
                  <span>{fluido.nome}</span>
                  <span>{fluido.nome}</span>
                  <DeleteButton
                    onDelete={() => handleDelete(fluido.id)}
                  />
                </S.GridConfirmation>
              </li>,
            )
            : <p>🤔 Nenhum fluído cadastrado</p>}
        </ul>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <S.Container>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                label='Identificação'
                errorMessage={errors.nome?.message}
                {...register('nome', {
                  required: {
                    value: true,
                    message: 'Todos os campos são obrigatórios',
                  },
                })}
              />

              <TextField
                label='Viscosidade esperada (Segundos Marsh - cP)'
                value={0}
                {...register('viscosidadeEsperada', {
                  required: false,
                })}
              />

              <TextField
                label='pH da Água'
                value={0}
                {...register('qtdePHPA', {
                  required: false,
                })}
              />

              <TextField
                label='Quantidade base para formulação (Metros cúbicos - m²)'
                value={0}
                {...register('qtdeBase', {
                  required: false,
                })}
              />

              <TextField
                label='Limite de escoamento (Número - N)'
                value={0}
                {...register('limiteEscoamento', {
                  required: false,
                })}
              />

              <TextField
                label='Teor de areia (Porcentagem - %)'
                value={0}
                {...register('teorAreia', {
                  required: false,
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
