import DeleteButton from '../../ui/Components/DeleteButton/DeleteButton'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'
import { FiPlus, FiEdit } from 'react-icons/fi'

import { TextField } from '../../ui/Components/TextField'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { api } from '../../services/api'
import { toast } from 'react-toastify'
import Load from './../../assets/load.gif'
import * as S from './styled'
import EditButton from '../../ui/Components/EditButton/EditButton'

import { deepStrictEqual } from 'assert'
import { FaEdit } from 'react-icons/fa'

type FormData = {
  id: string;
  identificacaoRede: string;
  tipoRede: string;
  diametroRede: string;
  espessuaraParede: string;
  distanciaMinima: string;
  proprietario: string;
  materialRede: string;
}

export default function
  RedeTypes() {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenUpdate, setIsOpenUpdate] = useState(false)
  const [loading, setLoading] = useState(false)
  const [redeTypes, setRedeTypes] = useState<any[]>([])
  const [redeTypesUp, setRedeTypesUp] = useState<any>()
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()
  const [idTipoRede, setId] = useState('')
  const [tipoDeRede, setTipoDeRede] = useState('')
  const [identificacao, setidentificacao] = useState('')
  const [materialRede, setmaterialRede] = useState('')
  const [espessuaraParede, setespessuaraParede] = useState('')
  const [distanciaMinima, setdistanciaMinima] = useState('')
  const [proprietarioRede, setproprietarioRede] = useState('')
  const [diametroRede, setDiametroRede] = useState('')

  function onSubmit(data: FormData) {
    console.log(data)
    createNewFile(data)
    reset()
  }

  async function createNewFile(submit: any) {
    setLoading(true)
    // eslint-disable-next-line
    const responser = api.post('tipoRede', {
      data: submit,
    }).then((response) => {
      if (response.statusText === 'OK') {
        toast.success('Tipo de rede cadastrado com sucesso!')
        setLoading(false)
        setIsOpen(false)
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

  async function loadDados() {
    setLoading(true)
    // eslint-disable-next-line
    const responser = api.get('tipoRede',
    ).then((response) => {
      if (response.statusText === 'OK') {
        setRedeTypes(response.data.rows)
        setLoading(false)
      }
    }).catch(res => {
      //console.log(res.response.data)
      toast.error(res.response.data)
      setLoading(false)
    })
  }
  async function deleteDados(id: string) {
    setLoading(true)
    // eslint-disable-next-line
    const responser = api.delete('tipoRede/' + id,
    ).then((response) => {
      if (response.statusText === 'OK') {
        loadDados()
        setLoading(false)
        toast.success("Excluido com sucesso!")
      }
    }).catch(res => {
      //console.log(res.response.data)
      toast.error(res.response.data)
      setLoading(false)
    })
  }
  function update(tipoRede: any) {
    console.log('tipoRede')
    console.log(tipoRede)
    setRedeTypesUp(tipoRede)
    setId(tipoRede.id)
    setidentificacao(tipoRede.identificacaoRede)
    setdistanciaMinima(tipoRede.distanciaMinima)
    setproprietarioRede(tipoRede.proprietario)
    setmaterialRede(tipoRede.materialRede)
    setTipoDeRede(tipoRede.tipoRedeR)
    setespessuaraParede(tipoRede.espessuaraParede)
    setDiametroRede(tipoRede.diametroRede)
    console.log(idTipoRede)
    setIsOpenUpdate(true)
  }
  async function updateDados() {
    setLoading(true)
    console.log('idTipoRede')
    console.log(idTipoRede)
    console.log(redeTypesUp)
    const responser = api.put('tipoRede/' + redeTypesUp.id, {
      data: {
        id: idTipoRede,
        identificacaoRede: identificacao,
        distanciaMinima: distanciaMinima,
        proprietario: proprietarioRede,
        materialRede: materialRede,
        espessuaraParede: espessuaraParede,
        tipoRedeR: tipoDeRede,
        diametroRede: diametroRede,
      },
    },
    ).then((response) => {
      if (response.statusText === 'OK') {
        loadDados()
        setIsOpenUpdate(false)
        setLoading(false)
      }
    })
  }
  useEffect(() => {
    console.log(redeTypesUp)
    setLoading(true)
    loadDados()
  }, [])


  return (
    <>
      <Sidebar />
      <Navbar />
      <S.ContainerConfirmation>
        <h2>Tipos de rede</h2>
        <button onClick={() => setIsOpen(true)}><FiPlus /></button>

        <S.GridConfirmation>
          <span>Identificação</span>
          <span>Tipo de rede </span>
          <span>Diâmetro da rede (mm)</span>
          <span>Material da Rede</span>
          <span>Espessura de parede (mm)</span>
          <span>Distância mínima (m)</span>
          <span>Proprietário da rede</span>
        </S.GridConfirmation>

        <ul>
          {redeTypes.length > 0
            ? redeTypes.map((redeType) =>
              <li key={redeType.id}>
                <S.GridConfirmation>
                  <span>
                    {redeType.identificacaoRede}
                  </span>
                  <span>
                    {redeType.tipoRedeR}
                  </span>
                  <span>
                    {redeType.diametroRede}
                  </span>
                  <span>
                    {redeType.materialRede}
                  </span>
                  <span>
                    {redeType.espessuaraParede}
                  </span>
                  <span>
                    {redeType.distanciaMinima}
                  </span>
                  <span>
                    {redeType.proprietario}
                  </span>

                  <DeleteButton
                    onDelete={() => deleteDados(redeType.id)}
                  />
                  {/* <EditButton onEdit={() => updateDados(redeType)} /> */}
                  <button
                    // onChange={onEdit}
                    onClick={() => update(redeType)}
                    style={{ background: 'none', color: 'yellow' }}
                    title='Editar?'
                  >
                    <FaEdit size={20} />
                  </button>
                </S.GridConfirmation>
              </li>,
            )
            : <p>🤔 Nenhum tipo de solo cadastrado</p>}
        </ul>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <S.Container>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                label='Identificação'
                errorMessage={errors.identificacaoRede?.message}
                {...register('identificacaoRede', {
                  required: {
                    value: true,
                    message: 'Todos os campos são obrigatórios',
                  },
                })}
              />
              <div>
                <label htmlFor=''>Tipos de rede</label>
                <div className='selectPlus' style={{ marginTop: '-2px' }}>
                  <select
                    style={{ backgroundColor: '#252332', color: 'white' }}
                    value={tipoDeRede}
                    onChange={(text) => { setTipoDeRede(text.target.value); }}//loadDados('etapas')
                  >
                    <option value=''>Selecione...</option>
                    <option value='Água Potável'>Água Potável</option>
                    <option value='Esgoto'>Esgoto</option>
                    <option value='Águas Pluviais'>Águas Pluviais</option>
                    <option value='Elétrica'>Elétrica</option>
                    <option value='Telecomunicação'>Telecomunicação</option>
                    <option value='Fibra Óptica'>Fibra Óptica</option>
                    <option value='Semafórica'>Semafórica</option>
                    <option value='Petrobrás'>Petrobrás</option>
                    <option value='Gasoduto'>Gasoduto</option>
                    <option value='Outro'>Outro</option>
                  </select>
                </div>
              </div>
              <TextField
                label='Diâmetro da rede (mm)'
                type='number'
                step=".01"
                {...register('diametroRede', {
                  required: true,
                })}
              />

              <TextField
                label='Material da Rede'
                {...register('materialRede', {
                  required: true,
                })}
              />

              <TextField
                label='Espessura de parede (mm)'
                type='number'
                step=".01"
                {...register('espessuaraParede', {
                  required: true,
                })}
              />

              <TextField
                label='Distância mínima (m)'
                type='number'
                step=".01"
                {...register('distanciaMinima', {
                  required: true,
                })}
              />

              <TextField
                label='Proprietário da rede'
                {...register('proprietario', {
                  required: true,
                })}
              />


              <button type='submit' style={{ marginTop: '40px' }}>
                {loading
                  ? <img
                    width='40px'
                    style={{ margin: 'auto' }}
                    height='' src={Load}
                    alt='Loading'
                  />
                  : 'Salvar'}
              </button>
            </S.Form>
          </S.Container>
        </Modal>

        <Modal 
          isOpen={isOpenUpdate}
          onClose={() => setIsOpenUpdate(false)}
        >
          <S.Container>
            <h3>Alterar tipo de rede</h3>
            <br />
            <S.Div >

            <TextField
                type='text'
                label='Identificação'
                value={identificacao}
                onChange={(text) => setidentificacao(text.target.value)}
              />

              <div>
                <label htmlFor=''>Tipos de rede</label>
                <div className='selectPlus' style={{ marginTop: '-2px' }}>
                  <select
                    style={{ backgroundColor: '#252332', color: 'white' }}
                    value={tipoDeRede}
                    onChange={(text) => { setTipoDeRede(text.target.value); }}//loadDados('etapas')
                  >
                    <option value=''>Selecione...</option>
                    <option value='Água Potável'>Água Potável</option>
                    <option value='Esgoto'>Esgoto</option>
                    <option value='Águas Pluviais'>Águas Pluviais</option>
                    <option value='Elétrica'>Elétrica</option>
                    <option value='Telecomunicação'>Telecomunicação</option>
                    <option value='Fibra Óptica'>Fibra Óptica</option>
                    <option value='Semafórica'>Semafórica</option>
                    <option value='Petrobrás'>Petrobrás</option>
                    <option value='Gasoduto'>Gasoduto</option>
                    <option value='Outro'>Outro</option>
                  </select>
                </div>
              </div>
              
              <TextField
                type='number'
                step=".01"
                label='Diâmetro da rede (mm)'
                value={diametroRede}
                onChange={(text) => setDiametroRede(text.target.value)}
              />

              <TextField
                type='text'
                label='Material da Rede'
                value={materialRede}
                onChange={(text) => setmaterialRede(text.target.value)}
              />

              <TextField
                label='Espessura de parede (mm)'
                type='number'
                step=".01"
                value={espessuaraParede}
                onChange={(text) => setespessuaraParede(text.target.value)}
              />

              <TextField
                label='Distância mínima (m)'
                type='number'
                step=".01"
                value={distanciaMinima}
                onChange={(text) => setdistanciaMinima(text.target.value)}
              />

              <TextField
                label='Proprietário da rede'
                type='text'
                value={proprietarioRede}
                onChange={(text) => setproprietarioRede(text.target.value)}
              />

              <button onClick={() => updateDados()}>{loading ? <img width='40px' style={{ margin: 'auto' }} height='' src={Load} alt='Loading' /> : 'Salvar'}</button>
            </S.Div>
          </S.Container>
        </Modal>
      </S.ContainerConfirmation>
    </>
  )
}
