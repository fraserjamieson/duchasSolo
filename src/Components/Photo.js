import { useEffect, useState } from "react";
import {NavLink} from "react";
import SinglePhotoView from "react";

const Photo = ({photo}) => {

    const [value, setValue] = useState(true);

    if (!photo.referenceNumber || !photo.photographer){
        return null;
    };

    if (!photo || !value){
        return null;
    };

    const {archivedDescription, date, handbookTopic, photographer} = photo;

    const checkImage = () => {
        setValue(false)
    };

    return (
    <>
        <NavLink to=  "/SinglePhotoView"
        activeStyle={{
            fontWeight: "bold",
            color: "green"
        }}>
            More info
        </NavLink>
        <figure className="figureImg" >
        <img src={`https://doras.gaois.ie/cbeg/${photo.referenceNumber}.jpg?format=jpg&width=235&height=128&mode=crop&anchor=center&quality=85`}onError={checkImage}/>  
        <figcaption>
        
        <p>{date ? date.year : 'no date assigned'}</p>
        <p>{handbookTopic.topicEN}</p>
        <p>{photographer.names[0].fullName}</p>
        </figcaption>
        </figure> 
    
    </>
    );

}
export default Photo;