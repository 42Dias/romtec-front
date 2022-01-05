import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'
import { FiPlus } from 'react-icons/fi'
import DeleteButton from '../../ui/Components/DeleteButton/DeleteButton'

import { TextField } from '../../ui/Components/TextField'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { api } from '../../services/api'
import { toast } from 'react-toastify'

import * as S from './Soiltypes.styled'

type FormData = {
  id: string;
  soilSpecification: string;
  dryResistance: string;
  description: string;
  reactionDilation: string;
  plasticHardness: string;
  plasticityIndex: string;
}

export function SoilTypes () {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [soilTypes, setSoilTypes] = useState<any[]>([])
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  function onSubmit (data: FormData) {
    console.log(data)
    createNewFile(data)
    reset()
  }

  async function createNewFile (submit: any) {
    setLoading(true)
    const responser = api.post('tipo-solo', {
      data: submit,
    }).then((response) => {
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
      setLoading(false)
    })
  }

  async function loadDados () {
    setLoading(true)
    const responser = api.get('tipo-solo',
    ).then((response) => {
      if (response.statusText === 'OK') {
        setSoilTypes(response.data.rows)
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
    setSoilTypes(soilTypes =>
      soilTypes.filter(soilType => soilType.id !== id),
    )
  }

  return (
    <>
      <Sidebar />
      <Navbar />
      <S.ContainerConfirmation>
        <h2>Tipos de solo</h2>
        <button onClick={() => setIsOpen(true)}><FiPlus /></button>

        <S.GridConfirmation>
          <span>Especificação do solo</span>
          <span>Resistencia Seca</span>
          <span>Descrição</span>
          <span>Reação a dilatação</span>
          <span>Dureza Plástica</span>
          <span>Indice de plasticidade</span>
        </S.GridConfirmation>

        <ul>
          {soilTypes.map((soilType) =>
            <li key={soilType.id}>
              <S.GridConfirmation>
                <span>
                  {soilType.especificacaoSolo}
                </span>
                <span>
                  {soilType.resistenciaSeca}
                </span>
                <span>
                  {soilType.descricao}
                </span>
                <span>
                  {soilType.reacaoDilatacao}
                </span>
                <span>
                  {soilType.durezaPlastica}
                </span>
                <span>
                  {soilType.indicePlasticidade}
                </span>
                <DeleteButton
                  onDelete={() => handleDelete(soilType.id)}
                />
              </S.GridConfirmation>
            </li>,
          )}
        </ul>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <S.Container>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                label='Especificação do solo'
                errorMessage={errors.soilSpecification?.message}
                {...register('soilSpecification', {
                  required: {
                    value: true,
                    message: 'Todos os campos são obrigatórios',
                  },
                })}
              />

              <TextField
                label='Resistência seca'
                {...register('dryResistance', {
                  required: true,
                })}
              />

              <TextField
                label='Descrição'
                {...register('description', {
                  required: true,
                })}
              />

              <TextField
                label='Reação a dilatação'
                {...register('reactionDilation', {
                  required: true,
                })}
              />

              <TextField
                label='Dureza plastica'
                {...register('plasticHardness', {
                  required: true,
                })}
              />

              <TextField
                label='Índice de plasticidade'
                {...register('plasticityIndex', {
                  required: true,
                })}
              />
              <button type='submit'>
                {loading
                  ? <img width='40px' style={{ margin: 'auto' }} height='' src='https://contribua.org/mb-static/images/loading.gif' alt='Loading' />
                  : 'Salvar'}
              </button>
            </S.Form>
          </S.Container>
        </Modal>
      </S.ContainerConfirmation>
    </>
  )
}
