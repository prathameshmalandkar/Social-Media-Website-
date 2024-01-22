import './sidebar.css'
import { RssFeed ,Chat ,PlayCircleFilledOutlined ,Group ,Bookmark ,HelpOutline ,WorkOutlined ,Event ,School} from '@mui/icons-material'
import {Users} from '../../dummaData'
import CloseFriend from '../closeFriend/CloseFriend'

function sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <RssFeed className='sidebarIcon'/>
                    <span className="sidebarListItaemText">Feed</span>
                </li>
                <li className="sidebarListItem">
                    <Chat className='sidebarIcon'/>
                    <span className="sidebarListItaemText">Chat</span>
                </li>
                <li className="sidebarListItem">
                    <PlayCircleFilledOutlined className='sidebarIcon'/>
                    <span className="sidebarListItaemText">Video</span>
                </li>
                <li className="sidebarListItem">
                    <Group className='sidebarIcon'/>
                    <span className="sidebarListItaemText">Group</span>
                </li>
                <li className="sidebarListItem">
                    <Bookmark className='sidebarIcon'/>
                    <span className="sidebarListItaemText">Bookmark</span>
                </li>
                <li className="sidebarListItem">
                    <HelpOutline className='sidebarIcon'/>
                    <span className="sidebarListItaemText">Questions</span>
                </li>
                <li className="sidebarListItem">
                    <WorkOutlined className='sidebarIcon'/>
                    <span className="sidebarListItaemText">Jobs</span>
                </li>
                <li className="sidebarListItem">
                    <Event className='sidebarIcon'/>
                    <span className="sidebarListItaemText">Events</span>
                </li>
                <li className="sidebarListItem">
                    <School className='sidebarIcon'/>
                    <span className="sidebarListItaemText">Courses</span>
                </li>
            </ul>
            <button className="sidebarButton">
                Show More
            </button>
            <hr className='sidebarHr'/>
            <ul className="sidebarFriendList">
                {Users.map((u,index)=>(
                    <CloseFriend key={index} user={u}/>
                ))}
            </ul>

        </div>
    </div>
  )
}

export default sidebar