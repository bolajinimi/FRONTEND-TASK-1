import React from 'react'
import { DataChartContainer, 
    ChartContainer, 
    Date,

    Day,
    DateLeft,
    DateRight,
    Span01,
    Span02,
    Span03,
    Span04,
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    ChartData,
} from './chart.styles'
import { IoMdArrowDropdown } from "react-icons/io";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import Gradient from '../../assets/gradientLine.png'


const index = () => {
  return (
    <DataChartContainer>
      <ChartContainer>
            <Date>
                <DateLeft>
                    <Span01>Today 5, Aug 2018</Span01>
                </DateLeft>
                <DateRight>
                    <Span02>1 Jan - 1 Jun  {' '} <IoMdArrowDropdown /></Span02>
                    <Span03><MdKeyboardArrowLeft /></Span03>
                    <Span04><MdKeyboardArrowRight /></Span04>
                </DateRight>
            </Date>
            <Day>
                    <Jan className="month">Jan</Jan>
                    <Feb>Feb</Feb>
                    <Mar>Mar</Mar>
                    <Apr>Apr</Apr>
                    <May>May</May>
                    <Jun>Jun</Jun>
            </Day>
            <ChartData>
                <img src={Gradient} alt="gradient" />
            </ChartData>
           
      </ChartContainer>
    </DataChartContainer>
  )
}

export default index
