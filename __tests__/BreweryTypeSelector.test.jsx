import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BreweryTypeSelector } from '../components';

describe('BreweryTypeSelector component', () => {

  let type = '--select type--';
  function setType(s) {
    type = s;
  }

  it('Renders', () => {
    render(<BreweryTypeSelector setTypeFilter={setType} />);
    const options = screen.getAllByRole('option');
    expect(options[0]).toHaveTextContent('--select type--');
  })

  it('Changes type value', () => {
    render(<BreweryTypeSelector setTypeFilter={setType} />);
    const selector = screen.getByRole('combobox');
    fireEvent.change(selector, {target: {value: "microbrewery"}});
    expect(type).toBe('microbrewery');
  })
})
