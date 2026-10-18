import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio navigation', () => {
  render(<App />);
  expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
});
