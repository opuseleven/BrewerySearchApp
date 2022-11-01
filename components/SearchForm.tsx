import { FC, Dispatch, SetStateAction, useState } from 'react';
import { Brewery } from '../types';
import styles from '../styles/Components.module.css';
import { handleSearchClick } from '../services';

interface SearchFormProps {
  setBreweries: Dispatch<SetStateAction<Brewery[]>>,
  setShowMap: Dispatch<SetStateAction<boolean>>
}

const SearchForm: FC<SearchFormProps> = ({ setBreweries, setShowMap }) => {

  function useField(type: string) {
    const [value, setValue] = useState('');
    function onChange(event: React.ChangeEvent<HTMLInputElement>) {
      setValue(event.target.value);
    }
    return {
      type,
      value,
      onChange
    }
  }

  const handleClick = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowMap(false);
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
