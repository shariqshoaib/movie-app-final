import React from 'react'

const ResponsiveDescription = ({ title, viewDetails }) => {

    const style = {
        color: 'black',
        textAlign: 'center',
    }
    
    return (
        <div style={ style }>
            <h1>{ title }</h1>
            <div style={{color: 'white'}}>{ viewDetails }</div>
        </div>
    )
}

export default ResponsiveDescription;
