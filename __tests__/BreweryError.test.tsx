import { BreweryError } from '../errors';

describe('BreweryError object', () => {

  const error = BreweryError();

  it('Returns an error as a Brewery object', () => {
    expect(error.name).toBe('Error: Brewery not found');
  })
})
