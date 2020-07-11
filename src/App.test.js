import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Home link ie React mern stack app', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/React MERN Stack App/i);
  expect(linkElement).toBeInTheDocument();
});
