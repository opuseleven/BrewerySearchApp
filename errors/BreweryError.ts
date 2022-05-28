import { Brewery } from '../types';

function BreweryError() {
  const error: Brewery = {
    obdb_id: -1,
    name: "Error: Brewery not found",
    brewery_type: "error",
    street: "error",
    city: "error",
    state: "error",
    website_url: "error"
  }
  return error;
}
export { BreweryError };
