import { Filters } from '../components';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Filters component', () => {

  let state = "";
  let type = {
    micro: false,
    brewpub: false,
    contract: false,
    large: false,
    regional: false
  }

  function setState(s) {
    state = s;
  }
  function setType(obj) {
    type = obj;
  }

  it('Renders', () => {
    render(<Filters setStateFilter={setState} typeFilterState={type} setTypeFilterState={setType} />);
    expect(screen.getByRole('combobox')).toHaveTextContent('--select state--');
    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes[1].id).toBe('brewpub');
    })

  it('Changes both state and type variables', () => {
    render(<Filters setStateFilter={setState} typeFilterState={type} setTypeFilterState={setType} />);
    fireEvent.change(screen.getByRole('combobox'), {target: {value: "colorado"}});
    expect(screen.getByRole('combobox').value).toBe('colorado');
    expect(state).toBe('colorado');
    const checkboxes = screen.getAllByRole('checkbox');
    fireEvent.click(checkboxes[0]);
    expect(screen.getByRole('combobox').value).toBe('colorado');
    expect(checkboxes[0].value).toBe('on');
    expect(type.micro).toBe(true);
    fireEvent.click(checkboxes[0]);
    expect(type.micro).toBe(false);
  })

})
