
export const SuggestedDetails = ({ title, views }) => {

    const style = {
        backgroundColor:'grey',
        display:'flex',
        flexFlow: 'column wrap',
        justifyContent: 'center',
        paddingLeft: '20px',
        width:'100%'
    }
    
    return (
        <div style={ style }>
            <h2>{ title }</h2>
            <div style={{color: 'white'}}>{ views }</div>
        </div>
    )
}

export default SuggestedDetails;
