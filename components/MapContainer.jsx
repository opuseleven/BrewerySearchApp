import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

function MapContainer({ center }) {

  const accessToken = 'pk.eyJ1Ijoib3B1c2VsZXZlbiIsImEiOiJja3R4Zzlkem0ydHF6MnBvM2p2b211cXpmIn0.wf4TNUb_e9A8namFw9ojQA'

  return (
    <div role="map">
      <Map
        initialViewState={{
          longitude: center[0],
          latitude: center[1],
          zoom: 14,
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
