import styles from '../styles/Components.module.css';

function BreweryTypeSelector({ setTypeFilter }) {

  function handleChange(e) {
    setTypeFilter(e.target.value);
  }

  return (
    <div className={styles.typeselectorcontainer}>
      <select defaultValue="" onChange={handleChange}>
        <option value="">--select type--</option>
        <option value="micro">Microbrewery</option>
        <option value="brewpub">Brewpub</option>
        <option value="contract">Contract</option>
        <option value="large">Large</option>
        <option value="regional">Regional</option>
      </select>
    </div>
  )
}
export { BreweryTypeSelector };
