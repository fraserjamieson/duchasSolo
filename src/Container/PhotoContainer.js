import PhotoGrid from '../Components/PhotoGrid';
import {useEffect, useState} from 'react';
import CountyChanger from '../Components/CountyChanger';
import DateChanger from '../Components/DateChanger';

const PhotoContainer = () => {
    let name = 'Duchas Photographic Collection';

    const [photos, setPhotos] = useState([]);
    const [countyID, setCountyID] = useState("100000");

    // const [dateRange, setDateRanger] = useState("");

    const fetchPhotos = () => {
        console.log('logging fetch data-')
        fetch(`https://www.duchas.ie/api/v0.6/cbeg/?CountyID=${countyID}&DateFrom=1950&DateTo=1959&apiKey=D4vMJJ39vTaRD5ZEy4uJU2mHrG82UT`)
        .then(res => res.json())
        .then(data=> {
            console.log(data)
            setPhotos(data)})
    }

    useEffect(()=>{
        fetchPhotos();
    },[countyID]);

    const countyChange = (countyID) => {
        setCountyID(countyID);
    }

    return (
        <>
        <h1 className="App-header">{name}</h1>
        <div className="App">
            <CountyChanger 
            countyChange={countyChange}
            photos={photos}
            />
            {/* <DateChanger /> */}
            <PhotoGrid 
            photos={photos}/>
           
        </div>
        </>
    )

}

export default PhotoContainer;