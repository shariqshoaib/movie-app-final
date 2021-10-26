import { Link } from 'react-router-dom';
import Video from '../../components/Video'

export const Home = (props) => {
    
    return (
        <div className='home'>
            <Videos videos={ props.videos }/>
        </div>
    )
}
export default  Home;

const Videos = ({ videos }) => {

    const style = {
        display: 'flex',
        flexWrap: 'wrap',
        fontSize: '18px',
        justifyContent: 'space-around',
        marginTop: '20px',
        width: '100%',
    }

    return (
        <div style = { style }>
        { 
            videos.map( (video, key) => (
                <Link to={`/video/${ key }`} key={ key } style={{ textDecoration:'none', color:'black' }}>
                    <Video video= { video } />
                </Link>
            )) 
        }
        </div>
    )
}
