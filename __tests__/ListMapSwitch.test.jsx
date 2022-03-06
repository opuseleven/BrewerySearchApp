import { ListMapSwitch } from '../components';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('ListMapSwitch component', () => {

  let showMap = false;
  function setShowMap(bool) {
    showMap = bool;
  }

  it('Component renders', () => {
    render(<ListMapSwitch showMap={showMap} setShowMap={setShowMap} />);
    expect(screen.getByRole('button')).toHaveTextContent("Show Map");
  })

  it('Renders correctly if showMap=true', () => {
    setShowMap(true);
    render(<ListMapSwitch showMap={showMap} setShowMap={setShowMap} />);
    expect(screen.getByRole('button')).toHaveTextContent("Hide Map");
  })

  it('Sets the showMap variable', () => {
    setShowMap(false);
    render(<ListMapSwitch showMap={showMap} setShowMap={setShowMap} />);
    fireEvent.click(screen.getByRole('button'));
    expect(showMap).toBe(true);
  })
})
