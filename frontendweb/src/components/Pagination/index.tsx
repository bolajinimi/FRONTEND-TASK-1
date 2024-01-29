/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import {
  StyledPaginationContainer,
  StyledPaginationLink,
  StyledPaginationNumbers,
  Content,
  Page,
} from "./pagination.styles";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const index: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const pagesToShow = 10; // Number of pages to show in the pagination
  const [currentButton, setCurrentButton] = useState<number>(currentPage);
  const [arrOfCurrButtons, setArrOfCurrButtons] = useState<number[]>([]);

  useEffect(() => {
    let tempNumberOfPages: (number | string)[] = [];

    if (totalPages <= pagesToShow) {
      tempNumberOfPages = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else if (currentButton <= 6) {
      tempNumberOfPages = Array.from({ length: pagesToShow }, (_, i) => i + 1);
    } else if (currentButton >= totalPages - 4) {
      tempNumberOfPages = Array.from(Array(pagesToShow).keys()).map(
        (i) => totalPages - pagesToShow + i + 1,
      );
    } else {
      tempNumberOfPages = [
        1,
        "...",
        ...Array.from({ length: pagesToShow - 4 }).map(
          (_, i) => currentButton - 2 + i,
        ),
        "...",
        totalPages,
      ];
    }

    setArrOfCurrButtons(tempNumberOfPages.map((item) => Number(item)));
  }, [currentButton, totalPages]);

  return (
    <StyledPaginationContainer>
      <Content>
        <span>Showing 1 to 10 of 500 entries</span>
      </Content>
      <Page>
      <StyledPaginationLink
        href="#"
        className={`${currentPage === 1 ? "disabled" : ""}`}
        onClick={() => {
          if (currentPage > 1) {
            setCurrentButton((prev) => prev - 1);
            onPageChange(currentPage - 1);
          }
        }}
      >
    
        Prev   
      </StyledPaginationLink>

      <StyledPaginationNumbers>
        {arrOfCurrButtons.map((item, index) => (
          <StyledPaginationLink
            href="#"
            key={index}
            className={`${currentPage === item ? "active" : ""}`}
            onClick={() => {
              if (typeof item === "number") {
                setCurrentButton(item);
                onPageChange(item);
              }
            }}
          >
            {item}
          </StyledPaginationLink>
        ))}
      </StyledPaginationNumbers>
      <StyledPaginationLink
        href="#"
        className={`${currentPage === totalPages ? "disabled" : ""}`}
        onClick={() => {
          if (currentPage < totalPages) {
            setCurrentButton((prev) => prev + 1);
            onPageChange(currentPage + 1);
          }
        }}
      >
        Next
     
      </StyledPaginationLink>
      </Page>
    </StyledPaginationContainer>
  );
};

export default index;
