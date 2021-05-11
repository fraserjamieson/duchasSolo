import PhotoGrid from '../Components/PhotoGrid';
import {useEffect, useState} from 'react';
import CountyChanger from '../Components/CountyChanger';

const PhotoContainer = () => {
    let name = 'Duchas Photographic Collection';

    const [photos, setPhotos] = useState([]);
    const [countyID, setCountyID] = useState("")

    const fetchPhotos = () => {
        console.log('logging fetch data-');
        fetch(`https://www.duchas.ie/api/v0.6/cbeg/?CountyID=100002&DateFrom=1950&DateTo=1959&apiKey=D4vMJJ39vTaRD5ZEy4uJU2mHrG82UT`)
        .then(res => res.json())
        .then(data=> {
            console.log(data)
            setPhotos(data)})
    }

    useEffect(()=>{
        fetchPhotos();
    },[]);

    const handleCountyChange = () => {
        return null;
    }

    return (
        <>
        <h1 className="App-header">{name}</h1>
        <div className="App">
            <CountyChanger 
            countyChange={handleCountyChange}
            />
            <PhotoGrid 
            photos={photos}/>
           
        </div>
        </>
    )

}

export default PhotoContainer;