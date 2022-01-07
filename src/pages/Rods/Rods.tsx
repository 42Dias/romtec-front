import * as S from './Rods.styled'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'

import { TextField } from '../../ui/Components/TextField'
import { useForm } from 'react-hook-form'
import { FiPlus } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { api } from '../../services/api'
import DeleteButton from '../../ui/Components/DeleteButton/DeleteButton'

type FormData = {
  codigo: string;
  raioCurvatura: string;
  diametroTubo: string;
  condicao: string;
  diametroToolJoint: string;
  torque: string;
  comprimentoTotal: string;
  modeloRosca: string;
  quantidade: string;
}

export function Rods () {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [hastes, setHastes] = useState<any[]>([])
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  function onSubmit (data: FormData) {
    console.log(data)
    Cadastro(data)
    reset()
  }
  async function Cadastro (submit: any) {
    setLoading(true)
    // eslint-disable-next-line
    const responser = api.post('hastes', {
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
      toast.error(res.response.data)
      setLoading(false)
    })
  }

  async function loadDados () {
    setLoading(true)
    // eslint-disable-next-line
    const responser = api.get('hastes',
    ).then((response) => {
      console.log(response.data.rows)
      if (response.statusText === 'OK') {
        setHastes(response.data.rows)
        console.log(hastes.length)
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
    // eslint-disable-next-line
  }, [])

  function handleDelete (id: string) {
    setHastes(hastes =>
      hastes.filter(haste => haste.id !== id),
    )
  }

  return (
    <>
      <Sidebar />
      <Navbar />
      <S.ContainerConfirmation>
        <h2>Hastes</h2>
        <button onClick={() => setIsOpen(true)}><FiPlus /></button>

        <S.GridConfirmation>
          <span>Código </span>
          <span>Diametro do tubo(mm)</span>
          <span>Diametro do Tool Joint(mm)</span>
          <span>Comprimento total(m)</span>
          <span>Modelo da rosca</span>
        </S.GridConfirmation>

        <ul>
          {hastes.length > 0
            ? hastes.map((haste) =>
              <li key={haste.id}>
                <S.GridConfirmation>
                  <span>{haste.codigo}</span>
                  <span>{haste.diametroTubo}</span>
                  <span>{haste.diametroToolJoint}</span>
                  <span>{haste.comprimentoTotal}</span>
                  <span>{haste.modeloRosca}</span>
                  <DeleteButton
                    onDelete={() => handleDelete(haste.id)}
                  />
                </S.GridConfirmation>
              </li>,
            )
            : <p>Nenhum cadastro encontrado</p>}
        </ul>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <S.Container>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                label='Código do jogo de Hastes'
                errorMessage={errors.codigo?.message}
                {...register('codigo', {
                  required: {
                    value: true,
                    message: 'Todos os campos são obrigatórios',
                  },
                })}
              />

              <TextField
                label='Raio de curvatura'
                {...register('raioCurvatura', {
                  required: true,
                })}
              />

              <TextField
                label='Diâmetro do tubo(mm)*'
                {...register('diametroTubo', {
                  required: true,
                })}
              />

              <TextField
                label='Estado geral/condição'
                {...register('condicao', {
                  required: true,
                })}
              />

              <TextField
                label='Diâmetro do Tool Joint(mm)'
                {...register('diametroToolJoint', {
                  required: true,
                })}
              />

              <TextField
                label='Torque máximo'
                {...register('torque', {
                  required: true,
                })}
              />

              <TextField
                label='Comprimento total(m)'
                {...register('comprimentoTotal', {
                  required: true,
                })}
              />

              <TextField
                label='Modelo da Rosca'
                {...register('modeloRosca', {
                  required: true,
                })}
              />

              <TextField
                label='Quantidade de hastes'
                type='number'
                {...register('quantidade', {
                  required: true,
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
