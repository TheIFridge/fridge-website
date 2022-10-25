 import { render, screen, fireEvent } from '@testing-library/react';
 import {expect, test } from '@jest/globals';
 
 // react imports
 import React from 'react';
 
 // for design
 import 'bootstrap/dist/css/bootstrap.min.css';
 import '../style/index.css';
 
 // main component
 import Support from '../pages/Support';

 test('test#04: As a user I want to be able to customise my settings easily', async () => {
     const mockResponse = jest.fn();
     Object.defineProperty(window, 'location', {
         value: {
             hash: {
             endsWith: mockResponse,
             includes: mockResponse,
             },
             assign: mockResponse,
         },
         writable: true,
     });
 
     render(
         <Support />
     );

     // when the use is logged in they should be able to send a request
    // check that the "Send Request" button is present
    expect(screen.getByText('Submit')).toBeInTheDocument();

    // type into the request subject field
    fireEvent.change(screen.getByTestId('subjectBox'), { target: { value: 'Some Subject' } });

    // type into the request message field
    fireEvent.change(screen.getByTestId('messageBox'), { target: { value: 'Some Message' } });

    // click the submit button
    // fireEvent.click(screen.getByTestId('submitRequest'));
});