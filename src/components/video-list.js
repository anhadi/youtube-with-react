import React from 'react';
import VideoListItem from './video-list-item';

const VideoList = (props) => {
	const videoItems = props.videos.map( v => {
		return <VideoListItem 
			key={v.etag} 
			video={v} 
			onVideoSelect={props.onVideoSelect}
		/>
	})

	console.log('These are the videos', videoItems);

	return (
		<ul className='col-md-4 list-group'>
			{videoItems}
		</ul>
	)
}

export default VideoList;