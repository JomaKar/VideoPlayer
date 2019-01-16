import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SearchBar extends Component{
	constructor(props){
		super(props);

		this.state = {
			term: ''
		};

		this.passedFunction = props.onSearchDone;

		this.onInputing = this.onInputing.bind(this);
		this.onClicking = this.onClicking.bind(this);
	}

	render(){
		return (
				<div className="search-bar-wrapper col-xs-12">
					<input className="search-input no-outline" onChange={this.onInputing}/>
					<button onClick={this.onClicking} className="search-button no-outline">
						<FontAwesomeIcon icon="search" />
					</button>
				</div>
			);
	}


	onInputing(ev){
		let text = ev.target.value;
		this.setState({
			term: text
		});
	}

	onClicking(){
		this.passedFunction(this.state.term);
	}


};



export default SearchBar;