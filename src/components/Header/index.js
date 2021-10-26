import React from 'react'
import Logo from './Logo'
import Search from './Search'
import Icons from './Icons'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <Logo />
            <Search />
            <Icons />
        </div>
    )
}

export default Header
