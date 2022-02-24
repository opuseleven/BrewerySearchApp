import styles from '../styles/Components.module.css';

function RenderBrewery({ brewery }) {

  return (
    <div>
    {
      brewery && (
        <div className={styles.renderbrewerycontainer} key={brewery.obdb_id}>
          <h3>{brewery.name}</h3>
          <p>Brewery Type: {brewery.brewery_type}</p>
          <p>{brewery.street}</p>
          <p>{brewery.city}, {brewery.state}</p>
          <p><a href={brewery.website_url}>{brewery.website_url}</a></p>
        </div>
      )
    }
    </div>
  )
}
export { RenderBrewery };
