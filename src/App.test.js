// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SimFlow title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SimFlow/i);
    expect(titleElement).toBeInTheDocument();
});
