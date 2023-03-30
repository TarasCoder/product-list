import React, { useEffect, useState } from "react";
import "./Pagination.css";

function Pagination({ products, paginate }) {
  const ELEMENTS_PER_PAGE = 5;

  const [elementsPerPage] = useState(ELEMENTS_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(1);
  const lastElement = currentPage * elementsPerPage;
  const firstElement = lastElement - elementsPerPage;
  const currentPortion = products.slice(firstElement, lastElement);

  let pagesNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / elementsPerPage); i++) {
    pagesNumbers.push(i);
  }

  useEffect(() => {
    paginate(currentPortion);
  }, [currentPage, products]);

  const paginateIt = (index) => {
    setCurrentPage(index.target.textContent);
  };

  return (
    <div className="pagination">
      <ul className="pages">
        {pagesNumbers.map((index) => {
          return (
            <li key={index} className="page" onClick={paginateIt}>
              {index}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Pagination;
