import React from 'react';
import axios from 'axios'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MovieList from './movielist';


const style = {
	margin: 12,
	display: 'flex',
	'flex-direction': 'column',
	'justify-content': 'space-between',
	'align-items': 'center',	
};

const movieNames = [];

class Search extends React.Component{
	
	searchlist(term) {

     const URL = 'https://api.themoviedb.org/3/search/movie';
     const apikey = 'b16cd2a45be30dd789b5db50a0066757';
     return axios.get(`${URL}?api_key=${apikey}&query=${term}`).then(response => {
     	this.movieNames = response.data.results;
     	console.log(this.movieNames);
     });

	}


	render(){
		return(
			<div style={style}>
			<TextField
		      hintText="Movie Name"
		      ref="text"
		    />
		    <RaisedButton label="Search" primary={true} onClick={()=> this.searchlist(this.refs.text.getValue())}/>
		    <MovieList list={this.movieNames}></MovieList>
		    </div>
	    );
	}
}


export default Search;