import Map, { Marker } from 'react-map-gl';
import { RenderPopup } from '.';
import { FC, Dispatch, SetStateAction, useState, useEffect } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Brewery } from '../types';
import { BreweryError } from '../errors';

interface MapContainerProps {
  arr: Brewery[],
  selectedBrewery: Brewery | undefined,
  setSelectedBrewery: Dispatch<SetStateAction<Brewery | undefined>>,
  darkMode: boolean
}

const MapContainer: FC<MapContainerProps> =
  ({ arr, selectedBrewery, setSelectedBrewery, darkMode }) => {

  const accessToken = process.env.ACCESSTOKEN;
  let defaultCenter = [-86.767960, 36.174465];
  if (arr.length > 0) {
    if (arr[0].longitude) {
      if (arr[0].latitude) {
        defaultCenter = [arr[0].longitude, arr[0].latitude];
      }
    }
  }

  const [displayedBreweries, setDisplayedBreweries] = useState(arr);

  let defaultBrewery: Brewery = BreweryError();

  useEffect(() => {
    if (arr) {
      setDisplayedBreweries(arr);
      setSelectedBrewery(arr[0]);
    } else {
      setSelectedBrewery(defaultBrewery);
    }
  }, [arr])

  const [brewery, setBrewery] = useState(selectedBrewery);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setBrewery(selectedBrewery);
    setShowPopup(true);
  }, [selectedBrewery])

  function handleClick(brewery: Brewery) {
    setShowPopup(false);
    setSelectedBrewery(brewery);
    setShowPopup(true);
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
        mapStyle={darkMode ? "mapbox://styles/mapbox/dark-v10" : "mapbox://styles/mapbox/streets-v9"}
        mapboxAccessToken={accessToken}
      >
        <div>
          {
            arr && (
              displayedBreweries.map(b => (
                <li key={b.obdb_id}>
                  <Marker
                    longitude={b.longitude ? b.longitude : 0}
                    latitude={b.latitude ? b. latitude : 0}
                    color='red'
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleClick(b)}
                  />
                </li>
              ))
            )
          }
        </div>
        <div>
          {
            selectedBrewery && brewery && (
              <div>
                <RenderPopup brewery={brewery} showPopup={showPopup}
                  setShowPopup={setShowPopup} />
              </div>
            )
          }
        </div>
      </Map>
    </div>
  )
}
export { MapContainer };
