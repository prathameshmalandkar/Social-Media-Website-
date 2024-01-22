import './rightbar.css'
import {Users} from "../../dummaData"
import Online from '../online/Online'

function rightbar(profile) {

  const HomeRightbar = ()=>{
    return(
      <>
      <div className="birthdayContainer">
          <img className='birthdayImg' src="./src/assets/birthdaybox.jpeg" alt="" />
          <span className="birthdayText">
            <b>Asim Mulla</b> and <b>3 Other Friends</b> have a birthday today.
          </span>
        </div>
        <img className='rightbarAd' src="./src/assets/ad.jpeg" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarfriendList">
          {
            Users.map((u,index)=>(
              <Online key={index} user={u}/>
            ))
          }
        </ul>
      </>
    )
  }
  const ProfileRightbar = ()=>{
    return(
      <>
      <h4 className='rightbarTitle'>User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <div className="rightbarInfoKey">City :</div>
          <div className="rightbarInfoValue">Ichalkaranji</div>
        </div>
        <div className="rightbarInfoItem">
          <div className="rightbarInfoKey">From :</div>
          <div className="rightbarInfoValue">India</div>
        </div>
        <div className="rightbarInfoItem">
          <div className="rightbarInfoKey">Relationship :</div>
          <div className="rightbarInfoValue">Single</div>
        </div>
      </div>
      <h4 className="rightbarTitle">User Friend</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img className='rightbarFollowingImg' src="./src/assets/Profile/profile-2.jpeg" alt="" />
          <span className="rightbarFollowingName">Karuna Patil</span>
        </div>
        <div className="rightbarFollowing">
          <img className='rightbarFollowingImg' src="./src/assets/Profile/profile-2.jpeg" alt="" />
          <span className="rightbarFollowingName">Karuna Patil</span>
        </div>
        <div className="rightbarFollowing">
          <img className='rightbarFollowingImg' src="./src/assets/Profile/profile-2.jpeg" alt="" />
          <span className="rightbarFollowingName">Karuna Patil</span>
        </div>
        
      </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {profile ? <HomeRightbar/> : <ProfileRightbar/>}
      </div>
    </div>
  )
}

export default rightbar
