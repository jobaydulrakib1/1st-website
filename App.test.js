import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders the App component with expected content', () => {
    render(<App />);
    const welcomeMessage = screen.getByText(/Welcome to the App/i);
    expect(welcomeMessage).toBeInTheDocument();
});

test('renders the navigation bar', () => {
    render(<App />);
    const navElement = screen.getByRole('navigation');
    expect(navElement).toBeInTheDocument();
});
