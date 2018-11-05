import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail'
import API_KEY from './api-key';

class Name extends Component {
	constructor(props){
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		}

		YTSearch({key:API_KEY, term:'surf boards'}, (videos) => {
			this.setState({ 
				videos: videos, 
				selectedVideo: videos[0]
			});
		});
	}
	render(){
		return (
			<div><SearchBar />
			<VideoDetail video={this.state.selectedVideo} />
			<VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos} />
			</div>
		)
	}
} 
 
ReactDOM.render(<Name />, document.querySelector('.container'));