const Photo = ({photo}) => {
    // let image = require

    // 'photo' prop value is an array of objects returned from JSON

    const imgMissing = "no photo available for this entry"

    if (!photo.referenceNumber || !photo.photographer){
        return null;
    }

    const {archivedDescription, date, handbookTopic, photographer} = photo;

    return (
    
    <figure className="figureImg" >
    <img src={`https://doras.gaois.ie/cbeg/${photo.referenceNumber}.jpg?format=jpg&width=235&height=128&mode=crop&anchor=center&quality=85`} alt={imgMissing}></img>
        <figcaption>
            <p>{archivedDescription}</p>
            {/* <p>{counties.qualifiedNameEN}</p> */}
            <p>{date ? date.isoDate : 'no date assigned'}</p>
            <p>{handbookTopic.topicEN}</p>
            <p>{photographer.names[0].fullName}</p>
            {/* <p>{counties.nameEn}</p> */}
        </figcaption>
    </figure>
    );

}
export default Photo;