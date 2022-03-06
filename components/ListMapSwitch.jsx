import styles from '../styles/Components.module.css';
import { useState } from 'react';

function ListMapSwitch({ showMap, setShowMap }) {

  const [map, setMap] = useState(showMap);
  const [status, setStatus] = useState(getStatus(map));

  function handleCheckbox() {
    setShowMap(!map);
    setStatus(getStatus(!map));
    setMap(!map);
  }

  function getStatus(bool) {
    if (bool) {
      return "Hide";
    } else {
      return "Show";
    }
  }

  return (
    <div>
      <button onClick={handleCheckbox}>
        {status} Map
      </button>
    </div>
  )
}
export { ListMapSwitch };
