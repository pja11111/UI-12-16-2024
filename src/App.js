import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Pages from './pages/Pages'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Pages />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
