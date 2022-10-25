import { render, screen } from '@testing-library/react';
import {expect, test} from '@jest/globals';

// react imports
import React from 'react';

// for routing
import { BrowserRouter as Router} from 'react-router-dom';

// for design
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/index.css';

// main component
import App from '../App';

test('test999: renders the home page', () => {
    render(
        <Router>
            <App />
        </Router>
	);

    expect(screen.getByText('Your Fridge. Your Way.')).toBeInTheDocument();
});