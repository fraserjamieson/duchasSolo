import Photo from "./Photo";

const PhotoGrid = ({pageCount, changePage, currentPage, photos, photosPerPage}) => {

    photos = Array.from(photos);

    if (!photos ){
    return <h1>Loading...</h1>;

    } else if (photos.length === 0){
    return (
        <p>no photos available.  A Dateranger will be included for other time periods relevent to this county</p>
    )
    } else {
        
    const photoNodes = photos.map((photo)=>{
    return (
    
    <Photo
    photo={photo}
    key={photo.id}
    />
    )
    })

    return (
        <>
    
        {/* <ReactPaginate
                previousLabel={'go back'}
                nextLabel={'next'}
                // breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={changePage}
                containerClassName={'pagination'}
                activeClassName={'active'}
            /> */}

        <div className="photoGrid">
        {photoNodes}
        </div>
            
        </>
    );

    }
}
export default PhotoGrid;