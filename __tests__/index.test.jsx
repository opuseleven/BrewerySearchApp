import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../pages';

describe('Home Page', () => {

  it('Renders', () => {
    render(<Home />);
    expect(screen.getByRole('button')).toHaveTextContent('Submit');
  })
})
