import { coordinateCheck, getBrewery } from '../services';

describe('coordinateCheck service', () => {

  it('Returns true if lat & lon', () => {
    const expectedPass = getBrewery(1, "Test", "Brewpub", "123 Main St.", "Nashville", "Tennessee", "www.duckduckgo.com", -86.767960, 36.174465);
    expect(coordinateCheck(expectedPass)).toBe(true);
  })
  it('Returns false otherwise', () => {
    const expectedFail = getBrewery(2, "Test", "Brewpub", "123 Main St.", "Nashville", "Tennessee", "www.duckduckgo.com", "", "");
    expect(coordinateCheck(expectedFail)).toBe(false);
  })
})
