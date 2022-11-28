import React from 'react';
import Navbar from './components/navbar';
import Singer_content from './components/singer-content';
import Register from './components/register'
import Login from './components/login'
import Subscription from './components/subscription';
import Premium_song from './components/premium-song';
import Add_song from './components/add-song';
import Song from './components/song';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './css/global.css'
import './css/header.css'
import './css/list-display.css'
import './css/login.css'
import './css/management.css'
import './css/singer-content.css'
import './css/song.css'
import './css/add-song.css'
/*import Premium_singer from './components/premium-singer';*/
/*import Premium_singer_list from './components/premium-singer-list';*/


const App = () => {

  return (
    <div className="bg-wrap">
      <Router>
        <Routes>
          <Route path = "/your-songs" element = {<><Navbar /><Singer_content /></>} />
          <Route path = "/add-song" element = {<><Navbar /><Add_song /></>} />
          <Route path = "/premium" element = {<><Navbar /><Premium_song /></>} />
          <Route path = "/subscription" element = {<><Navbar /><Subscription /></>} />
          <Route path = "/song" element = {<><Navbar /><Song /></>} />
          <Route path = "/register" element = {<><Register /></>} />
          <Route path = "/" element = {<><Login /></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
