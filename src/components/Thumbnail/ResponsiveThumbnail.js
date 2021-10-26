import React from 'react'

const ResponsiveThumbnail = ({link}) => {
    const style = {
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '10px',
        maxWidth: '79%',
    }
    return (
        <div style = {{style}}>
            <img 
                src={ link } 
                alt='React' 
                style={{height:'50px', width:'50px', borderRadius:'50%', marginRight:'10px'}} 
            />
        </div>
    )
}

export default ResponsiveThumbnail
