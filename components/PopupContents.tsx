import styles from '../styles/Components.module.css';
import { Brewery } from '../types';

interface PopupContentsProps {
  brewery: Brewery
}

const PopupContents: React.FC<PopupContentsProps> = ({ brewery }) => {
  return (
    <div className={styles.popupcontents}>
      <h4>{brewery.name}</h4>
      <ul>
        <li>Type: {brewery.brewery_type}</li>
        <li>
          <a href={brewery.website_url} target="_blank" rel="noreferrer">
            {brewery.website_url}
          </a>
        </li>
      </ul>
      <p>{brewery.street}</p>
      <p>{brewery.city}, {brewery.state}</p>
    </div>
  )
}
export { PopupContents };
