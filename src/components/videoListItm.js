import React from 'react';


const VideoListItm = (props) => {
	const theVideo = props.passedVideo,
		  clickedVideo = props.onVideoClick;

	let videoImgUrl = theVideo.snippet.thumbnails.default.url;
	// console.log(theVideo, videoImgUrl);

	return (
		<li className="list-group-item" onClick={() => clickedVideo(theVideo)}>
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={videoImgUrl} />
				</div>

				<div className="media-body">
					<div className="media-heading">
						{theVideo.snippet.title}
					</div>
				</div>
			</div>
			
		</li>
	)
}

export default VideoListItm;