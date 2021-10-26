import React from 'react'
import Description from '../Description'
import SuggestedDetails from '../Details/SuggestedDetails'
import Player from '../Player'
import Thumbnail from '../Thumbnail'

const SuggestedVideo = ({ video }) => {

    const style = {
        borderBottom: '2px solid black',
        borderTop: '2px solid black',
        display: 'flex',
        height: '220px',
        width: '90%',
        margin: '20px auto'
    }

    return (
        <div style={ style }>
            <Player 
                videoLink={ video.videoLink }
                width= '300px'
                height= '200px'
                isMuted={ false }
                isControls={ true }
            />
            <SuggestedDetails title={ video.title } thumbnailLink={ video.thumbnailLink } views={ video.views }  />
        </div>
    )
}

export default SuggestedVideo;
