import styles from '../styles/Components.module.css';

function BreweryTypeSelector({ setTypeFilter }) {

  function handleChange(e) {
    setTypeFilter(e.target.value);
  }

  return (
    <div className={styles.typeselectorcontainer}>
      <select defaultValue="--select type--" onChange={handleChange}>
        <option value="--select type--">--select type--</option>
        <option value="microbrewery">Microbrewery</option>
      </select>
    </div>
  )
}
export { BreweryTypeSelector };
