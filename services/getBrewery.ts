import { Brewery } from '../types';

// Takes parameters and returns a Brewery Object

function getBrewery(id: number, name: string, type: string, street: string,
  city: string, state: string, website: string, longitude: number,
  latitude: number) {
    
  const newBrewery: Brewery = {
    obdb_id: id,
    name: name,
    brewery_type: type,
    street: street,
    city: city,
    state: state,
    website_url: website,
    longitude: longitude,
    latitude: latitude
  }
  return newBrewery;
}
export { getBrewery };
