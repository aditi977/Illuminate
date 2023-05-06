
import { render, screen } from '@testing-library/react';
//import App from './App';
//import Header from './components/Header';
import Footer from './Footer';



test('renders copyright text', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/Copyright @2023 Illuminate, Inc/i);
  expect(linkElement).toBeInTheDocument();
});

test('does not renders copyright without year text', () => {
  render(<Footer />);
  const linkElement = screen.queryByText(/Copyright@ Illuminate,Inc/i);
  expect(linkElement).not.toBeInTheDocument();
});











