import { filterByHasCoordinates } from '../services';
import { Brewery } from '../types';

describe('filterByHasCoordinates service', () => {
  
  const b1: Brewery = {
    obdb_id: 1,
    name: "Test Brewery",
    brewery_type: "Microbrewery",
    street: "123 Street St.",
    city: "Nashville",
    state: "Tennessee",
    website_url: "www.duckduckgo.com",
    longitude: -86.767960,
    latitude: 36.174465
  };
  const b2: Brewery = {
    obdb_id: 2,
    name: "Test2",
    brewery_type: "Brewpub",
    street: "234 Main",
    city: "Nashville",
    state: "Tennessee",
    website_url: "www.duckduckgo.com"
  }
  const b3: Brewery = {
    obdb_id: 3,
    name: "Test b3",
    brewery_type: "Microbrewery",
    street: "345 street",
    city: "Nashville",
    state: "Tennessee",
    website_url: "www.duckduckgo.com",
    longitude: -85.876789,
    latitude: 35.345433
  }
  const b4: Brewery = {
    obdb_id: 4,
    name: "Test number 4",
    brewery_type: "Large",
    street: "44 1st",
    city: "Nashville",
    state: "Tennessee",
    website_url: "www.duckduckgo.com"
  }
  const b5: Brewery = {
    obdb_id: 5,
    name: "Test Brewery",
    brewery_type: "Microbrewery",
    street: "123 Street St.",
    city: "Nashville",
    state: "Tennessee",
    website_url: "www.duckduckgo.com",
    longitude: -86.767960,
    latitude: 36.174465
  }

  const testArr = [b1, b2, b3, b4, b5];

  it('Filters testArr properly', () => {
    const newArr = filterByHasCoordinates(testArr);
    expect(newArr.length).toBe(3);
  })

  it('Filters testData properly', () => {
    const testData = require('../data/breweries.json');
    const testArr = filterByHasCoordinates(testData);
    expect(testArr.length).toBeLessThan(testData.length);
  })
})
