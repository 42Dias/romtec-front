import * as S from './Payments.styled'
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
  ano: Date,
  mes: Date,
  dataPagamento: Date,
  valorPago: string,
}

export function Payments () {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [pagamentos, setPagamentos] = useState<any[]>([])
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  function onSubmit (data: FormData) {
    console.log(data)
    Cadastro(data)
    reset()
  }
  async function Cadastro (submit: any) {
    setLoading(true)
    // eslint-disable-next-line
    const responser = api.post('pagamento', {
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

  function handleDelete (id: string) {
    setPagamentos(pagamentos =>
      pagamentos.filter(pagamento => pagamento.id !== id),
    )
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
          {/* <span>Mês de pagamento</span>
          <span>Dia de pagamento</span> */}
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
                    onDelete={() => handleDelete(pagamento.id)}
                  />
                </S.GridConfirmation>
              </li>,
            )
            : <p>Nenhum pagamento cadastrado</p>}
        </ul>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <S.Container>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                label=/* 'Ano de pagamento' */'Data de pagamento'
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

              {/* <TextField
                label='Mês de pagamento'
                type='date'
                id='mes'
                {...register('mes', {
                  required: true,
                })}
              />

              <TextField
                label='Dia de pagamento'
                type='date'
                id='payday'
                {...register('payday', {
                  required: true,
                })}
              /> */}

              <TextField
                label='Valor de pagamento'
                type='number'
                id='valorPago'
                {...register('valorPago', {
                  required: true,
                })}
              />

              <button type='submit'>{loading ? <img width='40px' style={{ margin: 'auto' }} height='' src='https://contribua.org/mb-static/images/loading.gif' alt='Loading' /> : 'Salvar'}</button>
            </S.Form>
          </S.Container>
          {/* eslint-disable-next-line */}
        </Modal>
      </S.ContainerConfirmation>
    </>
  )
}
