import React from 'react'
import './Pagination.css'
import ReactPaginate from 'react-paginate';


const Pagination = ({handlePageClick, pageCount}) => {
  return (
    <div>
        <ReactPaginate
        breakLabel="..."
        breakClassName="break-class"
        nextLabel="Next"
        pageClassName="pagination-design"
        onPageChange={handlePageClick}
        containerClassName="pagination-con"
        previousLinkClassName="pagination-link"
        nextLinkClassName="pagination-link"
        activeClassName="pagination-link-active"
        activeLinkClassName="active-link-text"
        pageCount={pageCount}
        disabledClassName="pagination-link-disabled"
        previousLabel="Previous"
        previousClassName="previous-button"
        nextClassName="next-button"
        pageRangeDisplayed={3}
        pageLinkClassName="selected-page"      />
    </div>
  )
}

export default Pagination