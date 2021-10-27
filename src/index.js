import React from "react";
import ReactDOM from "react-dom";
import * as d3 from 'd3';
import App from "./App";

d3.select("body")
        .append("h1")
        .text('D3 works!')
        
        
ReactDOM.render(<App />, document.getElementById("root"));
