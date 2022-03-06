import styles from '../styles/Components.module.css';
import { useState } from 'react';

function ListMapSwitch({ setShowMap }) {

  const [map, setMap] = useState(false);

  function handleCheckbox() {
    setShowMap(!map);
    setMap(!map);
  }

  return (
    <div>
      <input type="checkbox" id="checkbox-input" onChange={handleCheckbox} />
      <label htmlFor="checkbox-input" className={styles.roundslidercontainer}>
        <div>List</div>
        <div>Map</div>
        <div className={styles.roundslider}></div>
      </label>
    </div>
  )
}
export { ListMapSwitch };
