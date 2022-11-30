import React, { useState } from 'react';

const AddSong:React.FC = () => {
    const [title, setTitle] = useState<string>("");
    const [file, setFilename] = useState<string>("");
    const [fileData, setFileData] = useState<File>();

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

    const setFile = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setFilename(e.currentTarget.files![0].name);
        setFileData(e.currentTarget.files![0]);
        console.log('ok')
    }

    const setSong = async () =>{

        let formData = new FormData();
        formData.append('audio_file', fileData!)
        formData.append('judul', title)

        const addSong = {
            method:'POST',
            headers: { "authorization":accessToken},
            body:formData
        }

        const request = await fetch("http://localhost:3001/api/addSong", addSong);
        const response = await request.json();
        console.log(response)
    }

    return(
        <section className="section-fw flex-col side-content">
            <form action="" className="add-song-fw flex-col" autoComplete="off">
                <h1>Add Your Song</h1>
                <input type="text" name="judul_lagu" className="input-text" placeholder="Title" onChange={(e) => setTitle(e.target.value)}/>               
                <input type="file" id="song-audio-upload" name="song_audio_upload" className="hide-input-file" accept="audio/*" onChange={setFile} />
                <label htmlFor="song-audio-upload" className="button-filter song-upload-btn">Upload Song Audio</label>
                <div className="input-gathered">Song file: <span id = "song-file">{file}</span></div>
                <input type="button" name="submit-btn" className="button-filter" value="Submit" onClick={setSong}></input>
            </form>
        </section>
    )
}

export default AddSong