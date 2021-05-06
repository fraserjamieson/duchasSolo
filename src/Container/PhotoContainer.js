import PhotoGrid from '../Components/PhotoGrid';
import {useEffect, useState} from 'react';

const PhotoContainer = () => {
    let name = 'Duchas Photographic Collection';

    const [photos, setPhotos] = useState([]);

    const fetchPhotos = () => {
        console.log('logging fetch data-');
        fetch('https://www.duchas.ie/api/v0.6/cbeg/?CountyID=100023&DateFrom=1960&DateTo=1969&apiKey=D4vMJJ39vTaRD5ZEy4uJU2mHrG82UT')
        .then(res => res.json())
        .then(data=> setPhotos(data));
    }




    useEffect(()=>{
        fetchPhotos();
    },[]);

    return (
        // <>
        <div>
            <h1>This will be the {name} project and its home page</h1>
            <PhotoGrid 
            photos={photos}/>
        </div>
        // </>
    )

}

export default PhotoContainer;