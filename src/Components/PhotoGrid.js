import Photo from "./Photo";

const PhotoGrid = ({photos}) => {

    photos = Array.from(photos);

    if (!photos ){
        return null;
    } else if (photos.length === 0){
        return (
            <p>no photos available at this time</p>
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
            {/* <h3>PhotoGrid</h3> */}
            {photoNodes}
            </div>
            </>
        );

    }
}
export default PhotoGrid;