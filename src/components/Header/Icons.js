import React from 'react'
import Thumbnail from '../Thumbnail';
import { MdVideoCall, MdViewComfy } from 'react-icons/md'
import { AiTwotoneBell } from 'react-icons/ai'

const Icons = () => {
    const videoElement = <MdVideoCall fontSize='2.8rem' />;
    const viewElement = <MdViewComfy fontSize='2.8rem' />;
    const bellElement = <AiTwotoneBell fontSize='2.8rem' />;
    return(
        <div className='icons'>
            <Icon iconElement={ videoElement } />
            <Icon iconElement={ viewElement } />
            <Icon iconElement={ bellElement } />
            <Thumbnail link='https://source.unsplash.com/random&gravity=center.com' />
        </div>
    )
}

export default Icons

const Icon = ({ iconElement }) => {
    return(
        <div className='icon'>
            { iconElement }
        </div>
    )
}