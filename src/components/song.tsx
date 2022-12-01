import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SongData from './model/SongData';

const Song:React.FC = () => {
    const [song,setSong] = useState<SongData>()
    const [newfilename, setNewFileName] = useState<string>("")
    const [newtitle, setNewTitle] = useState<string>("")
    const [fileData, setFileData] = useState<File>();

    let result = useParams()
    let id = parseInt(result.id_song!, 10) + 0
    /*
    let usernameData = localStorage.getItem('username')
    let username:string = ""
    if (usernameData){
        username=JSON.parse(usernameData);
    } */

    let accessTokenData = localStorage.getItem('accessToken')
    let accessToken:string = ""
    if (accessTokenData){
        accessToken=JSON.parse(accessTokenData);
    }

    const openEdit = () => {
        document.getElementById("edit-menu")!.classList.toggle("display-none")
    }

    const getData = {
        method:'GET',
        headers: { 'authorization':accessToken, 'Content-Type': 'application/json' }
    }

    const deleteData = {
        method:'POST',
        headers: { authorization:accessToken, 'Content-Type': 'application/json' },
        body: JSON.stringify({'id_song':id})
    }

    const getSong = async () => {
        const request = await fetch("http://localhost:3001/api/getSongs", getData);
        const response = await request.json();
        response.map((result:SongData) => {
            if(result.id_song == id){
                setSong(result)
                setNewFileName(result!.audio_path)
                setNewTitle(result!.judul)
            }
        })
    }

    const setFile = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setNewFileName(e.currentTarget.files![0].name);
        setFileData(e.currentTarget.files![0]);
    }

    const updateSong = async () => {
        var formData = new FormData()
        formData.append('id_song', result.id_song!)
        formData.append('audio_file', fileData!)
        formData.append('judul', newtitle)
        const updateData = {
            method:'POST',
            headers: { 'authorization':accessToken },
            body: formData
        }
        const request = await fetch("http://localhost:3001/api/updateSong", updateData);
        const response = await request.json();
        console.log(response)
        
    }
    
    const deleteSong = async () => {
        const request = await fetch("http://localhost:3001/api/removeSong", deleteData);
        const response = await request.json();
        console.log(response)
        
    }

    
    useEffect(() => {
        getSong()
    },[]); 

    return(
        <div>
            <section className="song-cover section-fw flex-row">
                <div className="song-details">
                    <div id="modifiable-wrapper">
                        <h1 className = "section-title">{song?.judul}</h1>
                    </div>
                    <div className="song-control flex-row">
                        <div className="button-filter play-song-btn" onClick={deleteSong}>Delete Entry</div>
                        <div className="button-filter edit-song-btn" onClick={openEdit}>Edit Entry</div>
                    </div>
                </div>
            </section>
            <section id="edit-menu" className="display-none section-fw flex-col">
                <form action="" className="add-song-fw flex-col" autoComplete="off">
                    <input type="text" name="judul_lagu" className="input-text" placeholder="Title" value={newtitle} onChange={(e) => setNewTitle(e.target.value)}/>               
                    <input type="file" id="song-audio-upload" name="song_audio_upload" className="hide-input-file" accept="audio/*" onChange={setFile} />
                    <label htmlFor="song-audio-upload" className="button-filter song-upload-btn">Upload Song Audio</label>
                    <div className="input-gathered">Song file: <span id = "song-file">{newfilename}</span></div>
                    <input type="button" name="submit-btn" className="button-filter" value="Submit" onClick={updateSong}></input>
                </form>
            </section>
        </div>
    )
}

export default Song