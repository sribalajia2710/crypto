import Banner from "./bbanner";
import "@testing-library/jest-dom";
import {
  render as renderWithProvider,
  screen
} from "../../test-utils";

describe('Banner Component', () => {
  it('displays the tagline heading', () => {
    renderWithProvider(<Banner />);
    expect(screen.getByText(/Crypto Pulse/i)).toBeInTheDocument();
  });

  it('displays the tagline text', () => {
    renderWithProvider(<Banner />);
    expect(
      screen.getByText(/Empowering Your Trading Decisions In The Get Go/i)
    ).toBeInTheDocument();
  });

  it('renders the Carousel component', () => {
    renderWithProvider(<Banner />);
    expect(screen.getByTestId('carousel')).toBeInTheDocument();
  });
});
