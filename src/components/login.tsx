import React from 'react';

const Login = () =>{
    return(
        <section className="login-fw flex-col">
            <a id="logo"><span>アド</span>リブ</a>
            <form action="" className="login-control flex-col form-album" autoComplete="off" id="login-form">
                <input type="text" name="emailuname" className="input-text" placeholder="Email / Username" />
                <input type="password" name="password" className="input-text" placeholder="Password" />
                <input type="button" name="submit-btn"className="button-filter" value="Login" />
            </form>
        </section>
    )
}

export default Login