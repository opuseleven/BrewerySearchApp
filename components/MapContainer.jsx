import Map from 'react-map-gl';
import { RenderBreweryMap } from '.';
import 'mapbox-gl/dist/mapbox-gl.css';

function MapContainer({ arr }) {

  const accessToken = 'pk.eyJ1Ijoib3B1c2VsZXZlbiIsImEiOiJja3R4Zzlkem0ydHF6MnBvM2p2b211cXpmIn0.wf4TNUb_e9A8namFw9ojQA'
  let defaultCenter = [-86.767960, 36.174465];
  if (arr.length > 0) {
    defaultCenter = [arr[0].longitude, arr[0].latitude];
  }

  return (
    <div role="map">
      <Map
        initialViewState={{
          longitude: defaultCenter[0],
          latitude: defaultCenter[1],
          zoom: 8,
          }}
        style={{width: 600, height: 400}}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={accessToken}
      >
        {
          arr && (
            arr.map(b => (
              <RenderBreweryMap brewery={b} />
            ))
          )
        }
      </Map>
    </div>
  )
}
export { MapContainer };
