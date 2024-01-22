import styled from "styled-components";
import { colors } from "../../theme/color";
import fipayFonts from "../../theme";

export const PaymentLinkSideBarContainer = styled.div`
  height: 100vh;
  margin-top: 10px;
  background-color: #FFFFFF;
;
`;


export const MainMenuText = styled.div`
    display: flex;
    font-family: Segoe UI;
    font-size: 11px;
    line-height: 15px;
    letter-spacing: 0px;
    color: ${colors.GRAY};

  cursor: pointer;
`;
export const SideBarContainer = styled.div`
     width: 260px;
    height: auto;
   padding-top: 30px;
    margin-left: 30px;

`;

export const SideBarContent1 = styled.div`
  display: flex;
  padding-top: 30px;
  padding-bottom: 30px;
  cursor: pointer;

  img {
    margin-left: 10px;
  }
`;
export const MainMenuText2 = styled.div`
  display: flex;
padding-top: 30px;
  cursor: pointer;
`;
export const SideBarContent2 = styled.div`
  display: flex;
  padding-top: 30px;
  cursor: pointer;

img {
    margin-left: 10px;
  }
`;

export const SideBarContent3 = styled.div`
  display: flex;
  padding-top: 30px;
  cursor: pointer;
  img {
    margin-left: 10px;
  }
`;

export const SideBarContent4 = styled.div`
  display: flex;
  padding-top: 30px;
  cursor: pointer;
  img {
    margin-left: 10px;
  }
`;

export const SideBarContent5 = styled.div`
  display: flex;
  padding-top: 30px;
  cursor: pointer;
  img {
    margin-left: 10px;
  }
`;

export const SideBarContent6 = styled.div`
  display: flex;
  padding-top: 40px;
  cursor: pointer;
  img {
    margin-left: 10px;
  }
`;

export const Span0 = styled.span`   
  font-weight: bold;    
    color: ${colors.WHITE};
`;

export const Span = styled.span`
  padding-left: 10px;
  color: ${colors.GRAY};
  font-size: ${fipayFonts.fipayFonts.fontSize.body3};
  font-weight: ${fipayFonts.fipayFonts.fontWeight.regular};
  letter-spacing: ${fipayFonts.fipayFonts.letterSpacing.body1};
`;

export const Span7 = styled.span`
  padding-left: 10px;
  font-size: ${fipayFonts.fipayFonts.fontSize.body3};
  font-weight: ${fipayFonts.fipayFonts.fontWeight.regular};
  color: ${colors.DANGER};
`;

export const MainMenuButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 90px;
  margin-left: 30px;
  width: 173px;
  height: 43px;
  border-radius: 30px;
  background-color: #27AE60;
`;

