import Photo from "./Photo";

const PhotoGrid = ({photos}) => {
    
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
        <h3>This will contain the rendered list of individual photos</h3>
        <div>{photoNodes}</div>
        
        </>
    );

}
export default PhotoGrid;