import { render, fireEvent, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BreweryTypeSelector } from '../components';

describe('BreweryTypeSelector component', () => {

  let type = '';
  function setType(s) {
    type = s;
  }

  it('Renders', () => {
    render(<BreweryTypeSelector setTypeFilter={setType} />);
    const options = screen.getAllByRole('option');
    expect(options[0]).toHaveTextContent('--select type--');
    expect(options[1]).toHaveTextContent('Microbrewery');
  })

  it('Changes type value', () => {
    render(<BreweryTypeSelector setTypeFilter={setType} />);
    const selector = screen.getByRole('combobox');
    act(() => {
      fireEvent.change(selector, {target: {value: "micro"}});
    })
    expect(type).toBe('micro');
  })
})
