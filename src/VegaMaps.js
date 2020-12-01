import React from "react";
import vegaEmbed from "vega-embed";
import {View, parse} from 'vega';


var yourVlSpec = {
  $schema: "https://vega.github.io/schema/vega-lite/v2.0.json",
  description: "A simple bar chart with embedded data.",
  data: {
    values: [
      { a: "A", b: 28 },
      { a: "B", b: 55 },
      { a: "C", b: 43 },
      { a: "D", b: 91 },
      { a: "E", b: 81 },
      { a: "F", b: 53 },
      { a: "G", b: 19 },
      { a: "H", b: 87 },
      { a: "I", b: 52 }
    ]
  },
  mark: "bar",
  encoding: {
    x: { field: "a", type: "ordinal" },
    y: { field: "b", type: "quantitative" }
  }
};

const show = () => {
    var view = new View(parse(yourVlSpec, {
        renderer: 'canvas',
        container: '#root',
        hover: true
    }))

    return view;
}

const VegaMaps = () => {
  return (
      <div>
          <h1>Hi</h1>
          {show()}
          {/* {vegaEmbed('#map', yourVlSpec)} */}
      </div>
  );
};

export default VegaMaps;
