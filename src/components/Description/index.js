const Description = ({ viewDetails }) => {
    
    const style = {
        color: 'white',
        marginTop: '5px',
    }
    
    return (
        <div style={ style }>
            <div>{ viewDetails }</div>
        </div>
    )
}

export default Description;