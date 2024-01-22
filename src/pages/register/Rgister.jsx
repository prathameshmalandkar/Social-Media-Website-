import './register.css'
function Register() {
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
                    <input placeholder='Username' className='loginInput' />
                    <input placeholder='Email' className='loginInput' />
                    <input placeholder='Password' className='loginInput' />
                    <input placeholder='Password Again' className='loginInput' />
                    <button className="loginbutton">Sign Up</button>
                    <button className="loginregisterButton">Log Into Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register