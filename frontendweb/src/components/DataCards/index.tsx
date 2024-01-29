import React from 'react'
import { CardContainer,SpanAmount,SpanName, CardDiv } from "./datacards.styles";
import vector01 from "../../assets/vector01.png";
import vector02 from "../../assets/vector02.png";
import vector03 from "../../assets/vector03.png";
import vector04 from "../../assets/vector04.png";
interface DataCards {
    id: string;
    data_name: string;
    amount: string;
    icon: string;
  }
const index = () => {
    const dataCards: DataCards[] = [
        {
          id: "01",
          data_name: "Daily Transaction Volume",
          amount: "2,342",
          icon: vector01,
        },
        {
          id: "02",
          data_name: "Daily Transaction Value",
            amount: "₦4,000,000",
          icon: vector02,
        },
        {
            id: "03",
            data_name: "Total Transaction Volume",
            amount: "452,000",
            icon: vector03,
        },
        {
            id: "04",
            data_name: "Daily Transaction Value",
            amount: "₦4,000,000",
            icon: vector04,
        },
      ];
      
      return (
        <>
          {dataCards.map((card) => (
            <CardContainer key={card.id}>
                <CardDiv>
                    <SpanName>{card.data_name}</SpanName>
                    <SpanAmount>{card.amount}</SpanAmount>
                </CardDiv>
              
              <img src={card.icon} alt={`icon-${card.id}`} />
            </CardContainer>
          ))}
        </>
      );
}

export default index
