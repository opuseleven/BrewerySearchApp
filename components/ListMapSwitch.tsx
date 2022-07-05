import styles from '../styles/Components.module.css';
import { useState, useEffect } from 'react';

interface ListMapSwitchProps {
  showMap: boolean,
  setShowMap: React.Dispatch<React.SetStateAction<boolean>>
}

const ListMapSwitch: React.FC<ListMapSwitchProps> = ({ showMap, setShowMap }) => {

  const [map, setMap] = useState(showMap);
  const [status, setStatus] = useState(getStatus(map));

  function handleCheckbox() {
    setShowMap(!map);
    setStatus(getStatus(!map));
    setMap(!map);
  }

  function getStatus(bool: boolean) {
    if (bool) {
      return "Hide";
    } else {
      return "Show";
    }
  }

  useEffect(() => {
    setMap(showMap);
    setStatus(getStatus(showMap));
  }, [showMap])

  return (
    <div className={styles.mapbutton}>
      <button onClick={handleCheckbox}>
        {status} Map
      </button>
    </div>
  )
}
export { ListMapSwitch };
