import React, {useState}from 'react';

const Register = () =>{

    const [name, setName] = useState("")
    const [uname, setUname] = useState("")
    const [password, setPassword] = useState("")
    const [confpassword, setConfPassword] = useState("")
    const [email,setEmail] = useState("")
    const [status, updateStatus] = useState(0)
    const [data, updateData] = useState("")

    const sendData ={
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username:uname, password:password, email:email, name_user:name})
    }

    const setUser = async () =>{
        const request = await fetch("http://localhost:3001/api/register", sendData)
        const response = await request.json()
        console.log(response)
        updateStatus(request.status)
        updateData(JSON.stringify(response.accessToken))

    }

    return(
        <section className="login-fw flex-col">
            <a id="logo"><span>アド</span>リブ</a>
            <form action="" method="post" id="register-form" className="login-control flex-col form-album" autoComplete="off">
                <input type="text" className="input-text" id="name-field" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
                <div className="display-none" id="name-msg"></div>
                <input type="text" className="input-text" id="username-field" placeholder="Username" onChange={(e) => setUname(e.target.value)}/>
                <div className="display-none" id="uname-msg"></div>
                <input type="text" className="input-text" id="email-field" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                <div className="display-none" id="email-msg"></div>
                <input type="password" className="input-text" id="pw-field" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                <input type="password" className="input-text" id="cpw-field" placeholder="Reconfirm Password" onChange={(e) => setConfPassword(e.target.value)}/>
                <div className="display-none" id="cpw-msg"></div>
                <input type="button" className="button-filter" id="submit-btn" value="Register" onClick={setUser}/>
                <div id="login-msg">
                    
                </div>
            </form>
        </section>
    )
}

export default Register