import { useState } from 'react';
import { Marker } from 'react-map-gl';
import { RenderPopup } from './';
import styles from '../styles/Components.module.css';

function RenderBreweryMap({ brewery, setSelectedBrewery }) {

  const [showPopup, setShowPopup] = useState(false);

  function handleClick() {
    setShowPopup(!showPopup);
    setSelectedBrewery(brewery);
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
        key={brewery.obdb_id}
        longitude={brewery.longitude}
        latitude={brewery.latitude}
        color="red"
        style={{ cursor: 'pointer' }}
        onClick={() => handleClick()}
      />
    </div>
  )
}
export { RenderBreweryMap };
