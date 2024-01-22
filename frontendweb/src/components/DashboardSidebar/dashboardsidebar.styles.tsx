import styled from "styled-components";
import { colors } from "../../theme/color";
import fipayFonts from "../../theme";

export const PaymentLinkSideBarContainer = styled.div`
  height: 100vh;
  margin-top: 30%;
  background-color: red;
`;



export const SideBarContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  padding-top: 30px;
`;

export const SideBarContent1 = styled.div`
  display: flex;
  padding-top: 30px;
  cursor: pointer;

  img {
  }
`;

export const SideBarContent2 = styled.div`
  display: flex;
  padding-top: 30px;
  cursor: pointer;

  img {
  }
`;

export const SideBarContent3 = styled.div`
  display: flex;
  padding-top: 30px;
  cursor: pointer;
`;

export const SideBarContent4 = styled.div`
  display: flex;
  padding-top: 30px;
  cursor: pointer;
`;

export const SideBarContent5 = styled.div`
  display: flex;
  padding-top: 30px;
  cursor: pointer;
`;

export const SideBarContent6 = styled.div`
  display: flex;
  padding-top: 30px;
  cursor: pointer;
`;

export const Span0 = styled.span`
  padding-left: 10px;
  color: ${colors.LIGHT_GREY};
`;

export const Span = styled.span`
  padding-left: 10px;
  color: ${colors.DARK_GRAY};
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

export const MainMenuText = styled.div`
  width: 50%;
  margin: 0 auto;
  padding-top: 40px;
  padding-left: 20px;
`;

export const LogOutText = styled.div`
  width: 50%;
  position: fixed;
  bottom: 5%;
  left: 5%;
  right: 0;
  display: flex;
  padding-top: 30px;
  cursor: pointer;
`;
