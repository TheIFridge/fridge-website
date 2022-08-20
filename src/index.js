// react imports
import React from 'react';
import ReactDOM from 'react-dom/client';

// index style
import './style/index.css';

// root component
import App from './App';

// for routing
import { BrowserRouter as Router} from 'react-router-dom';

// for design
import 'bootstrap/dist/css/bootstrap.min.css';

// for the service worker
import swregistration from './service/swregistration';

// for reporting web vitals
// import WebVitals from './util/WebVitals';

// render root component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// register service worker
swregistration();

// send webvitals logs to console
// WebVitals(console.log);