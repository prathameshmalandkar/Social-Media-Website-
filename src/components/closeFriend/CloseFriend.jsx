import './closefriend.css'

function CloseFriend(props) {
    return (
        <li className='sidebarFriend'>
            <img className='sidebarFriendImg' src={props.user.profilePhoto} alt="" />
            <span className="sidebarFriendName">{props.user.username}</span>
        </li>
    )
}

export default CloseFriend