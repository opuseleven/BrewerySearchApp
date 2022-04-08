import { useState } from 'react';
import { Marker, Popup } from 'react-map-gl';

function RenderBreweryMap({ brewery }) {

  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      {
        showPopup && (
          <Popup
            longitude={brewery.longitude}
            latitude={brewery.latitude}
            anchor="top"
            onClose={() => setShowPopup(false)}
            >
            {brewery.name}
          </Popup>
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
