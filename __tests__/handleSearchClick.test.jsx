import { handleSearchClick } from '../services';

describe('handleSearchClick function', () => {

  let breweries = [];
  function setBreweries(newArr) {
    breweries = newArr;
  }
  let searchTerm = "Nashville";

  it('Functions to search database and setBreweries array', async () => {
    handleSearchClick(searchTerm, setBreweries);
    await new Promise(r => setTimeout(r, 3000));
    expect(breweries.length).toBeGreaterThan(10);
  })
})
