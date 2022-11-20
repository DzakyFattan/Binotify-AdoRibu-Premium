import React from 'react';

const Register = () =>{
    return(
        <section className="login-fw flex-col">
            <a id="logo"><span>アド</span>リブ</a>
            <form action="" id="register-form" className="login-control flex-col form-album" autoComplete="off">
                <input type="text" className="input-text" id="username-field" placeholder="Username" />
                <div className="display-none" id="uname-msg"></div>
                <input type="text" className="input-text" id="email-field" placeholder="Email" />
                <div className="display-none" id="email-msg"></div>
                <input type="password" className="input-text" id="pw-field" placeholder="Password" />
                <input type="password" className="input-text" id="cpw-field" placeholder="Reconfirm Password" />
                <div className="display-none" id="cpw-msg"></div>
                <input type="button" className="button-filter" id="submit-btn" value="Register" />
                <div id="login-msg">
                    
                </div>
            </form>
        </section>
    )
}

export default Register