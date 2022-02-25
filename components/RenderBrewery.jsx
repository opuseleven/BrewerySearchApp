import styles from '../styles/Components.module.css';

function RenderBrewery({ brewery }) {

  const key = brewery.obdb_id;
  const name = brewery.name;
  const type = brewery.brewery_type;
  const street = brewery.street;
  const city = brewery.city;
  const state = brewery.state;
  const url = brewery.website_url;

  return (
    <div>
    {
      brewery && (
        <div className={styles.renderbrewerycontainer} key={key}>
          <h3>{name}</h3>
          <p>Brewery Type: {type}</p>
          <p>{street}</p>
          <p>{city}, {state}</p>
          <p><a href={url}>{url}</a></p>
        </div>
      )
    }
    </div>
  )
}
export { RenderBrewery };
