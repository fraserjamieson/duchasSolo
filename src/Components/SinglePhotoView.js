import { useParams, Link } from "react-router-dom";
import axios, { useEffect } from "react";
import {useState} from "react";
import PhotoContainerMap from "../Components/PhotoContainerMap";

const SinglePhotoView = () => {
    
    const [popOutPhoto, setPopOutPhoto] = useState({});

    let { id } = useParams();

    const fetchPhotos = () => {
    const url = `https://www.duchas.ie/api/v0.5/cbeg/${id}?apiKey=Rua2njQgwdoZ9vnRb7JTV7dfHQ4c5a`

    fetch(url)
    .then(res => res.json())
    .then(data => setPopOutPhoto(data))
    .catch(err => console.error(err));
    };

    useEffect(()=>{
        fetchPhotos();
    }, [])

    return (
        <>
        <div className="singleFigureWrapper">
            <figure className="singleFigureImg">
            <img src={`https://doras.gaois.ie/cbeg/${popOutPhoto.referenceNumber}.jpg?format=jpg&width=620&height=620&quality=85`}/>  
        
            <figcaption>
            {popOutPhoto.archivedDescription}<br></br><br></br>
            {popOutPhoto.date ? popOutPhoto.date.year : 'no date assigned'}<br></br><br></br>
            <Link to="/">
                <button>Go back</button>
            </Link>
            </figcaption>
            </figure> 
        </div>

        <PhotoContainerMap />
        </>
    )

}
export default SinglePhotoView;