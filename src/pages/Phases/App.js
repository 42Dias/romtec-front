import React from "react";
import {
  Chart,
  Pane,
  Series,
  CommonAxisSettings,
  ValueAxis,
  Tooltip,
  Crosshair,
  HorizontalLine,
  Label,
  Legend,
  CommonSeriesSettings,
  ArgumentAxis,
  Grid,
  Format,
  Export,
  Point,
} from "devextreme-react/chart";
import { dataSource } from "./data.js";

const crosshairFormat = {
  type: "fixedPoint",
  precision: 2
};
const exportFormats = ['PNG', 'PDF', 'JPEG', 'GIF', 'SVG'];

function App({data}){ 
    console.log('data')
    console.log(data)
    return (
      <Chart style={{with: '100%'}} id="chart" dataSource={data} title="Damped Sine Wave">
        <Pane name="top" />
        <Pane name="bottom" />
        <Series pane="top" />
        <Series pane="bottom" />
        <CommonAxisSettings endOnTick={false} />
        <ValueAxis
          title="Logarithmic Axis"
          linearThreshold={0}
          type="logarithmic"
          pane="top"
        />
        <ValueAxis title="Linear Axis" pane="bottom" />
        <Tooltip enabled={true} format="exponential" />
        <Crosshair enabled={true}>
          <HorizontalLine visible={true} />
          <Label visible={true} format={data} />
        </Crosshair>
        <Legend visible={true} />
      </Chart>
    );
  }

export default App;