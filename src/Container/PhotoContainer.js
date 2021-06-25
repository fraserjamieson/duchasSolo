import PhotoGrid from '../Components/PhotoGrid';
import {useEffect, useState} from 'react';
import CountyChanger from '../Components/CountyChanger';
import DateChanger from '../Components/DateChanger';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SinglePhotoView from '../Components/SinglePhotoView';


const PhotoContainer = () => {
    let name = 'Duchas Photographic Collection';

    const [photos, setPhotos] = useState([]);
    const [countyID, setCountyID] = useState("100000");
    const [startDate, setStartDate] = useState("1950");
    const [endDate, setEndDate] = useState("1959");
    const [pageCount, setPageCount] = useState(0);
    // const [offset, setOffset] = useState(0);
    const [perPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(0);


    const fetchPhotos = () => {
        fetch(`https://www.duchas.ie/api/v0.6/cbeg/?CountyID=${countyID}&DateFrom=${startDate}&DateTo=${endDate}&apiKey=D4vMJJ39vTaRD5ZEy4uJU2mHrG82UT`)
        .then(res => {
            return res.json();
        })
        .then(data=> {
            console.log('fetch from county with interpolated start date - to ', data)
            setPhotos(data.slice(offset, offset + perPage))
            setPageCount(Math.ceil(photos.length / perPage))
        })
            .catch(err => console.error(err))
    };

    const offset = currentPage * perPage;

    // const currentPageData = photos
    // .slice(offset, offset + perPage)

    useEffect(()=>{
        fetchPhotos();
        changeDate(startDate);
    },[countyID, startDate, endDate]);   // <<< This dependancy array functins as 'ComponentDidMount' ??

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

    const handlePageClick = (e) => {
        let selectedPage = e.selected;
        setCurrentPage(selectedPage)
    }



    return (
    
        <Router>

        <>
        <h1 className="App-header">{name}</h1>
        <div className="App">
            <CountyChanger 
            countyChange={countyChange}
            photos={photos}
            />
            <DateChanger dateChanger={dateChange} />
            <Switch>
            <Route 
                exact path="/" 
                render={()=> 
                <PhotoGrid
                photos={photos}
                // MAYBE PASS EVENT HANDLER AS PROPS DOWN TO REACT IN HERE
                pageCount={pageCount}
                changePage={handlePageClick}
                currentPage={photos}
                />}
            />
            <Route 
                path = "/:id"
                component={SinglePhotoView}
            />
            </Switch>
                
        </div>
        </>

        </Router>
           
       
    )

}

export default PhotoContainer;