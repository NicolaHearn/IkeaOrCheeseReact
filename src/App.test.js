import { render, screen } from '@testing-library/react';
import App from './App';

it("contains the header 'Ikea or Cheese'", () => {
  render(<App />);
  const linkElement = screen.getByRole("heading", {name: "Ikea or Cheese"})
  expect(linkElement).toBeInTheDocument();
});


