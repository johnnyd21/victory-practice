import React from 'react';
import './App.css';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryTooltip } from 'victory';

const earningsData = [
  {quarter: 1, earnings: 13000, label: "$13,000"},
  {quarter: 2, earnings: 16500, label: "$16,500"},
  {quarter: 3, earnings: 14250, label: "$14,250"},
  {quarter: 4, earnings: 19000, label: "$19,000"}
];

function App() {
  return (
    <div className="App">
      <h1>Data Dashboard</h1>
     <VictoryChart
     domainPadding = {30}
     theme = {VictoryTheme.material}>
        <VictoryAxis
        tickValues = {[1,2,3,4]}
        tickFormat = {["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}/>
        <VictoryAxis
        dependentAxis
        tickFormat={(x) => (`$${x /1000} k`)}/>
        <VictoryBar 
            data = {earningsData} 
            x = 'quarter' 
            y = 'earnings'/>
        <VictoryTooltip/>
     </VictoryChart>

   </div>
  );
}

export default App;
