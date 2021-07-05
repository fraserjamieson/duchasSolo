import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const PhotoContainerMap = () => {

    // let mapOfIreland = L.map('mapid').setView([51.505, -0.09], 13);

    // var popup = L.popup()

    // const handleMapClick = (e) => {
    //     popup
    //     .setLatLng(e.latlng)
    //     .setContent("You clicked the map at " + e.latlng.toString())
    //     .openOn(mapOfIreland);
    // } 
    const markerNodes = () => {
        return (

        <Marker position={[51.505, -0.09]}>
        <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
        </Marker>

        )

    }

    return (
    <div className="containerMap">

    <MapContainer center={[51.505, -0.09]} zoom={13} >
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
            <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
    </MapContainer>
    </div>
        
    );
    
}
export default PhotoContainerMap;