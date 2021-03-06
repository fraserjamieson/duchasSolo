import Photo from "./Photo";
import Pagination from '../Components/Pagination';

const PhotoGrid = ({ photos }) => {

    // photos = Array.from(photos);

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

        <div className="photoGrid">
        {photoNodes}
        </div>
            
        </>
    );

    }
}
export default PhotoGrid;