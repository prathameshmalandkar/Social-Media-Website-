import './share.css'
import { PermMedia ,Label ,Room , EmojiEmotions } from '@mui/icons-material'
function share() {
  return (
    <div className='share'>
        <div className="sharewrapper">
            <div className="shareTop">
                <img className='shareProfileImg' src="./src/assets/profile/profile-2.jpeg" alt="" />
                <input placeholder='Whats in your mind ?' className='shareInput' />
            </div>
            <hr className='shareHr' />
            <div className="shareBottom">
                <div className="shareoptions">
                    <div className="shareOption">
                        <PermMedia htmlColor='tomato' className='shareIcon'/>
                        <span className="shareOptionText">Photo or video</span>
                    </div>
                    <div className="shareOption">
                        <Label htmlColor='blue' className='shareIcon'/>
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <Room htmlColor='green' className='shareIcon'/>
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor='goldenrod' className='shareIcon'/>
                        <span className="shareOptionText">Feelings</span>
                    </div>
                </div>
                <button className="shareButton">
                    Share
                </button>
            </div>
        </div>
    </div>
  )
}

export default share