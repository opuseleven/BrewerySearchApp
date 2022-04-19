import { RenderBreweryMap } from '../components';
import { getBrewery } from '../services';
import { Map } from 'react-map-gl';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('RenderBreweryMap Component', () => {

  const testBrewery = getBrewery(1, "Test Brewery", "Brewpub", "123 Main st", "Nashville", "Tennessee", "www.duckduckgo.com", -86.767960, 36.174465);

  it('Component renders', () => {
    render(
      <Map
        initialViewState={{
          longitude: testBrewery.longitude,
          latitude: testBrewery.latitude,
          zoom: 8
        }}
        style={{width: 600, height: 400}}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={process.env.ACCESSTOKEN}
      >
        <RenderBreweryMap brewery={testBrewery} />
      </Map>
      );
  })
})
