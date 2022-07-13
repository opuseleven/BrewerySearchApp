import { DarkModeButton } from '../components';
import { render, screen, act, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('DarkModeButton component', () => {

  it('Component renders', () => {
    render(<DarkModeButton />);
    expect(screen.getByRole('button')).toHaveTextContent('☾');
  })

  let darkMode = false;
  function setDarkMode(bool) {
    darkMode = bool;
  }

  it('Button functions to change darkMode', () => {
    render(<DarkModeButton darkMode={darkMode} setDarkMode={setDarkMode} />);
    act(() => {
      fireEvent.click(screen.getByRole('button'));
    })
    expect(darkMode).toBe(true);
  })
})
