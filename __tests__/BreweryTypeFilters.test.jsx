import { render, fireEvent, screen, act } from '@testing-library/react';
import { BreweryTypeFilters } from '../components';

describe('BreweryTypeFilters component', () => {

  let typeFilterState = {
    micro: false,
    brewpub: false,
    contract: false,
    large: false,
    regional: false
  };
  function setMicroState(bool) {
    typeFilterState.micro = bool;
  }
  function setBrewpubState(bool) {
    typeFilterState.brewpub = bool;
  }
  function setContractState(bool) {
    typeFilterState.contract = bool;
  }
  function setLargeState(bool) {
    typeFilterState.large = bool;
  }
  function setRegionalState(bool) {
    typeFilterState.regional = bool;
  }

  it('Component renders', () => {
    render(<BreweryTypeFilters typeFilters={typeFilterState} setMicroState={setMicroState} setBrewpubState={setBrewpubState} setContractState={setContractState} setLargeState={setLargeState} setRegionalState={setRegionalState} />);
    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes[0].id).toBe('micro');
  })

  it('Component functions to change state with checkbox', () => {
    render(<BreweryTypeFilters typeFilters={typeFilterState} setMicroState={setMicroState} setBrewpubState={setBrewpubState} setContractState={setContractState} setLargeState={setLargeState} setRegionalState={setRegionalState} />);
    const checkboxes = screen.getAllByRole('checkbox');
    act(() => {
      fireEvent.click(checkboxes[0]);
    })
    expect(typeFilterState.micro).toBe(true);
    act(() => {
      fireEvent.click(checkboxes[1]);
    })
    expect(typeFilterState.brewpub).toBe(true);
    act(() => {
      fireEvent.click(checkboxes[2]);
    })
    expect(typeFilterState.contract).toBe(true);
    act(() => {
      fireEvent.click(checkboxes[1]);
    })
    expect(typeFilterState.brewpub).toBe(false);
    act(() => {
      fireEvent.click(checkboxes[3]);
      fireEvent.click(checkboxes[4]);
    })
    expect(typeFilterState.large).toBe(true);
    expect(typeFilterState.regional).toBe(true);
    act(() => {
      fireEvent.click(checkboxes[3]);
    })
    expect(typeFilterState.large).toBe(false);
  })
})
