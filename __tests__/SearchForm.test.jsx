import { render, fireEvent, screen, act } from '@testing-library/react';
import { SearchForm } from '../components';
import '@testing-library/jest-dom';
import { handleSearchClick } from '../services';

describe('SearchForm component', () => {

  let breweries = '';
  function setBreweries(b) {
    breweries = b;
  }
  let showMap = true;
  function setShowMap(bool) {
    showMap = bool;
  }

  it('Renders', () => {
    render(<SearchForm />);
    expect(screen.getByRole('button')).toHaveTextContent('Submit');
  })

  it('Sets the Breweries Array', async () => {
    render(<SearchForm setBreweries={setBreweries} setShowMap={setShowMap} />);
    const textbox = screen.getByRole('textbox');
    const button = screen.getByRole('button');
    act(() => {
      fireEvent.change(textbox, {
        target: {
          value: "Nashville"
        }
      });
    })
    act(() => {
      fireEvent.click(button);
    })
    await new Promise(r => setTimeout(r, 3000));
    expect(breweries.length).toBeGreaterThan(1);
  })

})
