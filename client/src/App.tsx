import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import {NotFound, ProductList} from './pages';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<ProductList/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </Router>
  );
}

export default App;
