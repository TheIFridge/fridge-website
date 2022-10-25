/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "http://localhost"}
 */

import { render, screen, fireEvent } from '@testing-library/react';
import {expect, test } from '@jest/globals';

// react imports
import React from 'react';

// for design
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/index.css';

// main component
import Login from '../pages/Login';

test('test#01: As a user don\'t make it too hard to login', async () => {
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
    
    // when the user opens the login page
    render(
        <Login />
	);

    // and they can see the email and password field
    expect(screen.getByTestId('emailField')).toBeInTheDocument();
    expect(screen.getByTestId('passwordField')).toBeInTheDocument();

    // given that they enter their username and password
    fireEvent.change(screen.getByTestId('emailField'), { target: { value: 'natdat47@gmail.com' } });
    fireEvent.change(screen.getByTestId('passwordField'), { target: { value: 'Minecraft1#' } });

    // they get logged in
    fireEvent.click(screen.getByTestId('loginButton'));

    // check global.sessionStorage.getItem('token') is not null or undefined
    expect(global.sessionStorage.getItem('token')).not.toBe(null);
});