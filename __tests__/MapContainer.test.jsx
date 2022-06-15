import { MapContainer } from '../components';
import { render, screen } from '@testing-library/react';
import { filterByHasCoordinates } from '../services';

describe('MapContainer component', () => {

  const testData = require('../data/breweries.json');
  const arr = filterByHasCoordinates(testData);

  let selectedBrewery;
  function setSelectedBrewery(b) {
    selectedBrewery = b;
  }

  it('Component renders', () => {
    render(<MapContainer arr={arr} selectedBrewery={selectedBrewery}
      setSelectedBrewery={setSelectedBrewery} />);
    const map = screen.getByRole('map');
    expect(map).toBeDefined();
  })
})
