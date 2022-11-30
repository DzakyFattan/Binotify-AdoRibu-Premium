import React from 'react';
import SongData from './model/SongData'

interface song {
    song: SongData;
}

const PremiumSongData: React.FC<song> = ({ song }) => {
    return (
        <a href="" className="l-elmt">
            <div className="l-elmt-img-wrapper">
                <img src="abc.png" alt="Song List Image" className="s-img-cover" />
            </div>
            <div className="l-elmt-detail-wrapper">
                <div className="l-elmt-detail">
                    <div className="l-elmt-detail-title">{song.judul}</div>
                </div>
            </div>
            <input type="button" value="Add Song" className="button-request" />
        </a>
    )
}

export default PremiumSongData