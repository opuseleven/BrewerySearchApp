import { Popup } from 'react-map-gl';
import { FC, Dispatch, SetStateAction, useState, useEffect } from 'react';
import { PopupContents } from '.';
import { Brewery } from '../types';

interface RenderPopupProps {
  brewery: Brewery,
  showPopup: boolean,
  setShowPopup: Dispatch<SetStateAction<boolean>>
}

const RenderPopup: FC<RenderPopupProps> = ({ brewery, showPopup, setShowPopup }) => {

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
            longitude={brewery.longitude ? brewery.longitude : -1}
            latitude={brewery.latitude ? brewery.latitude : -1}
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
