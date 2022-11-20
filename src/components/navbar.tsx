import React from 'react';

const Navbar:React.FC = () =>{
    return(
        <header>
        <nav>
            <input type="checkbox" name="" id="dropdown-cbox" />
            <label htmlFor="dropdown-cbox" className="bar-icon-wrapper">
                <img src="/assets/img/bars.svg"  className="bar-icon"/>
            </label>
            <a href="/singer" id="logo"><span>アド</span>リブ</a>
            <ul>
                <div className="dropdown-padder"></div>
                <li><a href="/singer">Your Songs</a></li>
                <li><a href="/album_list.php">Subscription</a></li>

                <li><a href="#" id="logout-btn">Logout</a></li> 

                <li><a href="/user_list.php">USERS</a></li>

                <li className="user-info-h">Logged in as </li>
            </ul>
            <div className="search-bar">
                <form className="search-form" action="/search_result.php">
                    <input type="text" name="query" id="search-bar-nav" placeholder="Try searching for a title or album" className="input-text" />
                </form>
            </div>
            <div className="search-btn-wrapper">
                <img src="/assets/img/search.svg"  className="search-icon" alt="12345"/>
            </div>
            <div className="close-search-wrapper">
                <img src="assets/img/times.svg" className="close-search-icon" alt="23456"/>
            </div>
        </nav>
    </header>
    )
}

export default Navbar