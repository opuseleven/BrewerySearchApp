import styles from '../styles/Components.module.css';
import { StateSelector, BreweryTypeSelector } from '../components';

function Filters({ setStateFilter, setTypeFilter }) {
  return (
    <div className={styles.filterscontainer}>
      <div>
        <StateSelector setStateFilter={setStateFilter} />
      </div>

      <div>
        <BreweryTypeSelector setTypeFilter={setTypeFilter} />
      </div>
    </div>
  )
}
export { Filters };
