import "@testing-library/jest-dom";
import {
  render as renderWithProvider,
} from "../../test-utils";
import { it, describe, expect } from 'vitest';
import Carousel from './carousel';

describe('Carousel Component', () => {
  it('should render images and labels', () => {
    const { getByTestId, getAllByAltText, getAllByText } = renderWithProvider(<Carousel />);
    const carouselContainer = getByTestId('carousel');
    const images = getAllByAltText(/^Image/); // Match alt text starting with "Image"
    const labels = getAllByText(/^(USDT|ETH|BTC|USD)$/); // Match label text
console.log(images)
    expect(carouselContainer).toBeInTheDocument();
    expect(images[0]).toBeInTheDocument(); // Expecting 1 image
    expect(labels[0]).toBeInTheDocument(); // Expecting 1 label
  });
});
