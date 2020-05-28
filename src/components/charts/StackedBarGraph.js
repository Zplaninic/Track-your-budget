import React, {useContext} from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import {sumAllData} from '../../utils/dataUtils'
import {GlobalContext} from '../../context/GlobalState'
import {createDataForStackedBar} from '../../utils/dataUtils'



export const StackedBarGraph = () => {
    const {transactions} = useContext(GlobalContext)

    let data = createDataForStackedBar(transactions, 'expanse')
    // console.log(data2)

    // let data = sumAllData(transactions)
    if(data.length === 0) {
      data = [{amount: 0, type: "salary"}]
    }
    console.log(data)

    const expenses = data.filter(item => (item.type !== 'salary'))
    const income = data.filter(item => item.type === 'salary')

    // const expenses = [
    //     {
    //       type: 'expenses', salary: 400, hobby: 240, food: 240,
    //     } ]
    return (
        <div className="graphContainer">
        <BarChart
          width={700}
          height={500}  
          data={expenses}
          margin={{
            top: 5, right: 30, left: 20, bottom:   5,
          }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="type" />
            <YAxis domain={[0, 1000]}/>
            {/* <YAxis domain={[0, income[0].amount]}/> */}
            <Tooltip cursor={false}/>
            <Legend />
            <Bar dataKey="drink" stackId="a" fill="#8884d8" barSize={50} />
            <Bar dataKey="hobby" stackId="a" fill="#82ca9d" barSize={50} />
            <Bar dataKey="food" stackId="a" fill="red" barSize={50} />
      </BarChart>
        </div>
    )
}
