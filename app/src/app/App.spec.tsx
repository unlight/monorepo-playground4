/// <reference types="vitest/globals" />
import { App } from './App';
import { render, waitFor } from '@testing-library/react';
import React from 'react';

test('renders all app html', async () => {
  const screen = render(<App />);
  await waitFor(() => {
    expect(screen.baseElement.outerHTML).toBeTruthy();
  });
});
