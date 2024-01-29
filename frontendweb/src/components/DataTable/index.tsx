import React, { useState } from "react";
import DataTable, {
  TableColumn,
  createTheme,
} from "react-data-table-component";
import { DataTableContainer, DataTableH1,HeadDiv, DashSearch,Show20, Show} from "./datatable.styles";

import { IoCheckmark } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import Pagination from "../Pagination";

interface DataRow {
  name: any;
  amount?: any;
  active?: boolean;
  date?: any;
  qrCode?: any;
  copyLink?: any;
}

const customStyles = {
  rows: {
    style: {
      minHeight: "72px",
      // minWidth: "0px",
    },
  },
  headCells: {
    style: {
      // paddingLeft: "8px",
      // paddingRight: "8px",
      color: '#7F8FA4',
      fontFamily: "Segoe UI",
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 'normal',
      letterSpacing: "0.02em",
      backgroundColor: "#EAEEF0",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px",
      paddingRight: "8px",
    },
  },
};

createTheme("solarized", {
  text: {
    fontFamily: "GT Walsheim Pro",
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "24px",
    letterSpacing: "0.02em",
    // textAlign: "left",
  },

  divider: {
    default: "#CCCFD4",
  },
  action: {
    button: "rgba(0,0,0,.54)",
    hover: "rgba(0,0,0,.08)",
    disabled: "rgba(0,0,0,.12)",
  },
});

const commonStyle = {
  width: "fit-content",
  height: "28px",
  padding: "2px 6px",
  borderRadius: "15px",
  gap: "6px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const activeStyle = {
  ...commonStyle,
  width: "96px",
  border: "0.8px solid #4BB54357",
  // backgroundColor: "#4BB54357",
  color: "#4BB543",
};

const inactiveStyle = {
  ...commonStyle,
  width: "96px",
  border: "0.8px solid #E89D2B57",
  // backgroundColor: "#E89D2B57",
  color: "#E89D2B",
};

const productNameStyle = {
  width: "100px",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "20px",
  letterSpacing: "0em",
  color: "#0E0E0E",
};

const dateCreatedStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "14px",
  fontWeight: 500,
  lineHeight: "24px",
  letterSpacing: "0.02em",
  color: "#0E0E0E",
 
};
const iconStyle = {
 
  alignItems: "center",
  justifyContent: "center",
  color: "#FFFFFF",
  width: "36px",
  height: "36px",
 borderRadius: "50%",
  backgroundColor: "#7F8FA4",
  marginRight: "10px",
};
const activeDivStyle = {
  display: "flex",
  gap: "40px",  
  alignItems: "center",
  justifyContent: "center",
};
const selectStyle = {
  width: '150px',
  height: '35px',
  flexShrink: 0,
  borderRadius: '2px',
  padding: '10px',
  backgroundColor: '#F7F8FA',
  border: '1px solid #CED0DA'
};


