import React from 'react';

const Navbar:React.FC = () =>{
    return(
        <header>
        <nav>
            <input type="checkbox" name="" id="dropdown-cbox" />
            <label htmlFor="dropdown-cbox" className="bar-icon-wrapper">
                <img src={require('./img/navbar.png')}  className="bar-icon"/>
            </label>
            <a href="/your-songs" id="logo"><span>アド</span>リブ <span className='premium'>PREMIUM</span></a>
            <ul>
                <div className="dropdown-padder"></div>
                <li><a href="/your-songs">Your Songs</a></li>
                <li><a href="/add-song">Add Songs</a></li>
                <li><a href="/" id="logout-btn">Logout</a></li> 

                <li className="user-info-h">Logged in as </li>
            </ul>
        </nav>
    </header>
    )
}

export default Navbar