import styled from 'styled-components'



export const BoxChartContainer = styled.div`
display: flex;
flex-direction: column;
gap: 10px;

`;

export const BoxChart01 = styled.div`
width: 305px;
height: 119px;
background-color: #FFFFFF;
`;
export const BoxChart02 = styled.div`
width: 305px;
height: 119px;
background-color: #FFFFFF;
`;
export const Line = styled.div`
display: flex;
flex-direction: row;
width: 305px;
`;
export const GreenLine = styled.div`
width: 241.9px;
height: 4px;
border: 1px solid #27AE60;
background-color: #27AE60;
`;
export const YellowLine = styled.div`
width: 63.1px;
height: 4px;
background-color: #FDC203;
border: 1px solid #FDC203;
;

`;
export const List = styled.div`
display: flex;
flex-direction: column;
/* border: 1px solid #23d57c; */
justify-content: flex-start;


`;
export const Ul = styled.ul`
display: flex;
flex-direction: column;


`;
export const ChartDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: #FFFFFF;
width: 376px;
height: 180px;

`;
export const Span08 = styled.div`
font-family: Segoe UI;
font-size: 14px;
line-height: 16px;
letter-spacing: 0px;
 margin-bottom: 10px;


`;
export const ListItem = styled.li`
    list-style-type: none; 
    padding: 5px 0; 
`;
export const Number = styled.span`
    color: ${props => props.color};
`;