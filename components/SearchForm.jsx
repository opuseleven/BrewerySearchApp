import { useState } from 'react';

function SearchForm({ setSearchTerm }) {

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
    <div>
      <form>
        <input {...searchInput} />
        <button onClick={() => setSearchTerm(searchInput.value)}>Submit</button>
      </form>
    </div>
  )
}
export { SearchForm };
