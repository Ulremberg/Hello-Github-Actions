import React from 'react';
import {  getByTestId, render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import HelloWorld from './HelloWorld';

test('renders hello world', () => {
  render(<HelloWorld />);
  const element = screen.getByTestId('hello')
 
  
  expect(
    element
  ).toBeInTheDocument()


});
