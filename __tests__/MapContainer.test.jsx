import { MapContainer } from '../components';
import { render, screen } from '@testing-library/react';

describe('MapContainer component', () => {

  it('Component renders', () => {
    render(<MapContainer center={[-86.767960,36.174465]} />);
    const map = screen.getByRole('heading');
    expect(map).toBeDefined();
  })
})
