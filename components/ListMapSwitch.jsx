import styles from '../styles/Components.module.css';
import { useState } from 'react';

function ListMapSwitch() {

  const [list, setList] = useState(false);

  function handleCheckbox() {
    setList(!list);
  }

  return (
    <div>
      <input type="checkbox" id="checkbox-input" onChange={handleCheckbox} className={styles.checkboxinput} />
      <label htmlFor="checkbox-input" className={styles.roundslidercontainer}>
        <div>List</div>
        <div>Map</div>
        <div className={styles.roundslider}></div>
      </label>
    </div>
  )
}
export { ListMapSwitch };
