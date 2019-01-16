import React from 'react';
import VideoListItm from './videoListItm';

const VideoList = (props) => {
	const itms = props.theVideos.map((oneVideo) => <VideoListItm key={oneVideo.etag} onVideoClick={props.onVideoSelected} passedVideo={oneVideo} /> ); //

	return (
		<ul className="col-md-4 col-xs-12 list-group">
			{itms}
		</ul>
	)

	///
}

export default VideoList;