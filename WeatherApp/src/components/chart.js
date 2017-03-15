import React, { Component } from 'react'; 
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from "lodash"; 

function average(data) {
  return _.round(_.sum(data)/data.length); 
}

export default (props) => {
   
  return (
    <div>
      <Sparklines height={50} width={80} data={props.weatherData }>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" /> 
      </Sparklines>
      <div >{average(props.weatherData)} {props.unit}</div>
    </div>
  )
}





