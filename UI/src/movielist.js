import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Search from './search';

const styleList = {
	width: 300,
	display: 'flex',
	'flex-direction':'row',
};

const list = [];
class MovieList extends React.Component{
	
	render(){
		return(
		
			<div style={styleList}>
				<Card>
				    <CardTitle title=""/>
				    
				    <CardMedia>
				      <img src="https://i.pinimg.com/originals/47/e1/8b/47e18b070ad478a42bd9673570163f04.jpg" alt="" />
				    </CardMedia>
				    <CardText>
				      List is coming up!!
				    </CardText>
			    </Card>
		    </div>
	    );
	}
}

export default MovieList;