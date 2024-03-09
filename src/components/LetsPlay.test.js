import { render, screen, fireEvent } from "@testing-library/react";
import LetsPlay from "./LetsPlay";

describe("LetsPlay", () => {
  it("should render the starting text for a new game", async () => {
    render(<LetsPlay />);
    const paragraphElement = screen.getByText(/Let's play Ikea or Cheese/i);
    expect(paragraphElement).toBeInTheDocument();
  });

  it("asks the user to input their name", async () => {
    render(<LetsPlay />);
    const paragraphElement = screen.getByText(
      /Please enter your name to start the game:/i
    );
    expect(paragraphElement).toBeInTheDocument();
  });

  it("has an input field for the user to enter their name", async () => {
    render(<LetsPlay />);
    const inputElement = screen.getByTestId("startGame");
    expect(inputElement).toContainHTML("input");
  });

  it("form should not be submitted when input is empty", async () => {
    const mockSubmit = jest.fn();
    render(<LetsPlay onSubmitName={mockSubmit} />);

    const form = screen.getByTestId("startGame");
    const inputField = screen.getByPlaceholderText("Your name here");

    fireEvent.change(inputField, { target: { value: "" } });

    fireEvent.submit(form);
    expect(mockSubmit).not.toHaveBeenCalled();
  });
});
