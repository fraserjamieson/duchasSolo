import PhotoGrid from '../Components/PhotoGrid';
import {useEffect, useState} from 'react';
import CountyChanger from '../Components/CountyChanger';
import DateChanger from '../Components/DateChanger';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SinglePhotoView from '../Components/SinglePhotoView';
import Pagination from '../Components/Pagination';
import PhotoContainerMap from '../Components/PhotoContainerMap';
import 'leaflet/dist/leaflet.css';

const PhotoContainer = () => {
    let name = 'Duchas Photographic Collection';

    const [photos, setPhotos] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const [countyID, setCountyID] = useState("100000");
    const [startDate, setStartDate] = useState("1950");
    const [endDate, setEndDate] = useState("1959");

    const [currentPage, setCurrentPage] = useState(1);
    const [photosPerPage] = useState(20);


    const fetchPhotos = () => {
        setLoaded(true);
        fetch(`https://www.duchas.ie/api/v0.6/cbeg/?CountyID=${countyID}&DateFrom=${startDate}&DateTo=${endDate}&apiKey=D4vMJJ39vTaRD5ZEy4uJU2mHrG82UT`)
        .then(res => {
            return res.json();
        })
        .then(data=> {
            console.log('initial fetch from county with interpolated start date - to ', data) 
            setPhotos(data)
            // setLoaded(false)
        })
            .catch(err => console.error(err))
    };

    useEffect(()=>{
        fetchPhotos();
        changeDate(startDate);
        
    },[countyID, startDate, endDate]);   // <<< This dependancy array functins as 'ComponentDidMount' ??  "mimics componentDidMount lifecycle method"

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

    // const handlePageClick = (e) => {
    //     let selectedPage = e.selected;

    //     setOffset(selectedPage * perPage)
    //     setCurrentPage(selectedPage)
        
    // }

    const indexOfLastPost = currentPage * photosPerPage;
    const indexOfFirstPost = indexOfLastPost - photosPerPage;
    
    const currentPhotos = photos.slice(indexOfFirstPost, indexOfLastPost);

    // Change page handler
    const handlePaginate = (pageNumber) => {
        setCurrentPage(pageNumber)
        window.scrollTo({top:0, left:0, behavior: 'smooth'})
    };

    return (
        <>
        <Router>

        <h1 className="App-header">{name}</h1>
        <div className="App">
            <CountyChanger 
            countyChange={countyChange}
            photos={currentPhotos}
            />
            <DateChanger dateChanger={dateChange} />
            <Switch>
                <Route 
                    exact path="/" 
                    render={()=> 
                    <PhotoGrid
                        photos={currentPhotos}
                        loaded={loaded}
                        currentPage={currentPage}
                        //  
                    />}
                />
                <Route 
                    path = "/:id"
                    component={SinglePhotoView}
                />
            </Switch> 
        </div>

        </Router>

        <Pagination
        photosPerPage={photosPerPage} 
        totalPhotos={photos.length} 
        paginate={handlePaginate}/>

        <PhotoContainerMap />

        </>

       
    )

}

export default PhotoContainer;