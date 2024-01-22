// import {
//     TransactionIcon,
//     emptyWallet2,
//     fipay,
//     home,
//     moneys,
//     receipt2,
//     setting,
//     logout,
//   } from "../../assets";
  import {
    PaymentLinkSideBarContainer,
    SideBarContainer,
    SideBarContent1,
    SideBarContent2,
    SideBarContent3,
    SideBarContent4,
    SideBarContent5,
    SideBarContent6,
    MainMenuText,
    LogOutText,
    Span0,
    Span,
    Span7,
  } from "./dashboardsidebar.styles";
  
  const PaymentLinkSidebar = () => {
    return (
      <PaymentLinkSideBarContainer>
        
        <MainMenuText>
          {" "}
          <Span0>Main Menu</Span0>{" "}
        </MainMenuText>
  
        <SideBarContainer>
          <SideBarContent1>
            {/* <img src={home} /> <Span>Home</Span> */}
          </SideBarContent1>
          <SideBarContent2>
            {" "}
            {/* <img src={TransactionIcon} /> <Span>Transaction</Span> */}
          </SideBarContent2>
          <SideBarContent3>
            {" "}
            {/* <img src={moneys} /> <Span>Payment Link</Span> */}
          </SideBarContent3>
          <SideBarContent4>
            {" "}
            {/* <img src={emptyWallet2} /> <Span>Invoice</Span> */}
          </SideBarContent4>
          <SideBarContent5>
            {" "}
            {/* <img src={receipt2} /> <Span>Reports</Span>{" "} */}
          </SideBarContent5>
          <SideBarContent6>
            {" "}
            {/* <img src={setting} /> <Span>Settings</Span>{" "} */}
          </SideBarContent6>
        </SideBarContainer>
  
        
      </PaymentLinkSideBarContainer>
    );
  };
  
  export default PaymentLinkSidebar;
  