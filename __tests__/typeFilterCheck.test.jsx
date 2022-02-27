import { typeFilterCheck } from '../services';

describe('typeFilterCheck function', () => {

  it('Checks the properties of TypeFilterState object', () => {
    const testState = {
      micro: false,
      brewpub: false,
      contract: false,
      large: false,
      regional: true
    }
    const testBool = typeFilterCheck(testState);
    expect(testBool).toBe(true);
  })

  it('Additional case returning true', () => {
    const testState = {
      micro: true,
      brewpub: false,
      contract: true,
      large: false,
      regional: false
    }
    const testBool = typeFilterCheck(testState);
    expect(testBool).toBe(true);
  })

  it('Returns false', () => {
    const testState = {
      micro: false,
      brewpub: false,
      contract: false,
      large: false,
      regional: false,
    }
    const testBool = typeFilterCheck(testState);
    expect(testBool).toBe(false);
  })
})
