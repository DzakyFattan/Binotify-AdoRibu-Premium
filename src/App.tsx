import React from 'react';
import Navbar from './components/Navbar';
import SingerContent from './components/SingerContent';
import Register from './components/Register'
import Login from './components/Login'
import Subscription from './components/Subscription';
import PremiumSong from './components/PremiumSong';
import AddSong from './components/AddSong';
import Song from './components/Song';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './css/global.css'
import './css/header.css'
import './css/list-display.css'
import './css/login.css'
import './css/management.css'
import './css/singer-content.css'
import './css/song.css'
import './css/add-song.css'
/*import PremiumSinger from './components/premium-singer';*/
/*import PremiumSinger_list from './components/premium-singer-list';*/


const App = () => {

  return (
    <div className="bg-wrap">
      <Router>
        <Routes>
          <Route path="/your-songs" element={<><Navbar /><SingerContent /></>} />
          <Route path="/add-song" element={<><Navbar /><AddSong /></>} />
          <Route path="/premium" element={<><Navbar /><PremiumSong /></>} />
          <Route path="/subscription" element={<><Navbar /><Subscription /></>} />
          <Route path="/song/:id_song" element={<><Navbar /><Song /></>} />
          <Route path="/register" element={<><Register /></>} />
          <Route path="/" element={<><Login /></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
