import React, {useContext} from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import {GlobalContext} from '../../context/GlobalState'
import {createDataForStackedBar, addDataToStackedBar} from '../../utils/dataUtils'
import colors from '../../utils/colorsData'

export const StackedBarGraph = () => {
    const {transactions} = useContext(GlobalContext)

    let data = createDataForStackedBar(transactions, 'expanse')

    if(data.length === 0) {
      data = [{amount: 0, type: "salary"}]
    }

    const expenses = data.filter(item => (!item['salary'] && !item['type']))
    const income = data.filter(item => (item['salary']))

    const mergedExpenses = addDataToStackedBar(expenses)

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
            <YAxis domain={[0, income[0]?.salary]}/>
            <Tooltip cursor={false}/>
            <Legend />
            {Object.keys(mergedExpenses[0]).map((item, i) => {
              return <Bar key={i} dataKey={item} stackId="a" barSize={50} fill={colors[item]}/>
            })}
      </BarChart>
        </div>
    )
}
