import React from 'react'
import ResponsiveDetails from '../Details/ResponsiveDetails'
import ResponsivePlayer from '../Player/ResponsivePlayer'

const ResponsiveVideo = ({ video }) => {

    const style = {
        border: '2px solid black',
        flexFlow: 'column wrap',
        flex: 'auto',
        marginBottom: '20px',
        marginTop: '10px',
        width:'90%',
        margin: '20px auto'
    }

    return (
        <div style={ style }>
            <ResponsivePlayer 
                videoLink={ video.videoLink }
                isMuted={ false }
                isControls={ true }
            />
            <ResponsiveDetails title={ video.title } thumbnailLink={ video.thumbnailLink } views={ video.views }  />
        </div>
    )
}

export default ResponsiveVideo;
