
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

import * as S from './styled'
import EditButton from '../../ui/Components/EditButton/EditButton'

type FormData = {
  fabricante: string;
  modelo: string;
  hourmeter: string;
  lastOverhaul: Date;
  nextOverhaul: Date;
  reviewUpload: string;
  revisionSubtypes: string;
  tracao: string;
  compressao: string;
  torque: string;
  rotacaoSpindle: string;
  velocidadeTracao: string;
  velocidadeCompressa: string;
  diametroFuroPiloto: string;
  anguloEntrada: string;
  diametroNominal: string;
  raioCurvatura: string;
  comprimento: string;
  vazao: string;
  pressao: string;
  alergamentoMaximo: string;
}

export default function
 DrillingMachine () {
  const [isOpen, setIsOpen] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()
  const [loading, setLoading] = useState(false)
  const [maqPerfuratriz, setMaqPerfuratriz] = useState<any[]>([])

  function onSubmit (data: FormData) {
    console.log(data)
    Cadastro(data)
    reset()
  }

  async function Cadastro (submit: any) {
    setLoading(true)
    // eslint-disable-next-line
    const responser = api.post('maquina-perfuratis', {
      data: submit,
    }).then((response) => {
      console.log(response)
      if (response.statusText === 'OK') {
        toast.success('Maquina perfuratriz cadastrada com sucesso!')
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
      // eslint-disable-next-line
      toast.error(res.response.data);
      setLoading(false)
    })
  }

  async function loadDados () {
    setLoading(true)
    // eslint-disable-next-line
    const responser = api.get('maquina-perfuratis',
    ).then((response) => {
      console.log(response.data.rows)
      if (response.statusText === 'OK') {
        setMaqPerfuratriz(response.data.rows)
        setLoading(false)
      }
    }).catch(res => {
      console.log(res.response.data)
      toast.error(res.response.data)
      setLoading(false)
    })
  }
  // eslint-disable-next-line
  async function deleteDados(id: string) {
    setLoading(true)
    // eslint-disable-next-line
    const responser = api.delete('maquina-perfuratis/' + id
    ).then((response) => {
      if (response.statusText === 'OK') {
        loadDados()
        setLoading(false)
      }
    }).catch(res => {
      console.log(res.response)
      toast.error(res.response)
      setLoading(false)
    })
  }
  useEffect(() => {
    setLoading(true)
    loadDados()
  }, [])

  function handleDelete (id: string) {
    setMaqPerfuratriz(maqPerfuratrizs =>
      maqPerfuratrizs.filter(maqPerfuratriz => maqPerfuratriz.id !== id),
    )
  }

  const handleUpdate = (id: string) => {
    setMaqPerfuratriz(maqPerfuratrizs => maqPerfuratrizs.map(maqPerfuratriz => {
      if (maqPerfuratriz.id === id) {
        return {
          ...maqPerfuratriz,
        }
      }

      return maqPerfuratriz
    }))
  }

  return (
    <>
      <Sidebar />
      <Navbar />
      <S.ContainerConfirmation>
        <h2>Máquina Perfuratriz</h2>
        <button onClick={() => setIsOpen(true)}><FiPlus /></button>

        <S.GridConfirmation>
          <span>Modelo</span>
          <span>Fabricante</span>
          <span>Tração(KN)</span>
          <span>Torque(N.m)</span>
          <span>Alargamento máximo</span>
        </S.GridConfirmation>

        <ul>
          {maqPerfuratriz.length > 0
            ? maqPerfuratriz.map((maquinas) =>
              <li key={maquinas.id}>
                <S.GridConfirmation>
                  <span>{maquinas.modelo}</span>
                  <span>{maquinas.fabricante}</span>
                  <span>{maquinas.tracao}</span>
                  <span>{maquinas.torque}</span>
                  <span>{maquinas.alergamentoMaximo}</span>
                  <DeleteButton
                    onDelete={() => handleDelete(maquinas.id)}
                  />
                  <EditButton
                    onEdit={() => handleUpdate(maquinas.id)}
                  />
                </S.GridConfirmation>
              </li>,
            )
            : <p>🤔 Nenhuma máquina cadastrada</p>}
        </ul>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <S.Container>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                label='Fabricante'
                errorMessage={errors.fabricante?.message}
                {...register('fabricante', {
                  required: {
                    value: true,
                    message: 'Todos os campos são obrigatórios',
                  },
                })}
              />

              <TextField
                label='Nome da Máquina Perfuratriz'
                {...register('modelo', {
                  required: true,
                })}
              />

              <TextField
                label='Horimetro'
                {...register('hourmeter', {
                  required: true,
                })}
              />

              <TextField
                label='Última revisão/manutenção'
                {...register('lastOverhaul', {
                  required: true,
                })}
              />

              <TextField
                label='Próxima revisão/manutenção'
                {...register('nextOverhaul', {
                  required: true,
                })}
              />

              <TextField
                label='Upload da revisão'
                {...register('reviewUpload', {
                  required: true,
                })}
              />

              <S.ContentForm>
                <fieldset>
                  <label htmlFor='revisionSubtypes'>Subtipos de revisão</label>
                  <select id='revisionSubtypes' {...register('revisionSubtypes')}>
                    <option value=''>Select...</option>
                    <option value='Navegador'>Preventiva</option>
                    <option value='Operador'>Preditiva</option>
                    <option value='Outro'>Corretiva</option>
                  </select>
                </fieldset>
              </S.ContentForm>

              <TextField
                label='Tração (ton)'
                {...register('tracao', {
                  required: true,
                })}
              />

              <TextField
                label='Compressão (KN)'
                {...register('compressao', {
                  required: true,
                })}
              />

              <TextField
                label='Torque'
                {...register('torque', {
                  required: true,
                })}
              />

              <TextField
                label='Rotação Spindle (RPM)'
                {...register('rotacaoSpindle', {
                  required: true,
                })}
              />

              <TextField
                label='Velocidade Tração (m/min)'
                {...register('velocidadeTracao', {
                  required: true,
                })}
              />

              <TextField
                label='Velocidade Compressão (m/min)'
                {...register('velocidadeCompressa', {
                  required: true,
                })}
              />

              <TextField
                label='Diâmetro furo piloto (pol)'
                {...register('diametroFuroPiloto', {
                  required: true,
                })}
              />

              <TextField
                label='Ângulo de entrada'
                {...register('anguloEntrada', {
                  required: true,
                })}
              />

              <TextField
                label='Diâmetro nominal (mm)'
                {...register('diametroNominal', {
                  required: true,
                })}
              />

              <TextField
                label='Raio de curvatura (m)'
                {...register('raioCurvatura', {
                  required: true,
                })}
              />

              <TextField
                label='Comprimento (m)'
                {...register('comprimento', {
                  required: true,
                })}
              />

              <TextField
                label='Vazão (L/min)'
                {...register('vazao', {
                  required: true,
                })}
              />

              <TextField
                label='Pressão (psi)'
                {...register('pressao', {
                  required: true,
                })}
              />

              <TextField
                label='Alargamento máximo (pol)'
                {...register('alergamentoMaximo', {
                  required: true,
                })}
              />

              <button
                type='submit'
              >{loading
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
