import { render, screen } from '@testing-library/react';
import App from './App';

test('renders notes navigation', () => {
  render(<App />);
  const linkElement = screen.getByText(/Notes/i);
  expect(linkElement).toBeInTheDocument();
});
