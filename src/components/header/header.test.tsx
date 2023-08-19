import Header from "./header";
import "@testing-library/jest-dom";
import {
  render as renderWithProvider,
  screen,
  fireEvent,
} from "../../test-utils";
import { act } from 'react-dom/test-utils';

describe("Header Component", () => {
  it('displays the title "Crypto Pulse"', () => {
    renderWithProvider(<Header />);
    expect(screen.getByText(/Crypto Pulse/i)).toBeInTheDocument();
  });

  it("triggers search with valid input", async () => {
    // Render the component
    renderWithProvider(<Header />);

    // Simulate user input and submit
    const searchInput = screen.getByPlaceholderText("Search currency...");
    const searchButton = screen.getByText("Search");

    fireEvent.change(searchInput, { target: { value: "1ECO-BTC" } });
    act(() => {
      fireEvent.click(searchButton);
    });
  });

  it("displays validation error with invalid input", async () => {
    renderWithProvider(<Header />);

    const searchInput = screen.getByPlaceholderText("Search currency...");
    const searchButton = screen.getByText("Search");

    fireEvent.change(searchInput, { target: { value: "inv@lid" } });
    fireEvent.click(searchButton);

    // Assert that the validation error message is displayed
    const errorText = await screen.findByText("Use Alphanumeric & Hyphen Only");
    expect(errorText).toBeInTheDocument();

    // Assert that the button is disabled
    expect(searchButton).toBeDisabled();
  });
  it("displays minimum length validation error", async () => {
    renderWithProvider(<Header />);

    const searchInput = screen.getByPlaceholderText("Search currency...");
    const searchButton = screen.getByText("Search");

    fireEvent.change(searchInput, { target: { value: "abc" } });
    fireEvent.click(searchButton);

    // Assert that the validation error message is displayed
    const errorText = await screen.findByText(
      "Minimum 6 characters is required"
    );
    expect(errorText).toBeInTheDocument();

    // Assert that the button is disabled
    expect(searchButton).toBeDisabled();
  });
});
