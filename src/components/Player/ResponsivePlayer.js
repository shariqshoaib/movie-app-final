import React from 'react'
import ReactPlayer from 'react-player';

const ResponsivePlayer = ({ videoLink, isMuted=true, isControls=false }) => {
    
    return (
        <div className='video-player'>
            <ReactPlayer
                url={ videoLink }
                height = '700px'
                width = '100%' 
                Controls={isControls}
                muted={isMuted}
            />
        </div>
    )
    
}

export default ResponsivePlayer;
