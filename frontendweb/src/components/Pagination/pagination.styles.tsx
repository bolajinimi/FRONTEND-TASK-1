import styled from "styled-components";

export const StyledPaginationContainer = styled.div`
display: flex;
  justify-content: space-between;
  align-items: center;
  /* background: rgba(216, 73, 73, 0.2); */
  width: 100%;
  font-weight: 500;
  font-size: 15px;
  margin-top: 20px;
`;

export const StyledPaginationLink = styled.a`
   display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  height: 40px;
  width: 40px;
  text-decoration: none;
  transition: background-color .2s;
  cursor: pointer;

  &.active {
     background-color: #007bff;
  color: white;
  border: 1px solid #7cbddb;
  }

  &.disabled {
    opacity: 0.2;
  }

  &:hover:not(.active) {
   background-color: rgb(238, 238, 238);
  }
`;
export const StyledPaginationNumbers = styled.div`
  display: flex;
  gap: 5px;
  font-family: Euclid Circular B;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  color: #5b5e63;
`;
export const Page = styled.div`
  display: flex;
  border: 1px solid #d8d8d8;
`;
export const Content = styled.div`
  font-size: 18px;
  color: #5b5e63;
  color: #000;
font-family: "Segoe UI";
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

