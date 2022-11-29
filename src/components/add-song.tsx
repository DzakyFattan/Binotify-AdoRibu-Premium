import React, { useState } from 'react';

const Add_song:React.FC = () => {
    const [title, setTitle] = useState<string>("");
    const [file, setFile] = useState<string>("");

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

    const addSong = {
        method:'POST',
        headers: { authorization:accessToken, 'Content-Type': 'application/json' },
        body: JSON.stringify({judul:title, audio_path:file})
    }

    const setSong = async () =>{
        console.log(title)
        console.log(file)
        const request = await fetch("http://localhost:3001/api/addSong", addSong);
        const response = await request.json();
        console.log(response)
    }

    return(
        <section className="section-fw flex-col side-content">
            <form action="" className="add-song-fw flex-col" autoComplete="off">
                <h1>Add Your Song</h1>
                <input type="text" name="judul_lagu" className="input-text" placeholder="Title" onChange={(e) => setTitle(e.target.value)}/>               
                <input type="file" id="song-audio-upload" name="song_audio_upload" className="hide-input-file" accept="audio/*" onChange={(e) => setFile(e.currentTarget.files![0].name) } />
                <label htmlFor="song-audio-upload" className="button-filter song-upload-btn">Upload Song Audio</label>
                <div className="input-gathered">Song file: <span id = "song-file">{file}</span></div>
                <input type="button" name="submit-btn" className="button-filter" value="Submit" onClick={setSong}></input>
            </form>
        </section>
    )
}

export default Add_song