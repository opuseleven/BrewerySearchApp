import { render, fireEvent, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StateSelector } from '../components';

describe('StateSelector component', () => {

  let state = '--select state--';
  function setState(s) {
    state = s;
  }

  it('Component renders', () => {
    render(<StateSelector />);
    const options = screen.getAllByRole('option');
    expect(options[0]).toHaveTextContent('--select state--');
    expect(options[1]).toHaveTextContent('Alabama');
  })

  it('Component functions to change state value', () => {
    render(<StateSelector setStateFilter={setState} />);
    const selector = screen.getByRole('combobox');
    act(() => {
      fireEvent.change(selector, {target: {value: "alaska"}});
    })
    expect(state).toBe('alaska');
  })
})
