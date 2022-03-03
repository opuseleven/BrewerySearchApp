import { ListMapSwitch } from '../components';
import { render, screen } from '@testing-library/react';

describe('ListMapSwitch component', () => {

  it('Component renders', () => {
    render(<ListMapSwitch />);
    expect(screen.getByRole('checkbox')).toBeDefined();
  })
})
