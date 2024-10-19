import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
// import Dashboard from './components/Dashboard';
import Machines from './Pages/Machines_pages/machines';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/machines" element={<Machines />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
