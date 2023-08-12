import Cookies from "js-cookie";

export const getAuthToken = (name = 'token') => {
    return Cookies.get(name);
  };
  

 export function getPageNumbers(currentPage, totalPages) {
    const pageNumbers = [];
    const maxPageButtons = 3; // Maximum number of page buttons to show
    const halfMaxPageButtons = Math.floor(maxPageButtons / 2);
    let startPage = 1;
    let endPage = totalPages;
  
    if (totalPages > maxPageButtons) {
      if (currentPage <= halfMaxPageButtons) {
        endPage = maxPageButtons;
      } else if (currentPage + halfMaxPageButtons >= totalPages) {
        startPage = totalPages - maxPageButtons + 1;
      } else {
        startPage = currentPage - halfMaxPageButtons;
        endPage = currentPage + halfMaxPageButtons;
      }
    }
  
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
  
    return pageNumbers;
  }