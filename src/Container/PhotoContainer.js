import PhotoGrid from '../Components/PhotoGrid';
import {useEffect, useState} from 'react';
import CountyChanger from '../Components/CountyChanger';
import DateChanger from '../Components/DateChanger';
import {Router, Route} from "react";
import SinglePhotoView from '../Components/SinglePhotoView';

const PhotoContainer = () => {
    let name = 'Duchas Photographic Collection';

    const [photos, setPhotos] = useState([]);
    const [countyID, setCountyID] = useState("100000");
    const [startDate, setStartDate] = useState("1950");
    const [endDate, setEndDate] = useState("1959");


    const fetchPhotos = () => {
        fetch(`https://www.duchas.ie/api/v0.6/cbeg/?CountyID=${countyID}&DateFrom=${startDate}&DateTo=${endDate}&apiKey=D4vMJJ39vTaRD5ZEy4uJU2mHrG82UT`)
        .then(res => {
            return res.json();
        })
        .then(data=> {
            console.log('fetch from county with interpolated start date - to ', data)
            setPhotos(data)})
            .catch(err => console.error(err))
    };

    useEffect(()=>{
        fetchPhotos();
        changeDate(startDate);
    },[countyID, startDate, endDate]);

    const countyChange = (countyID) => {
        setCountyID(countyID);
    };

    const dateChange = (date) => {
        setStartDate(date);
    };

    const changeDate = (startDate) => {
        const parsed = parseInt(startDate) + 9; // parsing the string value for an integer, because otherwise it wouldn't be possible to count from the start to end date without this flipped data conversion method.
        setEndDate(`${parsed}`);

    };

    return (
        <>
        <h1 className="App-header">{name}</h1>
        <div className="App">
            <Router>
                <CountyChanger 
                countyChange={countyChange}
                photos={photos}
                />
                <DateChanger dateChanger={dateChange} />

                <Route 
                    exact path="/" 
                    render={()=> 
                    <PhotoGrid
                    photos={photos}/>}
                />
                <Route 
                    exact path = "/:id"
                    component={SinglePhotoView}
                />
            </Router>
           
        </div>
        </>
    )

}

export default PhotoContainer;