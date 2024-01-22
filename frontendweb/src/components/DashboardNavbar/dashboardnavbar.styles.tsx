import styled from "styled-components";
// import fipayFonts from "../../theme/font";
import { colors } from "../../theme/color";


export const DashContent = styled.div`

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 50px;
`;
export const DashText = styled.div`
  display: flex;
  margin-right: 30px;
 
  gap: 50px;
  span {
    font-family: Segoe UI;
    font-size: 14px;
    margin-right: 30px;
    color: ${colors.GRAY}; /* Set your desired text color */
  font-weight: bold;
}

`;

export const DashSearch = styled.div`
  margin-left: 50px;
  align-items: center;

  input{
    padding: 8px;
    border: none; /* Set your desired border color */
    border-radius: 5px;
      color: ${colors.GRAY}; /* Set your desired text color */
      margin-left: 30px;
  }
 
`;
export const PaymentLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #fff; /* Set your desired background color */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 

`;
export const DashCon = styled.div`
  display: flex;
  align-items: center;
  img {
  margin-left: 40px;
}

`;
export const PaymentLinkSubtitle = styled.div`
   display: flex;
  align-items: center;
  
`;


export const NotificationBar = styled.div`
  width: 25px; /* Set your desired width */
  height: auto;
  margin-right: 40px;
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfilePicCon = styled.div`
  width: 120px; /* Set your desired width */
  height: 40px; /* Set your desired height */
  border-radius: 50%;
`;

export const NameSubtitle = styled.div`
   display: flex;
  flex-direction: column;
  margin-right: 20px;
  font-family: Segoe UI;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: center;

  
`;

export const NameTag = styled.div`
  padding-left: 5px;
  color: ${colors.GRAY};
`;

export const EmailTag = styled.div`
  padding-left: 5px;
  /* padding-top: 10px; */

  color: ${colors.GRAY};
`;




