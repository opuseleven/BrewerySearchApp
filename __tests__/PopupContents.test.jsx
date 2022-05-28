import { PopupContents } from '../components';
import { render, screen } from '@testing-library/react';
import { getBrewery } from '../services';
import '@testing-library/jest-dom';

describe('PopupContents component', () => {

  const testBrewery = getBrewery(1, 'Test Brewery', 'Microbrewery', '123 Test St.', 'Nashville', 'Tennessee', 'www.duckduckgo.com');

  it('Renders component and passes data', () => {
    render(<PopupContents brewery={testBrewery} />);
    expect(screen.getByRole('heading')).toHaveTextContent('Test Brewery');
  })
})
