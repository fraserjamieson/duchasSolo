import Photo from "./Photo";
import ReactPaginate from 'react-paginate';

const PhotoGrid = ({pageCount, changePage, currentPage}) => {

    currentPage = Array.from(currentPage);

    if (!currentPage ){
    return <h1>Loading...</h1>;

    } else if (currentPage.length === 0){
    return (
        <p>no currentPage available.  A Dateranger will be included for other time periods relevent to this county</p>
    )
    } else {
        
    const photoNodes = currentPage.map((photo)=>{
    return (
    
    <Photo
    photo={photo}
    key={photo.id}
    />
    )
    })

    return (
        <>
        <div className="photoGrid">
        {photoNodes}
        </div>
        <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={changePage}
                containerClassName={'pagination'}
                activeClassName={'active'}
            />
            {/* {currentPage} */}
        </>
    );

    }
}
export default PhotoGrid;