import { useState } from 'react';
import styles from '../styles/Components.module.css';
import { handleSearchClick } from '../services';

function SearchForm({ setBreweries }) {

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

  const handleClick = (e) => {
    e.preventDefault();
    handleSearchClick(searchInput.value, setBreweries);
  }

  const searchInput = useField('text');

  return (
    <div className={styles.searchformcontainer}>
      <form className={styles.searchform} onSubmit={handleClick}>
        <input {...searchInput} />
        <button className={styles.submitbutton} >Submit</button>
      </form>
    </div>
  )
}
export { SearchForm };
