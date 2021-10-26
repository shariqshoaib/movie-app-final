import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player/lazy';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import ResponsiveVideo from '../../components/Video/ResponsiveVideo'
import SuggestedVideo from '../../components/Video/SuggestedVideo'

export const VideoPage = (props) => {
    const [ videos ] = useState(props.videos);
    const [ video, setVideo ] = useState();
    const { videoId } = useParams();
    

    useEffect(() => {
        setVideoHandle();
    })

    const setVideoHandle = () => {
        const video = props.videos[videoId];
        setVideo(video);
    }

    if(video === undefined) return <div>Loading</div>
    return (
        <>
            <VideoPageContent 
                video={ video }
                suggestedVideos={ videos }
            />
        </>
    )
}

export default VideoPage;

const VideoPageContent = ({ video, suggestedVideos }) => {
    return (
        <div className='video-page-content'>
                <ResponsiveVideo
                    video={ video }
                />
                <SuggestedVideos
                    videos={ suggestedVideos }
                />
        </div>
    )
}

const SuggestedVideos = ({ videos }) => {
    return (
        <div className='suggested-videos'>
            {
                videos.map(( video, key ) => (
                    <Link key= { key } to= {`/video/${ key }`} style={{ textDecoration:'none', color:'black' }} >
                        <SuggestedVideo 
                            video={ video }
                            
                        />
                    </Link>
                ))
            }
        </div>
    )
}


const SuggestedDetails = ({ video }) => {
    return(
        <div className='suggested-details'>
           <h2>{ video.title }</h2>
            <div>{ video.views }</div>
        </div>
    )
}


const SuggestedThumbnail = ({ video }) => {
    return (
        <div class='suggested-thumbnail'>
             <ReactPlayer
                url={ video.videoLink }
                playing='flase'
                width='100%'
                height='100%'
                
            />
        </div>
    )
}

