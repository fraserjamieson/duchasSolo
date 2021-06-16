const SinglePhotoView = ({props}) => {
    
    const [popOutPhoto, setPopOutPhoto] = useState("");

    let {id} = useParams();

    return (
        <h1>Here will be pop out image{id}</h1>
        
    //       <figure className="figureImg" >
    //     <img src={`https://doras.gaois.ie/cbeg/${photo.referenceNumber}.jpg?format=jpg&width=235&height=128&mode=crop&anchor=center&quality=85`}onError={checkImage}/>  
    //     <p>{archivedDescription}</p>
    //     <figcaption>
        
    //     <p>{date ? date.year : 'no date assigned'}</p>
    //     <p>{handbookTopic.topicEN}</p>
    //     <p>{photographer.names[0].fullName}</p>
    //     </figcaption>
    //     </figure> 
    )

}
export default SinglePhotoView;