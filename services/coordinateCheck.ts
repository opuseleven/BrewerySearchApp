import { Brewery } from '../types';

function coordinateCheck(brewery: Brewery) {
  let check = false;
  if (brewery.latitude !== undefined) {
    if (brewery.longitude !== undefined) {
      if (brewery.latitude !== null) {
        if (brewery.longitude !== null) {
          if (brewery.latitude.toString().length > 1) {
            if (brewery.longitude.toString().length > 1) {
              check = true;
            }
          }
        }
      }
    }
  }
  return check;
}
export { coordinateCheck };
