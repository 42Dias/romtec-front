import * as S from './DrillingPlanning.styled'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import { useForm } from 'react-hook-form'
import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'

type FormData = {
  latEntryCheckpoint: string;
  longEntryCheckpoint: string;
  latOutputCheckpoint: string;
  longOutputCheckpoint: string;
  pipeType: string;
  drillingDiameter: string;
  soilTypes: string;
}

export function DrillingPlanning () {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  function onSubmit ({
    latEntryCheckpoint,
    longEntryCheckpoint,
    latOutputCheckpoint,
    longOutputCheckpoint,
    pipeType,
    drillingDiameter,
    soilTypes,
  }: FormData) {
    const submit = {
      latEntryCheckpoint,
      longEntryCheckpoint,
      latOutputCheckpoint,
      longOutputCheckpoint,
      pipeType,
      drillingDiameter,
      soilTypes,
    }
    reset()

    console.log(submit)
  }

  return (
    <>
      <Sidebar />
      <Navbar />
      <S.ContainerConfirmation>
        <h2>Planejamento de perfuração</h2>
        <S.Container>
          <S.Form onSubmit={handleSubmit(onSubmit)}>
            <S.ContentForm>
              <fieldset>
                <label htmlFor='latEntryCheckpoint'>Ponto de verificação de entrada (lat)</label>
                <input
                  id='latEntryCheckpoint' placeholder='Latitude'
                  {...register('latEntryCheckpoint', {
                    required: {
                      value: true,
                      message: 'Todos os campos são obrigatórios',
                    },
                  })}
                />
                <span>{errors.latEntryCheckpoint?.message}</span>
              </fieldset>
            </S.ContentForm>

            <S.ContentForm>
              <fieldset>
                <label htmlFor='longEntryCheckpoint'>Ponto de verificação de entrada (long)</label>
                <input
                  id='longEntryCheckpoint' placeholder='Longitude'
                  {...register('longEntryCheckpoint', {
                    required: {
                      value: true,
                      message: 'Longitude é obrigatória',
                    },
                  })}
                />
              </fieldset>
            </S.ContentForm>

            <S.ContentForm>
              <fieldset>
                <label htmlFor='latOutputCheckpoint'>Ponto de verificação de saída (lat)</label>
                <input
                  id='latOutputCheckpoint' placeholder='Latitude'
                  {...register('latOutputCheckpoint', {
                    required: {
                      value: true,
                      message: 'Latitude é obrigatória',
                    },
                  })}
                />
              </fieldset>
            </S.ContentForm>

            <S.ContentForm>
              <fieldset>
                <label htmlFor='longOutputCheckpoint'>Ponto de verificação de saída (long)</label>
                <input
                  id='longOutputCheckpoint' placeholder='Longitude'
                  {...register('longOutputCheckpoint', {
                    required: {
                      value: true,
                      message: 'Longitude é obrigatória',
                    },
                  })}
                />
              </fieldset>
            </S.ContentForm>

            <S.ContentForm>
              <fieldset>
                <label htmlFor='pipeType'>Tipo de tubulação</label>
                <input
                  id='pipeType' placeholder='Fibra óptica'
                  {...register('pipeType', {
                    required: {
                      value: true,
                      message: 'Tubulação é obrigatória',
                    },
                  })}
                />
              </fieldset>
            </S.ContentForm>

            <S.ContentForm>
              <fieldset>
                <label htmlFor='drillingDiameter'>Diâmetro de perfuração</label>
                <input
                  id='drillingDiameter' placeholder='20 metros'
                  {...register('drillingDiameter', {
                    required: {
                      value: true,
                      message: 'Diâmetro é obrigatório',
                    },
                  })}
                />
              </fieldset>
            </S.ContentForm>

            <S.ContentForm>
              <fieldset>
                <label htmlFor='soilTypes'>Tipos de solo</label>
                <input
                  id='soilTypes' placeholder='Barro'
                  {...register('soilTypes', {
                    required: {
                      value: true,
                      message: 'Tipos de solo são obrigatórios',
                    },
                  })}
                />
              </fieldset>
            </S.ContentForm>

            <button type='submit'>Salvar</button>
          </S.Form>
        </S.Container>

        <h2>Interferências</h2>
        <Link to='/mapeamento-interferencias'><FiPlus /></Link>

        <S.GridConfirmation>
          <span>Nome</span>
          <span>Travessia</span>
          <span>Trabalhadores</span>
          <span>Companhia</span>
          <span>Fluido de perfuração</span>
          <span>Haste</span>
          <span>Máquina perfuratriz</span>
        </S.GridConfirmation>
      </S.ContainerConfirmation>
    </>
  )
}
