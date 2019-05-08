import React, { Component } from 'react';
import MyTemplete  from '../../../templete';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, VerticalGridLines, RadialChart} from 'react-vis';

class MyPie extends Component
{

  renderPie()
  {
    const myData = [
    {angle: 1, label: 'Item 1'},
    {angle: 3, label: 'Item 2'},
    {angle: 4, label: 'Item 3'},
    {angle: 2, label: 'Item 4'},
    {angle: 8, label: 'Item 5'},
    {angle: 5, label: 'Item 6'}
  ]
    return (
      <div>
        <RadialChart data={myData} width={500} height={600} showLabels/>
      </div>
    );
  }
  render()
  {
    let output = this.renderPie();
    let myName = "Pie";
    return(
      <div>
      <MyTemplete content = {output} name = {myName}/>
      </div>
    );
  }
}

export default MyPie;
