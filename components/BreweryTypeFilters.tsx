import styles from '../styles/Components.module.css';
import { TypeFilterState } from '../types';
import { useState } from 'react';

interface BreweryTypeFiltersProps {
  typeFilters: TypeFilterState,
  setMicroState: (bool: boolean) => void,
  setBrewpubState: (bool: boolean) => void,
  setContractState: (bool: boolean) => void,
  setLargeState: (bool: boolean) => void,
  setRegionalState: (bool: boolean) => void
}

const BreweryTypeFilters: React.FC<BreweryTypeFiltersProps> =
  ({ typeFilters, setMicroState, setBrewpubState, setContractState,
    setLargeState, setRegionalState }) => {

  const [micro, setMicro] = useState(typeFilters.micro);
  const [brewpub, setBrewpub] = useState(typeFilters.brewpub);
  const [contract, setContract] = useState(typeFilters.contract);
  const [large, setLarge] = useState(typeFilters.large);
  const [regional, setRegional] = useState(typeFilters.regional);

  function handleMicroCheck() {
    const bool = !micro;
    setMicro(bool);
    setMicroState(bool);
  }
  function handleBrewpubCheck() {
    const bool = !brewpub;
    setBrewpub(bool);
    setBrewpubState(bool);
  }
  function handleContractCheck() {
    const bool = !contract;
    setContract(bool);
    setContractState(bool);
  }
  function handleLargeCheck() {
    const bool = !large;
    setLarge(bool);
    setLargeState(bool);
  }
  function handleRegionalCheck() {
    const bool = !regional;
    setRegional(bool);
    setRegionalState(bool);
  }

  return (
    <div>
      <div>
        <input type="checkbox" id="micro" checked={micro} onChange={handleMicroCheck} />
        <label htmlFor="micro">Microbrewery</label>
      </div>

      <div>
        <input type="checkbox" id="brewpub" checked={brewpub} onChange={handleBrewpubCheck} />
        <label htmlFor="brewpub">Brewpub</label>
      </div>

      <div>
        <input type="checkbox" id="contract" checked={contract} onChange={handleContractCheck} />
        <label htmlFor="contract">Contract</label>
      </div>

      <div>
        <input type="checkbox" id="large" checked={large} onChange={handleLargeCheck} />
        <label htmlFor="large">Large</label>
      </div>

      <div>
        <input type="checkbox" id="regional" checked={regional} onChange={handleRegionalCheck} />
        <label htmlFor="regional">Regional</label>
      </div>
    </div>
  )
}
export { BreweryTypeFilters };
