import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../pages';

describe('Home Page', () => {

  it('Renders', () => {
    render(<Home />);
    const buttons = screen.getAllByRole('button');
    expect(buttons[0]).toHaveTextContent('Submit');
    expect(buttons[1]).toHaveTextContent('Filter');
  })
})
