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
import Load from './../../assets/load.gif'
import * as S from './styled'
import EditButton from '../../ui/Components/EditButton/EditButton'
import { FaEdit } from 'react-icons/fa'
import MaskedInput from '../../ui/Components/InputMask/InputMask'

type FormData = {
  nome: string,
  valor: string,
  periodo: string,
}

export default function
Plans () {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenUpdate, setIsOpenUpdate] = useState(false)
  const [loading, setLoading] = useState(false)
  const [planos, setPlanos] = useState<any[]>([])
  const [idPlanos, setIdPlanos] = useState('')
  const [nome, setNome] = useState('')
  const [valor, setValor] = useState('')
  const [periodo, setPeriodo] = useState('')
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<FormData>()

  function onSubmit (data: FormData) {
    console.log(data)
    Cadastro(data)
  }
  async function Cadastro (submit: any) {
    setLoading(true)
    // eslint-disable-next-line
    const responser = api.post('plano', {
      data: submit,
    }).then((response) => {
      console.log(response)
      if (response.statusText === 'OK') {
        toast.success('Cadastrado com sucesso!')
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
      //console.log(res.response.data)
      toast.error(res.response.data)
      setLoading(false)
    })
  }
  async function deleteDados (id: string) {
    setLoading(true)
    toast.info('Deletando...')
    // eslint-disable-next-line
    const responser = api.delete('plano/' + id,
    ).then((response) => {
      if (response.statusText === 'OK') {
        loadDados()
        setLoading(false)
      }
    }).catch(res => {
      //console.log(res.response.data)
      toast.error(res.response.data)
      setLoading(false)
    })
  }
  function update (dados: any) {
    console.log('dados')
    console.log(dados)
    setIdPlanos(dados.id)
    setNome(dados.nome)
    setNome(dados.nome)
    setValor(dados.valor)
    setPeriodo(dados.periodo)
    setIsOpenUpdate(true)
  }
  async function updateDados () {
    setLoading(true)
    const responser = api.put('plano/' + idPlanos, {
      data: {
        nome: nome,
        valor: valor,
        periodo: periodo,
      },
    },
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
                    onDelete={() => deleteDados(plano.id)}
                  />
                  <button
                    // onChange={onEdit}
                    onClick={() => update(plano)}
                    style={{ background: 'none', color: 'yellow' }}
                    title='Editar?'
                  >
                    <FaEdit size={20} />
                  </button>
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
                id='nome'
                {...register('nome', {
                  required: {
                    value: true,
                    message: 'Todos os campos são obrigatórios',
                  },
                })}
              />

              <fieldset className='valorPago'>
                <label htmlFor='valor'>Valor</label>
                <MaskedInput
                  type='tel'
                  onChangeUnMask={(value) => setValue('valor', value)}
                  mask='R$ 9999999'
                  id='valor'
                  {...register('valor', {
                    required: true,
                  })}
                />
              </fieldset>

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
                      src={Load}
                      alt='Loading'
                    />
                  : 'Salvar'}
              </button>
            </S.Form>
          </S.Container>
        </Modal>

        <Modal isOpen={isOpenUpdate} onClose={() => setIsOpenUpdate(false)}>
          <S.Container>
            <S.Form>
              <TextField
                label='Nome'
                value={nome}
                onChange={(text) => setNome(text.target.value)}
              />

              <TextField
                label='Valor'
                type='number'
                value={valor}
                onChange={(text) => setValor(text.target.value)}
              />

              <fieldset>
                <label htmlFor='periodo'>Periodo</label>
                <select
                  id='periodo' value={periodo}
                  onChange={(text) => setPeriodo(text.target.value)}
                >
                  <option value=''>Select...</option>
                  <option value='Mensal'>Mensal</option>
                  <option value='Semestral'>Semestral</option>
                  <option value='Anual'>Anual</option>
                </select>
              </fieldset>

              <button onClick={() => updateDados()}>
                {loading
                  ? <img
                      width='40px'
                      style={{ margin: 'auto' }}
                      height=''
                      src={Load}
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
