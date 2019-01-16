import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch);


import YTSearch from 'youtube-api-search';

import SearchBar from './components/SearchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';

const API_KEY = 'AIzaSyC_K3UsePqhe5RKVnd5cjlf4V53N_OyQdk';


class App extends Component{
	constructor(props){
		super(props);

		this.state = { 
			videos: [], 
			searchTerm: '',
			selectedVideo: null
		};

		this.onSearching = this.onSearching.bind(this);
		this.choosingVideo = this.choosingVideo.bind(this);
	}

	render(){
		return (
			<div className="row">
				<SearchBar onSearchDone={this.onSearching} />
				<VideoDetail passedVideo={this.state.selectedVideo} />
				<VideoList onVideoSelected={this.choosingVideo} theVideos={this.state.videos} />
			</div>
		);
		//
	}

	componentDidMount(){
		this.onSearching('love');
	}

	choosingVideo(selectedVideo){
		this.setState({selectedVideo});
	}

	onSearching(val){
		this.setState({searchTerm: val});

		YTSearch({key: API_KEY, term: val}, (videos) => {
			// console.log(videos);
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			});

		});
	}
};


let container = document.getElementsByClassName('container')[0];
//console.log(container);
ReactDOM.render(<App />, container);