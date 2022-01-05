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

type FormData = {
  codigo: string;
  drills: string;
  machine: string;
  bottomEngine: string;
  diameter: string;
  reamers: string;
  capacidadeCarga: string;
  swivel: string;
  descricao: string;
  probeHolder: string;
  pullingHead: string;
  fusilink: string;
  components: string;
  initialStem: string;
  glove: string;
  cheeks: string;
  flexbar: string;
}

export function Tools () {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false);
  const [ferramentas, setFerramentas] = useState<any[]>([]);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  function onSubmit (data: FormData) {
    console.log(data)
    toast.warning("Falta terminar!")
    reset()
  }
  async function Cadastro(submit: any) {
    setLoading(true)
    let responser = api.post(`ferramenta`, {
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
    let responser = api.get('ferramenta',
    ).then((response) => {
      console.log(response.data.rows);
      if (response.statusText === "OK") {
        setFerramentas(response.data.rows)
        setLoading(false)
      }
    }).catch(res => {
      console.log(res.response.data);
      toast.error(res.response.data);
      setLoading(false)
    })
  }
  useEffect(() => {
    setLoading(true)
    loadDados()
  }, []);
  
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
                {...register('drills', {
                  required: true,
                })}
              />

              <TextField
                label='Máquina'
                {...register('machine', {
                  required: true,
                })}
              />

              <TextField
                label='Motor de fundo'
                {...register('bottomEngine', {
                  required: true,
                })}
              />

              <TextField
                label='Diâmetro'
                {...register('diameter', {
                  required: true,
                })}
              />

              <TextField
                label='Alargadores'
                placeholder='Cortadores, compactadores, limpeza'
                {...register('reamers', {
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
                {...register('probeHolder', {
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
                {...register('initialStem', {
                  required: true,
                })}
              />

              <TextField
                label='Luva'
                {...register('glove', {
                  required: true,
                })}
              />

              <TextField
                label='Mordentes'
                {...register('cheeks', {
                  required: true,
                })}
              />

              <TextField
                label='Flexobarra'
                {...register('flexbar', {
                  required: true,
                })}
              />
              <button type='submit'>{loading ? <img width="40px" style={{ margin: 'auto' }} height="" src={'https://contribua.org/mb-static/images/loading.gif'} alt="Loading" /> : 'Salvar'}</button>
            </S.Form>
          </S.Container>
        </Modal>
      </S.ContainerConfirmation>
    </>
  )
}
