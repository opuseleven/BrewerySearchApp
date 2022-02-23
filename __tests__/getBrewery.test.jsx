import { getBrewery } from '../services';

describe('getBrewery function', () => {

  const expectedBrewery = {
    obdb_id: 1,
    name: "Test Brewery",
    brewery_type: "Microbrewery",
    street: "123 Street St.",
    city: "Nashville",
    state: "Tennessee",
    website_url: "www.duckduckgo.com"
  }

  it('Creates a new Brewery object and returns that object', () => {
    const brewery = getBrewery(1, "Test Brewery", "Microbrewery", "123 Street St.", "Nashville", "Tennessee", "www.duckduckgo.com");
    expect(brewery).toStrictEqual(expectedBrewery);
  })
})
