import { render, screen } from '@testing-library/react';
import GreetUser from "./GreetUser";

it('should greet the player and explain what to do', async () => {
    render(
      <GreetUser />
      );
    const paragraphElement = screen.getByText(/Hello player, type "i" for ikea or "c" for cheese/i);
    expect(paragraphElement).toBeInTheDocument();
  });