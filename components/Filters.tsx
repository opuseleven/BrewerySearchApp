import styles from '../styles/Components.module.css';
import { StateSelector, BreweryTypeFilters } from '../components';
import { TypeFilterState } from '../types';
import { FC, Dispatch, SetStateAction, useState } from 'react';

interface FiltersProps {
  setStateFilter: Dispatch<SetStateAction<string>>,
  typeFilterState: TypeFilterState,
  setTypeFilterState: Dispatch<SetStateAction<TypeFilterState>>
}

const Filters: FC<FiltersProps> = ({ setStateFilter, typeFilterState, setTypeFilterState }) => {

  const [typeFilters, setTypeFilters] = useState(typeFilterState);

  function updateMicro(bool: boolean) {
    const newObject: TypeFilterState = {
      micro: bool,
      brewpub: typeFilters.brewpub,
      contract: typeFilters.contract,
      large: typeFilters.large,
      regional: typeFilters.regional
    }
    setTypeFilters(newObject);
    setTypeFilterState(newObject);
  }
  function updateBrewpub(bool: boolean) {
    const newObject: TypeFilterState = {
      micro: typeFilters.micro,
      brewpub: bool,
      contract: typeFilters.contract,
      large: typeFilters.large,
      regional: typeFilters.regional
    }
    setTypeFilters(newObject);
    setTypeFilterState(newObject);
  }
  function updateContract(bool: boolean) {
    const newObject: TypeFilterState = {
      micro: typeFilters.micro,
      brewpub: typeFilters.brewpub,
      contract: bool,
      large: typeFilters.large,
      regional: typeFilters.regional
    }
    setTypeFilters(newObject);
    setTypeFilterState(newObject);
  }
  function updateLarge(bool: boolean) {
    const newObject: TypeFilterState = {
      micro: typeFilters.micro,
      brewpub: typeFilters.brewpub,
      contract: typeFilters.contract,
      large: bool,
      regional: typeFilters.regional
    }
    setTypeFilters(newObject);
    setTypeFilterState(newObject);
  }
  function updateRegional(bool: boolean) {
    const newObject: TypeFilterState = {
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

      <div className={styles.stateselectorcontainer}>
        <StateSelector setStateFilter={setStateFilter} />
      </div>

      <div>

        <BreweryTypeFilters typeFilters={typeFilters} setMicroState={updateMicro}
          setBrewpubState={updateBrewpub} setContractState={updateContract}
          setLargeState={updateLarge} setRegionalState={updateRegional} />

      </div>
    </div>
  )
}
export { Filters };
