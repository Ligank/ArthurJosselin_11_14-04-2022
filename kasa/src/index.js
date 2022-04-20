import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './styles/index.css';
import Home from './pages/Home.js';
import Propos from './pages/Propos.js';
import Error404 from './pages/Error404.js';
import Location from './pages/Location.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>

        <Route path="/propos" element={<Propos />}></Route>

        <Route path="/location/:locationId" element={<Location />}></Route>

        <Route path="/error" element={<Error404 />}></Route>

      </Routes>
    </Router>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
