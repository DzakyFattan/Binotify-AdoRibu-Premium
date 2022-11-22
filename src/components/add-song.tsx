import React from 'react';

const Add_song = () => {
    return(
        <section className="section-fw flex-col">
            <form action="" className="add-song-fw flex-col" autoComplete="off">
                <input type="text" name="judul_lagu" className="input-text" placeholder="Title" />               
                <input type="file" id="song-audio-upload" name="song_audio_upload" className="hide-input-file" accept="audio/*" />
                <label htmlFor="song-audio-upload" className="button-filter song-upload-btn">Upload Song Audio</label>
                <div className="input-gathered">Song file: <span id = "song-file"></span></div>
                <input type="button" name="submit-btn" className="button-filter" value="Submit"></input>
            </form>
        </section>
    )
}

export default Add_song