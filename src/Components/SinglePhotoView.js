import { useParams, Link } from "react-router-dom";
import axios, { useEffect } from "react";
import Button from "react";
import {useState} from "react";

const SinglePhotoView = () => {
    
    const [popOutPhoto, setPopOutPhoto] = useState({});

    let { id } = useParams();

    const fetchPhotos = () => {
    const url = `https://www.duchas.ie/api/v0.5/cbeg/${id}?apiKey=Rua2njQgwdoZ9vnRb7JTV7dfHQ4c5a`

    fetch(url)
    .then(res => res.json())
    .then(data => setPopOutPhoto(data))
    };

    useEffect(()=>{
        fetchPhotos();
    }, [])

    return (
        <>
        
        <figure className="figureImg" >
        <img src={`https://doras.gaois.ie/cbeg/${popOutPhoto.referenceNumber}.jpg?format=jpg&width=620&height=620&quality=85`}/>  
        <p>{popOutPhoto.archivedDescription}</p>
        <figcaption>
        
        <p>{popOutPhoto.date ? popOutPhoto.date.year : 'no date assigned'}</p>
        <Link to="/">
            <button>Go back</button>
        </Link>
        </figcaption>
        </figure> 
        
        </>
    )

}
export default SinglePhotoView;