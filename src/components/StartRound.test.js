import { render, screen } from '@testing-library/react';
import StartRound from "./StartRound";


it('display a word for the user to match to ikea or cheese', async () => {
    render(
      <StartRound />
      );
    const paragraphElement = screen.getByText(/Hello player, type "i" for ikea or "c" for cheese/i);
    expect(paragraphElement).toBeInTheDocument();
  });

