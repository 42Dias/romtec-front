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
} from "devextreme-react/chart";

const crosshairFormat = {
  type: "fixedPoint",
  precision: 2
};
const exportFormats = ['PNG', 'PDF', 'JPEG', 'GIF', 'SVG'];
export const energySources = [
  { value: 'val', name: 'Travessia' },
  { value: 'inter', name: 'Interferencia' },
];
function App({data, data2, dataInter}){ 
    console.log('data')
    console.log(data)
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
        <h2 style={{textAlign: 'center'}}>Plano de Furo</h2>
        <Chart
          id="chart"
          dataSource={data}
        >
          <CommonSeriesSettings
            type="spline"
            argumentField="arg"
          >
            <Point hoverMode="allArgumentPoints" />
          </CommonSeriesSettings>
          {energySources.map((item) => <Series
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

        <h2 style={{textAlign: 'center'}}>Plano de Furo Superior</h2>
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
          {energySources.map((item) => <Series
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