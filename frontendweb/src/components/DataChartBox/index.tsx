import React from 'react'
import { DataChartBoxContainer, ChartBoxRight,ChartBoxLeft } from './chartbox.styles'
import DataChart from '../DataChart/index'
import DataBox from '../DataBox/index'

const index = () => {
  return (
    <DataChartBoxContainer>
        <ChartBoxRight>
            <DataChart/>
        </ChartBoxRight>
        <ChartBoxLeft>
            <DataBox/>
        </ChartBoxLeft>
    </DataChartBoxContainer>
  )
}

export default index
