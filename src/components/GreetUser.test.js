import { render, screen } from "@testing-library/react";
import GreetUser from "./GreetUser";

it("should greet the player and explain what to do", async () => {
  const testName = "Jane Doe";
  render(<GreetUser name={testName} />);

  const expectedGreeting = `Hello ${testName}, is this an item at Ikea or a type of cheese?`;

  // Now use the constructed string in your getByText query
  const paragraphElement = screen.getByText(expectedGreeting, { exact: false }); // `exact: false` is used to allow partial matches

  expect(paragraphElement).toBeInTheDocument();
});
