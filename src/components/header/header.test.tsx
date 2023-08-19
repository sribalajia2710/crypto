import Header from './header';
import '@testing-library/jest-dom';
import { render as renderWithProvider, screen } from '../../test-utils';

describe('Simple working test', () => {
  it('the title is visible', () => {
    renderWithProvider(<Header />); 
    expect(screen.getByText(/Crypto Pulse/i)).toBeInTheDocument();
  });
});
