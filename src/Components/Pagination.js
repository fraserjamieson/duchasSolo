const Pagination = ({photosPerPage, totalPhotos}) => {
    const pageNumebrs= [];

    for(let i=1; i <= Math.ceil(totalPhotos / photosPerPage); i++){
        pageNumebrs.push(i);
    }
    console.log()
    return(
        <nav>
            <ul className="pagination">
                
                {pageNumebrs.map(number => (
                     <li key={number} className="page-item">
                        <a href="!#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;