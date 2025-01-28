import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Layout from './Layout';
import PlantDetails from './PlantDetails';
import FurhatDetails from './FurhatDetails';
import DrinkDetails from './DrinkDetails';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="plant-details" element={<PlantDetails />} />
          <Route path="pitch-imperfect-details" element={<FurhatDetails />} />
          <Route path="drink-generator-details" element={<DrinkDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


reportWebVitals();
