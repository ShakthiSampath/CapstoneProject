import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TitleBar from '../../titlebar';
import Search from '../../search';

import { render } from 'react-dom';

const Dashboard = () => (
  <MuiThemeProvider>
  	<TitleBar />
  	<br /><br />
  	<Search />
  </MuiThemeProvider>
);

export default Dashboard;