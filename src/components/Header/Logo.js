import { Link } from 'react-router-dom';
import { FaYoutube } from 'react-icons/fa';

export const Logo = () => {
    return (
        <Link to='/' style={{ textDecoration:'none', color:'black' }} >
            <div className='logo'>
                <FaYoutube color='red' fontSize='3rem'/>
                <span>Movie App</span>
            </div>
        </Link>
    )
}

export default Logo;
