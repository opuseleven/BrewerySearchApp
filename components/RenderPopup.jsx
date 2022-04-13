import { Popup } from 'react-map-gl';
import { useState, useEffect } from 'react';

function RenderPopup({ brewery, showPopup, setShowPopup }) {

  const [popup, setPopup] = useState(showPopup);

  useEffect(() => {
    setPopup(showPopup);
  }, [showPopup])

  return (
    <div role="popup">
      {
        popup && (
          <Popup
            longitude={brewery.longitude}
            latitude={brewery.latitude}
            anchor="top"
            onClose={() => setShowPopup(false)}
          >
            {brewery.name}
          </Popup>)
      }
    </div>
  )
}
export { RenderPopup };
