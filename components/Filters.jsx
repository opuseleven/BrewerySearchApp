import styles from '../styles/Components.module.css';
import { StateSelector, BreweryTypeFilters } from '../components';
import { TypeFilterState } from '../types';
import { useState } from 'react';

function Filters({ setStateFilter, typeFilterState, setTypeFilterState }) {

  const [typeFilters, setTypeFilters] = useState(typeFilterState);

  function updateMicro(bool) {
    const newObject = {
      micro: bool,
      brewpub: typeFilters.brewpub,
      contract: typeFilters.contract,
      large: typeFilters.large,
      regional: typeFilters.regional
    }
    setTypeFilters(newObject);
    setTypeFilterState(newObject);
  }
  function updateBrewpub(bool) {
    const newObject = {
      micro: typeFilters.micro,
      brewpub: bool,
      contract: typeFilters.contract,
      large: typeFilters.large,
      regional: typeFilters.regional
    }
    setTypeFilters(newObject);
    setTypeFilterState(newObject);
  }
  function updateContract(bool) {
    const newObject = {
      micro: typeFilters.micro,
      brewpub: typeFilters.brewpub,
      contract: bool,
      large: typeFilters.large,
      regional: typeFilters.regional
    }
    setTypeFilters(newObject);
    setTypeFilterState(newObject);
  }
  function updateLarge(bool) {
    const newObject = {
      micro: typeFilters.micro,
      brewpub: typeFilters.brewpub,
      contract: typeFilters.contract,
      large: bool,
      regional: typeFilters.regional
    }
    setTypeFilters(newObject);
    setTypeFilterState(newObject);
  }
  function updateRegional(bool) {
    const newObject = {
      micro: typeFilters.micro,
      brewpub: typeFilters.brewpub,
      contract: typeFilters.contract,
      large: typeFilters.large,
      regional: bool
    }
    setTypeFilters(newObject);
    setTypeFilterState(newObject);
  }

  return (
    <div className={styles.filterscontainer}>
      <div>
        <StateSelector setStateFilter={setStateFilter} />
      </div>

      <div>
        <BreweryTypeFilters typeFilters={typeFilters} setMicroState={updateMicro} setBrewpubState={updateBrewpub} setContractState={updateContract} setLargeState={updateLarge} setRegionalState={updateRegional} />
      </div>
    </div>
  )
}
export { Filters };
