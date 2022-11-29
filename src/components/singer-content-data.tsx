import React from 'react';
import Song_data from './model/song_data'

interface song {
    song:Song_data;
}

const Singer_content_data:React.FC<song> = ({song}) =>{  

    return(
        
        <div className="l-elmt">
            <div className="l-elmt-img-wrapper">
                <img src="abc.png" alt="Song List Image" className="s-img-cover" />
            </div>
            <div className="l-elmt-detail-wrapper">
                <div className="l-elmt-detail"> 
                    <div className="l-elmt-detail-title">{song.judul}</div>
                </div>
            </div>
        </div>

    )
}

export default Singer_content_data