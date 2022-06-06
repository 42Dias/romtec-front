
import DeleteButton from '../../ui/Components/DeleteButton/DeleteButton'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'

import { TextField } from '../../ui/Components/TextField'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { api } from '../../services/api'
import { FiPlus } from 'react-icons/fi'
import { FaEdit } from 'react-icons/fa'
import { toast } from 'react-toastify'
import Load from './../../assets/load.gif'
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
  DrillingMachine() {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenUpdate, setIsOpenUpdate] = useState(false)
  const [loading, setLoading] = useState(false)
  const [idMaquina, setMaquina] = useState('')
  const [fabricante, setFabricante] = useState('')
  const [modelo, setModelo] = useState('')
  const [hourmeter, setHourmeter] = useState('')
  const [lastOverhaul, setLastOverhaul] = useState('')
  const [nextOverhaul, setNextOverhaul] = useState('')
  const [reviewUpload, setReviewUpload] = useState('')
  const [revisionSubtypes, setRevisionSubtypes] = useState('')
  const [tracao, setTracao] = useState('')
  const [compressao, setcompressao] = useState('')
  const [torque, setTorque] = useState('')
  const [rotacaoSpindle, setRotacaoSpindle] = useState('')
  const [velocidadeTracao, setVelocidadeTracao] = useState('')
  const [velocidadeCompressa, setVelocidadeCompressa] = useState('')
  const [diametroFuroPiloto, setDiametroFuroPiloto] = useState('')
  const [anguloEntrada, setVAnguloEntrada] = useState('')
  const [diametroNominal, setDiametroNominal] = useState('')
  const [raioCurvatura, setRaioCurvatura] = useState('')
  const [comprimento, setcomprimento] = useState('')
  const [vazao, setVazao] = useState('')
  const [pressao, setPressao] = useState('')
  const [alergamentoMaximo, setAlergamentoMaximo] = useState('')
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()
  const [maqPerfuratriz, setMaqPerfuratriz] = useState<any[]>([])

  function onSubmit(data: FormData) {
    console.log(data)
    Cadastro(data)
    //reset()
  }

  async function Cadastro(submit: any) {
    setLoading(true)
    // eslint-disable-next-line
    const responser = api.post('maquina-perfuratis', {
      data: submit,
    }).then((response) => {
      console.log(response)
      if (response.statusText === 'OK') {
        toast.success('Cadastrada com sucesso!')
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
      // eslint-disable-next-line
      toast.error(res.response.data);
      setLoading(false)
    })
  }

  async function loadDados() {
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
      //console.log(res.response.data)
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
  function update(dados: any) {
    console.log('dados')
    console.log(dados)
    setMaquina(dados.id)
    setFabricante(dados.fabricante)
    setModelo(dados.modelo)
    setHourmeter(dados.hourmeter)
    setLastOverhaul(dados.lastOverhaul)
    setNextOverhaul(dados.nextOverhaul)
    setReviewUpload(dados.reviewUpload)
    setRevisionSubtypes(dados.revisionSubtypes)
    setTracao(dados.tracao)
    setcompressao(dados.compressao)
    setTorque(dados.torque)
    setRotacaoSpindle(dados.rotacaoSpindle)
    setVelocidadeTracao(dados.velocidadeTracao)
    setVelocidadeCompressa(dados.velocidadeCompressa)
    setDiametroFuroPiloto(dados.diametroFuroPiloto)
    setVAnguloEntrada(dados.anguloEntrada)
    setDiametroNominal(dados.diametroNominal)
    setRaioCurvatura(dados.raioCurvatura)
    setcomprimento(dados.comprimento)
    setVazao(dados.vazao)
    setPressao(dados.pressao)
    setAlergamentoMaximo(dados.alergamentoMaximo)
    setIsOpenUpdate(true)
  }
  async function updateDados() {
    setLoading(true)
    const responser = api.put('maquina-perfuratis/' + idMaquina, {
      data: {
        fabricante: fabricante,
        modelo: modelo,
        hourmeter: hourmeter,
        lastOverhaul: lastOverhaul,
        nextOverhaul: nextOverhaul,
        reviewUpload: reviewUpload,
        revisionSubtypes: revisionSubtypes,
        tracao: tracao,
        compressao: compressao,
        torque: torque,
        rotacaoSpindle: rotacaoSpindle,
        velocidadeTracao: velocidadeTracao,
        velocidadeCompressa: velocidadeCompressa,
        diametroFuroPiloto: diametroFuroPiloto,
        anguloEntrada: anguloEntrada,
        diametroNominal: diametroNominal,
        raioCurvatura: raioCurvatura,
        comprimento: comprimento,
        vazao: vazao,
        pressao: pressao,
        alergamentoMaximo: alergamentoMaximo,
      }
    }
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
                    onDelete={() => deleteDados(maquinas.id)}
                  />
                  {/* <EditButton
                    // onClick={() => }
                    onEdit={() => handleUpdate(maquinas.id)}
                  /> */}
                  <button
                    // onChange={onEdit}
                    onClick={() => update(maquinas)}
                    style={{ background: 'none', color: 'yellow' }}
                    title='Editar?'
                  >
                    <FaEdit size={20} />
                  </button>
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
                label='Tração (kN)'
                type='number'
                {...register('tracao', {
                  required: true,
                })}
              />

              <TextField
                label='Compressão (KN)'
                type='number'
                {...register('compressao', {
                  required: true,
                })}
              />

              <TextField
                label='Torque (N.m)'
                type='number'
                {...register('torque', {
                  required: true,
                })}
              />

              <TextField
                label='Rotação Spindle (RPM)'
                type='number'
                {...register('rotacaoSpindle', {
                  required: true,
                })}
              />

              <TextField
                label='Velocidade Tração (m/min)'
                type='number'
                {...register('velocidadeTracao', {
                  required: true,
                })}
              />

              <TextField
                label='Velocidade Compressão (m/min)'
                type='number'
                {...register('velocidadeCompressa', {
                  required: true,
                })}
              />

              <TextField
                label='Diâmetro furo piloto (pol)'
                type='number'
                {...register('diametroFuroPiloto', {
                  required: true,
                })}
              />

              <TextField
                label='Ângulo de entrada'
                type='number'
                {...register('anguloEntrada', {
                  required: true,
                })}
              />

              <TextField
                label='Diâmetro nominal (mm)'
                type='number'
                {...register('diametroNominal', {
                  required: true,
                })}
              />

              <TextField
                label='Raio de curvatura (m)'
                type='number'
                {...register('raioCurvatura', {
                  required: true,
                })}
              />

              <TextField
                label='Comprimento (m)'
                type='number'
                {...register('comprimento', {
                  required: true,
                })}
              />

              <TextField
                label='Vazão (L/min)'
                type='number'
                {...register('vazao', {
                  required: true,
                })}
              />

              <TextField
                label='Pressão (psi)'
                type='number'
                {...register('pressao', {
                  required: true,
                })}
              />

              <TextField
                label='Alargamento máximo (pol)'
                type='number'
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
            <S.Div>
              <TextField
                label='Fabricante'
                value={fabricante}
                onChange={(text) => setFabricante(text.target.value)}
              />

              <TextField
                label='Nome da Máquina Perfuratriz'
                value={modelo}
                onChange={(text) => setModelo(text.target.value)}
              />

              <TextField
                label='Horimetro'
                value={hourmeter}
                onChange={(text) => setHourmeter(text.target.value)}
              />

              <TextField
                label='Última revisão/manutenção'
                value={lastOverhaul}
                onChange={(text) => setLastOverhaul(text.target.value)}
              />

              <TextField
                label='Próxima revisão/manutenção'
                value={nextOverhaul}
                onChange={(text) => setNextOverhaul(text.target.value)}
              />

              <TextField
                label='Upload da revisão'
                value={reviewUpload}
                onChange={(text) => setReviewUpload(text.target.value)}
              />

              <S.ContentForm>
                <fieldset>
                  <label htmlFor='revisionSubtypes'>Subtipos de revisão</label>
                  <select id='revisionSubtypes' value={revisionSubtypes}
                    onChange={(text) => setRevisionSubtypes(text.target.value)}>
                    <option value=''>Select...</option>
                    <option value='Navegador'>Preventiva</option>
                    <option value='Operador'>Preditiva</option>
                    <option value='Outro'>Corretiva</option>
                  </select>
                </fieldset>
              </S.ContentForm>

              <TextField
                label='Tração (ton)'
                type='number'
                value={tracao}
                onChange={(text) => setTracao(text.target.value)}
              />

              <TextField
                label='Compressão (KN)'
                type='number'
                value={compressao}
                onChange={(text) => setcompressao(text.target.value)}
              />

              <TextField
                label='Torque'
                type='number'
                value={torque}
                onChange={(text) => setTorque(text.target.value)}
              />

              <TextField
                label='Rotação Spindle (RPM)'
                type='number'
                value={rotacaoSpindle}
                onChange={(text) => setRotacaoSpindle(text.target.value)}
              />

              <TextField
                label='Velocidade Tração (m/min)'
                type='number'
                value={velocidadeTracao}
                onChange={(text) => setVelocidadeTracao(text.target.value)}
              />

              <TextField
                label='Velocidade Compressão (m/min)'
                type='number'
                value={velocidadeCompressa}
                onChange={(text) => setVelocidadeCompressa(text.target.value)}
              />

              <TextField
                label='Diâmetro furo piloto (pol)'
                type='number'
                value={diametroFuroPiloto}
                onChange={(text) => setDiametroFuroPiloto(text.target.value)}
              />

              <TextField
                label='Ângulo de entrada'
                type='number'
                value={anguloEntrada}
                onChange={(text) => setVAnguloEntrada(text.target.value)}
              />

              <TextField
                label='Diâmetro nominal (mm)'
                type='number'
                value={diametroNominal}
                onChange={(text) => setDiametroNominal(text.target.value)}
              />

              <TextField
                label='Raio de curvatura (m)'
                type='number'
                value={raioCurvatura}
                onChange={(text) => setRaioCurvatura(text.target.value)}
              />

              <TextField
                label='Comprimento (m)'
                type='number'
                value={comprimento}
                onChange={(text) => setcomprimento(text.target.value)}
              />

              <TextField
                label='Vazão (L/min)'
                type='number'
                value={vazao}
                onChange={(text) => setVazao(text.target.value)}
              />

              <TextField
                label='Pressão (psi)'
                type='number'
                value={pressao}
                onChange={(text) => setPressao(text.target.value)}
              />

              <TextField
                label='Alargamento máximo (pol)'
                type='number'
                value={alergamentoMaximo}
                onChange={(text) => setAlergamentoMaximo(text.target.value)}
              />

              <button
                onClick={() => updateDados()}
              >{loading
                ? <img
                  width='40px'
                  style={{ margin: 'auto' }}
                  height=''
                  src={Load}
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
