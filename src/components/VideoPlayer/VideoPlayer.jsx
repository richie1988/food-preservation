import React, {useRef} from 'react';
import './VideoPlayer.css';
import Video from '../../assets/FP-video.mp4'

const VideoPlayer =({playVideo, setPlayVideo})=> {

    const player = useRef(null);
    const closePlayer =(event)=> {
        if(event.target === player.current){
            setPlayVideo(false)
        }
    }
    return (
        <div className={`video-player ${playVideo? '': 'hide-video'}`}
        ref={player} onClick={closePlayer}>
        <video src={Video} autoPlay muted controls></video>
        </div>
    )
}

export default VideoPlayer