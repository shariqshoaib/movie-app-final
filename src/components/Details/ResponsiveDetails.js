import React from 'react';
import ResponsiveDescription from '../Description/ResponsiveDescription';
import ResponsiveThumbnail from '../Thumbnail/ResponsiveThumbnail'

const ResponsiveDetails = ({ title, thumbnailLink, views }) => {

    const style = {
        backgroundColor:'grey',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column wrap',
        justifyContent: 'center',
        height: '200px',
    }

    return (
        <div style={ style }>
            <ResponsiveThumbnail 
                link={ thumbnailLink } 
                title={ title }
            />
            <ResponsiveDescription title={ title } viewDetails={ views } /> 
        </div>
    )
}

export default ResponsiveDetails
