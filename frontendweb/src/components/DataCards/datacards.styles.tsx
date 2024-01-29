// datacards.styles.js

import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  width: 253px;
  height: 75px;
  align-items: center;
  padding: 10px;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 62px;
    height: 37px;
    /* margin-right: 5px;  */
  }


`;

export const CardDiv = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`


export const SpanName = styled.span`
 font-family: "Segoe UI";
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0px;
    color: #787c90;
    border-radius: 5px;
`;


export const SpanAmount = styled.span`
 font-family: "Segoe UI";
    font-size: 18px; 
    line-height: 32px; 
    letter-spacing: 0px;
    color: #262626; 
    border-radius: 5px; 
`;