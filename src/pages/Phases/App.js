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
  Legend
} from "devextreme-react/chart";
import { dataSource } from "./data.js";

const crosshairFormat = {
  type: "fixedPoint",
  precision: 2
};

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
        
      </Chart>
    );
  }

export default App;