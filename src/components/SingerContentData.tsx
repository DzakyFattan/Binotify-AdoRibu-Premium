import React from 'react';
import SongData from './model/SongData'

interface song {
    song: SongData;
}

const SingerContentData: React.FC<song> = ({ song }) => {

    return (

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

export default SingerContentData