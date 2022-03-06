import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

function MapContainer({ center }) {

  const accessToken = 'pk.eyJ1Ijoib3B1c2VsZXZlbiIsImEiOiJja3R4Zzlkem0ydHF6MnBvM2p2b211cXpmIn0.wf4TNUb_e9A8namFw9ojQA'

  const defaultCenter  = center;

  return (
    <div role="map">
      <Map
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14,
          center: defaultCenter
          }}
        style={{width: 600, height: 400}}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={accessToken}
      >
        <Marker longitude={center[0]} latitude={center[1]} color="red" />
      </Map>
    </div>
  )
}
export { MapContainer };
