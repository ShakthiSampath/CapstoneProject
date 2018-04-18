import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Search from '../../search';
import './signup.css';


const style = {
	margin: 12,
	display: 'flex',
	'flex-direction': 'column',
	'justify-content': 'space-between',
	'align-items': 'center',	
};

const style_left = {

	'margin-left': 35,
	'margin-right': 35,
	display: 'flex',
	'flex-direction': 'column',
	'justify-content': 'space-between',
};


const style_horz ={
	margin: 40,
	display: 'flex',
	'flex-direction': 'row',
	'justify-content': 'space-between',
	'align-items': 'center',	
};

class Signup extends Component {
    render(){
        return (
     	<MuiThemeProvider>
  				<AppBar
		    title="ElastoMovieSearch" iconClassNameRight="muidocs-icon-navigation-expand-more"
		    // onTitleClick={handleClick}
		    iconElementRight={<div><a href="/"><FlatButton label="Login" /></a><a href="/signup"><FlatButton label="Sign Up" /></a></div>}
		    />
		    <div style={style}>
				<Card class="card">
			    <p class="title">Sign Up As</p>
			     <RadioButtonGroup style={style_horz} defaultSelected="not_light">
			    	<RadioButton value="light"
				        label="Admin"/>
			    	<RadioButton value="not_light"
				        label="User"/>	 
				 </RadioButtonGroup>
				 <div style={style_left}>
				 <TextField hintText="Email" ref="text" fullWidth={true}/>  
				 <TextField hintText="Password Field" floatingLabelText="Password" type="password" fullWidth={true}/>
				 <TextField hintText="Confirm Password" floatingLabelText="Confirm Password" type="password" fullWidth={true}/>
				 </div>   
			    <CardActions style={style}>
			      <FlatButton label="Sign Up" fullWidth={true}/>
			      <a href="/"><FlatButton label="Login" fullWidth={true}/></a>
			    </CardActions>
		    	</Card>
	    	</div>
		</MuiThemeProvider>
        );
    }
}

export default Signup;