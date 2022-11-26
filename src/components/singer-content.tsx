import React, {useState} from 'react';
import Singer_content_data from './singer-content-data';
import Song_data from './model/song_data'

const Singer_content:React.FC = () =>{
    const [currentPage,setCurrentPage] = useState(1)
    const maxLength = 4;
    const [songs,setSongs] = useState<Song_data[]>([])

    const addSong = () =>{
        if(songs){
            setSongs([...songs,{picture:"hakita.png", title:"trial", date:"010101", genre:"abcde"}])
        }
    }

    const size = songs.length+1;

    function pagination(){
        if(currentPage * maxLength < size){
            return(
                songs.slice((currentPage-1) * maxLength, currentPage * maxLength).map((song) => (
                    <Singer_content_data song={song} />
                ))
            )
        }

        else{
            return(
                songs.slice((currentPage-1) * maxLength, size).map((song) => (
                    <Singer_content_data song={song} />
                ))
            )
        }
    }

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
        <div>
            <div className = "user section-fw flex-row">
                <div className = "user-data">
                    <div>
                        <h1 className='section-title'>abcde</h1>
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
                        <img src="/assets/img/left-icon.svg" alt="left" className="l-previous-page-icon" onClick={subPage}/>
                        <img src="/assets/img/right-icon.svg" alt="right" className="l-next-page-icon" onClick={addPage}/>
                    </div>
                </div>
            </section>
            <button onClick={addSong}>help</button>
        </div>
    )
}

export default Singer_content