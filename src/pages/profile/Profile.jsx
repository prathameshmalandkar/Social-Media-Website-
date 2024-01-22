import './profile.css'
import Topbar from "../../components/topbar/topbar"
import Sidebar from "../../components/sidebar/sidebar"
import Feed from '../../components/feed/feed'
import Rightbar from '../../components/rightbar/rightbar'

export default function Profile() {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className='profileCoverImg' src="./src/assets/post/post-4.jpeg" alt="" />
                            <img className='profileProfileImg' src="./src/assets/Profile/profile-6.jpeg" alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className='profileInfoname'>Prathamesh Malandkar</h4>
                            <h4 className='profileInfodesc'>Hello Friends!</h4>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile/>
                    </div>
                </div>
            </div>
        </>
    )
}
