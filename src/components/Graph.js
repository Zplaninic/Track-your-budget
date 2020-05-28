import React from 'react'
import {BarGraph} from './charts/BarGraph'
import {StackedBarGraph} from './charts/StackedBarGraph'


export const Graph = () => {
    return (
        <div>
            <BarGraph />
            <StackedBarGraph />
        </div>
    )
}
