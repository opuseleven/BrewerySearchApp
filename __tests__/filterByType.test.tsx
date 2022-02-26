import { filterByType } from '../services';
import { Brewery, TypeFilterState } from '../types';

describe('filterByType function to filter displayedBreweries Arr', () => {

  const testBreweryArr: Brewery[] = require('../data/breweries.json');
  const typeState: TypeFilterState = {
    micro: true,
    brewpub: true,
    contract: false,
    large: false,
    regional: false
  }

  it('Filters correctly', () => {
    const expectedBreweries = filterByType(typeState, testBreweryArr);
    expect(expectedBreweries[2].brewery_type).toBe('micro');
  })

  it('Additional filter test', () => {
    const newTypeState: TypeFilterState = { micro: false, brewpub: false, contract: false, large: false, regional: true };
    const expectedBreweries = filterByType(newTypeState, testBreweryArr);
    expect(expectedBreweries[0].brewery_type).toBe('regional');
  })
})
