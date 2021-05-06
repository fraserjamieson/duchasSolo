const Photo = ({photo}) => {
    // let image = require

    if (!photo.referenceNumber){
        return null;
    }

    return (
        <div>
            <figure >
            <img src={`https://doras.gaois.ie/cbeg/${photo.referenceNumber}.jpg?format=jpg&width=400&quality=85`}></img>
            <figcaption>
                <>
                <p>Here will be the individual Photo</p>
                <p>{photo.archivedDescription}</p>
                <p>{photo.counties[0].qualifiedNameEN}</p>
                <p>{photo.date.isoDate}</p>
                {/* <p>{photo.handbooktopic.topicEN}</p> */}
                {/* <p>{photo.handbooktopic.subTopicEN}</p> */}
                </>
            </figcaption>
            </figure>

        </div>
    );

}
export default Photo;