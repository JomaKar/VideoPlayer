import React from 'react';

const VideoDetail = (props) => {
	if(!props.passedVideo){
		return <div>Loading...</div>;
	}

	/////

	const theVideo = props.passedVideo,
		  videoId  = theVideo.id.videoId,
		  videoURL = `https://www.youtube.com/embed/${videoId}`;

	return (
		<div className="video-detail col-md-8 col-xs-12">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={videoURL}></iframe>
			</div>
			<div className="details">
				<div className="video-title">{theVideo.snippet.title}</div>
				<div className="video-description">{theVideo.snippet.description}</div>
			</div>
		</div>
	);

};

export default VideoDetail;