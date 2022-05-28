import { Popup } from 'react-map-gl';
import { useState, useEffect } from 'react';
import { PopupContents } from '.';

function RenderPopup({ brewery, showPopup, setShowPopup }) {

  const [popup, setPopup] = useState(showPopup);

  useEffect(() => {
    setPopup(showPopup);
  }, [brewery, showPopup])

  function handleClose() {
    setShowPopup(false);
  }

  return (
    <div role="popup">
      {
        popup && (
          <Popup
            longitude={brewery.longitude}
            latitude={brewery.latitude}
            anchor="top"
            onClose={() => handleClose}
          >
            <PopupContents brewery={brewery} />
          </Popup>)
      }
    </div>
  )
}
export { RenderPopup };
