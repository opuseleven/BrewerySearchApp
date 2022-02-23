import { Brewery } from '../types';

function RenderBrewery({ brewery }) {

  return (
    <div key={brewery.obdb_id}>
      <h3>{brewery.name}</h3>
      <p>Brewery Type: {brewery.brewery_type}</p>
      <p>{brewery.street}</p>
      <p>{brewery.city}, {brewery.state}</p>
      <p><a href={brewery.website_url}>{brewery.website_url}</a></p>
    </div>
  )
}
export { RenderBrewery };
