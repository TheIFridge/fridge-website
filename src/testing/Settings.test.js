 import { render, screen, fireEvent } from '@testing-library/react';
 import {expect, test } from '@jest/globals';
 
 // react imports
 import React from 'react';
 
 // for design
 import 'bootstrap/dist/css/bootstrap.min.css';
 import '../style/index.css';
 
 // main component
 import Settings from '../pages/Settings';

 test('test#02: As a user I want to be able to customise my settings easily', async () => {
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
         <Settings />
     );

     // When they go into the settings, Then they will see all the options which should be easily changed
    
     // check that name label is present
    expect(screen.getByText('Name')).toBeInTheDocument();

    // check that the first and last name fields are present
    expect(screen.getByTestId('firstName')).toBeInTheDocument();
    expect(screen.getByTestId('lastName')).toBeInTheDocument();

    // check that the display name label is present
    expect(screen.getByText('Display Name')).toBeInTheDocument();

    // check that the display name field is present
    expect(screen.getByTestId('displayName')).toBeInTheDocument();

    // check that the email label is present
    expect(screen.getByText('Email')).toBeInTheDocument();

    // check that the email field is present
    expect(screen.getByTestId('email')).toBeInTheDocument();

    // check that the "Dark Mode" button is present
    expect(screen.getByText('Enable Dark Mode')).toBeInTheDocument();
    
    // check that the "Save Changes" button is present
    expect(screen.getByText('Save Changes')).toBeInTheDocument();
 });

test('test#03: As a user I want to be able to choose a colour scheme on the website (light/dark)', async () => {
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
        <Settings />
    );

    // Given that they can see the box
    expect(screen.getByText('Enable Dark Mode')).toBeInTheDocument();
    
    // When the user clicks on it
    fireEvent.click(screen.getByTestId('darkModeButton'));
    
    // Check that the app will set itself to dark mode
    expect(screen.getByText('Disable Dark Mode')).toBeInTheDocument();
    
    // Then check that it gets unset when going back to light mode
    fireEvent.click(screen.getByTestId('darkModeButton'));
    expect(screen.getByText('Enable Dark Mode')).toBeInTheDocument();
});