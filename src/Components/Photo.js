import { useState } from "react";
import {Link} from "react-router-dom";

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

    let photoCaption = null;

    return (
    <>
    <figure className="figureImg" >
        <img 
        src={`https://doras.gaois.ie/cbeg/${photo.referenceNumber}.jpg?format=jpg&width=350&height=256&mode=crop&anchor=center&quality=85`}
        onError={checkImage}/> 
        
        {date ? 
        photoCaption =
        <figcaption>
            {date.year}
        <p>{handbookTopic.topicEN}</p>
        <p>{photographer.names[0].fullName}</p>
        
        <Link to=  {`${photo.id}`}
        activeStyle={{
            fontWeight: "bold",
            color: "green"
        }}>
            More info
        </Link>
        </figcaption>

        : 
        photoCaption =
        <figcaption>
        
        <p>{handbookTopic.topicEN}</p>
        <p>{photographer.names[0].fullName}</p>
        
        <Link to=  {`${photo.id}`}
        activeStyle={{
            fontWeight: "bold",
            color: "green"
        }}>
            More info
        </Link>
        </figcaption>}
    
    </figure> 
    </>
    );

}
export default Photo;