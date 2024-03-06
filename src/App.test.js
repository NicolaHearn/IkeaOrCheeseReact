import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("contains the header 'Ikea or Cheese'", () => {
    render(<App />);
    const linkElement = screen.getByRole("heading", { name: "IKEA OR CHEESE" });
    expect(linkElement).toBeInTheDocument();
  });

  it("renders an input box with the correct label", () => {
    render(<App />);

    const inputElement = screen.getByLabelText(
      "Let's play ikea or cheese, please enter your name to start the game:"
    );
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.tagName).toBe("INPUT");
  });
});
