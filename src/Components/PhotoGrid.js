import Photo from "./Photo";

const PhotoGrid = ({photos}) => {

    if (!photos ){
        return null;
    }
    
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
export default PhotoGrid;