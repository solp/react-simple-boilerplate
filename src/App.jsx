import React, {Component} from 'react';
import Form from './material-page/components/Form';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
	constructor(){
		super();
	}

	render() {
	  return (
	  	<MuiThemeProvider>
	    	<Form />
	    </MuiThemeProvider>
	  );
	}
}
export default App;
