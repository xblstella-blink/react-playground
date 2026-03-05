const Pagination = ({paginate, postsPerPage,currentPage, totalPosts}) => {
    const pageNumbers = [];
    for (let i =1; i<= Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i);
    }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((page) => (
            <li key={page} className="page-item">
                <a 
                onClick={() => paginate(page)}
                href="#" className={`page-link ${currentPage === page ? "active-page" :""}`}>
            {page}
          </a>
            </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
