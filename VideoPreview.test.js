// frontend/src/tests/VideoPreview.test.js
import React from 'react';
import { render } from '@testing-library/react';
import VideoPreview from '../components/VideoPreview';

test('renders VideoPreview component', () => {
    const { getByText } = render(<VideoPreview title="Sample Video" />);
    expect(getByText(/Sample Video/i)).toBeInTheDocument();
});
