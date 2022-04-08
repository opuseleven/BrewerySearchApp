import { RenderBreweryMap } from '../components';
import { getBrewery } from '../services';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('RenderBreweryMap Component', () => {

  const testBrewery = getBrewery(1, "Test Brewery", "Brewpub", "123 Main st", "Nashville", "Tennessee", "www.duckduckgo.com", -86.767960, 36.174465);

  it('Component renders', () => {
    render(<RenderBreweryMap brewery={testBrewery} />);
  })
})
