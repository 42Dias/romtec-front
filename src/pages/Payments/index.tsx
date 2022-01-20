import * as S from './styled'
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
import { FaEdit } from 'react-icons/fa'
import MaskedInput from '../../ui/Components/InputMask/InputMask'

type FormData = {
  ano: Date,
  mes: Date,
  dataPagamento: Date,
  valorPago: string,
}

export default function
Payments () {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenUpdate, setIsOpenUpdate] = useState(false)
  const [loading, setLoading] = useState(false)
  const [pagamentos, setPagamentos] = useState<any[]>([])
  const [idPagamento, setIdPagamento] = useState('')
  const [ano, setAno] = useState('')
  const [mes, setMes] = useState('')
  const [dataPagamento, setDataPagamento] = useState('')
  const [valorPago, setValorPago] = useState('')
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<FormData>()

  function onSubmit (data: FormData) {
    console.log(data)
    Cadastro(data)
  }
  async function Cadastro (submit: any) {
    setLoading(true)
    // eslint-disable-next-line
    const responser = api.post('pagamento', {
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
      setLoading(false)
    })
  }

  async function loadDados () {
    setLoading(true)
    // eslint-disable-next-line
    const responser = api.get('pagamento',
    ).then((response) => {
      console.log(response.data.rows)
      if (response.statusText === 'OK') {
        setPagamentos(response.data.rows)
        setLoading(false)
      }
    }).catch(res => {
      console.log(res.response.data)
      toast.error(res.response.data)
      setLoading(false)
    })
  }
  async function deleteDados (id: string) {
    setLoading(true)
    // eslint-disable-next-line
    const responser = api.delete('pagamento/' + id,
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
  function update (dados: any) {
    console.log('dados')
    console.log(dados)
    setIdPagamento(dados.id)
    setAno(dados.ano)
    setMes(dados.mes)
    setDataPagamento(dados.dataPagamento)
    setValorPago(dados.valorPago)
    setIsOpenUpdate(true)
  }
  async function updateDados () {
    setLoading(true)
    // eslint-disable-next-line
    const responser = api.put('pagamento/' + idPagamento, {
      data: {
        ano: ano,
        mes: mes,
        dataPagamento: dataPagamento,
        valorPago: valorPago,
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
        <h2>Pagamentos</h2>
        <button onClick={() => setIsOpen(true)}><FiPlus /></button>

        <S.GridConfirmation>
          <span>Data de pagamento</span>
          <span>Valor de pagamento</span>
        </S.GridConfirmation>

        <ul>
          {pagamentos.length > 0
            ? pagamentos.map((pagamento) =>
              <li key={pagamento.id}>
                <S.GridConfirmation>
                  <span>{pagamento.dataPagamento.split('T')[0]}</span>
                  <span>{pagamento.valorPago}</span>
                  <DeleteButton
                    onDelete={() => deleteDados(pagamento.id)}
                  />
                  <button
                    onClick={() => update(pagamento)}
                    style={{ background: 'none', color: 'yellow' }}
                    title='Editar?'
                  >
                    <FaEdit size={20} />
                  </button>
                </S.GridConfirmation>
              </li>,
            )
            : <p>🤔 Nenhum pagamento cadastrado</p>}
        </ul>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <S.Container>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                label='Data de pagamento'
                errorMessage={errors.dataPagamento?.message}
                type='date'
                id='dataPagamento'
                {...register('dataPagamento', {
                  required: {
                    value: true,
                    message: 'Todos os campos são obrigatórios',
                  },
                })}
              />

              <fieldset>
                <label htmlFor='valorPago'>Valor de pagamento</label>
                <MaskedInput
                  onChangeUnMask={(value) => setValue('valorPago', value)}
                  mask='R$ 9999999'
                  id='valorPago'
                  {...register('valorPago', {
                    required: true,
                  })}
                />
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

        <Modal isOpen={isOpenUpdate} onClose={() => setIsOpenUpdate(false)}>
          <S.Container>
            <S.Div>
              <TextField
                label='Data de pagamento'
                type='date'
                id='dataPagamento'
                value={dataPagamento}
                onChange={(text) => setDataPagamento(text.target.value)}
              />

              <TextField
                label='Valor de pagamento'
                type='number'
                id='valorPago'
                value={valorPago}
                onChange={(text) => setValorPago(text.target.value)}
              />

              <button onClick={() => updateDados()}>
                {loading
                  ? <img
                      width='40px' style={{ margin: 'auto' }}
                      height=''
                      src='https://contribua.org/mb-static/images/loading.gif'
                      alt='Loading'
                    />
                  : 'Salvar'}
              </button>
            </S.Div>
          </S.Container>
        </Modal>
      </S.ContainerConfirmation>
    </>
  )
}
