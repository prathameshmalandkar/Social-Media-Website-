import './login.css'
function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">MyBook</h3>
                <span className="loginDesc">
                    Connect With Friends And The World Around You On MyBook
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder='Email' className='loginInput' />
                    <input placeholder='Password' className='loginInput' />
                    <button className="loginbutton">Log In</button>
                    <span className="loginFrogot">Forgot Password</span>
                    <button className="loginregisterButton">Create New Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login