import React, {useEffect, useState} from 'react';
import SingerContentData from './SingerContentData';
import SongData from './model/SongData';
import Left_icon from './img/left-icon.svg'
import Right_icon from './img/right-icon.svg'
import { Link } from 'react-router-dom';

const SingerContent:React.FC = () =>{
    const [currentPage,setCurrentPage] = useState(1)
    const [songs,setSongs] = useState<SongData[]>([])
    const maxLength = 4;

    const left_icon = require("./img/left-icon.svg") as string;

    let usernameData = localStorage.getItem('username')
    let accessTokenData = localStorage.getItem('accessToken')
    let username:string = ""
    let accessToken:string = ""

    if (usernameData){
        username=JSON.parse(usernameData);
    }

    if (accessTokenData){
        accessToken=JSON.parse(accessTokenData);
    }

    const sendUser={
        method: 'GET',
        headers:{authorization:accessToken},
    }

    const getSong = async () => {
        const request = await fetch("http://localhost:3001/api/getSongs", sendUser);
        const response = await request.json();
        setSongs(response)

    }

    const size = songs.length+1;

    function pagination(){
        if(currentPage * maxLength < size){
            return(
                songs.slice((currentPage-1) * maxLength, currentPage * maxLength).map((song) => (
                    <Link to={{pathname: "/song/"+song.id_song}}>
                        <SingerContentData song={song} />
                    </Link>
                ))
            )
        }

        else{
            return(
                songs.slice((currentPage-1) * maxLength, size).map((song) => (
                    <Link to={{pathname: "/song/"+song.id_song}}>
                        <SingerContentData song={song} />
                    </Link>
                ))
            )
        }
    }

    useEffect(() => {
        getSong()
    }, []);

    const addPage = () =>{
        const pages = Math.ceil(size/maxLength)
        if(currentPage<pages){
            setCurrentPage(currentPage+1)
        }
    }

    const subPage = () =>{
        if (currentPage>1){
            setCurrentPage(currentPage-1)
        }
    }

    return(
        <div className='side-content'>
            <div className = "user section-fw flex-row">
                <div className = "user-data">
                    <div>
                        <h1 className='section-title'>{username}</h1>
                        <div className='l-elmt-detail'>
                        <span>PENYANYI</span>
                        </div>
                    </div>
                </div>

            </div>
            <section className = "section-fw flex-col">
                <div className = "flex-row">
                    <h1 className="section-title">User Song List</h1>
                </div>
                <div className="flew-rox">
                    <ul>
                        <li>
                            {pagination()}
                        </li>
                    </ul>
                </div>
                <div className="l-page-control-info flex-row">
                    <div className="l-which-page">
                        Page <span className="l-current-page">{currentPage}</span>
                    </div>
                    <div className="l-page-control-btn">
                        <img src={Left_icon} alt="left" className="l-previous-page-icon" onClick={subPage}/>
                        <img src={Right_icon} alt="right" className="l-next-page-icon" onClick={addPage}/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SingerContent