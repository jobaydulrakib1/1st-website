import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders Navbar with correct links', () => {
    render(
        <Router>
            <Navbar />
        </Router>
    );

    const homeLink = screen.getByText(/home/i);
    const aboutLink = screen.getByText(/about/i);
    const contactLink = screen.getByText(/contact/i);

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
});

test('Navbar has a logo', () => {
    render(
        <Router>
            <Navbar />
        </Router>
    );

    const logoElement = screen.getByAltText(/logo/i);
    expect(logoElement).toBeInTheDocument();
});
