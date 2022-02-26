import { Filters } from '../components';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Filters component', () => {

  let state = "--select state--";
  let type = "--select type--";

  function setState(s) {
    state = s;
  }
  function setType(s) {
    type = s;
  }

  it('Renders', () => {
    render(<Filters setStateFilter={setState} setTypeFilter={setType} />);
    const boxes = screen.getAllByRole('combobox');
    expect(boxes[0]).toHaveTextContent('--select state--');
    expect(boxes[1]).toHaveTextContent('--select type--');
  })

  it('Changes both state and type variables', () => {
    render(<Filters setStateFilter={setState} setTypeFilter={setType} />);
    const boxes = screen.getAllByRole('combobox');
    fireEvent.change(boxes[0], {target: {value: "colorado"}});
    expect(boxes[0].value).toBe('colorado');
    expect(state).toBe('colorado');
    fireEvent.change(boxes[1], {target: {value: "micro"}});
    expect(boxes[0].value).toBe('colorado');
    expect(boxes[1].value).toBe('micro');
    expect(type).toBe('micro');
  })

})
