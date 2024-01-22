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
    MainMenuText2,
    MainMenuButton,
    Span0,
    Span,
    Span7,
  } from "./dashboardsidebar.styles";
  import overview from "../../assets/overview.png";
  import dot from "../../assets/dot.png";

import wallet from "../../assets/wallet-01.png";
import wallet2 from "../../assets/wallet-02.png";
import wallet3 from "../../assets/wallet-03.png";
import order from "../../assets/order.png";
import order01 from "../../assets/order01.png";
import order02 from "../../assets/order02.png";
import profile from "../../assets/proile.png";


  const PaymentLinkSidebar = () => {
    return (
      <PaymentLinkSideBarContainer>
        <MainMenuButton>
          {" "}
          <Span0>Generate Invoice</Span0>{" "}
        </MainMenuButton>
        
      
  
        <SideBarContainer>
            <MainMenuText>
            {" "}
            <Span>Main Menu</Span>{" "}
            </MainMenuText>
            
          <SideBarContent1>
            <img src={overview} /> <Span>Overview</Span>
          </SideBarContent1>


          
        </SideBarContainer>
  
        <SideBarContainer>
            <MainMenuText>
                {" "}
                <Span>Payments</Span>{" "}
            </MainMenuText>
            <SideBarContent2>
            {" "}
            <img src={wallet} /> <Span>All Payments</Span>
          </SideBarContent2>
          <SideBarContent3>
            {" "}
            <img src={wallet2} /> <Span>Reconciled Payment</Span>
          </SideBarContent3>
          <SideBarContent4>
            {" "}
            <img src={wallet3} /> <Span>Un Reconciled payment</Span>
          </SideBarContent4>
          <SideBarContent5>
            {" "}
            <img src={dot} /> <Span>Manual Settlement</Span>{" "}
          </SideBarContent5>
          <SideBarContent6>
            {" "}
            {/* <img src={setting} /> <Span>Settings</Span>{" "} */}
          </SideBarContent6>
        </SideBarContainer>

        <SideBarContainer>
            <MainMenuText>
                {" "}
                <Span>Orders</Span>{" "}
            </MainMenuText>
            <SideBarContent2>
            {" "}
            <img src={order } /> <Span>All Orders</Span>
          </SideBarContent2>
          <SideBarContent3>
            {" "}
            <img src={order01} /> <Span>Pending Orders</Span>
          </SideBarContent3>
          <SideBarContent4>
            {" "}
            <img src={order02} /> <Span>Reconciled Order</Span>
          </SideBarContent4>
          <SideBarContent6>
            {" "}
            <img src={profile} /> <Span>Merchant Profile</Span>{" "}
          </SideBarContent6>
          
        </SideBarContainer>
      </PaymentLinkSideBarContainer>
    );
  };
  
  export default PaymentLinkSidebar;
  