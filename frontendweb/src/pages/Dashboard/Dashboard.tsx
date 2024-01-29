
import DashNav from "../../components/DashboardNavbar/index";
import DashboardSidebar from "../../components/DashboardSidebar/index";
import DataCards from "../../components/DataCards/index";
import DataTable from "../../components/DataTable/index";

import DataChartBox from "../../components/DataChartBox/index";
import {
  MainContainer,
  MainContentContainer,
  DataCardsContainer,
  DataTableContainer,
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
        
        
         
          <MainContentContainer>
            <DataCardsContainer>
              <DataCards />
            </DataCardsContainer>
            <DataTableContainer>
                <DataChartBox/>
            </DataTableContainer>
            <DataTableContainer>
                <DataTable/>
            </DataTableContainer>
         
         
          </MainContentContainer>
        
      </PaymentLinkSecondContainer>
     
    </MainContainer>
  );
};

export default PaymentLink;
