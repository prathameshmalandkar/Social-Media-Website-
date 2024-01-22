import './post.css'
import { MoreVert } from '@mui/icons-material'
import {Users} from "../../dummaData"
import { useState } from 'react'


function post(props) {
    const user = Users.filter((u)=>(u.id === props.post.userId))
    // like function which increase the or decrease like
    const [like,setlike]= useState(props.post.like)
    const [islike,setIslike]= useState(false)
    function likehandler(){
        setlike(islike? like-1 : like+1)
        setIslike(!islike)
    }
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className='postProfileImg' src={user[0].profilePhoto} alt="" />
                    <span className="postUsername">{user[0].username}</span>
                    <span className="postDate">{props.post.time}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{props.post.desc}</span>
                <img className='postImg' src={props.post.photo} alt="" />
            </div>
            <div className="postBottom">
                <div className="postButtomLeft">
                    <img className='likeIcon' onClick={likehandler} src="./src/assets/like_thumb.jpeg" alt="" />
                    <img className='likeIcon' onClick={likehandler} src="./src/assets/like_heart.jpeg" alt="" />
                    <span className="postLikeCounter">{like} People like it</span>
                </div>
                <div className="postButtomRight">
                    <span className="postCommentText">{props.post.comment} Comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default post