import { TypeFilterState, Brewery } from '../types';

function filterByType(typeFilterState: TypeFilterState, arr: Brewery[]) {
  const originalArr = arr;
  let returnArr: Brewery[] = [];
  if (typeFilterState.micro) {
    const microArr: Brewery[] = originalArr.filter(b => b.brewery_type === 'micro');
    returnArr = returnArr.concat(returnArr, microArr);
  }
  if (typeFilterState.brewpub) {
    const brewpubArr: Brewery[] = originalArr.filter(b => b.brewery_type === 'brewpub');
    returnArr = returnArr.concat(returnArr, brewpubArr);
  }
  if (typeFilterState.contract) {
    const contractArr = originalArr.filter(b => b.brewery_type === 'contract');
    returnArr = returnArr.concat(returnArr, contractArr);
  }
  if (typeFilterState.large) {
    const largeArr = originalArr.filter(b => b.brewery_type === 'large');
    returnArr = returnArr.concat(returnArr, largeArr);
  }
  if (typeFilterState.regional) {
    const regionalArr = originalArr.filter(b => b.brewery_type === 'regional');
    returnArr = returnArr.concat(returnArr, regionalArr);
  }
  return returnArr;
}
export { filterByType };
