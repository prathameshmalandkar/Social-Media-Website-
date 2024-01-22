import './feed.css'
import Share from '../share/share'
import Post from '../post/post'
import {Posts} from "../../dummaData"

function feed() {
  return (
    <div className='feed'>
      <div className="feedwrapper">
        <Share/>
        {Posts.map((p)=>(
          <Post key={p.id} post={p}/>
        ))}
      </div>
    </div>
  )
}

export default feed