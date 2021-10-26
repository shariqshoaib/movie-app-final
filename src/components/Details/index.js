import Thumbnail from "../Thumbnail";
import Description from "../Description";

export const Details = ({ title, thumbnailLink, views }) => {

    const style = {
        backgroundColor: 'grey',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyItems: 'center',
        minHeight: '100px'
    }
    
    return (
        <div style={ style }>
            <Thumbnail 
                link={ thumbnailLink } 
                title={ title }
            />
           <Description viewDetails={ views } /> 
        </div>
    )
}

export default Details;
