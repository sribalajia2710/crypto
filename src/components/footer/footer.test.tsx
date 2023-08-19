import "@testing-library/jest-dom";
import {
  render as renderWithProvider,
  screen
} from "../../test-utils";
import Footer from './footer';


describe('Footer Component', () => {
  it('displays the logo', () => {

    renderWithProvider(<Footer />);
    expect(screen.getByText(/Crypto Pulse/i)).toBeInTheDocument();
  });

  it('displays the links', () => {

    renderWithProvider(<Footer />);
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    expect(screen.getByText(/FAQs/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact us/i)).toBeInTheDocument();
    expect(screen.getByText(/Terms of Use/i)).toBeInTheDocument();
  });

  it('displays the copyright notice', () => {
    
    renderWithProvider(<Footer />);
    expect(
      screen.getByText(/© 2023 SriBalaji ™ All Rights Reserved/i)
    ).toBeInTheDocument();
  });

  it('displays social media icons', () => {
    
    renderWithProvider(<Footer />);
    expect(screen.getByTestId('facebook-icon')).toBeInTheDocument();
    expect(screen.getByTestId('twitter-icon')).toBeInTheDocument();
    expect(screen.getByTestId('instagram-icon')).toBeInTheDocument();
  });

});
