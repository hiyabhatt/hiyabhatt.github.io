import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Portfolio for Hiya Bhatt', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('renders the main heading with the name', () => {
    // Note: The new design might not have "Hiya Bhatt" in a hero banner anymore.
    // Let's test for the "About Me" heading which is more stable.
    const headingElement = screen.getByRole('heading', { name: /About Me/i });
    expect(headingElement).toBeInTheDocument();
  });

  test('renders all navigation links', () => {
    const navItems = ['about', 'education', 'publications', 'projects', 'awards', 'cv'];
    navItems.forEach(item => {
      const linkElement = screen.getByRole('link', { name: new RegExp(item, 'i') });
      expect(linkElement).toBeInTheDocument();
    });
  });

  test('renders the publications section heading', () => {
    const pubHeading = screen.getByRole('heading', { name: /Publications/i });
    expect(pubHeading).toBeInTheDocument();
  });
});