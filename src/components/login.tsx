import React, { useEffect, useState } from 'react';
import User_data from './model/user_data';

const Login:React.FC = () =>{

    const [uname, setUname] = useState("")
    const [password, setPassword] = useState("")
    //const [status, updateStatus] = useState(0)
    //const [data, updateData] = useState("")

    var data = ""
    var status = 0

    const sendData ={
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username:uname, password:password})
    }

    const setLogin = async () =>{
        const request = await fetch("http://localhost:3001/api/login", sendData);
        const response = await request.json();

        //updateStatus(request.status);
        //updateData(JSON.stringify(response.accessToken));
        status = request.status;
        data = response.accessToken;

        localStorage.setItem('username', JSON.stringify(uname))
        localStorage.setItem('accessToken', JSON.stringify(data))

        if(status == 200){
            window.location.replace("/your-songs")
        }

    }

    return(
        <section className="login-fw flex-col">
            <a id="logo"><span>アド</span>リブ</a>
            <form action="" className="login-control flex-col form-album" autoComplete="off" id="login-form">
                <input type="text" name="uname" className="input-text" placeholder="Email / Username" onChange={(e) => setUname(e.target.value)}/>
                <input type="password" name="password" className="input-text" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                <input type="button" name="submit-btn"className="button-filter" value="Login" onClick={setLogin}/>
            </form>
        </section>
    )
    
}

export default Login