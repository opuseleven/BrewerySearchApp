// maybe i'm dumb but i don't know why this component doesn't work

import { useState } from 'react';
import styles from '../styles/Components.module.css';

function SearchForm({ handleSearchClick, setBreweries }) {

  function useField(type) {
    const [value, setValue] = useState('');
    function onChange(event) {
      setValue(event.target.value);
    }
    return {
      type,
      value,
      onChange
    }
  }

  const searchInput = useField('text');

  return (
    <div className={styles.searchformcontainer}>
      <form className={styles.searchform} onSubmit={() => handleSearchClick(searchInput.value, setBreweries)}>
        <input {...searchInput} />
        <button className={styles.submitbutton} >Submit</button>
      </form>
    </div>
  )
}
export { SearchForm };
