import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App_test from './skräp';
import reportWebVitals from './reportWebVitals';
import Layout from './Layout';
import PlantDetails from './PlantDetails';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="plant-details" element={<PlantDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


reportWebVitals();