const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentPage, setCurrentPage] = useState<number>(1);
  const recordsPerPage = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);

    console.log("Fetching data for page", page);
  };

  const dataRecords = [
    {
      id: 1,
      date: "Apple Mac Book 15",
      name: "$73430",
      email: "bolajinimi",
      amount: "1234567890",
      active: true,
      qrCode: "",
      copyLink: "12:30",
      age: 23,
    },
    {
      id: 2,
      date: "Apple Mac Book 15",
      name: "$73430",
      email: "bolanle",
      amount: "1234567890",
      active: false,
      qrCode: "",
      copyLink: "12:30",
      age: 28,
    },
    {
      id: 3,
      date: "Apple Mac Book 15",
      name: "$73430",
      email: "bolanle",
      amount: "1234567890",
      active: true,
      qrCode: "",
      copyLink: "12:30",
      age: 28,
    },
    {
      id: 4,
      date: "Apple Mac Book 15",
      name: "$73430",
      email: "bolanle",
      amount: "1234567890",
      active: false,
      qrCode: "",
      copyLink: "12:30",
      age: 28,
    },
    {
      id: 5,
      date: "Apple Mac Book 15",
      name: "$73430",
      email: "bolanle",
      amount: "1234567890",
      active: true,
      qrCode: "",
      copyLink: "12:30",
      age: 28,
    },
    {
      id: 6,
      date: "Apple Mac Book 15",
      name: "$73430",
      email: "bolajinimi",
      amount: "1234567890",
      active: true,
      qrCode: "",
      copyLink: "12:30",
      age: 23,
    },
    {
      id: 7,
      date: "Apple Mac Book 15",
      name: "$73430",
      email: "bolanle",
      amount: "1234567890",
      active: false,
      qrCode: "",
      copyLink: "12:30",
      age: 28,
    },
    {
      id: 8,
      date: "Apple Mac Book 15",
      name: "$73430",
      email: "bolanle",
      amount: "1234567890",
      active: true,
      qrCode: "",
      copyLink: "12:30",
      age: 28,
    },
    {
      id: 9,
      date: "Apple Mac Book 15",
      name: "$73430",
      email: "bolanle",
      amount: "1234567890",
      active: false,
      qrCode: "",
      copyLink: "12:30",
      age: 28,
    },
    {
      id: 10,
      date: "Apple Mac Book 15",
      name: "$73430",
      email: "bolanle",
      amount: "1234567890",
      active: true,
      qrCode: "QR CODE",
      copyLink: "Copy Link",
      age: 28,
    },
    {
      id: 11,
      date: "Dec 12, 2020 12:00pm",
      name: "Banziba Cakes",
      email: "bolajinimi",
      amount: "$2300",
      active: true,
      qrCode: "QR CODE",
      copyLink: "Copy Link",
      age: 23,
    },
    {
      id: 12,
      date: "Dec 12, 2020 12:00pm",
      name: "Banziba Cakes",
      email: "bolanle",
      amount: "$2300",
      active: false,
      qrCode: "QR CODE",
      copyLink: "Copy Link",
      age: 28,
    },
    {
      id: 13,
      date: "Dec 12, 2020 12:00pm",
      name: "Banziba Cakes",
      email: "bolanle",
      amount: "$2300",
      active: true,
      qrCode: "QR CODE",
      copyLink: "Copy Link",
      age: 28,
    },
    {
      id: 14,
      date: "Dec 12, 2020 12:00pm",
      name: "Banziba Cakes",
      email: "bolanle",
      amount: "$2300",
      active: false,
      qrCode: "QR CODE",
      copyLink: "Copy Link",
      age: 28,
    },
    {
      id: 15,
      date: "Dec 12, 2020 12:00pm",
      name: "Cakes",
      email: "bolanle",
      amount: "$2300",
      active: true,
      qrCode: "QR CODE",
      copyLink: "Copy Link",
      age: 28,
    },
    {
      id: 16,
      date: "Dec 12, 2020 12:00pm",
      name: "Cakes",
      email: "bolajinimi",
      amount: "$2300",
      active: true,
      qrCode: "QR CODE",
      copyLink: "Copy Link",
      age: 23,
    },
    {
      id: 17,
      date: "Dec 12, 2020 12:00pm",
      name: "Cakes",
      email: "bolanle",
      amount: "$2300",
      active: false,
      qrCode: "QR CODE",
      copyLink: "Copy Link",
      age: 28,
    },
    {
      id: 18,
      date: "Dec 12, 2020 12:00pm",
      name: "Cakes",
      email: "bolanle",
      amount: "$2300",
      active: true,
      qrCode: "QR CODE",
      copyLink: "Copy Link",
      age: 28,
    },
    {
      id: 19,
      date: "Dec 12, 2020 12:00pm",
      name: "Cakes",
      email: "bolanle",
      amount: "$2300",
      active: false,
      qrCode: "QR CODE",
      copyLink: "Copy Link",
      age: 28,
    },
    {
      id: 20,
      date: "Dec 12, 2020 12:00pm",
      name: "Cakes",
      email: "bolanle",
      amount: "$2,300",
      active: true,
      qrCode: "QR CODE",
      copyLink: "Copy Link",
      age: 28,
    },
  ];
  const startIndex = (currentPage - 1) * recordsPerPage;
  const endIndex = startIndex + recordsPerPage;
  const displayedRecords = dataRecords.slice(startIndex, endIndex);

  const columns: TableColumn<DataRow>[] = [
    {
      name: "Item Type",
      selector: (row: DataRow) => row.date,
      cell: (row: DataRow) => (
        <>
        <div style={iconStyle}>
        
        </div>
        <div style={dateCreatedStyle}>
          
          {row.date}
        </div>
        </>
      ),
    },
    {
      name: "Price",
      selector: (row: DataRow) => row.name,
      cell: (row: DataRow) => <div style={productNameStyle}>{row.name}</div>,
    },
    {
      name: "Transaction No",
      selector: (row: DataRow) => row.amount,
      cell: (row: DataRow) => <div>{row.amount}</div>,
    },
    {
      name: "Time",
      selector: (row: DataRow) => row.amount,
      cell: (row: DataRow) => <div> {row.copyLink}</div>,
    },
    {
      name: "",
      selector: (row: DataRow) => row.active,
      cell: (row: DataRow) => (
        <div style={activeDivStyle}>
          <div style={row.active ? activeStyle : inactiveStyle}>
            {row.active ? <IoCheckmark /> : <FaCircle />}
            {row.active ? "Recieved" : "Pending"}
          </div>
          <div>
              <IoIosArrowDown />
          </div>
        </div>
      ),
    },
  ];
  return (
    <DataTableContainer>
      <DataTableH1>Payments</DataTableH1>
      <HeadDiv>
        <Show20>
          <p>showing 20 out of 500</p>
        </Show20>
        
        <DashSearch>
          <IoIosSearch /> 
          <input type="text" placeholder="Search" />
          
        </DashSearch>
      
        <Show>

           <p>show </p>
           <select style={selectStyle}>
            <option value="all">All</option>
            <option value="reconcile">Reconcile</option>
            <option value="unreconcile">Unreconcile</option>
            <option value="settled">Settled</option>
            <option value="unsettled">Unsettled</option>
          </select>
        </Show>
      </HeadDiv>
      <DataTable<DataRow>
        columns={columns}
        data={displayedRecords}
        customStyles={customStyles}
        theme="solarized"
      />
      <Pagination
        totalPages={Math.ceil(dataRecords.length / recordsPerPage)}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </DataTableContainer>
  );
};

export default index;
