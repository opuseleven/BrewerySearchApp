import { render, fireEvent, screen } from '@testing-library/react';
import { SearchForm } from '../components';

describe('SearchForm component', () => {

  let searchTerm = '';
  function setSearchTerm(s) {
    searchTerm = s;
  }

  it('Renders', () => {
    render(<SearchForm setSearchTerm={setSearchTerm} />);
    expect(screen.getByRole('button')).toBeDefined();
  })

  it('Sets the searchTerm variable', () => {
    render(<SearchForm setSearchTerm={setSearchTerm} />);
    fireEvent.change(screen.getByRole('textbox'), {
      target: {
        value: "test"
      }
    });
    fireEvent.click(screen.getByRole('button'));
    expect(searchTerm).toBe('test');
  })

})
