import React from 'react'
import Description from '../Description'
import Details from '../Details'
import Player from '../Player'

const Video = ({ video }) => {

    const style = {
        border: '2px solid black',
        flexFlow: 'column wrap',
        flex: 'auto',
        marginBottom: '20px',
        marginTop: '10px',
        width:'400px',
    }

    return (
        <div style={ style }>
            <Player 
                videoLink={ video.videoLink }
                width= '100%'
                height= '600px'
                isMuted={ false }
                isControls={ true }
            />
            <Details title={ video.title } thumbnailLink={ video.thumbnailLink } views={ video.views }  />
        </div>
    )
}

export default Video;
