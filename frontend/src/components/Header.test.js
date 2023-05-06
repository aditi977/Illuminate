
import { render, screen } from '@testing-library/react';

import Header from './Header';

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


test('does not render join login link when logged in', () => {
  render(<Header isLoggedIn={true} />);
  const linkElement = screen.queryByText(/login/i);
  expect(linkElement).not.toBeInTheDocument();
});

test('renders browse option when logged in', () => {
  render(<Header isLoggedIn={true} />);
  const linkElement = screen.queryByText(/Browse/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Personalized Path option when logged in', () => {
  render(<Header isLoggedIn={true} />);
  const linkElement = screen.queryByText(/Personalized Path/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Projects option when logged in', () => {
  render(<Header isLoggedIn={true} />);
  const linkElement = screen.queryByText(/Projects/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Jobs option when logged in', () => {
  render(<Header isLoggedIn={true} />);
  const linkElement = screen.queryByText(/Jobs/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders My Mentor option when logged in', () => {
  render(<Header isLoggedIn={true} />);
  const linkElement = screen.queryByText(/My Mentor/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders Join for Freer option when not logged in', () => {
  render(<Header isLoggedIn={false} />);
  const linkElement = screen.queryByText(/Join for Free/i);
  expect(linkElement).toBeInTheDocument();
});













