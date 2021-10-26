import React from 'react'
import ReactPlayer from 'react-player';

const Player = ({ videoLink, isMuted=true, isControls=false }) => {
    
    return (
        <div className='video-player'>
            <ReactPlayer
                url={ videoLink }
                height = '170px'
                width = '400px' 
                Controls={isControls}
                muted={isMuted}
            />
        </div>
    )
    
}

export default Player;
