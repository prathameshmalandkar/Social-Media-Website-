import "./online.css"

function Online(user) {
  return (
    
    <li className="rightbarFriend">
            <div className="rightbarProfileContainer">
              <img className='rightbarProfileImg' src={user.user.profilePhoto} alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">{user.user.username}</span>
    </li>
  )
}

export default Online