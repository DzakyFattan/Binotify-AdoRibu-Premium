import React from 'react';
import './css/global.css';
import './css/header.css';
import './css/index.css';
import './css/list-display.css';
import './css/singer-content.css';
import './css/premium-singer.css'
import Navbar from './components/navbar';
import Singer_content from './components/singer-content';
import Premium_singer from './components/premium-singer';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const App:React.FC = () => {
  return (
    <div className="bg-wrap">
      <Router>
        <Routes>
          <Route path = "/" element = {<Navbar />} />
          <Route path = "/singer" element = {<><Navbar /><Singer_content /></>} />
          <Route path = "/premium" element = {<><Navbar /><Premium_singer /></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
