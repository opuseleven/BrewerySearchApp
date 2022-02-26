import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StateSelector } from '../components';

describe('StateSelector component', () => {

  let state = '--select state--';
  function setState(s) {
    state = s;
  }

  it('Renders', () => {
    render(<StateSelector />);
    const options = screen.getAllByRole('option');
    expect(options[0]).toHaveTextContent('--select state--');
    expect(options[1]).toHaveTextContent('Alabama');
  })

  it('Changes state value', () => {
    render(<StateSelector setStateFilter={setState} />);
    const selector = screen.getByRole('combobox');
    fireEvent.change(selector, {target: {value: "alaska"}});
    expect(state).toBe('alaska');
  })
})
