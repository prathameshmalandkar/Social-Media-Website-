import './home.css'
import Topbar from "../../components/topbar/topbar"
import Sidebar from "../../components/sidebar/sidebar"
import Feed from '../../components/feed/feed'
import Rightbar from '../../components/rightbar/rightbar'

function home() {
  return (
    <>
      <Topbar />
      <div className="homecontainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  )
}

export default home