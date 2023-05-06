import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';

test('renders join for free link', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Join for Free/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders join login link', () => {
  render(<Header />);
  const linkElement = screen.getByText(/login/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders copyright text', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/Copyright@2023 Illuminate,Inc/i);
  expect(linkElement).toBeInTheDocument();
});

test('does not renders copyright without yer text', () => {
  render(<Footer />);
  const linkElement = screen.queryByText(/Copyright Illuminate,Inc/i);
  expect(linkElement).not.toBeInTheDocument();
});







