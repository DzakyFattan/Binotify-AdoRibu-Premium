import React from 'react';

const Song = () => {
    return(
        <div>
            <section className="song-cover section-fw flex-row">
                <div className="song-details">
                    <div id="modifiable-wrapper">
                        <h1 className = "section-title">trial</h1>
                        <span>trial</span>
                        <span>trial</span>
                    </div>
                    <div className="song-control flex-row">
                        <div className="button-filter play-song-btn">Delete Entry</div>
                        <div className="button-filter edit-song-btn">Edit Entry</div>
                    </div>
                </div>
            </section>
            <section className="display-none section-fw flex-col">
                <form action="" className="add-song-fw flex-col" autoComplete="off">
                    <input type="text" name="judul_lagu" className="input-text" placeholder="Title" />               
                    <input type="file" id="song-audio-upload" name="song_audio_upload" className="hide-input-file" accept="audio/*" />
                    <label htmlFor="song-audio-upload" className="button-filter song-upload-btn">Upload Song Audio</label>
                    <div className="input-gathered">Song file: <span id = "song-file"></span></div>
                    <input type="button" name="submit-btn" className="button-filter" value="Submit"></input>
                </form>
            </section>
        </div>
    )
}

export default Song