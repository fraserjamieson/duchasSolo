const Photo = ({photo}) => {
    // let image = require

    // 'photo' prop value is an array of objects returned from JSON

    if (!photo.referenceNumber || !photo.photographer){
        return null;
    }

    const {archivedDescription, date, handbookTopic, photographer} = photo;
    // const [dublin] = Object.entries(photo);

    // const {counties} = dublin;
    // 'counties' is an array of objects

    return (
    
    <figure className="figureImg" >
    <img src={`https://doras.gaois.ie/cbeg/${photo.referenceNumber}.jpg?format=jpg&width=235&height=128&mode=crop&anchor=center&quality=85`}></img>
        <figcaption>
            <p>{archivedDescription}</p>
            {/* <p>{counties.qualifiedNameEN}</p> */}
            <p>{date.isoDate}</p>
            <p>{handbookTopic.topicEN}</p>
            <p>{photographer.names[0].fullName}</p>
            {/* <p>{counties.nameEn}</p> */}
        </figcaption>
    </figure>
    );

}
export default Photo;