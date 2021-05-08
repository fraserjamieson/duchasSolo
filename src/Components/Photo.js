const Photo = ({photo}) => {
    // let image = require

    if (!photo.referenceNumber){
        return null;
    }

    return (
    
    <figure className="figureImg" >
    <img src={`https://doras.gaois.ie/cbeg/${photo.referenceNumber}.jpg?format=jpg&width=235&height=128&mode=crop&anchor=center&quality=85`}></img>
        <figcaption>
            <p>{photo.archivedDescription}</p>
            <p>{photo.counties[0].qualifiedNameEN}</p>
            <p>{photo.date.isoDate}</p>
            {/* <p>{photo.handbooktopic.topicEN}</p> */}
            {/* <p>{photo.handbooktopic.subTopicEN}</p> */}
        </figcaption>
    </figure>
    );

}
export default Photo;