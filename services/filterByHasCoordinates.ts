import { Brewery } from '../types';
import { coordinateCheck } from '.';

function filterByHasCoordinates(arr: Brewery[]) {
  return arr.filter(b => coordinateCheck(b))
}
export { filterByHasCoordinates };
