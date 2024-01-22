import './topbar.css'
import { Search, Person, Chat, Notifications } from '@mui/icons-material'



function topbar() {
    return (
        <>
            <div className="topbarContainer">
                <div className="topbarLeft">
                    <h1 className='logo'>MyBook</h1>
                </div>
                <div className="topbarCenter">
                    <div className="searchbar">
                        <Search className='searchIcon' />
                        <input placeholder='Search for Friend' className='searchInput' />
                    </div>
                </div>
                <div className="topbarRight">
                    <div className="topbarLink">
                        <a href="/" className="topbarLink">Home</a>
                        <span className="topbarLink">TimeLine</span>
                    </div>
                    <div className="topbarIcons">
                        <div className="topbarIconsItems">
                            <Person />
                            <span className="topbarIconBage">
                                1
                            </span>
                        </div>
                        <div className="topbarIconsItems">
                            <Chat />
                            <span className="topbarIconBage">
                                1
                            </span>
                        </div>
                        <div className="topbarIconsItems">
                            <Notifications />
                            <span className="topbarIconBage">
                                1
                            </span>
                        </div>
                    </div>
                    <a href="/profile"><img className='topbarImage' src="./src/assets/Profile/profile-6.jpeg" alt="" /></a>
                </div>
            </div>
        </>
    )
}

export default topbar