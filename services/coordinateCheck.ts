import { Brewery } from '../types';

function coordinateCheck(brewery: Brewery) {
  let check = false;
  if (brewery.longitude.toString().length > 1) {
    if (brewery.latitude.toString().length > 1) {
      check = true;
    }
  }
  return check;
}
export { coordinateCheck };
