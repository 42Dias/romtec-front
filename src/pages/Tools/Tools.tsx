import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'

import * as S from './Tools.styled'

import { TextField } from '../../ui/Components/TextField'
import { useForm } from 'react-hook-form'
import { FiPlus } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { api } from '../../services/api'
import DeleteButton from '../../ui/Components/DeleteButton/DeleteButton'

type FormData = {
  codigo: string;
  brocas: string;
  maquinaId: string;
  motorFundo: string;
  diametro: string;
  alargadores: string;
  capacidadeCarga: string;
  swivel: string;
  descricao: string;
  portaSonda: string;
  pullingHead: string;
  fusilink: string;
  components: string;
  hasteInicial: string;
  luva: string;
  mordentes: string;
  flexobarra: string;
}

export function Tools () {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  // eslint-disable-next-line
  const [ferramentas, setFerramentas] = useState<any[]>([])
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  function onSubmit (data: FormData) {
    console.log(data)
    toast.warning('Falta terminar!')
    reset()
  }
  // eslint-disable-next-line
  async function Cadastro (submit: any) {
    setLoading(true)
    // eslint-disable-next-line
    const responser = api.post('ferramenta', {
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
    const responser = api.get('ferramenta',
    ).then((response) => {
      console.log(response.data.rows)
      if (response.statusText === 'OK') {
        setFerramentas(response.data.rows)
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
    setFerramentas(ferramentas =>
      ferramentas.filter(ferramenta => ferramenta.id !== id),
    )
  }

  return (
    <>
      <Sidebar />
      <Navbar />
      <S.ContainerConfirmation>
        <h2>Ferramentas</h2>
        <button onClick={() => setIsOpen(true)}><FiPlus /></button>

        <S.GridConfirmation>
          <span>Código de ferramenta</span>
          <span>Máquina</span>
          <span>Diâmetro</span>
          <span>Capacidade de carga</span>
          <span>Descrição</span>
        </S.GridConfirmation>

        <ul>
          {ferramentas.length > 0
            ? ferramentas.map((ferramenta) =>
              <li key={ferramenta.id}>
                <S.GridConfirmation>
                  <span>
                    {ferramenta}
                  </span>
                  <DeleteButton
                    onDelete={() => handleDelete(ferramenta.id)}
                  />
                </S.GridConfirmation>
              </li>,
            )
            : 'Nenhuma ferramenta cadastrada!'}
        </ul>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <S.Container>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                label='Código da ferramenta'
                errorMessage={errors.codigo?.message}
                {...register('codigo', {
                  required: {
                    value: true,
                    message: 'Todos os campos são obrigatórios',
                  },
                })}
              />

              <TextField
                label='Brocas'
                placeholder='pá, broca tricônica, rock bit'
                {...register('brocas', {
                  required: true,
                })}
              />

              <TextField
                label='Máquina'
                {...register('maquinaId', {
                  required: true,
                })}
              />

              <TextField
                label='Motor de fundo'
                {...register('motorFundo', {
                  required: true,
                })}
              />

              <TextField
                label='Diâmetro'
                {...register('diametro', {
                  required: true,
                })}
              />

              <TextField
                label='Alargadores'
                placeholder='Cortadores, compactadores, limpeza'
                {...register('alargadores', {
                  required: true,
                })}
              />

              <TextField
                label='Capacidade de carga'
                {...register('capacidadeCarga', {
                  required: true,
                })}
              />

              <TextField
                label='Swivel'
                {...register('swivel', {
                  required: true,
                })}
              />

              <TextField
                label='Descrição'
                {...register('descricao', {
                  required: true,
                })}
              />

              <TextField
                label='Porta Sonda'
                {...register('portaSonda', {
                  required: true,
                })}
              />

              <TextField
                label='Pulling Head'
                {...register('pullingHead', {
                  required: true,
                })}
              />

              <TextField
                label='Fusilink'
                {...register('fusilink', {
                  required: true,
                })}
              />

              <TextField
                label='Componentes'
                placeholder='Coluna de perfuraçãoo Conexões e Adaptadores'
                {...register('components', {
                  required: true,
                })}
              />

              <TextField
                label='Haste inicial'
                {...register('hasteInicial', {
                  required: true,
                })}
              />

              <TextField
                label='Luva'
                {...register('luva', {
                  required: true,
                })}
              />

              <TextField
                label='Mordentes'
                {...register('mordentes', {
                  required: true,
                })}
              />

              <TextField
                label='Flexobarra'
                {...register('flexobarra', {
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
