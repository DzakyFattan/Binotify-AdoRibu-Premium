import React, {useState} from 'react';
import Singer_song from './singer-song';
import Song_data from './model/song_data'

const Singer_content:React.FC = () =>{
    const [songs,setSongs] = useState<Song_data[]>([])

    const addSong = () =>{
        if(songs){
            setSongs([...songs,{picture:"hakita.png", title:"trial", date:"010101", genre:"abcde"}])
        }
    }

    return(
        <body>
        <div className = "user section-fw flex-row">
            <div className = "user-data">
                <div>
                    <h1 className='section-title'>abcde</h1>
                    <div className='l-elmt-detail'>
                    <span>abc</span>
                    <span>def</span>
                    </div>
                </div>
            </div>
            
        </div>
        <section className = "section-fw flex-col">
            <div className = "flex-row">
                <h1 className="section-title">User Song List</h1>
                <img src="/assets/img/plus-square-o.svg" className="add-song-icon" alt="abcde" />
            </div>
            <div className="flew-rox">
                <ul>
                    <li>
                        {songs?.map((song) => (
                            <Singer_song song={song} />
                        ))}  
                    </li>
                </ul>
            </div>
        </section>
        <button onClick={addSong}>help</button>
    </body>
    )
}

export default Singer_content