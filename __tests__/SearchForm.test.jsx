import { render, fireEvent, screen } from '@testing-library/react';
import { SearchForm } from '../components';
import '@testing-library/jest-dom';
import { handleSearchClick } from '../services';

describe('SearchForm component', () => {

  let breweries = '';
  function setBreweries(b) {
    breweries = b;
  }

  it('Renders', () => {
    render(<SearchForm />);
    expect(screen.getByRole('button')).toHaveTextContent('Submit');
  })

  it('Sets the Breweries Array', async () => {
    render(<SearchForm setBreweries={setBreweries} />);
    fireEvent.change(screen.getByRole('textbox'), {
      target: {
        value: "Nashville"
      }
    });
    fireEvent.click(screen.getByRole('button'));
    await new Promise(r => setTimeout(r, 3000));
    expect(breweries.length).toBeGreaterThan(1);
  })

})
