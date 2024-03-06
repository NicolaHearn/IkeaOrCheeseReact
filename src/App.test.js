import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
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

  it("updates startGame state upon new player name submission", async () => {
    render(<App />);

    const nameInput = screen.getByPlaceholderText("Your name here");
    const submitButton = screen.getByRole("button", { name: "ok" });

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.click(submitButton);

    const greetingElement = await screen.findByText(/john doe/i);

    expect(greetingElement).toBeInTheDocument();
  });
});
