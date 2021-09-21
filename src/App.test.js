import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

test('Farewell, front-end', () => {
  const { getByText } = render(<Router><App /></Router>);
  const linkElement = getByText(/senha/i);
  expect(linkElement).toBeInTheDocument();
});
