// PaginationComponent.js
import React from 'react';
import ReactPaginate from 'react-paginate';
import '../components/css/Pagination.css';

const PaginationComponent = ({ pageCount, onPageChange }) => {
  return (
    <ReactPaginate
      pageCount={pageCount}
      onPageChange={onPageChange}
      containerClassName={'pagination'}
      activeClassName={'active'}
    />
  );
};

export default PaginationComponent;
