import React from "react";
import './styled'
import {
  Chart,
  CommonSeriesSettings,
  Series,
  ArgumentAxis,
  Grid,
  Crosshair,
  Export,
  Legend,
  Point,
  Label,
  Font,
  Title,
  Subtitle,
  Tooltip,
  Size,
} from "devextreme-react/chart";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import * as S from './styled'

const crosshairFormat = {
  type: "fixedPoint",
  precision: 2
};
const exportFormats = ['PNG', 'PDF', 'JPEG', 'GIF', 'SVG'];
export let interferencias = [
  { value: 'val', name: 'Travessia' },
];

function App({ data, data2, dataPontos }) {
  const qtdPontos = dataPontos.length
  let toastId
  console.log('data')
  console.log(data)
  let index = 0
  data.map((inter) => {
    //console.log(inter)
    if (inter.nome === `Inter${index}`) {
      index++
      interferencias.push({ value: inter.nome, name: inter.nome })
    }
  })
  let uniqueInter = interferencias.filter((value, index, self) =>
  index === self.findIndex((t) => (
    t.value === value.value
  )))
  console.log(interferencias)
  console.log(uniqueInter)
  function deletarPontos() {
    console.log("Excluir")
    toastId = toast.loading('Salvando grafico...')
    const responser = api.delete('pontosGraficoList', {
      data: dataPontos,
    }).then((response) => {
      if (response.statusText === 'OK') {
        //toast.success("Excluido com sucesso!")
        salvarPontos(false)
      }
    }).catch(res => {
      // //console.log(res.response.data)
      toast.error(res.response.data)
      setLoading(false)
    })
  }
  function salvarPontos(toastt) {
    console.log("Salvar")
    if (toastt) {
      toastId = toast.loading('Salvando grafico...')
    }

    // data.map((ponto) => {
    //console.log(ponto)
    api.post('pontosGrafico', {
      data: data,
    }).then((response) => {
      if (response.statusText === 'OK') {
        toast.dismiss(toastId)
      }
    }).catch(res => {
      toast.dismiss(toastId)
      console.log(res)
    })
    //})
  }
  return (
    // <Chart style={{with: '100%', innerHeight: '10%'}} id="chart" dataSource={data} title="Plano de furo">
    //   {/* <Pane name="top" /> */}
    //   <Pane name="bottom" />
    //   {/* <Series pane="top" /> */}
    //   <Series pane="bottom" />
    //   <CommonAxisSettings endOnTick={false} />
    //   <ValueAxis
    //     title="Logarithmic Axis"
    //     linearThreshold={-3}
    //     type="logarithmic"
    //     pane="top"
    //   />
    //   <ValueAxis title="Linear Axis" pane="bottom"/>
    //   <Tooltip enabled={true} format="decimal" />
    //   <Crosshair enabled={true}>
    //     <HorizontalLine visible={true} />
    //     <Label visible={true} format={crosshairFormat} />
    //   </Crosshair>
    //   <Legend visible={true} />
    // </Chart>


    // <Chart style={{with: '100%', innerHeight: '10%'}} id="chart" dataSource={data} title="Plano de furo">
    //   {/* <Pane name="top" /> */}
    //   <Pane name="bottom" />
    //   {/* <Series pane="top" /> */}
    //   <Series pane="bottom" />
    //   <CommonAxisSettings endOnTick={false} />
    //   <ValueAxis
    //     title="Logarithmic Axis"
    //     linearThreshold={-3}
    //     type="logarithmic"
    //     pane="top"
    //   />
    //   <ValueAxis title="Linear Axis" pane="bottom"/>
    //   <Tooltip enabled={true} format="decimal" />
    //   <Crosshair enabled={true}>
    //     <HorizontalLine visible={true} />
    //     <Label visible={true} format={crosshairFormat} />
    //   </Crosshair>
    //   <Legend visible={true} />
    // </Chart>
    <>
      <h2 style={{ textAlign: 'center' }}>Plano de Furo</h2>
      <S.GridForm>
        <div style={{ overflow: 'auto', width: '200%' }}>
          <Chart
            id="chart"
            dataSource={data}
          >

            <CommonSeriesSettings
              //type="scatter"
              type="line"
              argumentField="arg"
            >
              <Point hoverMode="allArgumentPoints" />
            </CommonSeriesSettings>
            {uniqueInter.map((item) => <Series
              key={item.value}
              valueField={item.value}
              name={item.name} />)}
            <ArgumentAxis
              valueMarginsEnabled={false}
              discreteAxisDivisionMode="crossLabels"
            >
              <Grid visible={true} />
            </ArgumentAxis>
            <Crosshair
              enabled={true}
              color="#949494"
              width={3}
              dashStyle="dot"
            >
              <Label
                visible={true}
                backgroundColor="#949494"
              >
                <Font
                  color="#FFFFFF"
                  size={12} />
              </Label>
            </Crosshair>
            <Legend
              verticalAlignment="bottom"
              horizontalAlignment="center"
              itemTextPosition="bottom"
              equalColumnWidth={true} />
            <Title text="Plano de Furo">
              <Subtitle text="(Pipe in Track)" />
            </Title>
            <Export enabled={true} />
            <Tooltip enabled={true} />
          </Chart>
        </div>
      </S.GridForm>
      <div style={{ width: '100%', textAlign: 'center' }}>
        <button style={{ marginTop: '35px', width: '200px' }} onClick={() => { dataPontos.length > 0 ? deletarPontos() : salvarPontos(true) }} className='finishPhase'>Salvar plano de furo</button>
      </div>
      <br />
      <h2 style={{ textAlign: 'center' }}>Plano de Furo Superior</h2>
      <Chart
        id="chart"
        dataSource={data2}
      >
        <CommonSeriesSettings
          type="line"
          argumentField="arg"
        >
          <Point hoverMode="allArgumentPoints" />
        </CommonSeriesSettings>
        {uniqueInter.map((item) => <Series
          key={item.value}
          valueField={item.value}
          name={item.name} />)}
        <ArgumentAxis
          valueMarginsEnabled={false}
          discreteAxisDivisionMode="crossLabels"
        >
          <Grid visible={true} />
        </ArgumentAxis>
        <Crosshair
          enabled={true}
          color="#949494"
          width={3}
          dashStyle="dot"
        >
          <Label
            visible={true}
            backgroundColor="#949494"
          >
            <Font
              color="#FFFFFF"
              size={12} />
          </Label>
        </Crosshair>
        <Legend
          verticalAlignment="bottom"
          horizontalAlignment="center"
          itemTextPosition="bottom"
          equalColumnWidth={true} />
        <Title text="Plano de Furo Superior">
          <Subtitle text="(Pipe in Track)" />
        </Title>
        <Export enabled={true} />
        <Tooltip enabled={true} />
      </Chart>
    </>
  );
}

export default App;