// a function to check whether all properties of a TypeFilterState object
// are set to false. If any are set to true, this function will pass.

import { TypeFilterState } from '../types';

function typeFilterCheck(tf: TypeFilterState) {
  let check = false;
  if (tf.micro === true) {
    check = true;
  }
  if (tf.brewpub === true) {
    check = true;
  }
  if (tf.contract === true) {
    check = true;
  }
  if (tf.large === true) {
    check = true;
  }
  if (tf.regional === true) {
    check = true;
  }
  return check;
}
export { typeFilterCheck };
