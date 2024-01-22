
import DashNav from "../../components/DashboardNavbar/index";
import DashboardSidebar from "../../components/DashboardSidebar/index";
import {
  MainContainer,
  PaymentLinkSecondContainer,
  PaymentNavbar,
  PaymentSidebar,
} from "./Dashboard.styles";

const PaymentLink = () => {
  return (
    <MainContainer>
         <PaymentNavbar>
          {" "}
          <DashNav />
        </PaymentNavbar>
      <PaymentLinkSecondContainer>
        <PaymentSidebar>
            <DashboardSidebar/>
        </PaymentSidebar>
       
      </PaymentLinkSecondContainer>
    </MainContainer>
  );
};

export default PaymentLink;
