import "@testing-library/jest-dom";
import {
  render as renderWithProvider,
  screen
} from "../../test-utils";
import HomePage from './homePage';

describe('HomePage Component', () => {
  it('renders loading spinner when loading is true', () => {
    renderWithProvider(<HomePage />);
    
    // Expect loading spinner to be rendered
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });

});
