const Pagination = ({photosPerPage, totalPhotos, paginate}) => {
    const pageNumebrs= [];

    const changingPageNumbers = Math.ceil(totalPhotos / photosPerPage);

    for(let i=1; i <= changingPageNumbers; i++){
        pageNumebrs.push(i);
    }
    
    // let noPhotos = () => {
    //     if (!totalPhotos)
    //     return;
    // }

    return(
        <nav>
            <ul className="pagination">
                
                {/* {noPhotos} */}
                {pageNumebrs.map(number => (
                    <li key={number} className="page-item">
                        <button href="#" onClick={()=> paginate(number)} className="page-link">
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;