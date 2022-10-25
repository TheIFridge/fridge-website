/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "http://localhost"}
 */

import { render, screen, } from '@testing-library/react';
import {expect, test } from '@jest/globals';

// react imports
import React from 'react';

// for design
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/index.css';

// main component
import Inventory from '../pages/Inventory';

test('test#00: renders the inventory page', async () => {
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
        <Inventory />
	);

    // given that there is a page that allows the user to check the items that they have saved
    expect(screen.getByText('Inventory')).toBeInTheDocument();

    // and a function to easily add items from the inventory
    expect(screen.getByText('Add')).toBeInTheDocument();

    // And a search bar to type in food that they want to add
    expect(screen.getByTestId('search-bar')).toBeInTheDocument();
});