import React, {useContext } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import {GlobalContext} from '../../context/GlobalState'
import {sumAllData, addDataToBar} from '../../utils/dataUtils'
import colors from '../../utils/colorsData'


export const BarGraph = () => {

  const {transactions} = useContext(GlobalContext)

  let data = sumAllData(transactions)
  if(data.length === 0) {
    data = [{amount: 0, type: "salary"}]
  }

  const expenses = data.filter(item => (item.type !== 'salary'))
  const income = data.filter(item => item.type === 'salary')

  const mergedExpenses = addDataToBar(expenses)
    return (
      <div className="graphContainer">
        <BarChart 
          width={700}
          height={500}
          data={mergedExpenses}
          margin={{
            top: 5, right: 30, left: 20, bottom:   5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="type" />
          <YAxis name="income" type="number" domain={[0, income[0].amount]}/>
          <Tooltip cursor={false}/>
          <Legend />
          {Object.keys(mergedExpenses[0]).map((item, i) => {
              return <Bar key={i} dataKey={item} barSize={50} fill={colors[item]}/>
            })}
        </BarChart>
      </div>
    );
}
