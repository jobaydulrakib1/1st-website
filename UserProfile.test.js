import React from 'react';
import { render, screen } from '@testing-library/react';
import UserProfile from '../components/UserProfile';

test('renders user name and email', () => {
    const mockUser = {
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
    };

    render(<UserProfile user={mockUser} />);
    const nameElement = screen.getByText(/Jane Doe/i);
    const emailElement = screen.getByText(/jane.doe@example.com/i);

    expect(nameElement).toBeInTheDocument();
    expect(emailElement).toBeInTheDocument();
});

test('renders default message when user data is missing', () => {
    render(<UserProfile user={null} />);
    const defaultMessage = screen.getByText(/User data is not available/i);

    expect(defaultMessage).toBeInTheDocument();
});
