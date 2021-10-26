import React from 'react'
import { MdSearch } from 'react-icons/md';

const Search = () => {
    return (
        <div className='search'>
            <input type='search' placeholder='Search' />
            <div style={{borderLeft: '1px solid grey', padding: '0px 8px' }}>
                <MdSearch fontSize='3rem' />
            </div>
        </div>
    );
}

export default Search
