import { useState } from 'react';
import { Marker } from 'react-map-gl';
import { RenderPopup } from './';

function RenderBreweryMap({ brewery }) {

  const [showPopup, setShowPopup] = useState(false);

  function handleClick() {
    setShowPopup(!showPopup);
    // setSelectedBrewery()
  }

  return (
    <div>
      {
        showPopup && (
          <RenderPopup
            brewery={brewery}
            showPopup={showPopup}
            setShowPopup={setShowPopup}
          />
        )
      }
      <Marker
        longitude={brewery.longitude}
        latitude={brewery.latitude}
        color="red"
        onClick={() => setShowPopup(!showPopup)} />
    </div>
  )
}
export { RenderBreweryMap };
